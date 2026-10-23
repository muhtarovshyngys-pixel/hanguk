// Hanguk Sabaq — Claude proxy for Cloudflare Workers
// Secrets (Settings → Variables → Secrets):
//   ANTHROPIC_API_KEY  — ключ из console.anthropic.com
// Variables (plain):
//   FIREBASE_API_KEY   — apiKey из firebaseConfig (не секрет)
//   FIREBASE_PROJECT   — hanguk-6fdea
//   ALLOWED_ORIGIN     — https://muhtarovshyngys-pixel.github.io
//   MODEL              — claude-sonnet-5-5 (можно поменять)
//   MODEL_FAST         — claude-haiku-5-5
//   DAILY_LIMIT        — 150 (запросов в день на одного пользователя)
//   ALLOWED_EMAILS     — (необязательно) список почт через запятую; пусто = все, кто вошёл

const DEFAULTS = {
  MODEL: 'claude-sonnet-5-5',
  MODEL_FAST: 'claude-haiku-5-5',
  DAILY_LIMIT: '150',
  ALLOWED_ORIGIN: 'https://muhtarovshyngys-pixel.github.io',
};

// in-memory per-isolate counter (soft limit; resets when the worker restarts)
const usage = new Map();

export default {
  async fetch(req, env) {
    const cfg = { ...DEFAULTS, ...env };
    const origin = req.headers.get('Origin') || '';
    const cors = corsHeaders(origin, cfg);

    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (req.method === 'GET') return json({ ok: true, service: 'hanguk-claude-proxy' }, 200, cors);
    if (req.method !== 'POST') return json({ error: 'method' }, 405, cors);

    const url = new URL(req.url);
    if (url.pathname !== '/chat') return json({ error: 'not_found' }, 404, cors);

    // 1) Firebase auth
    const auth = req.headers.get('Authorization') || '';
    const idToken = auth.startsWith('Bearer ') ? auth.slice(7) : '';
    if (!idToken) return json({ error: 'no_token' }, 401, cors);
    const user = await verifyFirebase(idToken, cfg);
    if (!user) return json({ error: 'bad_token' }, 401, cors);
    if (cfg.ALLOWED_EMAILS) {
      const allowed = cfg.ALLOWED_EMAILS.split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
      if (allowed.length && !allowed.includes((user.email || '').toLowerCase()))
        return json({ error: 'not_allowed' }, 403, cors);
    }

    // 2) soft daily cap per user
    const day = new Date().toISOString().slice(0, 10);
    const key = user.localId + ':' + day;
    const n = (usage.get(key) || 0) + 1;
    usage.set(key, n);
    if (n > parseInt(cfg.DAILY_LIMIT, 10)) return json({ error: 'daily_limit' }, 429, cors);

    // 3) forward to Anthropic
    let body;
    try { body = await req.json(); } catch { return json({ error: 'bad_json' }, 400, cors); }
    const payload = {
      model: body.fast ? cfg.MODEL_FAST : cfg.MODEL,
      max_tokens: Math.min(parseInt(body.max_tokens, 10) || 1024, 4096),
      system: typeof body.system === 'string' ? body.system.slice(0, 12000) : undefined,
      messages: sanitizeMessages(body.messages),
      temperature: typeof body.temperature === 'number' ? body.temperature : 0.7,
    };
    if (!payload.messages.length) return json({ error: 'no_messages' }, 400, cors);

    let r = await callAnthropic(payload, cfg);
    if (r.status === 404 || r.status === 400) {
      // model name may be unavailable on this account — fall back once
      const txt = await r.clone().text();
      if (/model/i.test(txt)) {
        payload.model = body.fast ? 'claude-haiku-4-5' : 'claude-sonnet-4-6';
        r = await callAnthropic(payload, cfg);
      }
    }
    const data = await r.json().catch(() => ({}));
    if (!r.ok) return json({ error: 'upstream', status: r.status, detail: data?.error?.message || '' }, 502, cors);

    const text = (data.content || []).filter(c => c.type === 'text').map(c => c.text).join('');
    return json({ text, usage: data.usage, model: data.model, left: Math.max(0, parseInt(cfg.DAILY_LIMIT, 10) - n) }, 200, cors);
  },
};

async function callAnthropic(payload, cfg) {
  return fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': cfg.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify(payload),
  });
}

async function verifyFirebase(idToken, cfg) {
  try {
    const r = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${cfg.FIREBASE_API_KEY}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ idToken }),
    });
    if (!r.ok) return null;
    const d = await r.json();
    const u = d.users && d.users[0];
    if (!u || !u.localId) return null;
    return u;
  } catch { return null; }
}

function sanitizeMessages(msgs) {
  if (!Array.isArray(msgs)) return [];
  const out = [];
  for (const m of msgs.slice(-30)) {
    if (!m || (m.role !== 'user' && m.role !== 'assistant')) continue;
    const content = typeof m.content === 'string' ? m.content.slice(0, 6000) : '';
    if (!content) continue;
    if (out.length && out[out.length - 1].role === m.role) out[out.length - 1].content += '\n' + content;
    else out.push({ role: m.role, content });
  }
  if (out.length && out[0].role !== 'user') out.shift();
  return out;
}

function corsHeaders(origin, cfg) {
  const allowed = (cfg.ALLOWED_ORIGIN || '').split(',').map(s => s.trim());
  const ok = allowed.includes(origin) || /^http:\/\/localhost(:\d+)?$/.test(origin);
  return {
    'Access-Control-Allow-Origin': ok ? origin : allowed[0],
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin',
  };
}

function json(obj, status, headers) {
  return new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json', ...headers } });
}
