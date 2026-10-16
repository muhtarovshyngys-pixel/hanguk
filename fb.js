(()=>{var Rh=function(n){let e=[],t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},tg=function(n){let e=[],t=0,r=0;for(;t<n.length;){let i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){let s=n[t++],a=n[t++],c=n[t++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{let s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Ph={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){let s=n[i],a=i+1<n.length,c=a?n[i+1]:0,u=i+2<n.length,d=u?n[i+2]:0,p=s>>2,g=(s&3)<<4|c>>4,T=(c&15)<<2|d>>6,R=d&63;u||(R=64,a||(T=64)),r.push(t[p],t[g],t[T],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Rh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):tg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){let s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;let d=i<n.length?t[n.charAt(i)]:64;++i;let g=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||d==null||g==null)throw new ea;let T=s<<2|c>>4;if(r.push(T),d!==64){let R=c<<4&240|d>>2;if(r.push(R),g!==64){let N=d<<6&192|g;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},ea=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},ng=function(n){let e=Rh(n);return Ph.encodeByteArray(e,!0)},na=function(n){return ng(n).replace(/\./g,"")},ra=function(n){try{return Ph.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function rg(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}var ig=()=>rg().__FIREBASE_DEFAULTS__,sg=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},og=()=>{if(typeof document=="undefined")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&ra(n[1]);return e&&JSON.parse(e)},xi=()=>{try{return ig()||sg()||og()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ch=n=>{var e,t;return(t=(e=xi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]};var ia=()=>{var n;return(n=xi())===null||n===void 0?void 0:n.config},sa=n=>{var e;return(e=xi())===null||e===void 0?void 0:e[`_${n}`]};var Oi=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}};function oe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dh(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(oe())}function ag(){var n;let e=(n=xi())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Nh(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function kh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Oh(){let n=oe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function oa(){return!ag()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Vi(){try{return typeof indexedDB=="object"}catch{return!1}}function xh(){return new Promise((n,e)=>{try{let t=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}var cg="FirebaseError",ke=class n extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=cg,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ot.prototype.create)}},ot=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?ug(s,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new ke(i,c,r)}};function ug(n,e){return n.replace(lg,(t,r)=>{let i=e[r];return i!=null?String(i):`<${r}?>`})}var lg=/\{\$([^}]+)}/g;function Vh(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function yt(n,e){if(n===e)return!0;let t=Object.keys(n),r=Object.keys(e);for(let i of t){if(!r.includes(i))return!1;let s=n[i],a=e[i];if(Sh(s)&&Sh(a)){if(!yt(s,a))return!1}else if(s!==a)return!1}for(let i of r)if(!t.includes(i))return!1;return!0}function Sh(n){return n!==null&&typeof n=="object"}function In(n){let e=[];for(let[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function vn(n){let e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){let[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function wn(n){let e=n.indexOf("?");if(!e)return"";let t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Lh(n,e){let t=new ta(n,e);return t.subscribe.bind(t)}var ta=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");hg(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Zo),i.error===void 0&&(i.error=Zo),i.complete===void 0&&(i.complete=Zo);let s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function hg(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Zo(){}var Ew=4*60*60*1e3;function me(n){return n&&n._delegate?n._delegate:n}var Ve=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var jt="[DEFAULT]";var aa=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let r=new Oi;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fg(e))try{this.getOrInitializeService({instanceIdentifier:jt})}catch{}for(let[t,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(t);try{let s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jt){return this.instances.has(e)}getOptions(e=jt){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[s,a]of this.instancesDeferred.entries()){let c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(i)}return i}onInit(e,t){var r;let i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);let a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jt){return this.component?this.component.multipleInstances?e:jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function dg(n){return n===jt?void 0:n}function fg(n){return n.instantiationMode==="EAGER"}var Li=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new aa(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var pg=[],W;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(W||(W={}));var mg={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},gg=W.INFO,_g={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},yg=(n,e,...t)=>{if(e<n.logLevel)return;let r=new Date().toISOString(),i=_g[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},It=class{constructor(e){this.name=e,this._logLevel=gg,this._logHandler=yg,this._userLogHandler=null,pg.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}};var Ig=(n,e)=>e.some(t=>n instanceof t),Mh,Fh;function vg(){return Mh||(Mh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wg(){return Fh||(Fh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var Uh=new WeakMap,ua=new WeakMap,Bh=new WeakMap,ca=new WeakMap,ha=new WeakMap;function Eg(n){let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(He(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Uh.set(t,n)}).catch(()=>{}),ha.set(e,n),e}function Tg(n){if(ua.has(n))return;let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});ua.set(n,e)}var la={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ua.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Bh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return He(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function qh(n){la=n(la)}function Ag(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let r=n.call(Mi(this),e,...t);return Bh.set(r,e.sort?e.sort():[e]),He(r)}:wg().includes(n)?function(...e){return n.apply(Mi(this),e),He(Uh.get(this))}:function(...e){return He(n.apply(Mi(this),e))}}function bg(n){return typeof n=="function"?Ag(n):(n instanceof IDBTransaction&&Tg(n),Ig(n,vg())?new Proxy(n,la):n)}function He(n){if(n instanceof IDBRequest)return Eg(n);if(ca.has(n))return ca.get(n);let e=bg(n);return e!==n&&(ca.set(n,e),ha.set(e,n)),e}var Mi=n=>ha.get(n);function zh(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){let a=indexedDB.open(n,e),c=He(a);return r&&a.addEventListener("upgradeneeded",u=>{r(He(a.result),u.oldVersion,u.newVersion,He(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}var Sg=["get","getKey","getAll","getAllKeys","count"],Rg=["put","add","delete","clear"],da=new Map;function jh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(da.get(e))return da.get(e);let t=e.replace(/FromIndex$/,""),r=e!==t,i=Rg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Sg.includes(t)))return;let s=async function(a,...c){let u=this.transaction(a,i?"readwrite":"readonly"),d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),i&&u.done]))[0]};return da.set(e,s),s}qh(n=>({...n,get:(e,t,r)=>jh(e,t)||n.get(e,t,r),has:(e,t)=>!!jh(e,t)||n.has(e,t)}));var pa=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Pg(t)){let r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}};function Pg(n){let e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}var ma="@firebase/app",Gh="0.10.5";var zt=new It("@firebase/app"),Cg="@firebase/app-compat",Dg="@firebase/analytics-compat",Ng="@firebase/analytics",kg="@firebase/app-check-compat",Og="@firebase/app-check",xg="@firebase/auth",Vg="@firebase/auth-compat",Lg="@firebase/database",Mg="@firebase/database-compat",Fg="@firebase/functions",Ug="@firebase/functions-compat",Bg="@firebase/installations",qg="@firebase/installations-compat",jg="@firebase/messaging",zg="@firebase/messaging-compat",Gg="@firebase/performance",Kg="@firebase/performance-compat",$g="@firebase/remote-config",Hg="@firebase/remote-config-compat",Wg="@firebase/storage",Qg="@firebase/storage-compat",Jg="@firebase/firestore",Yg="@firebase/vertexai-preview",Xg="@firebase/firestore-compat",Zg="firebase",e_="10.12.2";var ga="[DEFAULT]",t_={[ma]:"fire-core",[Cg]:"fire-core-compat",[Ng]:"fire-analytics",[Dg]:"fire-analytics-compat",[Og]:"fire-app-check",[kg]:"fire-app-check-compat",[xg]:"fire-auth",[Vg]:"fire-auth-compat",[Lg]:"fire-rtdb",[Mg]:"fire-rtdb-compat",[Fg]:"fire-fn",[Ug]:"fire-fn-compat",[Bg]:"fire-iid",[qg]:"fire-iid-compat",[jg]:"fire-fcm",[zg]:"fire-fcm-compat",[Gg]:"fire-perf",[Kg]:"fire-perf-compat",[$g]:"fire-rc",[Hg]:"fire-rc-compat",[Wg]:"fire-gcs",[Qg]:"fire-gcs-compat",[Jg]:"fire-fst",[Xg]:"fire-fst-compat",[Yg]:"fire-vertex","fire-js":"fire-js",[Zg]:"fire-js-all"};var Fi=new Map,n_=new Map,_a=new Map;function Kh(n,e){try{n.container.addComponent(e)}catch(t){zt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function wt(n){let e=n.name;if(_a.has(e))return zt.debug(`There were multiple attempts to register component ${e}.`),!1;_a.set(e,n);for(let t of Fi.values())Kh(t,n);for(let t of n_.values())Kh(t,n);return!0}function wr(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function je(n){return n.settings!==void 0}var r_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vt=new ot("app","Firebase",r_);var ya=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ve("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}};var Et=e_;function wa(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let r=Object.assign({name:ga,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw vt.create("bad-app-name",{appName:String(i)});if(t||(t=ia()),!t)throw vt.create("no-options");let s=Fi.get(i);if(s){if(yt(t,s.options)&&yt(r,s.config))return s;throw vt.create("duplicate-app",{appName:i})}let a=new Li(i);for(let u of _a.values())a.addComponent(u);let c=new ya(t,r,a);return Fi.set(i,c),c}function Ea(n=ga){let e=Fi.get(n);if(!e&&n===ga&&ia())return wa();if(!e)throw vt.create("no-app",{appName:n});return e}function qe(n,e,t){var r;let i=(r=t_[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);let s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){let c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zt.warn(c.join(" "));return}wt(new Ve(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var i_="firebase-heartbeat-database",s_=1,vr="firebase-heartbeat-store",fa=null;function Qh(){return fa||(fa=zh(i_,s_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(vr)}catch(t){console.warn(t)}}}}).catch(n=>{throw vt.create("idb-open",{originalErrorMessage:n.message})})),fa}async function o_(n){try{let t=(await Qh()).transaction(vr),r=await t.objectStore(vr).get(Jh(n));return await t.done,r}catch(e){if(e instanceof ke)zt.warn(e.message);else{let t=vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zt.warn(t.message)}}}async function $h(n,e){try{let r=(await Qh()).transaction(vr,"readwrite");await r.objectStore(vr).put(e,Jh(n)),await r.done}catch(t){if(t instanceof ke)zt.warn(t.message);else{let r=vt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});zt.warn(r.message)}}}function Jh(n){return`${n.name}!${n.options.appId}`}var a_=1024,c_=30*24*60*60*1e3,Ia=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new va(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Hh();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{let c=new Date(a.date).valueOf();return Date.now()-c<=c_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=Hh(),{heartbeatsToSend:r,unsentEntries:i}=u_(this._heartbeatsCache.heartbeats),s=na(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}};function Hh(){return new Date().toISOString().substring(0,10)}function u_(n,e=a_){let t=[],r=n.slice();for(let i of n){let s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Wh(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Wh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}var va=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vi()?xh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await o_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return $h(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return $h(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function Wh(n){return na(JSON.stringify({version:2,heartbeats:n})).length}function l_(n){wt(new Ve("platform-logger",e=>new pa(e),"PRIVATE")),wt(new Ve("heartbeat",e=>new Ia(e),"PRIVATE")),qe(ma,Gh,n),qe(ma,Gh,"esm2017"),qe("fire-js","")}l_("");var h_="firebase",d_="10.12.2";qe(h_,d_,"app");function Ui(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function fd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var pd=fd,md=new ot("auth","Firebase",fd());var Ki=new It("@firebase/auth");function f_(n,...e){Ki.logLevel<=W.WARN&&Ki.warn(`Auth (${Et}): ${n}`,...e)}function qi(n,...e){Ki.logLevel<=W.ERROR&&Ki.error(`Auth (${Et}): ${n}`,...e)}function ze(n,...e){throw za(n,...e)}function Qe(n,...e){return za(n,...e)}function gd(n,e,t){let r=Object.assign(Object.assign({},pd()),{[e]:t});return new ot("auth","Firebase",r).create(e,{appName:n.name})}function ct(n){return gd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function za(n,...e){if(typeof n!="string"){let t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return md.create(n,...e)}function L(n,e,...t){if(!n)throw za(e,...t)}function We(n){let e="INTERNAL ASSERTION FAILED: "+n;throw qi(e),new Error(e)}function ut(n,e){n||We(e)}function ba(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function p_(){return Yh()==="http:"||Yh()==="https:"}function Yh(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function m_(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(p_()||Nh()||"connection"in navigator)?navigator.onLine:!0}function g_(){if(typeof navigator=="undefined")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var Gt=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,ut(t>e,"Short delay should be less than long delay!"),this.isMobile=Dh()||kh()}get(){return m_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function Ga(n,e){ut(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var $i=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;We("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;We("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;We("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var __={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var y_=new Gt(3e4,6e4);function ue(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ge(n,e,t,r,i={}){return _d(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});let c=In(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode),$i.fetch()(yd(n,n.config.apiHost,t,c),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function _d(n,e,t){n._canInitEmulator=!1;let r=Object.assign(Object.assign({},__),e);try{let i=new Sa(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();let a=await s.json();if("needConfirmation"in a)throw Er(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{let c=s.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Er(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Er(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Er(n,"user-disabled",a);let p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw gd(n,p,d);ze(n,p)}}catch(i){if(i instanceof ke)throw i;ze(n,"network-request-failed",{message:String(i)})}}async function At(n,e,t,r,i={}){let s=await ge(n,e,t,r,i);return"mfaPendingCredential"in s&&ze(n,"multi-factor-auth-required",{_serverResponse:s}),s}function yd(n,e,t,r){let i=`${e}${t}?${r}`;return n.config.emulator?Ga(n.config,i):`${n.config.apiScheme}://${i}`}function I_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var Sa=class{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Qe(this.auth,"network-request-failed")),y_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}};function Er(n,e,t){let r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);let i=Qe(n,e,r);return i.customData._tokenResponse=t,i}function Xh(n){return n!==void 0&&n.enterprise!==void 0}var Ra=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return I_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}};async function v_(n,e){return ge(n,"GET","/v2/recaptchaConfig",ue(n,e))}async function w_(n,e){return ge(n,"POST","/v1/accounts:delete",e)}async function Id(n,e){return ge(n,"POST","/v1/accounts:lookup",e)}function Tr(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vd(n,e=!1){let t=me(n),r=await t.getIdToken(e),i=Ka(r);L(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");let s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Tr(Ta(i.auth_time)),issuedAtTime:Tr(Ta(i.iat)),expirationTime:Tr(Ta(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ta(n){return Number(n)*1e3}function Ka(n){let[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return qi("JWT malformed, contained fewer than 3 sections"),null;try{let i=ra(t);return i?JSON.parse(i):(qi("Failed to decode base64 JWT payload"),null)}catch(i){return qi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Zh(n){let e=Ka(n);return L(e,"internal-error"),L(typeof e.exp!="undefined","internal-error"),L(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}async function br(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ke&&E_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function E_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var Pa=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;let i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var Sr=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tr(this.lastLoginAt),this.creationTime=Tr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function Hi(n){var e;let t=n.auth,r=await n.getIdToken(),i=await br(n,Id(t,{idToken:r}));L(i==null?void 0:i.users.length,t,"internal-error");let s=i.users[0];n._notifyReloadListener(s);let a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ed(s.providerUserInfo):[],c=T_(n.providerData,a),u=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!(c!=null&&c.length),p=u?d:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Sr(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(n,g)}async function wd(n){let e=me(n);await Hi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function T_(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ed(n){return n.map(e=>{var{providerId:t}=e,r=Ui(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}async function A_(n,e){let t=await _d(n,{},async()=>{let r=In({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=yd(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",$i.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function b_(n,e){return ge(n,"POST","/v2/accounts:revokeToken",ue(n,e))}var Ar=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken!="undefined","internal-error"),L(typeof e.refreshToken!="undefined","internal-error");let t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Zh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){L(e.length!==0,"internal-error");let t=Zh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:i,expiresIn:s}=await A_(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){let{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new n;return r&&(L(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(L(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return We("not implemented")}};function Tt(n,e){L(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}var Tn=class n{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Ui(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Pa(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Sr(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){let t=await br(this,this.stsTokenManager.getToken(this.auth,e));return L(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return vd(this,e)}reload(){return wd(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Hi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(je(this.auth.app))return Promise.reject(ct(this.auth));let e=await this.getIdToken();return await br(this,w_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,c,u,d,p;let g=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(i=t.email)!==null&&i!==void 0?i:void 0,R=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,N=(a=t.photoURL)!==null&&a!==void 0?a:void 0,O=(c=t.tenantId)!==null&&c!==void 0?c:void 0,D=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,G=(d=t.createdAt)!==null&&d!==void 0?d:void 0,q=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:F,emailVerified:H,isAnonymous:Y,providerData:j,stsTokenManager:I}=t;L(F&&I,e,"internal-error");let m=Ar.fromJSON(this.name,I);L(typeof F=="string",e,"internal-error"),Tt(g,e.name),Tt(T,e.name),L(typeof H=="boolean",e,"internal-error"),L(typeof Y=="boolean",e,"internal-error"),Tt(R,e.name),Tt(N,e.name),Tt(O,e.name),Tt(D,e.name),Tt(G,e.name),Tt(q,e.name);let y=new n({uid:F,auth:e,email:T,emailVerified:H,displayName:g,isAnonymous:Y,photoURL:N,phoneNumber:R,tenantId:O,stsTokenManager:m,createdAt:G,lastLoginAt:q});return j&&Array.isArray(j)&&(y.providerData=j.map(v=>Object.assign({},v))),D&&(y._redirectEventId=D),y}static async _fromIdTokenResponse(e,t,r=!1){let i=new Ar;i.updateFromServerResponse(t);let s=new n({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Hi(s),s}static async _fromGetAccountInfoResponse(e,t,r){let i=t.users[0];L(i.localId!==void 0,"internal-error");let s=i.providerUserInfo!==void 0?Ed(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new Ar;c.updateFromIdToken(r);let u=new n({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Sr(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}};var ed=new Map;function at(n){ut(n instanceof Function,"Expected a class definition");let e=ed.get(n);return e?(ut(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ed.set(n,e),e)}var Wi=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};Wi.type="NONE";var Ca=Wi;function ji(n,e,t){return`firebase:${n}:${e}:${t}`}var Qi=class n{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:i,name:s}=this.auth;this.fullUserKey=ji(this.userKey,i.apiKey,s),this.fullPersistenceKey=ji("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?Tn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new n(at(Ca),e,r);let i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d),s=i[0]||at(Ca),a=ji(r,e.config.apiKey,e.name),c=null;for(let d of t)try{let p=await d._get(a);if(p){let g=Tn._fromJSON(e,p);d!==s&&(c=g),s=d;break}}catch{}let u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new n(s,e,r):(s=u[0],c&&await s._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new n(s,e,r))}};function td(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Td(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Rd(e))return"Blackberry";if(Pd(e))return"Webos";if($a(e))return"Safari";if((e.includes("chrome/")||Ad(e))&&!e.includes("edge/"))return"Chrome";if(Sd(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Td(n=oe()){return/firefox\//i.test(n)}function $a(n=oe()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ad(n=oe()){return/crios\//i.test(n)}function bd(n=oe()){return/iemobile/i.test(n)}function Sd(n=oe()){return/android/i.test(n)}function Rd(n=oe()){return/blackberry/i.test(n)}function Pd(n=oe()){return/webos/i.test(n)}function ps(n=oe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function S_(n=oe()){var e;return ps(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function R_(){return Oh()&&document.documentMode===10}function Cd(n=oe()){return ps(n)||Sd(n)||Pd(n)||Rd(n)||/windows phone/i.test(n)||bd(n)}function P_(){try{return!!(window&&window!==window.top)}catch{return!1}}function Dd(n,e=[]){let t;switch(n){case"Browser":t=td(oe());break;case"Worker":t=`${td(oe())}-${n}`;break;default:t=n}let r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Et}/${r}`}var Da=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=s=>new Promise((a,c)=>{try{let u=e(s);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(let i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}};async function C_(n,e={}){return ge(n,"GET","/v2/passwordPolicy",ue(n,e))}var D_=6,Na=class{constructor(e){var t,r,i,s;let a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:D_,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,c;let u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};var ka=class{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ji(this),this.idTokenSubscription=new Ji(this),this.beforeStateQueue=new Da(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=md,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=at(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Qi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await Id(this,{idToken:e}),r=await Tn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(je(this.app)){let a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Hi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=g_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(je(this.app))return Promise.reject(ct(this));let t=e?me(e):null;return t&&L(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return je(this.app)?Promise.reject(ct(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return je(this.app)?Promise.reject(ct(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(at(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await C_(this),t=new Na(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ot("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await b_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&at(e)||this._popupRedirectResolver;L(t,this,"argument-error"),this.redirectPersistenceManager=await Qi.create(this,[at(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};let s=typeof t=="function"?t:t.next.bind(t),a=!1,c=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof t=="function"){let u=e.addObserver(t,r,i);return()=>{a=!0,u()}}else{let u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;let t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&f_(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}};function lt(n){return me(n)}var Ji=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=Lh(t=>this.observer=t)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var ms={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function N_(n){ms=n}function Nd(n){return ms.loadJS(n)}function k_(){return ms.recaptchaEnterpriseScript}function O_(){return ms.gapiScript}function kd(n){return`__${n}${Math.floor(Math.random()*1e6)}`}var x_="recaptcha-enterprise",V_="NO_RECAPTCHA",Oa=class{constructor(e){this.type=x_,this.auth=lt(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,c)=>{v_(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{let d=new Ra(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(u=>{c(u)})})}function i(s,a,c){let u=window.grecaptcha;Xh(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(d=>{a(d)}).catch(()=>{a(V_)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(c=>{if(!t&&Xh(window.grecaptcha))i(c,s,a);else{if(typeof window=="undefined"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=k_();u.length!==0&&(u+=c),Nd(u).then(()=>{i(c,s,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}};async function nd(n,e,t,r=!1){let i=new Oa(n),s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}let a=Object.assign({},e);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Yi(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let s=await nd(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let a=await nd(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(s)})}function Od(n,e){let t=wr(n,"auth");if(t.isInitialized()){let i=t.getImmediate(),s=t.getOptions();if(yt(s,e!=null?e:{}))return i;ze(i,"already-initialized")}return t.initialize({options:e})}function L_(n,e){let t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(at);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function xd(n,e,t){let r=lt(n);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");let i=!!(t!=null&&t.disableWarnings),s=Vd(e),{host:a,port:c}=M_(e),u=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||F_()}function Vd(n){let e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function M_(n){let e=Vd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};let r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let s=i[1];return{host:s,port:rd(r.substr(s.length+1))}}else{let[s,a]=r.split(":");return{host:s,port:rd(a)}}}function rd(n){if(!n)return null;let e=Number(n);return isNaN(e)?null:e}function F_(){function n(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}var Kt=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return We("not implemented")}_getIdTokenResponse(e){return We("not implemented")}_linkToIdToken(e,t){return We("not implemented")}_getReauthenticationResolver(e){return We("not implemented")}};async function U_(n,e){return ge(n,"POST","/v1/accounts:signUp",e)}async function B_(n,e){return At(n,"POST","/v1/accounts:signInWithPassword",ue(n,e))}async function q_(n,e){return ge(n,"POST","/v1/accounts:sendOobCode",ue(n,e))}async function j_(n,e){return q_(n,e)}async function z_(n,e){return At(n,"POST","/v1/accounts:signInWithEmailLink",ue(n,e))}async function G_(n,e){return At(n,"POST","/v1/accounts:signInWithEmailLink",ue(n,e))}var Rr=class n extends Kt{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new n(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new n(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yi(e,t,"signInWithPassword",B_);case"emailLink":return z_(e,{email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yi(e,r,"signUpPassword",U_);case"emailLink":return G_(e,{idToken:t,email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function En(n,e){return At(n,"POST","/v1/accounts:signInWithIdp",ue(n,e))}var K_="http://localhost",$t=class n extends Kt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ze("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Ui(t,["providerId","signInMethod"]);if(!r||!i)return null;let a=new n(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){let t=this.buildRequest();return En(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,En(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,En(e,t)}buildRequest(){let e={requestUri:K_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=In(t)}return e}};async function $_(n,e){return ge(n,"POST","/v1/accounts:sendVerificationCode",ue(n,e))}async function H_(n,e){return At(n,"POST","/v1/accounts:signInWithPhoneNumber",ue(n,e))}async function W_(n,e){let t=await At(n,"POST","/v1/accounts:signInWithPhoneNumber",ue(n,e));if(t.temporaryProof)throw Er(n,"account-exists-with-different-credential",t);return t}var Q_={USER_NOT_FOUND:"user-not-found"};async function J_(n,e){let t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return At(n,"POST","/v1/accounts:signInWithPhoneNumber",ue(n,t),Q_)}var Pr=class n extends Kt{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new n({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new n({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return H_(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return W_(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return J_(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}};function Y_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function X_(n){let e=vn(wn(n)).link,t=e?vn(wn(e)).deep_link_id:null,r=vn(wn(n)).deep_link_id;return(r?vn(wn(r)).link:null)||r||t||e||n}var Xi=class n{constructor(e){var t,r,i,s,a,c;let u=vn(wn(e)),d=(t=u.apiKey)!==null&&t!==void 0?t:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,g=Y_((i=u.mode)!==null&&i!==void 0?i:null);L(d&&p&&g,"argument-error"),this.apiKey=d,this.operation=g,this.code=p,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){let t=X_(e);try{return new n(t)}catch{return null}}};var Ht=class n{constructor(){this.providerId=n.PROVIDER_ID}static credential(e,t){return Rr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=Xi.parseLink(t);return L(r,"argument-error"),Rr._fromEmailAndCode(e,r.code,r.tenantId)}};Ht.PROVIDER_ID="password";Ht.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ht.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var Zi=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var Wt=class extends Zi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var Cr=class n extends Wt{constructor(){super("facebook.com")}static credential(e){return $t._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};Cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cr.PROVIDER_ID="facebook.com";var Dr=class n extends Wt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $t._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return n.credential(t,r)}catch{return null}}};Dr.GOOGLE_SIGN_IN_METHOD="google.com";Dr.PROVIDER_ID="google.com";var Nr=class n extends Wt{constructor(){super("github.com")}static credential(e){return $t._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};Nr.GITHUB_SIGN_IN_METHOD="github.com";Nr.PROVIDER_ID="github.com";var kr=class n extends Wt{constructor(){super("twitter.com")}static credential(e,t){return $t._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return n.credential(t,r)}catch{return null}}};kr.TWITTER_SIGN_IN_METHOD="twitter.com";kr.PROVIDER_ID="twitter.com";async function Z_(n,e){return At(n,"POST","/v1/accounts:signUp",ue(n,e))}var An=class n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){let s=await Tn._fromIdTokenResponse(e,r,i),a=id(r);return new n({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let i=id(r);return new n({user:e,providerId:i,_tokenResponse:r,operationType:t})}};function id(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}var xa=class n extends ke{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,n.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new n(e,t,r,i)}};function Ld(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?xa._fromErrorAndOperation(n,s,e,r):s})}async function ey(n,e,t=!1){let r=await br(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return An._forOperation(n,"link",r)}async function ty(n,e,t=!1){let{auth:r}=n;if(je(r.app))return Promise.reject(ct(r));let i="reauthenticate";try{let s=await br(n,Ld(r,i,e,n),t);L(s.idToken,r,"internal-error");let a=Ka(s.idToken);L(a,r,"internal-error");let{sub:c}=a;return L(n.uid===c,r,"user-mismatch"),An._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ze(r,"user-mismatch"),s}}async function Md(n,e,t=!1){if(je(n.app))return Promise.reject(ct(n));let r="signIn",i=await Ld(n,r,e),s=await An._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Fd(n,e){return Md(lt(n),e)}function ny(n,e,t){var r;L(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),L(typeof t.dynamicLinkDomain=="undefined"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(L(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(L(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}async function Ud(n){let e=lt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ha(n,e,t){let r=lt(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&ny(r,i,t),await Yi(r,i,"getOobCode",j_)}async function Wa(n,e,t){if(je(n.app))return Promise.reject(ct(n));let r=lt(n),a=await Yi(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Z_).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Ud(n),u}),c=await An._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function Qa(n,e,t){return je(n.app)?Promise.reject(ct(n)):Fd(me(n),Ht.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ud(n),r})}function Ja(n,e){return me(n).setPersistence(e)}function Bd(n,e,t,r){return me(n).onIdTokenChanged(e,t,r)}function qd(n,e,t){return me(n).beforeAuthStateChanged(e,t)}function Ya(n,e,t,r){return me(n).onAuthStateChanged(e,t,r)}function Xa(n){return me(n).signOut()}function ry(n,e){return ge(n,"POST","/v2/accounts/mfaEnrollment:start",ue(n,e))}function iy(n,e){return ge(n,"POST","/v2/accounts/mfaEnrollment:finalize",ue(n,e))}function sy(n,e){return ge(n,"POST","/v2/accounts/mfaEnrollment:start",ue(n,e))}function oy(n,e){return ge(n,"POST","/v2/accounts/mfaEnrollment:finalize",ue(n,e))}var es="__sak";var ts=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(es,"1"),this.storage.removeItem(es),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};function ay(){let n=oe();return $a(n)||ps(n)}var cy=1e3,uy=10,ns=class extends ts{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ay()&&P_(),this.fallbackToPolling=Cd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}let r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}let i=()=>{let a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);R_()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,uy):i()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},cy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};ns.type="LOCAL";var gs=ns;var rs=class extends ts{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};rs.type="SESSION";var Za=rs;function ly(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var is=class n{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;let r=new n(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});let c=Array.from(a).map(async d=>d(t.origin,s)),u=await ly(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};is.receivers=[];function ec(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}var Va=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,u)=>{let d=ec("",20);i.port1.start();let p=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(g){let T=g;if(T.data.eventId===d)switch(T.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(T.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}};function Je(){return window}function hy(n){Je().location.href=n}function jd(){return typeof Je().WorkerGlobalScope!="undefined"&&typeof Je().importScripts=="function"}async function dy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fy(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function py(){return jd()?self:null}var zd="firebaseLocalStorageDb",my=1,ss="firebaseLocalStorage",Gd="fbase_key",Qt=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function _s(n,e){return n.transaction([ss],e?"readwrite":"readonly").objectStore(ss)}function gy(){let n=indexedDB.deleteDatabase(zd);return new Qt(n).toPromise()}function La(){let n=indexedDB.open(zd,my);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{let r=n.result;try{r.createObjectStore(ss,{keyPath:Gd})}catch(i){t(i)}}),n.addEventListener("success",async()=>{let r=n.result;r.objectStoreNames.contains(ss)?e(r):(r.close(),await gy(),e(await La()))})})}async function sd(n,e,t){let r=_s(n,!0).put({[Gd]:e,value:t});return new Qt(r).toPromise()}async function _y(n,e){let t=_s(n,!1).get(e),r=await new Qt(t).toPromise();return r===void 0?null:r.value}function od(n,e){let t=_s(n,!0).delete(e);return new Qt(t).toPromise()}var yy=800,Iy=3,os=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await La(),this.db)}async _withRetries(e){let t=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(t++>Iy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=is._getInstance(py()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await dy(),!this.activeServiceWorker)return;this.sender=new Va(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await La();return await sd(e,es,"1"),await od(e,es),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>sd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(r=>_y(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>od(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(i=>{let s=_s(i,!1).getAll();return new Qt(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],r=new Set;if(e.length!==0)for(let{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(let i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};os.type="LOCAL";var Kd=os;function vy(n,e){return ge(n,"POST","/v2/accounts/mfaSignIn:start",ue(n,e))}function wy(n,e){return ge(n,"POST","/v2/accounts/mfaSignIn:finalize",ue(n,e))}function Ey(n,e){return ge(n,"POST","/v2/accounts/mfaSignIn:finalize",ue(n,e))}var Qw=kd("rcb"),Jw=new Gt(3e4,6e4);var Ty="recaptcha";async function Ay(n,e,t){var r;let i=await t.verify();try{L(typeof i=="string",n,"argument-error"),L(t.type===Ty,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){let a=s.session;if("phoneNumber"in s)return L(a.type==="enroll",n,"internal-error"),(await ry(n,{idToken:a.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{L(a.type==="signin",n,"internal-error");let c=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return L(c,n,"missing-multi-factor-info"),(await vy(n,{mfaPendingCredential:a.credential,mfaEnrollmentId:c,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{let{sessionInfo:a}=await $_(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return a}}finally{t._reset()}}var Or=class n{constructor(e){this.providerId=n.PROVIDER_ID,this.auth=lt(e)}verifyPhoneNumber(e,t){return Ay(this.auth,e,me(t))}static credential(e,t){return Pr._fromVerification(e,t)}static credentialFromResult(e){let t=e;return n.credentialFromTaggedObject(t)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?Pr._fromTokenResponse(t,r):null}};Or.PROVIDER_ID="phone";Or.PHONE_SIGN_IN_METHOD="phone";function by(n,e){return e?at(e):(L(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}var xr=class extends Kt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return En(e,this._buildIdpRequest())}_linkToIdToken(e,t){return En(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return En(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function Sy(n){return Md(n.auth,new xr(n),n.bypassAuthState)}function Ry(n){let{auth:e,user:t}=n;return L(t,e,"internal-error"),ty(t,new xr(n),n.bypassAuthState)}async function Py(n){let{auth:e,user:t}=n;return L(t,e,"internal-error"),ey(t,new xr(n),n.bypassAuthState)}var as=class{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}let u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Sy;case"linkViaPopup":case"linkViaRedirect":return Py;case"reauthViaPopup":case"reauthViaRedirect":return Ry;default:ze(this.auth,"internal-error")}}resolve(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var Cy=new Gt(2e3,1e4);var Ma=class n extends as{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){ut(this.filter.length===1,"Popup operations only handle one event");let e=ec();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Cy.get())};e()}};Ma.currentPopupAction=null;var Dy="pendingRedirect",zi=new Map,Fa=class extends as{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=zi.get(this.auth._key());if(!e){try{let r=await Ny(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}zi.set(this.auth._key(),e)}return this.bypassAuthState||zi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function Ny(n,e){let t=xy(e),r=Oy(n);if(!await r._isAvailable())return!1;let i=await r._get(t)==="true";return await r._remove(t),i}function ky(n,e){zi.set(n._key(),e)}function Oy(n){return at(n._redirectPersistence)}function xy(n){return ji(Dy,n.config.apiKey,n.name)}async function Vy(n,e,t=!1){if(je(n.app))return Promise.reject(ct(n));let r=lt(n),i=by(r,e),a=await new Fa(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}var Ly=10*60*1e3,Ua=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!My(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!$d(e)){let i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Qe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ly&&this.cachedEventUids.clear(),this.cachedEventUids.has(ad(e))}saveEventToCache(e){this.cachedEventUids.add(ad(e)),this.lastProcessedEventTime=Date.now()}};function ad(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function $d({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function My(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $d(n);default:return!1}}async function Fy(n,e={}){return ge(n,"GET","/v1/projects",e)}var Uy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,By=/^https?/;async function qy(n){if(n.config.emulator)return;let{authorizedDomains:e}=await Fy(n);for(let t of e)try{if(jy(t))return}catch{}ze(n,"unauthorized-domain")}function jy(n){let e=ba(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){let a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!By.test(t))return!1;if(Uy.test(n))return r===n;let i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}var zy=new Gt(3e4,6e4);function cd(){let n=Je().___jsl;if(n!=null&&n.H){for(let e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Gy(n){return new Promise((e,t)=>{var r,i,s;function a(){cd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cd(),t(Qe(n,"network-request-failed"))},timeout:zy.get()})}if(!((i=(r=Je().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Je().gapi)===null||s===void 0)&&s.load)a();else{let c=kd("iframefcb");return Je()[c]=()=>{gapi.load?a():t(Qe(n,"network-request-failed"))},Nd(`${O_()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Gi=null,e})}var Gi=null;function Ky(n){return Gi=Gi||Gy(n),Gi}var $y=new Gt(5e3,15e3),Hy="__/auth/iframe",Wy="emulator/auth/iframe",Qy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Yy(n){let e=n.config;L(e.authDomain,n,"auth-domain-config-required");let t=e.emulator?Ga(e,Wy):`https://${n.config.authDomain}/${Hy}`,r={apiKey:e.apiKey,appName:n.name,v:Et},i=Jy.get(n.config.apiHost);i&&(r.eid=i);let s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${In(r).slice(1)}`}async function Xy(n){let e=await Ky(n),t=Je().gapi;return L(t,n,"internal-error"),e.open({where:document.body,url:Yy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qy,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});let a=Qe(n,"network-request-failed"),c=Je().setTimeout(()=>{s(a)},$y.get());function u(){Je().clearTimeout(c),i(r)}r.ping(u).then(u,()=>{s(a)})}))}var Zy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eI=500,tI=600,nI="_blank",rI="http://localhost",cs=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function iI(n,e,t,r=eI,i=tI){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString(),c="",u=Object.assign(Object.assign({},Zy),{width:r.toString(),height:i.toString(),top:s,left:a}),d=oe().toLowerCase();t&&(c=Ad(d)?nI:t),Td(d)&&(e=e||rI,u.scrollbars="yes");let p=Object.entries(u).reduce((T,[R,N])=>`${T}${R}=${N},`,"");if(S_(d)&&c!=="_self")return sI(e||"",c),new cs(null);let g=window.open(e||"",c,p);L(g,n,"popup-blocked");try{g.focus()}catch{}return new cs(g)}function sI(n,e){let t=document.createElement("a");t.href=n,t.target=e;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}var oI="__/auth/handler",aI="emulator/auth/handler",cI=encodeURIComponent("fac");async function ud(n,e,t,r,i,s){L(n.config.authDomain,n,"auth-domain-config-required"),L(n.config.apiKey,n,"invalid-api-key");let a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Et,eventId:i};if(e instanceof Zi){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Vh(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(let[p,g]of Object.entries(s||{}))a[p]=g}if(e instanceof Wt){let p=e.getScopes().filter(g=>g!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);let c=a;for(let p of Object.keys(c))c[p]===void 0&&delete c[p];let u=await n._getAppCheckToken(),d=u?`#${cI}=${encodeURIComponent(u)}`:"";return`${uI(n)}?${In(c).slice(1)}${d}`}function uI({config:n}){return n.emulator?Ga(n,aI):`https://${n.authDomain}/${oI}`}var Aa="webStorageSupport",Ba=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Za,this._completeRedirectFn=Vy,this._overrideRedirectResult=ky}async _openPopup(e,t,r,i){var s;ut((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");let a=await ud(e,t,r,ba(),i);return iI(e,a,ec())}async _openRedirect(e,t,r,i){await this._originValidation(e);let s=await ud(e,t,r,ba(),i);return hy(s),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(ut(s,"If manager is not set, promise should be"),s)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await Xy(e),r=new Ua(e);return t.register("authEvent",i=>(L(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Aa,{type:Aa},i=>{var s;let a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Aa];a!==void 0&&t(!!a),ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=qy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Cd()||$a()||ps()}},Hd=Ba,us=class{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return We("unexpected MultiFactorSessionType")}}},qa=class n extends us{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n(e)}_finalizeEnroll(e,t,r){return iy(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return wy(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},ls=class{constructor(){}static assertion(e){return qa._fromCredential(e)}};ls.FACTOR_ID="phone";var hs=class{static assertionForEnrollment(e,t){return ds._fromSecret(e,t)}static assertionForSignIn(e,t){return ds._fromEnrollmentId(e,t)}static async generateSecret(e){var t;let r=e;L(typeof((t=r.user)===null||t===void 0?void 0:t.auth)!="undefined","internal-error");let i=await sy(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return fs._fromStartTotpMfaEnrollmentResponse(i,r.user.auth)}};hs.FACTOR_ID="totp";var ds=class n extends us{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new n(t,void 0,e)}static _fromEnrollmentId(e,t){return new n(t,e)}async _finalizeEnroll(e,t,r){return L(typeof this.secret!="undefined",e,"argument-error"),oy(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){L(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let r={verificationCode:this.otp};return Ey(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}},fs=class n{constructor(e,t,r,i,s,a,c){this.sessionInfo=a,this.auth=c,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let i=!1;return(Bi(e)||Bi(t))&&(i=!0),i&&(Bi(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),Bi(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function Bi(n){return typeof n=="undefined"||(n==null?void 0:n.length)===0}var ld="@firebase/auth",hd="1.7.4";var ja=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function lI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hI(n){wt(new Ve("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;L(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});let u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dd(n)},d=new ka(r,i,s,u);return L_(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),wt(new Ve("auth-internal",e=>{let t=lt(e.getProvider("auth").getImmediate());return(r=>new ja(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),qe(ld,hd,lI(n)),qe(ld,hd,"esm2017")}var dI=5*60,fI=sa("authIdTokenMaxAge")||dI,dd=null,pI=n=>async e=>{let t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>fI)return;let i=t==null?void 0:t.token;dd!==i&&(dd=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function tc(n=Ea()){let e=wr(n,"auth");if(e.isInitialized())return e.getImmediate();let t=Od(n,{popupRedirectResolver:Hd,persistence:[Kd,gs,Za]}),r=sa("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){let s=new URL(r,location.origin);if(location.origin===s.origin){let a=pI(s.toString());qd(t,a,()=>a(t.currentUser)),Bd(t,c=>a(c))}}let i=Ch("auth");return i&&xd(t,`http://${i}`),t}function mI(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}N_({loadJS(n){return new Promise((e,t)=>{let r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{let s=Qe("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",mI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hI("Browser");var Wd=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Qd={};var bt,nc;(function(){var n;function e(I,m){function y(){}y.prototype=m.prototype,I.D=m.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(v,w,A){for(var _=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)_[rt-2]=arguments[rt];return m.prototype[w].apply(v,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,m,y){y||(y=0);var v=Array(16);if(typeof m=="string")for(var w=0;16>w;++w)v[w]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(w=0;16>w;++w)v[w]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=I.g[0],y=I.g[1],w=I.g[2];var A=I.g[3],_=m+(A^y&(w^A))+v[0]+3614090360&4294967295;m=y+(_<<7&4294967295|_>>>25),_=A+(w^m&(y^w))+v[1]+3905402710&4294967295,A=m+(_<<12&4294967295|_>>>20),_=w+(y^A&(m^y))+v[2]+606105819&4294967295,w=A+(_<<17&4294967295|_>>>15),_=y+(m^w&(A^m))+v[3]+3250441966&4294967295,y=w+(_<<22&4294967295|_>>>10),_=m+(A^y&(w^A))+v[4]+4118548399&4294967295,m=y+(_<<7&4294967295|_>>>25),_=A+(w^m&(y^w))+v[5]+1200080426&4294967295,A=m+(_<<12&4294967295|_>>>20),_=w+(y^A&(m^y))+v[6]+2821735955&4294967295,w=A+(_<<17&4294967295|_>>>15),_=y+(m^w&(A^m))+v[7]+4249261313&4294967295,y=w+(_<<22&4294967295|_>>>10),_=m+(A^y&(w^A))+v[8]+1770035416&4294967295,m=y+(_<<7&4294967295|_>>>25),_=A+(w^m&(y^w))+v[9]+2336552879&4294967295,A=m+(_<<12&4294967295|_>>>20),_=w+(y^A&(m^y))+v[10]+4294925233&4294967295,w=A+(_<<17&4294967295|_>>>15),_=y+(m^w&(A^m))+v[11]+2304563134&4294967295,y=w+(_<<22&4294967295|_>>>10),_=m+(A^y&(w^A))+v[12]+1804603682&4294967295,m=y+(_<<7&4294967295|_>>>25),_=A+(w^m&(y^w))+v[13]+4254626195&4294967295,A=m+(_<<12&4294967295|_>>>20),_=w+(y^A&(m^y))+v[14]+2792965006&4294967295,w=A+(_<<17&4294967295|_>>>15),_=y+(m^w&(A^m))+v[15]+1236535329&4294967295,y=w+(_<<22&4294967295|_>>>10),_=m+(w^A&(y^w))+v[1]+4129170786&4294967295,m=y+(_<<5&4294967295|_>>>27),_=A+(y^w&(m^y))+v[6]+3225465664&4294967295,A=m+(_<<9&4294967295|_>>>23),_=w+(m^y&(A^m))+v[11]+643717713&4294967295,w=A+(_<<14&4294967295|_>>>18),_=y+(A^m&(w^A))+v[0]+3921069994&4294967295,y=w+(_<<20&4294967295|_>>>12),_=m+(w^A&(y^w))+v[5]+3593408605&4294967295,m=y+(_<<5&4294967295|_>>>27),_=A+(y^w&(m^y))+v[10]+38016083&4294967295,A=m+(_<<9&4294967295|_>>>23),_=w+(m^y&(A^m))+v[15]+3634488961&4294967295,w=A+(_<<14&4294967295|_>>>18),_=y+(A^m&(w^A))+v[4]+3889429448&4294967295,y=w+(_<<20&4294967295|_>>>12),_=m+(w^A&(y^w))+v[9]+568446438&4294967295,m=y+(_<<5&4294967295|_>>>27),_=A+(y^w&(m^y))+v[14]+3275163606&4294967295,A=m+(_<<9&4294967295|_>>>23),_=w+(m^y&(A^m))+v[3]+4107603335&4294967295,w=A+(_<<14&4294967295|_>>>18),_=y+(A^m&(w^A))+v[8]+1163531501&4294967295,y=w+(_<<20&4294967295|_>>>12),_=m+(w^A&(y^w))+v[13]+2850285829&4294967295,m=y+(_<<5&4294967295|_>>>27),_=A+(y^w&(m^y))+v[2]+4243563512&4294967295,A=m+(_<<9&4294967295|_>>>23),_=w+(m^y&(A^m))+v[7]+1735328473&4294967295,w=A+(_<<14&4294967295|_>>>18),_=y+(A^m&(w^A))+v[12]+2368359562&4294967295,y=w+(_<<20&4294967295|_>>>12),_=m+(y^w^A)+v[5]+4294588738&4294967295,m=y+(_<<4&4294967295|_>>>28),_=A+(m^y^w)+v[8]+2272392833&4294967295,A=m+(_<<11&4294967295|_>>>21),_=w+(A^m^y)+v[11]+1839030562&4294967295,w=A+(_<<16&4294967295|_>>>16),_=y+(w^A^m)+v[14]+4259657740&4294967295,y=w+(_<<23&4294967295|_>>>9),_=m+(y^w^A)+v[1]+2763975236&4294967295,m=y+(_<<4&4294967295|_>>>28),_=A+(m^y^w)+v[4]+1272893353&4294967295,A=m+(_<<11&4294967295|_>>>21),_=w+(A^m^y)+v[7]+4139469664&4294967295,w=A+(_<<16&4294967295|_>>>16),_=y+(w^A^m)+v[10]+3200236656&4294967295,y=w+(_<<23&4294967295|_>>>9),_=m+(y^w^A)+v[13]+681279174&4294967295,m=y+(_<<4&4294967295|_>>>28),_=A+(m^y^w)+v[0]+3936430074&4294967295,A=m+(_<<11&4294967295|_>>>21),_=w+(A^m^y)+v[3]+3572445317&4294967295,w=A+(_<<16&4294967295|_>>>16),_=y+(w^A^m)+v[6]+76029189&4294967295,y=w+(_<<23&4294967295|_>>>9),_=m+(y^w^A)+v[9]+3654602809&4294967295,m=y+(_<<4&4294967295|_>>>28),_=A+(m^y^w)+v[12]+3873151461&4294967295,A=m+(_<<11&4294967295|_>>>21),_=w+(A^m^y)+v[15]+530742520&4294967295,w=A+(_<<16&4294967295|_>>>16),_=y+(w^A^m)+v[2]+3299628645&4294967295,y=w+(_<<23&4294967295|_>>>9),_=m+(w^(y|~A))+v[0]+4096336452&4294967295,m=y+(_<<6&4294967295|_>>>26),_=A+(y^(m|~w))+v[7]+1126891415&4294967295,A=m+(_<<10&4294967295|_>>>22),_=w+(m^(A|~y))+v[14]+2878612391&4294967295,w=A+(_<<15&4294967295|_>>>17),_=y+(A^(w|~m))+v[5]+4237533241&4294967295,y=w+(_<<21&4294967295|_>>>11),_=m+(w^(y|~A))+v[12]+1700485571&4294967295,m=y+(_<<6&4294967295|_>>>26),_=A+(y^(m|~w))+v[3]+2399980690&4294967295,A=m+(_<<10&4294967295|_>>>22),_=w+(m^(A|~y))+v[10]+4293915773&4294967295,w=A+(_<<15&4294967295|_>>>17),_=y+(A^(w|~m))+v[1]+2240044497&4294967295,y=w+(_<<21&4294967295|_>>>11),_=m+(w^(y|~A))+v[8]+1873313359&4294967295,m=y+(_<<6&4294967295|_>>>26),_=A+(y^(m|~w))+v[15]+4264355552&4294967295,A=m+(_<<10&4294967295|_>>>22),_=w+(m^(A|~y))+v[6]+2734768916&4294967295,w=A+(_<<15&4294967295|_>>>17),_=y+(A^(w|~m))+v[13]+1309151649&4294967295,y=w+(_<<21&4294967295|_>>>11),_=m+(w^(y|~A))+v[4]+4149444226&4294967295,m=y+(_<<6&4294967295|_>>>26),_=A+(y^(m|~w))+v[11]+3174756917&4294967295,A=m+(_<<10&4294967295|_>>>22),_=w+(m^(A|~y))+v[2]+718787259&4294967295,w=A+(_<<15&4294967295|_>>>17),_=y+(A^(w|~m))+v[9]+3951481745&4294967295,I.g[0]=I.g[0]+m&4294967295,I.g[1]=I.g[1]+(w+(_<<21&4294967295|_>>>11))&4294967295,I.g[2]=I.g[2]+w&4294967295,I.g[3]=I.g[3]+A&4294967295}r.prototype.u=function(I,m){m===void 0&&(m=I.length);for(var y=m-this.blockSize,v=this.B,w=this.h,A=0;A<m;){if(w==0)for(;A<=y;)i(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<m;)if(v[w++]=I.charCodeAt(A++),w==this.blockSize){i(this,v),w=0;break}}else for(;A<m;)if(v[w++]=I[A++],w==this.blockSize){i(this,v),w=0;break}}this.h=w,this.o+=m},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var m=1;m<I.length-8;++m)I[m]=0;var y=8*this.o;for(m=I.length-8;m<I.length;++m)I[m]=y&255,y/=256;for(this.u(I),I=Array(16),m=y=0;4>m;++m)for(var v=0;32>v;v+=8)I[y++]=this.g[m]>>>v&255;return I};function s(I,m){var y=c;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=m(I)}function a(I,m){this.h=m;for(var y=[],v=!0,w=I.length-1;0<=w;w--){var A=I[w]|0;v&&A==m||(y[w]=A,v=!1)}this.g=y}var c={};function u(I){return-128<=I&&128>I?s(I,function(m){return new a([m|0],0>m?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return g;if(0>I)return D(d(-I));for(var m=[],y=1,v=0;I>=y;v++)m[v]=I/y|0,y*=4294967296;return new a(m,0)}function p(I,m){if(I.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(I.charAt(0)=="-")return D(p(I.substring(1),m));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(m,8)),v=g,w=0;w<I.length;w+=8){var A=Math.min(8,I.length-w),_=parseInt(I.substring(w,w+A),m);8>A?(A=d(Math.pow(m,A)),v=v.j(A).add(d(_))):(v=v.j(y),v=v.add(d(_)))}return v}var g=u(0),T=u(1),R=u(16777216);n=a.prototype,n.m=function(){if(O(this))return-D(this).m();for(var I=0,m=1,y=0;y<this.g.length;y++){var v=this.i(y);I+=(0<=v?v:4294967296+v)*m,m*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(N(this))return"0";if(O(this))return"-"+D(this).toString(I);for(var m=d(Math.pow(I,6)),y=this,v="";;){var w=H(y,m).g;y=G(y,w.j(m));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=w,N(y))return A+v;for(;6>A.length;)A="0"+A;v=A+v}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function N(I){if(I.h!=0)return!1;for(var m=0;m<I.g.length;m++)if(I.g[m]!=0)return!1;return!0}function O(I){return I.h==-1}n.l=function(I){return I=G(this,I),O(I)?-1:N(I)?0:1};function D(I){for(var m=I.g.length,y=[],v=0;v<m;v++)y[v]=~I.g[v];return new a(y,~I.h).add(T)}n.abs=function(){return O(this)?D(this):this},n.add=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],v=0,w=0;w<=m;w++){var A=v+(this.i(w)&65535)+(I.i(w)&65535),_=(A>>>16)+(this.i(w)>>>16)+(I.i(w)>>>16);v=_>>>16,A&=65535,_&=65535,y[w]=_<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function G(I,m){return I.add(D(m))}n.j=function(I){if(N(this)||N(I))return g;if(O(this))return O(I)?D(this).j(D(I)):D(D(this).j(I));if(O(I))return D(this.j(D(I)));if(0>this.l(R)&&0>I.l(R))return d(this.m()*I.m());for(var m=this.g.length+I.g.length,y=[],v=0;v<2*m;v++)y[v]=0;for(v=0;v<this.g.length;v++)for(var w=0;w<I.g.length;w++){var A=this.i(v)>>>16,_=this.i(v)&65535,rt=I.i(w)>>>16,tr=I.i(w)&65535;y[2*v+2*w]+=_*tr,q(y,2*v+2*w),y[2*v+2*w+1]+=A*tr,q(y,2*v+2*w+1),y[2*v+2*w+1]+=_*rt,q(y,2*v+2*w+1),y[2*v+2*w+2]+=A*rt,q(y,2*v+2*w+2)}for(v=0;v<m;v++)y[v]=y[2*v+1]<<16|y[2*v];for(v=m;v<2*m;v++)y[v]=0;return new a(y,0)};function q(I,m){for(;(I[m]&65535)!=I[m];)I[m+1]+=I[m]>>>16,I[m]&=65535,m++}function F(I,m){this.g=I,this.h=m}function H(I,m){if(N(m))throw Error("division by zero");if(N(I))return new F(g,g);if(O(I))return m=H(D(I),m),new F(D(m.g),D(m.h));if(O(m))return m=H(I,D(m)),new F(D(m.g),m.h);if(30<I.g.length){if(O(I)||O(m))throw Error("slowDivide_ only works with positive integers.");for(var y=T,v=m;0>=v.l(I);)y=Y(y),v=Y(v);var w=j(y,1),A=j(v,1);for(v=j(v,2),y=j(y,2);!N(v);){var _=A.add(v);0>=_.l(I)&&(w=w.add(y),A=_),v=j(v,1),y=j(y,1)}return m=G(I,w.j(m)),new F(w,m)}for(w=g;0<=I.l(m);){for(y=Math.max(1,Math.floor(I.m()/m.m())),v=Math.ceil(Math.log(y)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),A=d(y),_=A.j(m);O(_)||0<_.l(I);)y-=v,A=d(y),_=A.j(m);N(A)&&(A=T),w=w.add(A),I=G(I,_)}return new F(w,I)}n.A=function(I){return H(this,I).h},n.and=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],v=0;v<m;v++)y[v]=this.i(v)&I.i(v);return new a(y,this.h&I.h)},n.or=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],v=0;v<m;v++)y[v]=this.i(v)|I.i(v);return new a(y,this.h|I.h)},n.xor=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],v=0;v<m;v++)y[v]=this.i(v)^I.i(v);return new a(y,this.h^I.h)};function Y(I){for(var m=I.g.length+1,y=[],v=0;v<m;v++)y[v]=I.i(v)<<1|I.i(v-1)>>>31;return new a(y,I.h)}function j(I,m){var y=m>>5;m%=32;for(var v=I.g.length-y,w=[],A=0;A<v;A++)w[A]=0<m?I.i(A+y)>>>m|I.i(A+y+1)<<32-m:I.i(A+y);return new a(w,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,nc=Qd.Md5=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,bt=Qd.Integer=a}).apply(typeof Wd!="undefined"?Wd:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var ys=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},ht={};var rc,ic,bn,sc,Vr,Is,oc,ac,cc;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ys=="object"&&ys];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(o,l){if(l)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var E=o[f];if(!(E in h))break e;h=h[E]}o=o[o.length-1],f=h[o],l=l(f),l!=f&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}function s(o,l){o instanceof String&&(o+="");var h=0,f=!1,E={next:function(){if(!f&&h<o.length){var S=h++;return{value:l(S,o[S]),done:!1}}return f=!0,{done:!0,value:void 0}}};return E[Symbol.iterator]=function(){return E},E}i("Array.prototype.values",function(o){return o||function(){return s(this,function(l,h){return h})}});var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function d(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function p(o,l,h){return o.call.apply(o.bind,arguments)}function g(o,l,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var E=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(E,f),o.apply(l,E)}}return function(){return o.apply(l,arguments)}}function T(o,l,h){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:g,T.apply(null,arguments)}function R(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function N(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,E,S){for(var k=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)k[ee-2]=arguments[ee];return l.prototype[E].apply(f,k)}}function O(o){let l=o.length;if(0<l){let h=Array(l);for(let f=0;f<l;f++)h[f]=o[f];return h}return[]}function D(o,l){for(let h=1;h<arguments.length;h++){let f=arguments[h];if(u(f)){let E=o.length||0,S=f.length||0;o.length=E+S;for(let k=0;k<S;k++)o[E+k]=f[k]}else o.push(f)}}class G{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function q(o){return/^[\s\xa0]*$/.test(o)}function F(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var Y=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function j(o,l,h){for(let f in o)l.call(h,o[f],f,o)}function I(o,l){for(let h in o)l.call(void 0,o[h],h,o)}function m(o){let l={};for(let h in o)l[h]=o[h];return l}let y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(o,l){let h,f;for(let E=1;E<arguments.length;E++){f=arguments[E];for(h in f)o[h]=f[h];for(let S=0;S<y.length;S++)h=y[S],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function w(o){var l=1;o=o.split(":");let h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function A(o){c.setTimeout(()=>{throw o},0)}function _(){var o=Po;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class rt{constructor(){this.h=this.g=null}add(l,h){let f=tr.get();f.set(l,h),this.h?this.h.next=f:this.g=f,this.h=f}}var tr=new G(()=>new wm,o=>o.reset());class wm{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let nr,rr=!1,Po=new rt,bl=()=>{let o=c.Promise.resolve(void 0);nr=()=>{o.then(Em)}};var Em=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){A(h)}var l=tr;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}rr=!1};function pt(){this.s=this.s,this.C=this.C}pt.prototype.s=!1,pt.prototype.ma=function(){this.s||(this.s=!0,this.N())},pt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var Tm=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{let h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return o}();function ir(o,l){if(Ie.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(Y){e:{try{H(l.nodeName);var E=!0;break e}catch{}E=!1}E||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Am[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ir.aa.h.call(this)}}N(ir,Ie);var Am={2:"touch",3:"pen",4:"mouse"};ir.prototype.h=function(){ir.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var sr="closure_listenable_"+(1e6*Math.random()|0),bm=0;function Sm(o,l,h,f,E){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!f,this.ha=E,this.key=++bm,this.da=this.fa=!1}function gi(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function _i(o){this.src=o,this.g={},this.h=0}_i.prototype.add=function(o,l,h,f,E){var S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);var k=Do(o,l,f,E);return-1<k?(l=o[k],h||(l.fa=!1)):(l=new Sm(l,this.src,S,!!f,E),l.fa=h,o.push(l)),l};function Co(o,l){var h=l.type;if(h in o.g){var f=o.g[h],E=Array.prototype.indexOf.call(f,l,void 0),S;(S=0<=E)&&Array.prototype.splice.call(f,E,1),S&&(gi(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Do(o,l,h,f){for(var E=0;E<o.length;++E){var S=o[E];if(!S.da&&S.listener==l&&S.capture==!!h&&S.ha==f)return E}return-1}var No="closure_lm_"+(1e6*Math.random()|0),ko={};function Sl(o,l,h,f,E){if(f&&f.once)return Pl(o,l,h,f,E);if(Array.isArray(l)){for(var S=0;S<l.length;S++)Sl(o,l[S],h,f,E);return null}return h=Lo(h),o&&o[sr]?o.K(l,h,d(f)?!!f.capture:!!f,E):Rl(o,l,h,!1,f,E)}function Rl(o,l,h,f,E,S){if(!l)throw Error("Invalid event type");var k=d(E)?!!E.capture:!!E,ee=xo(o);if(ee||(o[No]=ee=new _i(o)),h=ee.add(l,h,f,k,S),h.proxy)return h;if(f=Rm(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)Tm||(E=k),E===void 0&&(E=!1),o.addEventListener(l.toString(),f,E);else if(o.attachEvent)o.attachEvent(Dl(l.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Rm(){function o(h){return l.call(o.src,o.listener,h)}let l=Pm;return o}function Pl(o,l,h,f,E){if(Array.isArray(l)){for(var S=0;S<l.length;S++)Pl(o,l[S],h,f,E);return null}return h=Lo(h),o&&o[sr]?o.L(l,h,d(f)?!!f.capture:!!f,E):Rl(o,l,h,!0,f,E)}function Cl(o,l,h,f,E){if(Array.isArray(l))for(var S=0;S<l.length;S++)Cl(o,l[S],h,f,E);else f=d(f)?!!f.capture:!!f,h=Lo(h),o&&o[sr]?(o=o.i,l=String(l).toString(),l in o.g&&(S=o.g[l],h=Do(S,h,f,E),-1<h&&(gi(S[h]),Array.prototype.splice.call(S,h,1),S.length==0&&(delete o.g[l],o.h--)))):o&&(o=xo(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Do(l,h,f,E)),(h=-1<o?l[o]:null)&&Oo(h))}function Oo(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[sr])Co(l.i,o);else{var h=o.type,f=o.proxy;l.removeEventListener?l.removeEventListener(h,f,o.capture):l.detachEvent?l.detachEvent(Dl(h),f):l.addListener&&l.removeListener&&l.removeListener(f),(h=xo(l))?(Co(h,o),h.h==0&&(h.src=null,l[No]=null)):gi(o)}}}function Dl(o){return o in ko?ko[o]:ko[o]="on"+o}function Pm(o,l){if(o.da)o=!0;else{l=new ir(l,this);var h=o.listener,f=o.ha||o.src;o.fa&&Oo(o),o=h.call(f,l)}return o}function xo(o){return o=o[No],o instanceof _i?o:null}var Vo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Lo(o){return typeof o=="function"?o:(o[Vo]||(o[Vo]=function(l){return o.handleEvent(l)}),o[Vo])}function ve(){pt.call(this),this.i=new _i(this),this.M=this,this.F=null}N(ve,pt),ve.prototype[sr]=!0,ve.prototype.removeEventListener=function(o,l,h,f){Cl(this,o,l,h,f)};function be(o,l){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=l.type||l,typeof l=="string")l=new Ie(l,o);else if(l instanceof Ie)l.target=l.target||o;else{var E=l;l=new Ie(f,o),v(l,E)}if(E=!0,h)for(var S=h.length-1;0<=S;S--){var k=l.g=h[S];E=yi(k,f,!0,l)&&E}if(k=l.g=o,E=yi(k,f,!0,l)&&E,E=yi(k,f,!1,l)&&E,h)for(S=0;S<h.length;S++)k=l.g=h[S],E=yi(k,f,!1,l)&&E}ve.prototype.N=function(){if(ve.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],f=0;f<h.length;f++)gi(h[f]);delete o.g[l],o.h--}}this.F=null},ve.prototype.K=function(o,l,h,f){return this.i.add(String(o),l,!1,h,f)},ve.prototype.L=function(o,l,h,f){return this.i.add(String(o),l,!0,h,f)};function yi(o,l,h,f){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var E=!0,S=0;S<l.length;++S){var k=l[S];if(k&&!k.da&&k.capture==h){var ee=k.listener,pe=k.ha||k.src;k.fa&&Co(o.i,k),E=ee.call(pe,f)!==!1&&E}}return E&&!f.defaultPrevented}function Nl(o,l,h){if(typeof o=="function")h&&(o=T(o,h));else if(o&&typeof o.handleEvent=="function")o=T(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function kl(o){o.g=Nl(()=>{o.g=null,o.i&&(o.i=!1,kl(o))},o.l);let l=o.h;o.h=null,o.m.apply(null,l)}class Cm extends pt{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:kl(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function or(o){pt.call(this),this.h=o,this.g={}}N(or,pt);var Ol=[];function xl(o){j(o.g,function(l,h){this.g.hasOwnProperty(h)&&Oo(l)},o),o.g={}}or.prototype.N=function(){or.aa.N.call(this),xl(this)},or.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mo=c.JSON.stringify,Dm=c.JSON.parse,Nm=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Fo(){}Fo.prototype.h=null;function Vl(o){return o.h||(o.h=o.i())}function Ll(){}var ar={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Uo(){Ie.call(this,"d")}N(Uo,Ie);function Bo(){Ie.call(this,"c")}N(Bo,Ie);var Ft={},Ml=null;function Ii(){return Ml=Ml||new ve}Ft.La="serverreachability";function Fl(o){Ie.call(this,Ft.La,o)}N(Fl,Ie);function cr(o){let l=Ii();be(l,new Fl(l))}Ft.STAT_EVENT="statevent";function Ul(o,l){Ie.call(this,Ft.STAT_EVENT,o),this.stat=l}N(Ul,Ie);function Se(o){let l=Ii();be(l,new Ul(l,o))}Ft.Ma="timingevent";function Bl(o,l){Ie.call(this,Ft.Ma,o),this.size=l}N(Bl,Ie);function ur(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function lr(){this.g=!0}lr.prototype.xa=function(){this.g=!1};function km(o,l,h,f,E,S){o.info(function(){if(o.g)if(S)for(var k="",ee=S.split("&"),pe=0;pe<ee.length;pe++){var X=ee[pe].split("=");if(1<X.length){var we=X[0];X=X[1];var Ee=we.split("_");k=2<=Ee.length&&Ee[1]=="type"?k+(we+"="+X+"&"):k+(we+"=redacted&")}}else k=null;else k=S;return"XMLHTTP REQ ("+f+") [attempt "+E+"]: "+l+`
`+h+`
`+k})}function Om(o,l,h,f,E,S,k){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+E+"]: "+l+`
`+h+`
`+S+" "+k})}function mn(o,l,h,f){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Vm(o,h)+(f?" "+f:"")})}function xm(o,l){o.info(function(){return"TIMEOUT: "+l})}lr.prototype.info=function(){};function Vm(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var E=f[1];if(Array.isArray(E)&&!(1>E.length)){var S=E[0];if(S!="noop"&&S!="stop"&&S!="close")for(var k=1;k<E.length;k++)E[k]=""}}}}return Mo(h)}catch{return l}}var vi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ql={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},qo;function wi(){}N(wi,Fo),wi.prototype.g=function(){return new XMLHttpRequest},wi.prototype.i=function(){return{}},qo=new wi;function mt(o,l,h,f){this.j=o,this.i=l,this.l=h,this.R=f||1,this.U=new or(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new jl}function jl(){this.i=null,this.g="",this.h=!1}var zl={},jo={};function zo(o,l,h){o.L=1,o.v=bi(it(l)),o.m=h,o.P=!0,Gl(o,null)}function Gl(o,l){o.F=Date.now(),Ei(o),o.A=it(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),ih(h.i,"t",f),o.C=0,h=o.j.J,o.h=new jl,o.g=Eh(o.j,h?l:null,!o.m),0<o.O&&(o.M=new Cm(T(o.Y,o,o.g),o.O)),l=o.U,h=o.g,f=o.ca;var E="readystatechange";Array.isArray(E)||(E&&(Ol[0]=E.toString()),E=Ol);for(var S=0;S<E.length;S++){var k=Sl(h,E[S],f||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),cr(),km(o.i,o.u,o.A,o.l,o.R,o.m)}mt.prototype.ca=function(o){o=o.target;let l=this.M;l&&st(o)==3?l.j():this.Y(o)},mt.prototype.Y=function(o){try{if(o==this.g)e:{let Ee=st(this.g);var l=this.g.Ba();let yn=this.g.Z();if(!(3>Ee)&&(Ee!=3||this.g&&(this.h.h||this.g.oa()||hh(this.g)))){this.J||Ee!=4||l==7||(l==8||0>=yn?cr(3):cr(2)),Go(this);var h=this.g.Z();this.X=h;t:if(Kl(this)){var f=hh(this.g);o="";var E=f.length,S=st(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Ut(this),hr(this);var k="";break t}this.h.i=new c.TextDecoder}for(l=0;l<E;l++)this.h.h=!0,o+=this.h.i.decode(f[l],{stream:!(S&&l==E-1)});f.length=0,this.h.g+=o,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=h==200,Om(this.i,this.u,this.A,this.l,this.R,Ee,h),this.o){if(this.T&&!this.K){t:{if(this.g){var ee,pe=this.g;if((ee=pe.g?pe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(ee)){var X=ee;break t}}X=null}if(h=X)mn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ko(this,h);else{this.o=!1,this.s=3,Se(12),Ut(this),hr(this);break e}}if(this.P){h=!0;let Be;for(;!this.J&&this.C<k.length;)if(Be=Lm(this,k),Be==jo){Ee==4&&(this.s=4,Se(14),h=!1),mn(this.i,this.l,null,"[Incomplete Response]");break}else if(Be==zl){this.s=4,Se(15),mn(this.i,this.l,k,"[Invalid Chunk]"),h=!1;break}else mn(this.i,this.l,Be,null),Ko(this,Be);if(Kl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ee!=4||k.length!=0||this.h.h||(this.s=1,Se(16),h=!1),this.o=this.o&&h,!h)mn(this.i,this.l,k,"[Invalid Chunked Response]"),Ut(this),hr(this);else if(0<k.length&&!this.W){this.W=!0;var we=this.j;we.g==this&&we.ba&&!we.M&&(we.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),Yo(we),we.M=!0,Se(11))}}else mn(this.i,this.l,k,null),Ko(this,k);Ee==4&&Ut(this),this.o&&!this.J&&(Ee==4?yh(this.j,this):(this.o=!1,Ei(this)))}else Zm(this.g),h==400&&0<k.indexOf("Unknown SID")?(this.s=3,Se(12)):(this.s=0,Se(13)),Ut(this),hr(this)}}}catch{}finally{}};function Kl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Lm(o,l){var h=o.C,f=l.indexOf(`
`,h);return f==-1?jo:(h=Number(l.substring(h,f)),isNaN(h)?zl:(f+=1,f+h>l.length?jo:(l=l.slice(f,f+h),o.C=f+h,l)))}mt.prototype.cancel=function(){this.J=!0,Ut(this)};function Ei(o){o.S=Date.now()+o.I,$l(o,o.I)}function $l(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ur(T(o.ba,o),l)}function Go(o){o.B&&(c.clearTimeout(o.B),o.B=null)}mt.prototype.ba=function(){this.B=null;let o=Date.now();0<=o-this.S?(xm(this.i,this.A),this.L!=2&&(cr(),Se(17)),Ut(this),this.s=2,hr(this)):$l(this,this.S-o)};function hr(o){o.j.G==0||o.J||yh(o.j,o)}function Ut(o){Go(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,xl(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Ko(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||$o(h.h,o))){if(!o.K&&$o(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var E=f;if(E[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Di(h),Pi(h);else break e;Jo(h),Se(18)}}else h.za=E[1],0<h.za-h.T&&37500>E[2]&&h.F&&h.v==0&&!h.C&&(h.C=ur(T(h.Za,h),6e3));if(1>=Ql(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else qt(h,11)}else if((o.K||h.g==o)&&Di(h),!q(l))for(E=h.Da.g.parse(l),l=0;l<E.length;l++){let X=E[l];if(h.T=X[0],X=X[1],h.G==2)if(X[0]=="c"){h.K=X[1],h.ia=X[2];let we=X[3];we!=null&&(h.la=we,h.j.info("VER="+h.la));let Ee=X[4];Ee!=null&&(h.Aa=Ee,h.j.info("SVER="+h.Aa));let yn=X[5];yn!=null&&typeof yn=="number"&&0<yn&&(f=1.5*yn,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;let Be=o.g;if(Be){let ki=Be.g?Be.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ki){var S=f.h;S.g||ki.indexOf("spdy")==-1&&ki.indexOf("quic")==-1&&ki.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Ho(S,S.h),S.h=null))}if(f.D){let Xo=Be.g?Be.g.getResponseHeader("X-HTTP-Session-Id"):null;Xo&&(f.ya=Xo,ne(f.I,f.D,Xo))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var k=o;if(f.qa=wh(f,f.J?f.ia:null,f.W),k.K){Jl(f.h,k);var ee=k,pe=f.L;pe&&(ee.I=pe),ee.B&&(Go(ee),Ei(ee)),f.g=k}else gh(f);0<h.i.length&&Ci(h)}else X[0]!="stop"&&X[0]!="close"||qt(h,7);else h.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?qt(h,7):Qo(h):X[0]!="noop"&&h.l&&h.l.ta(X),h.v=0)}}cr(4)}catch{}}var Mm=class{constructor(o,l){this.g=o,this.map=l}};function Hl(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ql(o){return o.h?1:o.g?o.g.size:0}function $o(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Ho(o,l){o.g?o.g.add(l):o.h=l}function Jl(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Hl.prototype.cancel=function(){if(this.i=Yl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let o of this.g.values())o.cancel();this.g.clear()}};function Yl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(let h of o.g.values())l=l.concat(h.D);return l}return O(o.i)}function Fm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map!="undefined"&&o instanceof Map||typeof Set!="undefined"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],h=o.length,f=0;f<h;f++)l.push(o[f]);return l}l=[],h=0;for(f in o)l[h++]=o[f];return l}function Um(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map!="undefined"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set!="undefined"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(let f in o)l[h++]=f;return l}}}function Xl(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=Um(o),f=Fm(o),E=f.length,S=0;S<E;S++)l.call(void 0,f[S],h&&h[S],o)}var Zl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bm(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),E=null;if(0<=f){var S=o[h].substring(0,f);E=o[h].substring(f+1)}else S=o[h];l(S,E?decodeURIComponent(E.replace(/\+/g," ")):"")}}}function Bt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Bt){this.h=o.h,Ti(this,o.j),this.o=o.o,this.g=o.g,Ai(this,o.s),this.l=o.l;var l=o.i,h=new pr;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),eh(this,h),this.m=o.m}else o&&(l=String(o).match(Zl))?(this.h=!1,Ti(this,l[1]||"",!0),this.o=dr(l[2]||""),this.g=dr(l[3]||"",!0),Ai(this,l[4]),this.l=dr(l[5]||"",!0),eh(this,l[6]||"",!0),this.m=dr(l[7]||"")):(this.h=!1,this.i=new pr(null,this.h))}Bt.prototype.toString=function(){var o=[],l=this.j;l&&o.push(fr(l,th,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(fr(l,th,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(fr(h,h.charAt(0)=="/"?zm:jm,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",fr(h,Km)),o.join("")};function it(o){return new Bt(o)}function Ti(o,l,h){o.j=h?dr(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Ai(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function eh(o,l,h){l instanceof pr?(o.i=l,$m(o.i,o.h)):(h||(l=fr(l,Gm)),o.i=new pr(l,o.h))}function ne(o,l,h){o.i.set(l,h)}function bi(o){return ne(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function dr(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function fr(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,qm),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function qm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var th=/[#\/\?@]/g,jm=/[#\?:]/g,zm=/[#\?]/g,Gm=/[#\?@]/g,Km=/#/g;function pr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function gt(o){o.g||(o.g=new Map,o.h=0,o.i&&Bm(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=pr.prototype,n.add=function(o,l){gt(this),this.i=null,o=gn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function nh(o,l){gt(o),l=gn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function rh(o,l){return gt(o),l=gn(o,l),o.g.has(l)}n.forEach=function(o,l){gt(this),this.g.forEach(function(h,f){h.forEach(function(E){o.call(l,E,f,this)},this)},this)},n.na=function(){gt(this);let o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let f=0;f<l.length;f++){let E=o[f];for(let S=0;S<E.length;S++)h.push(l[f])}return h},n.V=function(o){gt(this);let l=[];if(typeof o=="string")rh(this,o)&&(l=l.concat(this.g.get(gn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},n.set=function(o,l){return gt(this),this.i=null,o=gn(this,o),rh(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function ih(o,l,h){nh(o,l),0<h.length&&(o.i=null,o.g.set(gn(o,l),O(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var f=l[h];let S=encodeURIComponent(String(f)),k=this.V(f);for(f=0;f<k.length;f++){var E=S;k[f]!==""&&(E+="="+encodeURIComponent(String(k[f]))),o.push(E)}}return this.i=o.join("&")};function gn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function $m(o,l){l&&!o.j&&(gt(o),o.i=null,o.g.forEach(function(h,f){var E=f.toLowerCase();f!=E&&(nh(this,f),ih(this,E,h))},o)),o.j=l}function Hm(o,l){let h=new lr;if(c.Image){let f=new Image;f.onload=R(_t,h,"TestLoadImage: loaded",!0,l,f),f.onerror=R(_t,h,"TestLoadImage: error",!1,l,f),f.onabort=R(_t,h,"TestLoadImage: abort",!1,l,f),f.ontimeout=R(_t,h,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else l(!1)}function Wm(o,l){let h=new lr,f=new AbortController,E=setTimeout(()=>{f.abort(),_t(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:f.signal}).then(S=>{clearTimeout(E),S.ok?_t(h,"TestPingServer: ok",!0,l):_t(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(E),_t(h,"TestPingServer: error",!1,l)})}function _t(o,l,h,f,E){try{E&&(E.onload=null,E.onerror=null,E.onabort=null,E.ontimeout=null),f(h)}catch{}}function Qm(){this.g=new Nm}function Jm(o,l,h){let f=h||"";try{Xl(o,function(E,S){let k=E;d(E)&&(k=Mo(E)),l.push(f+S+"="+encodeURIComponent(k))})}catch(E){throw l.push(f+"type="+encodeURIComponent("_badmap")),E}}function mr(o){this.l=o.Ub||null,this.j=o.eb||!1}N(mr,Fo),mr.prototype.g=function(){return new Si(this.l,this.j)},mr.prototype.i=function(o){return function(){return o}}({});function Si(o,l){ve.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Si,ve),n=Si.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,_r(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,_r(this)),this.g&&(this.readyState=3,_r(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream!="undefined"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sh(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function sh(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?gr(this):_r(this),this.readyState==3&&sh(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,gr(this))},n.Qa=function(o){this.g&&(this.response=o,gr(this))},n.ga=function(){this.g&&gr(this)};function gr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,_r(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function _r(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Si.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function oh(o){let l="";return j(o,function(h,f){l+=f,l+=":",l+=h,l+=`\r
`}),l}function Wo(o,l,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=oh(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):ne(o,l,h))}function se(o){ve.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(se,ve);var Ym=/^https?$/i,Xm=["POST","PUT"];n=se.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():qo.g(),this.v=this.o?Vl(this.o):Vl(qo),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(S){ah(this,S);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var E in f)h.set(E,f[E]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(let S of f.keys())h.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),E=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Xm,l,void 0))||f||E||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[S,k]of h)this.g.setRequestHeader(S,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{lh(this),this.u=!0,this.g.send(o),this.u=!1}catch(S){ah(this,S)}};function ah(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,ch(o),Ri(o)}function ch(o){o.A||(o.A=!0,be(o,"complete"),be(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,be(this,"complete"),be(this,"abort"),Ri(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ri(this,!0)),se.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?uh(this):this.bb())},n.bb=function(){uh(this)};function uh(o){if(o.h&&typeof a!="undefined"&&(!o.v[1]||st(o)!=4||o.Z()!=2)){if(o.u&&st(o)==4)Nl(o.Ea,0,o);else if(be(o,"readystatechange"),st(o)==4){o.h=!1;try{let k=o.Z();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var f;if(f=k===0){var E=String(o.D).match(Zl)[1]||null;!E&&c.self&&c.self.location&&(E=c.self.location.protocol.slice(0,-1)),f=!Ym.test(E?E.toLowerCase():"")}h=f}if(h)be(o,"complete"),be(o,"success");else{o.m=6;try{var S=2<st(o)?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.Z()+"]",ch(o)}}finally{Ri(o)}}}}function Ri(o,l){if(o.g){lh(o);let h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||be(o,"ready");try{h.onreadystatechange=f}catch{}}}function lh(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function st(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<st(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Dm(l)}};function hh(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Zm(o){let l={};o=(o.g&&2<=st(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(q(o[f]))continue;var h=w(o[f]);let E=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();let S=l[E]||[];l[E]=S,S.push(h)}I(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function yr(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function dh(o){this.Aa=0,this.i=[],this.j=new lr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=yr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=yr("baseRetryDelayMs",5e3,o),this.cb=yr("retryDelaySeedMs",1e4,o),this.Wa=yr("forwardChannelMaxRetries",2,o),this.wa=yr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Hl(o&&o.concurrentRequestLimit),this.Da=new Qm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=dh.prototype,n.la=8,n.G=1,n.connect=function(o,l,h,f){Se(0),this.W=o,this.H=l||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=wh(this,null,this.W),Ci(this)};function Qo(o){if(fh(o),o.G==3){var l=o.U++,h=it(o.I);if(ne(h,"SID",o.K),ne(h,"RID",l),ne(h,"TYPE","terminate"),Ir(o,h),l=new mt(o,o.j,l),l.L=2,l.v=bi(it(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=Eh(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Ei(l)}vh(o)}function Pi(o){o.g&&(Yo(o),o.g.cancel(),o.g=null)}function fh(o){Pi(o),o.u&&(c.clearTimeout(o.u),o.u=null),Di(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Ci(o){if(!Wl(o.h)&&!o.s){o.s=!0;var l=o.Ga;nr||bl(),rr||(nr(),rr=!0),Po.add(l,o),o.B=0}}function eg(o,l){return Ql(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ur(T(o.Ga,o,l),Ih(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;let E=new mt(this,this.j,o),S=this.o;if(this.S&&(S?(S=m(S),v(S,this.S)):S=this.S),this.m!==null||this.O||(E.H=S,S=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=mh(this,E,l),h=it(this.I),ne(h,"RID",o),ne(h,"CVER",22),this.D&&ne(h,"X-HTTP-Session-Id",this.D),Ir(this,h),S&&(this.O?l="headers="+encodeURIComponent(String(oh(S)))+"&"+l:this.m&&Wo(h,this.m,S)),Ho(this.h,E),this.Ua&&ne(h,"TYPE","init"),this.P?(ne(h,"$req",l),ne(h,"SID","null"),E.T=!0,zo(E,h,null)):zo(E,h,l),this.G=2}}else this.G==3&&(o?ph(this,o):this.i.length==0||Wl(this.h)||ph(this))};function ph(o,l){var h;l?h=l.l:h=o.U++;let f=it(o.I);ne(f,"SID",o.K),ne(f,"RID",h),ne(f,"AID",o.T),Ir(o,f),o.m&&o.o&&Wo(f,o.m,o.o),h=new mt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=mh(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ho(o.h,h),zo(h,f,l)}function Ir(o,l){o.H&&j(o.H,function(h,f){ne(l,f,h)}),o.l&&Xl({},function(h,f){ne(l,f,h)})}function mh(o,l,h){h=Math.min(o.i.length,h);var f=o.l?T(o.l.Na,o.l,o):null;e:{var E=o.i;let S=-1;for(;;){let k=["count="+h];S==-1?0<h?(S=E[0].g,k.push("ofs="+S)):S=0:k.push("ofs="+S);let ee=!0;for(let pe=0;pe<h;pe++){let X=E[pe].g,we=E[pe].map;if(X-=S,0>X)S=Math.max(0,E[pe].g-100),ee=!1;else try{Jm(we,k,"req"+X+"_")}catch{f&&f(we)}}if(ee){f=k.join("&");break e}}}return o=o.i.splice(0,h),l.D=o,f}function gh(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;nr||bl(),rr||(nr(),rr=!0),Po.add(l,o),o.v=0}}function Jo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ur(T(o.Fa,o),Ih(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,_h(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ur(T(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Se(10),Pi(this),_h(this))};function Yo(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function _h(o){o.g=new mt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=it(o.qa);ne(l,"RID","rpc"),ne(l,"SID",o.K),ne(l,"AID",o.T),ne(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&ne(l,"TO",o.ja),ne(l,"TYPE","xmlhttp"),Ir(o,l),o.m&&o.o&&Wo(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=bi(it(l)),h.m=null,h.P=!0,Gl(h,o)}n.Za=function(){this.C!=null&&(this.C=null,Pi(this),Jo(this),Se(19))};function Di(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function yh(o,l){var h=null;if(o.g==l){Di(o),Yo(o),o.g=null;var f=2}else if($o(o.h,l))h=l.D,Jl(o.h,l),f=1;else return;if(o.G!=0){if(l.o)if(f==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var E=o.B;f=Ii(),be(f,new Bl(f,h)),Ci(o)}else gh(o);else if(E=l.s,E==3||E==0&&0<l.X||!(f==1&&eg(o,l)||f==2&&Jo(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),E){case 1:qt(o,5);break;case 4:qt(o,10);break;case 3:qt(o,6);break;default:qt(o,2)}}}function Ih(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function qt(o,l){if(o.j.info("Error code "+l),l==2){var h=T(o.fb,o),f=o.Xa;let E=!f;f=new Bt(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ti(f,"https"),bi(f),E?Hm(f.toString(),h):Wm(f.toString(),h)}else Se(2);o.G=0,o.l&&o.l.sa(l),vh(o),fh(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Se(2)):(this.j.info("Failed to ping google.com"),Se(1))};function vh(o){if(o.G=0,o.ka=[],o.l){let l=Yl(o.h);(l.length!=0||o.i.length!=0)&&(D(o.ka,l),D(o.ka,o.i),o.h.i.length=0,O(o.i),o.i.length=0),o.l.ra()}}function wh(o,l,h){var f=h instanceof Bt?it(h):new Bt(h);if(f.g!="")l&&(f.g=l+"."+f.g),Ai(f,f.s);else{var E=c.location;f=E.protocol,l=l?l+"."+E.hostname:E.hostname,E=+E.port;var S=new Bt(null);f&&Ti(S,f),l&&(S.g=l),E&&Ai(S,E),h&&(S.l=h),f=S}return h=o.D,l=o.ya,h&&l&&ne(f,h,l),ne(f,"VER",o.la),Ir(o,f),f}function Eh(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new se(new mr({eb:h})):new se(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Th(){}n=Th.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ni(){}Ni.prototype.g=function(o,l){return new Ne(o,l)};function Ne(o,l){ve.call(this),this.g=new dh(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!q(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!q(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new _n(this)}N(Ne,ve),Ne.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ne.prototype.close=function(){Qo(this.g)},Ne.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Mo(o),o=h);l.i.push(new Mm(l.Ya++,o)),l.G==3&&Ci(l)},Ne.prototype.N=function(){this.g.l=null,delete this.j,Qo(this.g),delete this.g,Ne.aa.N.call(this)};function Ah(o){Uo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(let h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}N(Ah,Uo);function bh(){Bo.call(this),this.status=1}N(bh,Bo);function _n(o){this.g=o}N(_n,Th),_n.prototype.ua=function(){be(this.g,"a")},_n.prototype.ta=function(o){be(this.g,new Ah(o))},_n.prototype.sa=function(o){be(this.g,new bh)},_n.prototype.ra=function(){be(this.g,"b")},Ni.prototype.createWebChannel=Ni.prototype.g,Ne.prototype.send=Ne.prototype.o,Ne.prototype.open=Ne.prototype.m,Ne.prototype.close=Ne.prototype.close,cc=ht.createWebChannelTransport=function(){return new Ni},ac=ht.getStatEventTarget=function(){return Ii()},oc=ht.Event=Ft,Is=ht.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},vi.NO_ERROR=0,vi.TIMEOUT=8,vi.HTTP_ERROR=6,Vr=ht.ErrorCode=vi,ql.COMPLETE="complete",sc=ht.EventType=ql,Ll.EventType=ar,ar.OPEN="a",ar.CLOSE="b",ar.ERROR="c",ar.MESSAGE="d",ve.prototype.listen=ve.prototype.K,bn=ht.WebChannel=Ll,ic=ht.FetchXmlHttpFactory=mr,se.prototype.listenOnce=se.prototype.L,se.prototype.getLastError=se.prototype.Ka,se.prototype.getLastErrorCode=se.prototype.Ba,se.prototype.getStatus=se.prototype.Z,se.prototype.getResponseJson=se.prototype.Oa,se.prototype.getResponseText=se.prototype.oa,se.prototype.send=se.prototype.ea,se.prototype.setWithCredentials=se.prototype.Ha,rc=ht.XhrIo=se}).apply(typeof ys!="undefined"?ys:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var Jd="@firebase/firestore";var _e=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};_e.UNAUTHENTICATED=new _e(null),_e.GOOGLE_CREDENTIALS=new _e("google-credentials-uid"),_e.FIRST_PARTY=new _e("first-party-uid"),_e.MOCK_USER=new _e("mock-user");var Xn="10.12.1";var on=new It("@firebase/firestore");function Dn(){return on.logLevel}function C(n,...e){if(on.logLevel<=W.DEBUG){let t=e.map(sl);on.debug(`Firestore (${Xn}): ${n}`,...t)}}function Re(n,...e){if(on.logLevel<=W.ERROR){let t=e.map(sl);on.error(`Firestore (${Xn}): ${n}`,...t)}}function $r(n,...e){if(on.logLevel<=W.WARN){let t=e.map(sl);on.warn(`Firestore (${Xn}): ${n}`,...t)}}function sl(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}function M(n="Unexpected state"){let e=`FIRESTORE (${Xn}) INTERNAL ASSERTION FAILED: `+n;throw Re(e),new Error(e)}function U(n,e){n||M()}function z(n,e){return n}var P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},V=class extends ke{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var $e=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var fc=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},pc=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(_e.UNAUTHENTICATED))}shutdown(){}};var mc=class{constructor(e){this.t=e,this.currentUser=_e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i,i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve(),s=new $e;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new $e,e.enqueueRetryable(()=>i(this.currentUser))};let a=()=>{let u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){let u=this.t.getImmediate({optional:!0});u?c(u):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new $e)}},0),a()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(U(typeof r.accessToken=="string"),new fc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return U(e===null||typeof e=="string"),new _e(e)}},gc=class{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=_e.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}},_c=class{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new gc(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(_e.FIRST_PARTY))}shutdown(){}invalidateToken(){}},yc=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},Ic=class{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let r=s=>{s.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);let a=s.token!==this.R;return this.R=s.token,C("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};let i=s=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){let s=this.A.getImmediate({optional:!0});s?i(s):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(U(typeof t.token=="string"),this.R=t.token,new yc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};function gI(n){let e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}var Cs=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let i=gI(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}};function K(n,e){return n<e?-1:n>e?1:0}function Fn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function Hf(n){return n+"\0"}var ce=class n{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new V(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return n.fromMillis(Date.now())}static fromDate(e){return n.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new n(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};var B=class n{constructor(e){this.timestamp=e}static fromTimestamp(e){return new n(e)}static min(){return new n(new ce(0,0))}static max(){return new n(new ce(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var Ds=class n{constructor(e,t,r){t===void 0?t=0:t>e.length&&M(),r===void 0?r=e.length-t:r>e.length-t&&M(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return n.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let i=0;i<r;i++){let s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}},re=class n extends Ds{construct(e,t,r){return new n(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new V(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new n(t)}static emptyPath(){return new n([])}},_I=/^[_a-zA-Z][_a-zA-Z0-9]*$/,de=class n extends Ds{construct(e,t,r){return new n(e,t,r)}static isValidIdentifier(e){return _I.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new n(["__name__"])}static fromServerFormat(e){let t=[],r="",i=0,s=()=>{if(r.length===0)throw new V(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},a=!1;for(;i<e.length;){let c=e[i];if(c==="\\"){if(i+1===e.length)throw new V(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new V(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(s(),i++)}if(s(),a)throw new V(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new n(t)}static emptyPath(){return new n([])}};var x=class n{constructor(e){this.path=e}static fromPath(e){return new n(re.fromString(e))}static fromName(e){return new n(re.fromString(e).popFirst(5))}static empty(){return new n(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new n(new re(e.slice()))}};var Un=class{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}};function vc(n){return n.fields.find(e=>e.kind===2)}function Yt(n){return n.fields.filter(e=>e.kind!==2)}Un.UNKNOWN_ID=-1;var Ln=class{constructor(e,t){this.fieldPath=e,this.kind=t}};var Hr=class n{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new n(0,Ue.min())}};function yI(n,e){let t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=B.fromTimestamp(r===1e9?new ce(t+1,0):new ce(t,r));return new Ue(i,x.empty(),e)}function Wf(n){return new Ue(n.readTime,n.key,-1)}var Ue=class n{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new n(B.min(),x.empty(),-1)}static max(){return new n(B.max(),x.empty(),-1)}};function ol(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=x.comparator(n.documentKey,e.documentKey),t!==0?t:K(n.largestBatchId,e.largestBatchId))}var Qf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",Ns=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function fn(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==Qf)throw n;C("LocalStore","Unexpectedly lost primary lease")}var b=class n{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new n((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof n?t:n.resolve(t)}catch(t){return n.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):n.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):n.reject(t)}static resolve(e){return new n((t,r)=>{t(e)})}static reject(e){return new n((t,r)=>{r(e)})}static waitFor(e){return new n((t,r)=>{let i=0,s=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++s,a&&s===i&&t()},u=>r(u))}),a=!0,s===i&&t()})}static or(e){let t=n.resolve(!1);for(let r of e)t=t.next(i=>i?n.resolve(i):r());return t}static forEach(e,t){let r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new n((r,i)=>{let s=e.length,a=new Array(s),c=0;for(let u=0;u<s;u++){let d=u;t(e[d]).next(p=>{a[d]=p,++c,c===s&&r(a)},p=>i(p))}})}static doWhile(e,t){return new n((r,i)=>{let s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}};var ks=class n{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new $e,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new rn(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{let i=al(r.target.error);this.V.reject(new rn(e,i))}}static open(e,t,r,i){try{return new n(t,e.transaction(i,r))}catch(s){throw new rn(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(C("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){let e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){let t=this.transaction.objectStore(e);return new Ec(t)}},Bn=class n{constructor(e,t,r){this.name=e,this.version=t,this.p=r,n.S(oe())===12.2&&Re("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return C("SimpleDb","Removing database:",e),Xt(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Vi())return!1;if(n.C())return!0;let e=oe(),t=n.S(e),r=0<t&&t<10,i=Jf(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process!="undefined"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.v)==="YES"}static F(e,t){return e.store(t)}static S(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(C("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{let i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{let a=s.target.result;t(a)},i.onblocked=()=>{r(new rn(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{let a=s.target.error;a.name==="VersionError"?r(new V(P.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?r(new V(P.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):r(new rn(e,a))},i.onupgradeneeded=s=>{C("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);let a=s.target.result;this.p.O(a,i.transaction,s.oldVersion,this.version).next(()=>{C("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){let s=t==="readonly",a=0;for(;;){++a;try{this.db=await this.M(e);let c=ks.open(this.db,e,s?"readonly":"readwrite",r),u=i(c).next(d=>(c.g(),d)).catch(d=>(c.abort(d),b.reject(d))).toPromise();return u.catch(()=>{}),await c.m,u}catch(c){let u=c,d=u.name!=="FirebaseError"&&a<3;if(C("SimpleDb","Transaction failed with error:",u.message,"Retrying:",d),this.close(),!d)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}};function Jf(n){let e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}var wc=class{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Xt(this.B.delete())}},rn=class extends V{constructor(e,t){super(P.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}};function Mt(n){return n.name==="IndexedDbTransactionError"}var Ec=class{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(C("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(C("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Xt(r)}add(e){return C("SimpleDb","ADD",this.store.name,e,e),Xt(this.store.add(e))}get(e){return Xt(this.store.get(e)).next(t=>(t===void 0&&(t=null),C("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return C("SimpleDb","DELETE",this.store.name,e),Xt(this.store.delete(e))}count(){return C("SimpleDb","COUNT",this.store.name),Xt(this.store.count())}U(e,t){let r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){let s=i.getAll(r.range);return new b((a,c)=>{s.onerror=u=>{c(u.target.error)},s.onsuccess=u=>{a(u.target.result)}})}{let s=this.cursor(r),a=[];return this.W(s,(c,u)=>{a.push(u)}).next(()=>a)}}G(e,t){let r=this.store.getAll(e,t===null?void 0:t);return new b((i,s)=>{r.onerror=a=>{s(a.target.error)},r.onsuccess=a=>{i(a.target.result)}})}j(e,t){C("SimpleDb","DELETE ALL",this.store.name);let r=this.options(e,t);r.H=!1;let i=this.cursor(r);return this.W(i,(s,a,c)=>c.delete())}J(e,t){let r;t?r=e:(r={},t=e);let i=this.cursor(r);return this.W(i,t)}Y(e){let t=this.cursor({});return new b((r,i)=>{t.onerror=s=>{let a=al(s.target.error);i(a)},t.onsuccess=s=>{let a=s.target.result;a?e(a.primaryKey,a.value).next(c=>{c?a.continue():r()}):r()}})}W(e,t){let r=[];return new b((i,s)=>{e.onerror=a=>{s(a.target.error)},e.onsuccess=a=>{let c=a.target.result;if(!c)return void i();let u=new wc(c),d=t(c.primaryKey,c.value,u);if(d instanceof b){let p=d.catch(g=>(u.done(),b.reject(g)));r.push(p)}u.isDone?i():u.K===null?c.continue():c.continue(u.K)}}).next(()=>b.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}};function Xt(n){return new b((e,t)=>{n.onsuccess=r=>{let i=r.target.result;e(i)},n.onerror=r=>{let i=al(r.target.error);t(i)}})}var Yd=!1;function al(n){let e=Bn.S(oe());if(e>=12.2&&e<13){let t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){let r=new V("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Yd||(Yd=!0,setTimeout(()=>{throw r},0)),r}}return n}var Tc=class{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){C("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{C("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Mt(t)?C("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await fn(t)}await this.X(6e4)})}},Ac=class{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){let r=new Set,i=t,s=!0;return b.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(a=>{if(a!==null&&!r.has(a))return C("IndexBackfiller",`Processing collection: ${a}`),this.ne(e,a,i).next(c=>{i-=c,r.add(a)});s=!1})).next(()=>t-i)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{let a=s.changes;return this.localStore.indexManager.updateIndexEntries(e,a).next(()=>this.re(i,s)).next(c=>(C("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>a.size)}))}re(e,t){let r=e;return t.changes.forEach((i,s)=>{let a=Wf(s);ol(a,r)>0&&(r=a)}),new Ue(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}};var De=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}};De.oe=-1;function To(n){return n==null}function Wr(n){return n===0&&1/n==-1/0}function II(n){return typeof n=="number"&&Number.isInteger(n)&&!Wr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function Pe(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Xd(e)),e=vI(n.get(t),e);return Xd(e)}function vI(n,e){let t=e,r=n.length;for(let i=0;i<r;i++){let s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function Xd(n){return n+""}function Ye(n){let e=n.length;if(U(e>=2),e===2)return U(n.charAt(0)===""&&n.charAt(1)===""),re.emptyPath();let t=e-2,r=[],i="";for(let s=0;s<e;){let a=n.indexOf("",s);switch((a<0||a>t)&&M(),n.charAt(a+1)){case"":let c=n.substring(s,a),u;i.length===0?u=c:(i+=c,u=i,i=""),r.push(u);break;case"":i+=n.substring(s,a),i+="\0";break;case"":i+=n.substring(s,a+1);break;default:M()}s=a+2}return new re(r)}var Zd=["userId","batchId"];function As(n,e){return[n,Pe(e)]}function Yf(n,e,t){return[n,Pe(e),t]}var wI={},EI=["prefixPath","collectionGroup","readTime","documentId"],TI=["prefixPath","collectionGroup","documentId"],AI=["collectionGroup","readTime","prefixPath","documentId"],bI=["canonicalId","targetId"],SI=["targetId","path"],RI=["path","targetId"],PI=["collectionId","parent"],CI=["indexId","uid"],DI=["uid","sequenceNumber"],NI=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],kI=["indexId","uid","orderedDocumentKey"],OI=["userId","collectionPath","documentId"],xI=["userId","collectionPath","largestBatchId"],VI=["userId","collectionGroup","largestBatchId"],Xf=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],LI=[...Xf,"documentOverlays"],Zf=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ep=Zf,tp=[...ep,"indexConfiguration","indexState","indexEntries"],MI=tp;var Qr=class extends Ns{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}};function fe(n,e){let t=z(n);return Bn.F(t._e,e)}function ef(n){let e=0;for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Zn(n,e){for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function np(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}var ie=class n{constructor(e,t){this.comparator=e,this.root=t||Ze.EMPTY}insert(e,t){return new n(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new n(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vn(this.root,e,this.comparator,!0)}},Vn=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Ze=class n{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r!=null?r:n.RED,this.left=i!=null?i:n.EMPTY,this.right=s!=null?s:n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new n(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this,s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return n.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();let e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}};Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(e,t,r,i,s){return this}insert(e,t,r){return new Ze(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var te=class n{constructor(e){this.comparator=e,this.data=new ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Os(this.data.getIterator())}getIteratorFrom(e){return new Os(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new n(this.comparator);return t.data=e,t}},Os=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};function Sn(n){return n.hasNext()?n.getNext():void 0}var Ge=class n{constructor(e){this.fields=e,e.sort(de.comparator)}static empty(){return new n([])}unionWith(e){let t=new te(de.comparator);for(let r of this.fields)t=t.add(r);for(let r of e)t=t.add(r);return new n(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Fn(this.fields,e.fields,(t,r)=>t.isEqual(r))}};var xs=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var Ae=class n{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new xs("Invalid base64 string: "+s):s}}(e);return new n(t)}static fromUint8Array(e){let t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};Ae.EMPTY_BYTE_STRING=new Ae("");var FI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ft(n){if(U(!!n),typeof n=="string"){let e=0,t=FI.exec(n);if(U(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}let r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ae(n.seconds),nanos:ae(n.nanos)}}function ae(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Dt(n){return typeof n=="string"?Ae.fromBase64String(n):Ae.fromUint8Array(n)}function cl(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ul(n){let e=n.mapValue.fields.__previous_value__;return cl(e)?ul(e):e}function Jr(n){let e=ft(n.mapValue.fields.__local_write_time__.timestampValue);return new ce(e.seconds,e.nanos)}var bc=class{constructor(e,t,r,i,s,a,c,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d}},qn=class n{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new n("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof n&&e.projectId===this.projectId&&e.database===this.database}};var Ct={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},bs={nullValue:"NULL_VALUE"};function an(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?cl(n)?4:rp(n)?9007199254740991:10:M()}function et(n,e){if(n===e)return!0;let t=an(n);if(t!==an(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Jr(n).isEqual(Jr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;let a=ft(i.timestampValue),c=ft(s.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Dt(i.bytesValue).isEqual(Dt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ae(i.geoPointValue.latitude)===ae(s.geoPointValue.latitude)&&ae(i.geoPointValue.longitude)===ae(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ae(i.integerValue)===ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){let a=ae(i.doubleValue),c=ae(s.doubleValue);return a===c?Wr(a)===Wr(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Fn(n.arrayValue.values||[],e.arrayValue.values||[],et);case 10:return function(i,s){let a=i.mapValue.fields||{},c=s.mapValue.fields||{};if(ef(a)!==ef(c))return!1;for(let u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!et(a[u],c[u])))return!1;return!0}(n,e);default:return M()}}function Yr(n,e){return(n.values||[]).find(t=>et(t,e))!==void 0}function Nt(n,e){if(n===e)return 0;let t=an(n),r=an(e);if(t!==r)return K(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return K(n.booleanValue,e.booleanValue);case 2:return function(s,a){let c=ae(s.integerValue||s.doubleValue),u=ae(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return tf(n.timestampValue,e.timestampValue);case 4:return tf(Jr(n),Jr(e));case 5:return K(n.stringValue,e.stringValue);case 6:return function(s,a){let c=Dt(s),u=Dt(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){let c=s.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){let p=K(c[d],u[d]);if(p!==0)return p}return K(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){let c=K(ae(s.latitude),ae(a.latitude));return c!==0?c:K(ae(s.longitude),ae(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,a){let c=s.values||[],u=a.values||[];for(let d=0;d<c.length&&d<u.length;++d){let p=Nt(c[d],u[d]);if(p)return p}return K(c.length,u.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,a){if(s===Ct.mapValue&&a===Ct.mapValue)return 0;if(s===Ct.mapValue)return 1;if(a===Ct.mapValue)return-1;let c=s.fields||{},u=Object.keys(c),d=a.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let g=0;g<u.length&&g<p.length;++g){let T=K(u[g],p[g]);if(T!==0)return T;let R=Nt(c[u[g]],d[p[g]]);if(R!==0)return R}return K(u.length,p.length)}(n.mapValue,e.mapValue);default:throw M()}}function tf(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return K(n,e);let t=ft(n),r=ft(e),i=K(t.seconds,r.seconds);return i!==0?i:K(t.nanos,r.nanos)}function jn(n){return Sc(n)}function Sc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){let r=ft(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Dt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return x.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(let s of t.values||[])i?i=!1:r+=",",r+=Sc(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){let r=Object.keys(t.fields||{}).sort(),i="{",s=!0;for(let a of r)s?s=!1:i+=",",i+=`${a}:${Sc(t.fields[a])}`;return i+"}"}(n.mapValue):M()}function ll(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Rc(n){return!!n&&"integerValue"in n}function Xr(n){return!!n&&"arrayValue"in n}function nf(n){return!!n&&"nullValue"in n}function rf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ss(n){return!!n&&"mapValue"in n}function jr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){let e={mapValue:{fields:{}}};return Zn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=jr(r)),e}if(n.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=jr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function rp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function UI(n){return"nullValue"in n?bs:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?ll(qn.empty(),x.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:M()}function BI(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?ll(qn.empty(),x.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?Ct:M()}function sf(n,e){let t=Nt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function of(n,e){let t=Nt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}var Oe=class n{constructor(e){this.value=e}static empty(){return new n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ss(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=jr(t)}setAll(e){let t=de.emptyPath(),r={},i=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){let u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=c.popLast()}a?r[c.lastSegment()]=jr(a):i.push(c.lastSegment())});let s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){let t=this.field(e.popLast());Ss(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return et(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Ss(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Zn(t,(i,s)=>e[i]=s);for(let i of r)delete e[i]}clone(){return new n(jr(this.value))}};function ip(n){let e=[];return Zn(n.fields,(t,r)=>{let i=new de([t]);if(Ss(r)){let s=ip(r.mapValue).fields;if(s.length===0)e.push(i);else for(let a of s)e.push(i.child(a))}else e.push(i)}),new Ge(e)}var ye=class n{constructor(e,t,r,i,s,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=c}static newInvalidDocument(e){return new n(e,0,B.min(),B.min(),B.min(),Oe.empty(),0)}static newFoundDocument(e,t,r,i){return new n(e,1,t,B.min(),r,i,0)}static newNoDocument(e,t){return new n(e,2,t,B.min(),B.min(),Oe.empty(),0)}static newUnknownDocument(e,t){return new n(e,3,t,B.min(),B.min(),Oe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Oe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Oe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var kt=class{constructor(e,t){this.position=e,this.inclusive=t}};function af(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){let s=e[i],a=n.position[i];if(s.field.isKeyField()?r=x.comparator(x.fromName(a.referenceValue),t.key):r=Nt(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function cf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!et(n.position[t],e.position[t]))return!1;return!0}var zn=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function qI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}var Vs=class{},Q=class n extends Vs{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Dc(e,t,r):t==="array-contains"?new Oc(e,r):t==="in"?new Ls(e,r):t==="not-in"?new xc(e,r):t==="array-contains-any"?new Vc(e,r):new n(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Nc(e,r):new kc(e,r)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Nt(t,this.value)):t!==null&&an(this.value)===an(t)&&this.matchesComparison(Nt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},Z=class n extends Vs{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new n(e,t)}matches(e){return Gn(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}};function Gn(n){return n.op==="and"}function Pc(n){return n.op==="or"}function hl(n){return sp(n)&&Gn(n)}function sp(n){for(let e of n.filters)if(e instanceof Z)return!1;return!0}function Cc(n){if(n instanceof Q)return n.field.canonicalString()+n.op.toString()+jn(n.value);if(hl(n))return n.filters.map(e=>Cc(e)).join(",");{let e=n.filters.map(t=>Cc(t)).join(",");return`${n.op}(${e})`}}function op(n,e){return n instanceof Q?function(r,i){return i instanceof Q&&r.op===i.op&&r.field.isEqual(i.field)&&et(r.value,i.value)}(n,e):n instanceof Z?function(r,i){return i instanceof Z&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,c)=>s&&op(a,i.filters[c]),!0):!1}(n,e):void M()}function ap(n,e){let t=n.filters.concat(e);return Z.create(t,n.op)}function cp(n){return n instanceof Q?function(t){return`${t.field.canonicalString()} ${t.op} ${jn(t.value)}`}(n):n instanceof Z?function(t){return t.op.toString()+" {"+t.getFilters().map(cp).join(" ,")+"}"}(n):"Filter"}var Dc=class extends Q{constructor(e,t,r){super(e,t,r),this.key=x.fromName(r.referenceValue)}matches(e){let t=x.comparator(e.key,this.key);return this.matchesComparison(t)}},Nc=class extends Q{constructor(e,t){super(e,"in",t),this.keys=up("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},kc=class extends Q{constructor(e,t){super(e,"not-in",t),this.keys=up("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function up(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>x.fromName(r.referenceValue))}var Oc=class extends Q{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return Xr(t)&&Yr(t.arrayValue,this.value)}},Ls=class extends Q{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&Yr(this.value.arrayValue,t)}},xc=class extends Q{constructor(e,t){super(e,"not-in",t)}matches(e){if(Yr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&!Yr(this.value.arrayValue,t)}},Vc=class extends Q{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!Xr(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Yr(this.value.arrayValue,r))}};var Lc=class{constructor(e,t=null,r=[],i=[],s=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=c,this.ue=null}};function Mc(n,e=null,t=[],r=[],i=null,s=null,a=null){return new Lc(n,e,t,r,i,s,a)}function cn(n){let e=z(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Cc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),To(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>jn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>jn(r)).join(",")),e.ue=t}return e.ue}function hi(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!qI(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!op(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!cf(n.startAt,e.startAt)&&cf(n.endAt,e.endAt)}function Ms(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Fs(n,e){return n.filters.filter(t=>t instanceof Q&&t.field.isEqual(e))}function uf(n,e,t){let r=bs,i=!0;for(let s of Fs(n,e)){let a=bs,c=!0;switch(s.op){case"<":case"<=":a=UI(s.value);break;case"==":case"in":case">=":a=s.value;break;case">":a=s.value,c=!1;break;case"!=":case"not-in":a=bs}sf({value:r,inclusive:i},{value:a,inclusive:c})<0&&(r=a,i=c)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){let a=t.position[s];sf({value:r,inclusive:i},{value:a,inclusive:t.inclusive})<0&&(r=a,i=t.inclusive);break}}return{value:r,inclusive:i}}function lf(n,e,t){let r=Ct,i=!0;for(let s of Fs(n,e)){let a=Ct,c=!0;switch(s.op){case">=":case">":a=BI(s.value),c=!1;break;case"==":case"in":case"<=":a=s.value;break;case"<":a=s.value,c=!1;break;case"!=":case"not-in":a=Ct}of({value:r,inclusive:i},{value:a,inclusive:c})>0&&(r=a,i=c)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){let a=t.position[s];of({value:r,inclusive:i},{value:a,inclusive:t.inclusive})>0&&(r=a,i=t.inclusive);break}}return{value:r,inclusive:i}}var Kn=class{constructor(e,t=null,r=[],i=[],s=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}};function jI(n,e,t,r,i,s,a,c){return new Kn(n,e,t,r,i,s,a,c)}function Ao(n){return new Kn(n)}function hf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function zI(n){return n.collectionGroup!==null}function zr(n){let e=z(n);if(e.ce===null){e.ce=[];let t=new Set;for(let s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new te(de.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new zn(s,r))}),t.has(de.keyField().canonicalString())||e.ce.push(new zn(de.keyField(),r))}return e.ce}function Me(n){let e=z(n);return e.le||(e.le=GI(e,zr(n))),e.le}function GI(n,e){if(n.limitType==="F")return Mc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{let s=i.dir==="desc"?"asc":"desc";return new zn(i.field,s)});let t=n.endAt?new kt(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new kt(n.startAt.position,n.startAt.inclusive):null;return Mc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Fc(n,e,t){return new Kn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function bo(n,e){return hi(Me(n),Me(e))&&n.limitType===e.limitType}function lp(n){return`${cn(Me(n))}|lt:${n.limitType}`}function Nn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>cp(i)).join(", ")}]`),To(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>jn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>jn(i)).join(",")),`Target(${r})`}(Me(n))}; limitType=${n.limitType})`}function di(n,e){return e.isFoundDocument()&&function(r,i){let s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):x.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(let s of zr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(let s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,c,u){let d=af(a,c,u);return a.inclusive?d<=0:d<0}(r.startAt,zr(r),i)||r.endAt&&!function(a,c,u){let d=af(a,c,u);return a.inclusive?d>=0:d>0}(r.endAt,zr(r),i))}(n,e)}function KI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function hp(n){return(e,t)=>{let r=!1;for(let i of zr(n)){let s=$I(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function $I(n,e,t){let r=n.field.isKeyField()?x.comparator(e.key,t.key):function(s,a,c){let u=a.data.field(s),d=c.data.field(s);return u!==null&&d!==null?Nt(u,d):M()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}var tt=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(let[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){let r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Zn(this.inner,(t,r)=>{for(let[i,s]of r)e(i,s)})}isEmpty(){return np(this.inner)}size(){return this.innerSize}};var HI=new ie(x.comparator);function xe(){return HI}var dp=new ie(x.comparator);function Br(...n){let e=dp;for(let t of n)e=e.insert(t.key,t);return e}function fp(n){let e=dp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Xe(){return Gr()}function pp(){return Gr()}function Gr(){return new tt(n=>n.toString(),(n,e)=>n.isEqual(e))}var WI=new ie(x.comparator),QI=new te(x.comparator);function $(...n){let e=QI;for(let t of n)e=e.add(t);return e}var JI=new te(K);function YI(){return JI}function mp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wr(e)?"-0":e}}function gp(n){return{integerValue:""+n}}function XI(n,e){return II(e)?gp(e):mp(n,e)}var $n=class{constructor(){this._=void 0}};function ZI(n,e,t){return n instanceof un?function(i,s){let a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&cl(s)&&(s=ul(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof Ot?yp(n,e):n instanceof xt?Ip(n,e):function(i,s){let a=_p(i,s),c=df(a)+df(i.Pe);return Rc(a)&&Rc(i.Pe)?gp(c):mp(i.serializer,c)}(n,e)}function ev(n,e,t){return n instanceof Ot?yp(n,e):n instanceof xt?Ip(n,e):t}function _p(n,e){return n instanceof ln?function(r){return Rc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}var un=class extends $n{},Ot=class extends $n{constructor(e){super(),this.elements=e}};function yp(n,e){let t=vp(e);for(let r of n.elements)t.some(i=>et(i,r))||t.push(r);return{arrayValue:{values:t}}}var xt=class extends $n{constructor(e){super(),this.elements=e}};function Ip(n,e){let t=vp(e);for(let r of n.elements)t=t.filter(i=>!et(i,r));return{arrayValue:{values:t}}}var ln=class extends $n{constructor(e,t){super(),this.serializer=e,this.Pe=t}};function df(n){return ae(n.integerValue||n.doubleValue)}function vp(n){return Xr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}var Uc=class{constructor(e,t){this.field=e,this.transform=t}};function tv(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Ot&&i instanceof Ot||r instanceof xt&&i instanceof xt?Fn(r.elements,i.elements,et):r instanceof ln&&i instanceof ln?et(r.Pe,i.Pe):r instanceof un&&i instanceof un}(n.transform,e.transform)}var Bc=class{constructor(e,t){this.version=e,this.transformResults=t}},Ke=class n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n}static exists(e){return new n(void 0,e)}static updateTime(e){return new n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function Rs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}var Hn=class{};function wp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Zr(n.key,Ke.none()):new Vt(n.key,n.data,Ke.none());{let t=n.data,r=Oe.empty(),i=new te(de.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new nt(n.key,r,new Ge(i.toArray()),Ke.none())}}function nv(n,e,t){n instanceof Vt?function(i,s,a){let c=i.value.clone(),u=pf(i.fieldTransforms,s,a.transformResults);c.setAll(u),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof nt?function(i,s,a){if(!Rs(i.precondition,s))return void s.convertToUnknownDocument(a.version);let c=pf(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(Ep(i)),u.setAll(c),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Kr(n,e,t,r){return n instanceof Vt?function(s,a,c,u){if(!Rs(s.precondition,a))return c;let d=s.value.clone(),p=mf(s.fieldTransforms,u,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof nt?function(s,a,c,u){if(!Rs(s.precondition,a))return c;let d=mf(s.fieldTransforms,u,a),p=a.data;return p.setAll(Ep(s)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(s,a,c){return Rs(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function rv(n,e){let t=null;for(let r of n.fieldTransforms){let i=e.data.field(r.field),s=_p(r.transform,i||null);s!=null&&(t===null&&(t=Oe.empty()),t.set(r.field,s))}return t||null}function ff(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Fn(r,i,(s,a)=>tv(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}var Vt=class extends Hn{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},nt=class extends Hn{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}};function Ep(n){let e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){let r=n.data.field(t);e.set(t,r)}}),e}function pf(n,e,t){let r=new Map;U(n.length===t.length);for(let i=0;i<t.length;i++){let s=n[i],a=s.transform,c=e.data.field(s.field);r.set(s.field,ev(a,c,t[i]))}return r}function mf(n,e,t){let r=new Map;for(let i of n){let s=i.transform,a=t.data.field(i.field);r.set(i.field,ZI(s,a,e))}return r}var Zr=class extends Hn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},Us=class extends Hn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var ei=class{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){let s=this.mutations[i];s.key.isEqual(e.key)&&nv(s,e,r[i])}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=Kr(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=Kr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=pp();return this.mutations.forEach(i=>{let s=e.get(i.key),a=s.overlayedDocument,c=this.applyToLocalView(a,s.mutatedFields);c=t.has(i.key)?null:c;let u=wp(a,c);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),$())}isEqual(e){return this.batchId===e.batchId&&Fn(this.mutations,e.mutations,(t,r)=>ff(t,r))&&Fn(this.baseMutations,e.baseMutations,(t,r)=>ff(t,r))}},qc=class n{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){U(e.mutations.length===r.length);let i=function(){return WI}(),s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new n(e,t,r,i)}};var ti=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var jc=class{constructor(e,t){this.count=e,this.unchangedNames=t}};var le,J;function iv(n){switch(n){default:return M();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function Tp(n){if(n===void 0)return Re("GRPC error has no .code"),P.UNKNOWN;switch(n){case le.OK:return P.OK;case le.CANCELLED:return P.CANCELLED;case le.UNKNOWN:return P.UNKNOWN;case le.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case le.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case le.INTERNAL:return P.INTERNAL;case le.UNAVAILABLE:return P.UNAVAILABLE;case le.UNAUTHENTICATED:return P.UNAUTHENTICATED;case le.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case le.NOT_FOUND:return P.NOT_FOUND;case le.ALREADY_EXISTS:return P.ALREADY_EXISTS;case le.PERMISSION_DENIED:return P.PERMISSION_DENIED;case le.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case le.ABORTED:return P.ABORTED;case le.OUT_OF_RANGE:return P.OUT_OF_RANGE;case le.UNIMPLEMENTED:return P.UNIMPLEMENTED;case le.DATA_LOSS:return P.DATA_LOSS;default:return M()}}(J=le||(le={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";var gf=null;function sv(){return new TextEncoder}var ov=new bt([4294967295,4294967295],0);function _f(n){let e=sv().encode(n),t=new nc;return t.update(e),new Uint8Array(t.digest())}function yf(n){let e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new bt([t,r],0),new bt([i,s],0)]}var zc=class n{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new nn(`Invalid padding: ${t}`);if(r<0)throw new nn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new nn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new nn(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=bt.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(bt.fromNumber(r)));return i.compare(ov)===1&&(i=new bt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;let t=_f(e),[r,i]=yf(t);for(let s=0;s<this.hashCount;s++){let a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){let i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new n(s,i,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;let t=_f(e),[r,i]=yf(t);for(let s=0;s<this.hashCount;s++){let a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){let t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}},nn=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var Bs=class n{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let i=new Map;return i.set(e,ni.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new n(B.min(),i,new ie(K),xe(),$())}},ni=class n{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new n(r,t,$(),$(),$())}};var Mn=class{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}},qs=class{constructor(e,t){this.targetId=e,this.me=t}},js=class{constructor(e,t,r=Ae.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}},zs=class{constructor(){this.fe=0,this.ge=vf(),this.pe=Ae.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=$(),t=$(),r=$();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:M()}}),new ni(this.pe,this.ye,e,t,r)}ve(){this.we=!1,this.ge=vf()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,U(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}},Gc=class{constructor(e){this.Le=e,this.Be=new Map,this.ke=xe(),this.qe=If(),this.Qe=new ie(K)}Ke(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{let r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:M()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){let t=e.targetId,r=e.me.count,i=this.Je(t);if(i){let s=i.target;if(Ms(s))if(r===0){let a=new x(s.path);this.Ue(t,a,ye.newNoDocument(a,B.min()))}else U(r===1);else{let a=this.Ye(t);if(a!==r){let c=this.Ze(e),u=c?this.Xe(c,e,a):1;if(u!==0){this.je(t);let d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}gf==null||gf.et(function(p,g,T,R,N){var O,D,G,q,F,H;let Y={localCacheCount:p,existenceFilterCount:g.count,databaseId:T.database,projectId:T.projectId},j=g.unchangedNames;return j&&(Y.bloomFilter={applied:N===0,hashCount:(O=j==null?void 0:j.hashCount)!==null&&O!==void 0?O:0,bitmapLength:(q=(G=(D=j==null?void 0:j.bits)===null||D===void 0?void 0:D.bitmap)===null||G===void 0?void 0:G.length)!==null&&q!==void 0?q:0,padding:(H=(F=j==null?void 0:j.bits)===null||F===void 0?void 0:F.padding)!==null&&H!==void 0?H:0,mightContain:I=>{var m;return(m=R==null?void 0:R.mightContain(I))!==null&&m!==void 0&&m}}),Y}(a,e.me,this.Le.tt(),c,u))}}}}Ze(e){let t=e.me.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t,a,c;try{a=Dt(r).toUint8Array()}catch(u){if(u instanceof xs)return $r("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new zc(a,i,s)}catch(u){return $r(u instanceof nn?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){let r=this.Le.getRemoteKeysForTarget(t),i=0;return r.forEach(s=>{let a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,s,null),i++)}),i}rt(e){let t=new Map;this.Be.forEach((s,a)=>{let c=this.Je(a);if(c){if(s.current&&Ms(c.target)){let u=new x(c.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,ye.newNoDocument(u,e))}s.be&&(t.set(a,s.Ce()),s.ve())}});let r=$();this.qe.forEach((s,a)=>{let c=!0;a.forEachWhile(u=>{let d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));let i=new Bs(e,t,this.Qe,this.ke,r);return this.ke=xe(),this.qe=If(),this.Qe=new ie(K),i}$e(e,t){if(!this.ze(e))return;let r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;let i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){let t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new zs,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new te(K),this.qe=this.qe.insert(e,t)),t}ze(e){let t=this.Je(e)!==null;return t||C("WatchChangeAggregator","Detected inactive target",e),t}Je(e){let t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new zs),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}};function If(){return new ie(x.comparator)}function vf(){return new ie(x.comparator)}var av={asc:"ASCENDING",desc:"DESCENDING"},cv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},uv={and:"AND",or:"OR"},Kc=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function $c(n,e){return n.useProto3Json||To(e)?e:{value:e}}function Wn(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ap(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function lv(n,e){return Wn(n,e.toTimestamp())}function Ce(n){return U(!!n),B.fromTimestamp(function(t){let r=ft(t);return new ce(r.seconds,r.nanos)}(n))}function dl(n,e){return Hc(n,e).canonicalString()}function Hc(n,e){let t=function(i){return new re(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function bp(n){let e=re.fromString(n);return U(xp(e)),e}function Gs(n,e){return dl(n.databaseId,e.path)}function sn(n,e){let t=bp(e);if(t.get(1)!==n.databaseId.projectId)throw new V(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new x(Pp(t))}function Sp(n,e){return dl(n.databaseId,e)}function Rp(n){let e=bp(n);return e.length===4?re.emptyPath():Pp(e)}function Wc(n){return new re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Pp(n){return U(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function wf(n,e,t){return{name:Gs(n,e),fields:t.value.mapValue.fields}}function hv(n,e,t){let r=sn(n,e.name),i=Ce(e.updateTime),s=e.createTime?Ce(e.createTime):B.min(),a=new Oe({mapValue:{fields:e.fields}}),c=ye.newFoundDocument(r,i,s,a);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function dv(n,e){let t;if("targetChange"in e){e.targetChange;let r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,p){return d.useProto3Json?(U(p===void 0||typeof p=="string"),Ae.fromBase64String(p||"")):(U(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Ae.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){let p=d.code===void 0?P.UNKNOWN:Tp(d.code);return new V(p,d.message||"")}(a);t=new js(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;let r=e.documentChange;r.document,r.document.name,r.document.updateTime;let i=sn(n,r.document.name),s=Ce(r.document.updateTime),a=r.document.createTime?Ce(r.document.createTime):B.min(),c=new Oe({mapValue:{fields:r.document.fields}}),u=ye.newFoundDocument(i,s,a,c),d=r.targetIds||[],p=r.removedTargetIds||[];t=new Mn(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;let r=e.documentDelete;r.document;let i=sn(n,r.document),s=r.readTime?Ce(r.readTime):B.min(),a=ye.newNoDocument(i,s),c=r.removedTargetIds||[];t=new Mn([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;let r=e.documentRemove;r.document;let i=sn(n,r.document),s=r.removedTargetIds||[];t=new Mn([],s,i,null)}else{if(!("filter"in e))return M();{e.filter;let r=e.filter;r.targetId;let{count:i=0,unchangedNames:s}=r,a=new jc(i,s),c=r.targetId;t=new qs(c,a)}}return t}function Ks(n,e){let t;if(e instanceof Vt)t={update:wf(n,e.key,e.value)};else if(e instanceof Zr)t={delete:Gs(n,e.key)};else if(e instanceof nt)t={update:wf(n,e.key,e.data),updateMask:yv(e.fieldMask)};else{if(!(e instanceof Us))return M();t={verify:Gs(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){let c=a.transform;if(c instanceof un)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ot)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof xt)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ln)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw M()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:lv(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:M()}(n,e.precondition)),t}function Qc(n,e){let t=e.currentDocument?function(s){return s.updateTime!==void 0?Ke.updateTime(Ce(s.updateTime)):s.exists!==void 0?Ke.exists(s.exists):Ke.none()}(e.currentDocument):Ke.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(a,c){let u=null;if("setToServerValue"in c)U(c.setToServerValue==="REQUEST_TIME"),u=new un;else if("appendMissingElements"in c){let p=c.appendMissingElements.values||[];u=new Ot(p)}else if("removeAllFromArray"in c){let p=c.removeAllFromArray.values||[];u=new xt(p)}else"increment"in c?u=new ln(a,c.increment):M();let d=de.fromServerFormat(c.fieldPath);return new Uc(d,u)}(n,i)):[];if(e.update){e.update.name;let i=sn(n,e.update.name),s=new Oe({mapValue:{fields:e.update.fields}});if(e.updateMask){let a=function(u){let d=u.fieldPaths||[];return new Ge(d.map(p=>de.fromServerFormat(p)))}(e.updateMask);return new nt(i,s,a,t,r)}return new Vt(i,s,t,r)}if(e.delete){let i=sn(n,e.delete);return new Zr(i,t)}if(e.verify){let i=sn(n,e.verify);return new Us(i,t)}return M()}function fv(n,e){return n&&n.length>0?(U(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?Ce(i.updateTime):Ce(s);return a.isEqual(B.min())&&(a=Ce(s)),new Bc(a,i.transformResults||[])}(t,e))):[]}function Cp(n,e){return{documents:[Sp(n,e.path)]}}function Dp(n,e){let t={structuredQuery:{}},r=e.path,i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Sp(n,i);let s=function(d){if(d.length!==0)return Op(Z.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);let a=function(d){if(d.length!==0)return d.map(p=>function(T){return{field:kn(T.field),direction:mv(T.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);let c=$c(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:i}}function Np(n){let e=Rp(n.parent),t=n.structuredQuery,r=t.from?t.from.length:0,i=null;if(r>0){U(r===1);let p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];t.where&&(s=function(g){let T=kp(g);return T instanceof Z&&hl(T)?T.getFilters():[T]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(T=>function(N){return new zn(On(N.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(T))}(t.orderBy));let c=null;t.limit&&(c=function(g){let T;return T=typeof g=="object"?g.value:g,To(T)?null:T}(t.limit));let u=null;t.startAt&&(u=function(g){let T=!!g.before,R=g.values||[];return new kt(R,T)}(t.startAt));let d=null;return t.endAt&&(d=function(g){let T=!g.before,R=g.values||[];return new kt(R,T)}(t.endAt)),jI(e,i,a,s,c,"F",u,d)}function pv(n,e){let t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function kp(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":let r=On(t.unaryFilter.field);return Q.create(r,"==",{doubleValue:NaN});case"IS_NULL":let i=On(t.unaryFilter.field);return Q.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let s=On(t.unaryFilter.field);return Q.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let a=On(t.unaryFilter.field);return Q.create(a,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(n):n.fieldFilter!==void 0?function(t){return Q.create(On(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Z.create(t.compositeFilter.filters.map(r=>kp(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M()}}(t.compositeFilter.op))}(n):M()}function mv(n){return av[n]}function gv(n){return cv[n]}function _v(n){return uv[n]}function kn(n){return{fieldPath:n.canonicalString()}}function On(n){return de.fromServerFormat(n.fieldPath)}function Op(n){return n instanceof Q?function(t){if(t.op==="=="){if(rf(t.value))return{unaryFilter:{field:kn(t.field),op:"IS_NAN"}};if(nf(t.value))return{unaryFilter:{field:kn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(rf(t.value))return{unaryFilter:{field:kn(t.field),op:"IS_NOT_NAN"}};if(nf(t.value))return{unaryFilter:{field:kn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kn(t.field),op:gv(t.op),value:t.value}}}(n):n instanceof Z?function(t){let r=t.getFilters().map(i=>Op(i));return r.length===1?r[0]:{compositeFilter:{op:_v(t.op),filters:r}}}(n):M()}function yv(n){let e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function xp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}var Qn=class n{constructor(e,t,r,i,s=B.min(),a=B.min(),c=Ae.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var $s=class{constructor(e){this.ct=e}};function Iv(n,e){let t;if(e.document)t=hv(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){let r=x.fromSegments(e.noDocument.path),i=dn(e.noDocument.readTime);t=ye.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return M();{let r=x.fromSegments(e.unknownDocument.path),i=dn(e.unknownDocument.version);t=ye.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){let s=new ce(i[0],i[1]);return B.fromTimestamp(s)}(e.readTime)),t}function Ef(n,e){let t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Hs(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,a){return{name:Gs(s,a.key),fields:a.data.value.mapValue.fields,updateTime:Wn(s,a.version.toTimestamp()),createTime:Wn(s,a.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:hn(e.version)};else{if(!e.isUnknownDocument())return M();r.unknownDocument={path:t.path.toArray(),version:hn(e.version)}}return r}function Hs(n){let e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function hn(n){let e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function dn(n){let e=new ce(n.seconds,n.nanoseconds);return B.fromTimestamp(e)}function Zt(n,e){let t=(e.baseMutations||[]).map(s=>Qc(n.ct,s));for(let s=0;s<e.mutations.length-1;++s){let a=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){let c=e.mutations[s+1];a.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}let r=e.mutations.map(s=>Qc(n.ct,s)),i=ce.fromMillis(e.localWriteTimeMs);return new ei(e.batchId,i,t,r)}function qr(n){let e=dn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?dn(n.lastLimboFreeSnapshotVersion):B.min(),r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return U(s.documents.length===1),Me(Ao(Rp(s.documents[0])))}(n.query):function(s){return Me(Np(s))}(n.query),new Qn(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Ae.fromBase64String(n.resumeToken))}function Vp(n,e){let t=hn(e.snapshotVersion),r=hn(e.lastLimboFreeSnapshotVersion),i;i=Ms(e.target)?Cp(n.ct,e.target):Dp(n.ct,e.target)._t;let s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:cn(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Lp(n){let e=Np({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Fc(e,e.limit,"L"):e}function uc(n,e){return new ti(e.largestBatchId,Qc(n.ct,e.overlayMutation))}function Tf(n,e){let t=e.path.lastSegment();return[n,Pe(e.path.popLast()),t]}function Af(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:hn(r.readTime),documentKey:Pe(r.documentKey.path),largestBatchId:r.largestBatchId}}var Jc=class{getBundleMetadata(e,t){return bf(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:dn(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return bf(e).put(function(i){return{bundleId:i.id,createTime:hn(Ce(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Sf(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:Lp(s.bundledQuery),readTime:dn(s.readTime)}}(r)})}saveNamedQuery(e,t){return Sf(e).put(function(i){return{name:i.name,readTime:hn(Ce(i.readTime)),bundledQuery:i.bundledQuery}}(t))}};function bf(n){return fe(n,"bundles")}function Sf(n){return fe(n,"namedQueries")}var Ws=class n{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){let r=t.uid||"";return new n(e,r)}getOverlay(e,t){return Lr(e).get(Tf(this.userId,t)).next(r=>r?uc(this.serializer,r):null)}getOverlays(e,t){let r=Xe();return b.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){let i=[];return r.forEach((s,a)=>{let c=new ti(t,a);i.push(this.ht(e,c))}),b.waitFor(i)}removeOverlaysForBatchId(e,t,r){let i=new Set;t.forEach(a=>i.add(Pe(a.getCollectionPath())));let s=[];return i.forEach(a=>{let c=IDBKeyRange.bound([this.userId,a,r],[this.userId,a,r+1],!1,!0);s.push(Lr(e).j("collectionPathOverlayIndex",c))}),b.waitFor(s)}getOverlaysForCollection(e,t,r){let i=Xe(),s=Pe(t),a=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Lr(e).U("collectionPathOverlayIndex",a).next(c=>{for(let u of c){let d=uc(this.serializer,u);i.set(d.getKey(),d)}return i})}getOverlaysForCollectionGroup(e,t,r,i){let s=Xe(),a,c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Lr(e).J({index:"collectionGroupOverlayIndex",range:c},(u,d,p)=>{let g=uc(this.serializer,d);s.size()<i||g.largestBatchId===a?(s.set(g.getKey(),g),a=g.largestBatchId):p.done()}).next(()=>s)}ht(e,t){return Lr(e).put(function(i,s,a){let[c,u,d]=Tf(s,a.mutation.key);return{userId:s,collectionPath:u,documentId:d,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:Ks(i.ct,a.mutation)}}(this.serializer,this.userId,t))}};function Lr(n){return fe(n,"documentOverlays")}var dt=class{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(ae(e.integerValue));else if("doubleValue"in e){let r=ae(e.doubleValue);isNaN(r)?this.Et(t,13):(this.Et(t,15),Wr(r)?t.dt(0):t.dt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Et(t,20),typeof r=="string"&&(r=ft(r)),t.At(`${r.seconds||""}`),t.dt(r.nanos||0)}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(Dt(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.Et(t,45),t.dt(r.latitude||0),t.dt(r.longitude||0)}else"mapValue"in e?rp(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):M()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){let r=e.fields||{};this.Et(t,55);for(let i of Object.keys(r))this.Rt(i,t),this.It(r[i],t)}wt(e,t){let r=e.values||[];this.Et(t,50);for(let i of r)this.It(i,t)}gt(e,t){this.Et(t,37),x.fromName(e).path.forEach(r=>{this.Et(t,60),this.St(r,t)})}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}};dt.bt=new dt;function vv(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Rf(n){let e=64-function(r){let i=0;for(let s=0;s<8;++s){let a=vv(255&r[s]);if(i+=a,a!==8)break}return i}(n);return Math.ceil(e/8)}var Yc=class{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){let t=e[Symbol.iterator](),r=t.next();for(;!r.done;)this.Ct(r.value),r=t.next();this.vt()}Ft(e){let t=e[Symbol.iterator](),r=t.next();for(;!r.done;)this.Mt(r.value),r=t.next();this.xt()}Ot(e){for(let t of e){let r=t.charCodeAt(0);if(r<128)this.Ct(r);else if(r<2048)this.Ct(960|r>>>6),this.Ct(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ct(480|r>>>12),this.Ct(128|63&r>>>6),this.Ct(128|63&r);else{let i=t.codePointAt(0);this.Ct(240|i>>>18),this.Ct(128|63&i>>>12),this.Ct(128|63&i>>>6),this.Ct(128|63&i)}}this.vt()}Nt(e){for(let t of e){let r=t.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{let i=t.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Lt(e){let t=this.Bt(e),r=Rf(t);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}qt(e){let t=this.Bt(e),r=Rf(t);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Bt(e){let t=function(s){let a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,s,!1),new Uint8Array(a.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Ct(e){let t=255&e;t===0?(this.Kt(0),this.Kt(255)):t===255?(this.Kt(255),this.Kt(0)):this.Kt(t)}Mt(e){let t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){let t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);let i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}},Xc=class{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Lt(e)}Tt(){this.Gt.Qt()}},Zc=class{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}},en=class{constructor(){this.Gt=new Yc,this.zt=new Xc(this.Gt),this.jt=new Zc(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}};var tn=class n{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Jt(){let e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new n(this.indexId,this.documentKey,this.arrayValue,r)}};function St(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Pf(n.arrayValue,e.arrayValue),t!==0?t:(t=Pf(n.directionalValue,e.directionalValue),t!==0?t:x.comparator(n.documentKey,e.documentKey)))}function Pf(n,e){for(let t=0;t<n.length&&t<e.length;++t){let r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}var Qs=class{constructor(e){this.Yt=new te((t,r)=>de.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(let t of e.filters){let r=t;r.isInequality()?this.Yt=this.Yt.add(r):this.Xt.push(r)}}get en(){return this.Yt.size>1}tn(e){if(U(e.collectionGroup===this.collectionId),this.en)return!1;let t=vc(e);if(t!==void 0&&!this.nn(t))return!1;let r=Yt(e),i=new Set,s=0,a=0;for(;s<r.length&&this.nn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Yt.size>0){let c=this.Yt.getIterator().getNext();if(!i.has(c.field.canonicalString())){let u=r[s];if(!this.rn(c,u)||!this.sn(this.Zt[a++],u))return!1}++s}for(;s<r.length;++s){let c=r[s];if(a>=this.Zt.length||!this.sn(this.Zt[a++],c))return!1}return!0}on(){if(this.en)return null;let e=new te(de.comparator),t=[];for(let r of this.Xt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Ln(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Ln(r.field,0))}for(let r of this.Zt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Ln(r.field,r.dir==="asc"?0:1)));return new Un(Un.UNKNOWN_ID,this.collectionId,t,Hr.empty())}nn(e){for(let t of this.Xt)if(this.rn(t,e))return!0;return!1}rn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;let r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}};function Mp(n){var e,t;if(U(n instanceof Q||n instanceof Z),n instanceof Q){if(n instanceof Ls){let i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>Q.create(n.field,"==",s)))||[];return Z.create(i,"or")}return n}let r=n.filters.map(i=>Mp(i));return Z.create(r,n.op)}function wv(n){if(n.getFilters().length===0)return[];let e=nu(Mp(n));return U(Fp(e)),eu(e)||tu(e)?[e]:e.getFilters()}function eu(n){return n instanceof Q}function tu(n){return n instanceof Z&&hl(n)}function Fp(n){return eu(n)||tu(n)||function(t){if(t instanceof Z&&Pc(t)){for(let r of t.getFilters())if(!eu(r)&&!tu(r))return!1;return!0}return!1}(n)}function nu(n){if(U(n instanceof Q||n instanceof Z),n instanceof Q)return n;if(n.filters.length===1)return nu(n.filters[0]);let e=n.filters.map(r=>nu(r)),t=Z.create(e,n.op);return t=Js(t),Fp(t)?t:(U(t instanceof Z),U(Gn(t)),U(t.filters.length>1),t.filters.reduce((r,i)=>fl(r,i)))}function fl(n,e){let t;return U(n instanceof Q||n instanceof Z),U(e instanceof Q||e instanceof Z),t=n instanceof Q?e instanceof Q?function(i,s){return Z.create([i,s],"and")}(n,e):Cf(n,e):e instanceof Q?Cf(e,n):function(i,s){if(U(i.filters.length>0&&s.filters.length>0),Gn(i)&&Gn(s))return ap(i,s.getFilters());let a=Pc(i)?i:s,c=Pc(i)?s:i,u=a.filters.map(d=>fl(d,c));return Z.create(u,"or")}(n,e),Js(t)}function Cf(n,e){if(Gn(e))return ap(e,n.getFilters());{let t=e.filters.map(r=>fl(n,r));return Z.create(t,"or")}}function Js(n){if(U(n instanceof Q||n instanceof Z),n instanceof Q)return n;let e=n.getFilters();if(e.length===1)return Js(e[0]);if(sp(n))return n;let t=e.map(i=>Js(i)),r=[];return t.forEach(i=>{i instanceof Q?r.push(i):i instanceof Z&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:Z.create(r,n.op)}var ru=class{constructor(){this._n=new ri}addToCollectionParentIndex(e,t){return this._n.add(t),b.resolve()}getCollectionParents(e,t){return b.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return b.resolve()}deleteFieldIndex(e,t){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,t){return b.resolve()}getDocumentsMatchingTarget(e,t){return b.resolve(null)}getIndexType(e,t){return b.resolve(0)}getFieldIndexes(e,t){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,t){return b.resolve(Ue.min())}getMinOffsetFromCollectionGroup(e,t){return b.resolve(Ue.min())}updateCollectionGroup(e,t,r){return b.resolve()}updateIndexEntries(e,t){return b.resolve()}},ri=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new te(re.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new te(re.comparator)).toArray()}};var vs=new Uint8Array(0),iu=class{constructor(e,t){this.databaseId=t,this.an=new ri,this.un=new tt(r=>cn(r),(r,i)=>hi(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.an.has(t)){let r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.an.add(t)});let s={collectionId:r,parent:Pe(i)};return Df(e).put(s)}return b.resolve()}getCollectionParents(e,t){let r=[],i=IDBKeyRange.bound([t,""],[Hf(t),""],!1,!0);return Df(e).U(i).next(s=>{for(let a of s){if(a.collectionId!==t)break;r.push(Ye(a.parent))}return r})}addFieldIndex(e,t){let r=Mr(e),i=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete i.indexId;let s=r.add(i);if(t.indexState){let a=Pn(e);return s.next(c=>{a.put(Af(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){let r=Mr(e),i=Pn(e),s=Rn(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){let t=Mr(e),r=Rn(e),i=Pn(e);return t.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,t){return b.forEach(this.cn(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){let s=new Qs(r).on();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){let r=Rn(e),i=!0,s=new Map;return b.forEach(this.cn(t),a=>this.ln(e,a).next(c=>{i&&(i=!!c),s.set(a,c)})).next(()=>{if(i){let a=$(),c=[];return b.forEach(s,(u,d)=>{C("IndexedDbIndexManager",`Using index ${function(F){return`id=${F.indexId}|cg=${F.collectionGroup}|f=${F.fields.map(H=>`${H.fieldPath}:${H.kind}`).join(",")}`}(u)} to execute ${cn(t)}`);let p=function(F,H){let Y=vc(H);if(Y===void 0)return null;for(let j of Fs(F,Y.fieldPath))switch(j.op){case"array-contains-any":return j.value.arrayValue.values||[];case"array-contains":return[j.value]}return null}(d,u),g=function(F,H){let Y=new Map;for(let j of Yt(H))for(let I of Fs(F,j.fieldPath))switch(I.op){case"==":case"in":Y.set(j.fieldPath.canonicalString(),I.value);break;case"not-in":case"!=":return Y.set(j.fieldPath.canonicalString(),I.value),Array.from(Y.values())}return null}(d,u),T=function(F,H){let Y=[],j=!0;for(let I of Yt(H)){let m=I.kind===0?uf(F,I.fieldPath,F.startAt):lf(F,I.fieldPath,F.startAt);Y.push(m.value),j&&(j=m.inclusive)}return new kt(Y,j)}(d,u),R=function(F,H){let Y=[],j=!0;for(let I of Yt(H)){let m=I.kind===0?lf(F,I.fieldPath,F.endAt):uf(F,I.fieldPath,F.endAt);Y.push(m.value),j&&(j=m.inclusive)}return new kt(Y,j)}(d,u),N=this.hn(u,d,T),O=this.hn(u,d,R),D=this.Pn(u,d,g),G=this.In(u.indexId,p,N,T.inclusive,O,R.inclusive,D);return b.forEach(G,q=>r.G(q,t.limit).next(F=>{F.forEach(H=>{let Y=x.fromSegments(H.documentKey);a.has(Y)||(a=a.add(Y),c.push(Y))})}))}).next(()=>c)}return b.resolve(null)})}cn(e){let t=this.un.get(e);return t||(e.filters.length===0?t=[e]:t=wv(Z.create(e.filters,"and")).map(r=>Mc(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,t),t)}In(e,t,r,i,s,a,c){let u=(t!=null?t.length:1)*Math.max(r.length,s.length),d=u/(t!=null?t.length:1),p=[];for(let g=0;g<u;++g){let T=t?this.Tn(t[g/d]):vs,R=this.En(e,T,r[g%d],i),N=this.dn(e,T,s[g%d],a),O=c.map(D=>this.En(e,T,D,!0));p.push(...this.createRange(R,N,O))}return p}En(e,t,r,i){let s=new tn(e,x.empty(),t,r);return i?s:s.Jt()}dn(e,t,r,i){let s=new tn(e,x.empty(),t,r);return i?s.Jt():s}ln(e,t){let r=new Qs(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let a=null;for(let c of s)r.tn(c)&&(!a||c.fields.length>a.fields.length)&&(a=c);return a})}getIndexType(e,t){let r=2,i=this.cn(t);return b.forEach(i,s=>this.ln(e,s).next(a=>{a?r!==0&&a.fields.length<function(u){let d=new te(de.comparator),p=!1;for(let g of u.filters)for(let T of g.getFlattenedFilters())T.field.isKeyField()||(T.op==="array-contains"||T.op==="array-contains-any"?p=!0:d=d.add(T.field));for(let g of u.orderBy)g.field.isKeyField()||(d=d.add(g.field));return d.size+(p?1:0)}(s)&&(r=1):r=0})).next(()=>function(a){return a.limit!==null}(t)&&i.length>1&&r===2?1:r)}An(e,t){let r=new en;for(let i of Yt(e)){let s=t.data.field(i.fieldPath);if(s==null)return null;let a=r.Ht(i.kind);dt.bt.Pt(s,a)}return r.Wt()}Tn(e){let t=new en;return dt.bt.Pt(e,t.Ht(0)),t.Wt()}Rn(e,t){let r=new en;return dt.bt.Pt(ll(this.databaseId,t),r.Ht(function(s){let a=Yt(s);return a.length===0?0:a[a.length-1].kind}(e))),r.Wt()}Pn(e,t,r){if(r===null)return[];let i=[];i.push(new en);let s=0;for(let a of Yt(e)){let c=r[s++];for(let u of i)if(this.Vn(t,a.fieldPath)&&Xr(c))i=this.mn(i,a,c);else{let d=u.Ht(a.kind);dt.bt.Pt(c,d)}}return this.fn(i)}hn(e,t,r){return this.Pn(e,t,r.position)}fn(e){let t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Wt();return t}mn(e,t,r){let i=[...e],s=[];for(let a of r.arrayValue.values||[])for(let c of i){let u=new en;u.seed(c.Wt()),dt.bt.Pt(a,u.Ht(t.kind)),s.push(u)}return s}Vn(e,t){return!!e.filters.find(r=>r instanceof Q&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){let r=Mr(e),i=Pn(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(s=>{let a=[];return b.forEach(s,c=>i.get([c.indexId,this.uid]).next(u=>{a.push(function(p,g){let T=g?new Hr(g.sequenceNumber,new Ue(dn(g.readTime),new x(Ye(g.documentKey)),g.largestBatchId)):Hr.empty(),R=p.fields.map(([N,O])=>new Ln(de.fromServerFormat(N),O));return new Un(p.indexId,p.collectionGroup,R,T)}(c,u))})).next(()=>a)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{let s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:K(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){let i=Mr(e),s=Pn(e);return this.gn(e).next(a=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>b.forEach(c,u=>s.put(Af(u.indexId,this.uid,a,r)))))}updateIndexEntries(e,t){let r=new Map;return b.forEach(t,(i,s)=>{let a=r.get(i.collectionGroup);return(a?b.resolve(a):this.getFieldIndexes(e,i.collectionGroup)).next(c=>(r.set(i.collectionGroup,c),b.forEach(c,u=>this.pn(e,i,u).next(d=>{let p=this.yn(s,u);return d.isEqual(p)?b.resolve():this.wn(e,s,u,d,p)}))))})}Sn(e,t,r,i){return Rn(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Rn(r,t.key),documentKey:t.key.path.toArray()})}bn(e,t,r,i){return Rn(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Rn(r,t.key),t.key.path.toArray()])}pn(e,t,r){let i=Rn(e),s=new te(St);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Rn(r,t)])},(a,c)=>{s=s.add(new tn(r.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>s)}yn(e,t){let r=new te(St),i=this.An(t,e);if(i==null)return r;let s=vc(t);if(s!=null){let a=e.data.field(s.fieldPath);if(Xr(a))for(let c of a.arrayValue.values||[])r=r.add(new tn(t.indexId,e.key,this.Tn(c),i))}else r=r.add(new tn(t.indexId,e.key,vs,i));return r}wn(e,t,r,i,s){C("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);let a=[];return function(u,d,p,g,T){let R=u.getIterator(),N=d.getIterator(),O=Sn(R),D=Sn(N);for(;O||D;){let G=!1,q=!1;if(O&&D){let F=p(O,D);F<0?q=!0:F>0&&(G=!0)}else O!=null?q=!0:G=!0;G?(g(D),D=Sn(N)):q?(T(O),O=Sn(R)):(O=Sn(R),D=Sn(N))}}(i,s,St,c=>{a.push(this.Sn(e,t,r,c))},c=>{a.push(this.bn(e,t,r,c))}),b.waitFor(a)}gn(e){let t=1;return Pn(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((a,c)=>St(a,c)).filter((a,c,u)=>!c||St(a,u[c-1])!==0);let i=[];i.push(e);for(let a of r){let c=St(a,e),u=St(a,t);if(c===0)i[0]=e.Jt();else if(c>0&&u<0)i.push(a),i.push(a.Jt());else if(u>0)break}i.push(t);let s=[];for(let a=0;a<i.length;a+=2){if(this.Dn(i[a],i[a+1]))return[];let c=[i[a].indexId,this.uid,i[a].arrayValue,i[a].directionalValue,vs,[]],u=[i[a+1].indexId,this.uid,i[a+1].arrayValue,i[a+1].directionalValue,vs,[]];s.push(IDBKeyRange.bound(c,u))}return s}Dn(e,t){return St(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Nf)}getMinOffset(e,t){return b.mapArray(this.cn(t),r=>this.ln(e,r).next(i=>i||M())).next(Nf)}};function Df(n){return fe(n,"collectionParents")}function Rn(n){return fe(n,"indexEntries")}function Mr(n){return fe(n,"indexConfiguration")}function Pn(n){return fe(n,"indexState")}function Nf(n){U(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){let i=n[r].indexState.offset;ol(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Ue(e.readTime,e.documentKey,t)}var kf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Le=class n{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new n(e,n.DEFAULT_COLLECTION_PERCENTILE,n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}};function Up(n,e,t){let r=n.store("mutations"),i=n.store("documentMutations"),s=[],a=IDBKeyRange.only(t.batchId),c=0,u=r.J({range:a},(p,g,T)=>(c++,T.delete()));s.push(u.next(()=>{U(c===1)}));let d=[];for(let p of t.mutations){let g=Yf(e,p.key.path,t.batchId);s.push(i.delete(g)),d.push(p.key)}return b.waitFor(s).next(()=>d)}function Ys(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw M();e=n.noDocument}return JSON.stringify(e).length}Le.DEFAULT_COLLECTION_PERCENTILE=10,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Le.DEFAULT=new Le(41943040,Le.DEFAULT_COLLECTION_PERCENTILE,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Le.DISABLED=new Le(-1,0,0);var Xs=class n{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Cn={}}static lt(e,t,r,i){U(e.uid!=="");let s=e.isAuthenticated()?e.uid:"";return new n(s,t,r,i)}checkEmpty(e){let t=!0,r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Rt(e).J({index:"userMutationsIndex",range:r},(i,s,a)=>{t=!1,a.done()}).next(()=>t)}addMutationBatch(e,t,r,i){let s=xn(e),a=Rt(e);return a.add({}).next(c=>{U(typeof c=="number");let u=new ei(c,t,r,i),d=function(R,N,O){let D=O.baseMutations.map(q=>Ks(R.ct,q)),G=O.mutations.map(q=>Ks(R.ct,q));return{userId:N,batchId:O.batchId,localWriteTimeMs:O.localWriteTime.toMillis(),baseMutations:D,mutations:G}}(this.serializer,this.userId,u),p=[],g=new te((T,R)=>K(T.canonicalString(),R.canonicalString()));for(let T of i){let R=Yf(this.userId,T.key.path,c);g=g.add(T.key.path.popLast()),p.push(a.put(d)),p.push(s.put(R,wI))}return g.forEach(T=>{p.push(this.indexManager.addToCollectionParentIndex(e,T))}),e.addOnCommittedListener(()=>{this.Cn[c]=u.keys()}),b.waitFor(p).next(()=>u)})}lookupMutationBatch(e,t){return Rt(e).get(t).next(r=>r?(U(r.userId===this.userId),Zt(this.serializer,r)):null)}vn(e,t){return this.Cn[t]?b.resolve(this.Cn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){let i=r.keys();return this.Cn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){let r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]),s=null;return Rt(e).J({index:"userMutationsIndex",range:i},(a,c,u)=>{c.userId===this.userId&&(U(c.batchId>=r),s=Zt(this.serializer,c)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){let t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),r=-1;return Rt(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,s,a)=>{r=s.batchId,a.done()}).next(()=>r)}getAllMutationBatches(e){let t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Rt(e).U("userMutationsIndex",t).next(r=>r.map(i=>Zt(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){let r=As(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return xn(e).J({range:i},(a,c,u)=>{let[d,p,g]=a,T=Ye(p);if(d===this.userId&&t.path.isEqual(T))return Rt(e).get(g).next(R=>{if(!R)throw M();U(R.userId===this.userId),s.push(Zt(this.serializer,R))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new te(K),i=[];return t.forEach(s=>{let a=As(this.userId,s.path),c=IDBKeyRange.lowerBound(a),u=xn(e).J({range:c},(d,p,g)=>{let[T,R,N]=d,O=Ye(R);T===this.userId&&s.path.isEqual(O)?r=r.add(N):g.done()});i.push(u)}),b.waitFor(i).next(()=>this.Fn(e,r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,i=r.length+1,s=As(this.userId,r),a=IDBKeyRange.lowerBound(s),c=new te(K);return xn(e).J({range:a},(u,d,p)=>{let[g,T,R]=u,N=Ye(T);g===this.userId&&r.isPrefixOf(N)?N.length===i&&(c=c.add(R)):p.done()}).next(()=>this.Fn(e,c))}Fn(e,t){let r=[],i=[];return t.forEach(s=>{i.push(Rt(e).get(s).next(a=>{if(a===null)throw M();U(a.userId===this.userId),r.push(Zt(this.serializer,a))}))}),b.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return Up(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Mn(t.batchId)}),b.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return b.resolve();let r=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),i=[];return xn(e).J({range:r},(s,a,c)=>{if(s[0]===this.userId){let u=Ye(s[1]);i.push(u)}else c.done()}).next(()=>{U(i.length===0)})})}containsKey(e,t){return Bp(e,this.userId,t)}xn(e){return qp(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}};function Bp(n,e,t){let r=As(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r),a=!1;return xn(n).J({range:s,H:!0},(c,u,d)=>{let[p,g,T]=c;p===e&&g===i&&(a=!0),d.done()}).next(()=>a)}function Rt(n){return fe(n,"mutations")}function xn(n){return fe(n,"documentMutations")}function qp(n){return fe(n,"mutationQueues")}var Jn=class n{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new n(0)}static Ln(){return new n(-1)}};var su=class{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Bn(e).next(t=>{let r=new Jn(t.highestTargetId);return t.highestTargetId=r.next(),this.kn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(t=>B.fromTimestamp(new ce(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.kn(e,i)))}addTargetData(e,t){return this.qn(e,t).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.Qn(t,r),this.kn(e,r))))}updateTargetData(e,t){return this.qn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Cn(e).delete(t.targetId)).next(()=>this.Bn(e)).next(r=>(U(r.targetCount>0),r.targetCount-=1,this.kn(e,r)))}removeTargets(e,t,r){let i=0,s=[];return Cn(e).J((a,c)=>{let u=qr(c);u.sequenceNumber<=t&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>b.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Cn(e).J((r,i)=>{let s=qr(i);t(s)})}Bn(e){return Of(e).get("targetGlobalKey").next(t=>(U(t!==null),t))}kn(e,t){return Of(e).put("targetGlobalKey",t)}qn(e,t){return Cn(e).put(Vp(this.serializer,t))}Qn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(t=>t.targetCount)}getTargetData(e,t){let r=cn(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]),s=null;return Cn(e).J({range:i,index:"queryTargetsIndex"},(a,c,u)=>{let d=qr(c);hi(t,d.target)&&(s=d,u.done())}).next(()=>s)}addMatchingKeys(e,t,r){let i=[],s=Pt(e);return t.forEach(a=>{let c=Pe(a.path);i.push(s.put({targetId:r,path:c})),i.push(this.referenceDelegate.addReference(e,r,a))}),b.waitFor(i)}removeMatchingKeys(e,t,r){let i=Pt(e);return b.forEach(t,s=>{let a=Pe(s.path);return b.waitFor([i.delete([r,a]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){let r=Pt(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){let r=IDBKeyRange.bound([t],[t+1],!1,!0),i=Pt(e),s=$();return i.J({range:r,H:!0},(a,c,u)=>{let d=Ye(a[1]),p=new x(d);s=s.add(p)}).next(()=>s)}containsKey(e,t){let r=Pe(t.path),i=IDBKeyRange.bound([r],[Hf(r)],!1,!0),s=0;return Pt(e).J({index:"documentTargetsIndex",H:!0,range:i},([a,c],u,d)=>{a!==0&&(s++,d.done())}).next(()=>s>0)}ot(e,t){return Cn(e).get(t).next(r=>r?qr(r):null)}};function Cn(n){return fe(n,"targets")}function Of(n){return fe(n,"targetGlobal")}function Pt(n){return fe(n,"targetDocuments")}function xf([n,e],[t,r]){let i=K(n,t);return i===0?K(e,r):i}var ou=class{constructor(e){this.Kn=e,this.buffer=new te(xf),this.$n=0}Un(){return++this.$n}Wn(e){let t=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(t);else{let r=this.buffer.last();xf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}},au=class{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(e){C("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Mt(t)?C("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await fn(t)}await this.zn(3e5)})}},cu=class{constructor(e,t){this.jn=e,this.params=t}calculateTargetCount(e,t){return this.jn.Hn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return b.resolve(De.oe);let r=new ou(t);return this.jn.forEachTarget(e,i=>r.Wn(i.sequenceNumber)).next(()=>this.jn.Jn(e,i=>r.Wn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(C("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(kf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),kf):this.Yn(e,t))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,t){let r,i,s,a,c,u,d,p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(C("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),i=this.params.maximumSequenceNumbersToCollect):i=g,a=Date.now(),this.nthSequenceNumber(e,i))).next(g=>(r=g,c=Date.now(),this.removeTargets(e,r,t))).next(g=>(s=g,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(d=Date.now(),Dn()<=W.DEBUG&&C("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${s} targets in `+(u-c)+`ms
	Removed ${g} documents in `+(d-u)+`ms
Total Duration: ${d-p}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:g})))}};function Ev(n,e){return new cu(n,e)}var uu=class{constructor(e,t){this.db=e,this.garbageCollector=Ev(this,t)}Hn(e){let t=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Zn(e){let t=0;return this.Jn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Jn(e,t){return this.Xn(e,(r,i)=>t(i))}addReference(e,t,r){return ws(e,r)}removeReference(e,t,r){return ws(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return ws(e,t)}er(e,t){return function(i,s){let a=!1;return qp(i).Y(c=>Bp(i,c,s).next(u=>(u&&(a=!0),b.resolve(!u)))).next(()=>a)}(e,t)}removeOrphanedDocuments(e,t){let r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[],s=0;return this.Xn(e,(a,c)=>{if(c<=t){let u=this.er(e,a).next(d=>{if(!d)return s++,r.getEntry(e,a).next(()=>(r.removeEntry(a,B.min()),Pt(e).delete(function(g){return[0,Pe(g.path)]}(a))))});i.push(u)}}).next(()=>b.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return ws(e,t)}Xn(e,t){let r=Pt(e),i,s=De.oe;return r.J({index:"documentTargetsIndex"},([a,c],{path:u,sequenceNumber:d})=>{a===0?(s!==De.oe&&t(new x(Ye(i)),s),s=d,i=u):s=De.oe}).next(()=>{s!==De.oe&&t(new x(Ye(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}};function ws(n,e){return Pt(n).put(function(r,i){return{targetId:0,path:Pe(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}var Zs=class{constructor(){this.changes=new tt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ye.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return r!==void 0?b.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var lu=class{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Jt(e).put(r)}removeEntry(e,t,r){return Jt(e).delete(function(s,a){let c=s.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Hs(a),c[c.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.tr(e,r)))}getEntry(e,t){let r=ye.newInvalidDocument(t);return Jt(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Fr(t))},(i,s)=>{r=this.nr(t,s)}).next(()=>r)}rr(e,t){let r={size:0,document:ye.newInvalidDocument(t)};return Jt(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Fr(t))},(i,s)=>{r={document:this.nr(t,s),size:Ys(s)}}).next(()=>r)}getEntries(e,t){let r=xe();return this.ir(e,t,(i,s)=>{let a=this.nr(i,s);r=r.insert(i,a)}).next(()=>r)}sr(e,t){let r=xe(),i=new ie(x.comparator);return this.ir(e,t,(s,a)=>{let c=this.nr(s,a);r=r.insert(s,c),i=i.insert(s,Ys(a))}).next(()=>({documents:r,_r:i}))}ir(e,t,r){if(t.isEmpty())return b.resolve();let i=new te(Mf);t.forEach(u=>i=i.add(u));let s=IDBKeyRange.bound(Fr(i.first()),Fr(i.last())),a=i.getIterator(),c=a.getNext();return Jt(e).J({index:"documentKeyIndex",range:s},(u,d,p)=>{let g=x.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;c&&Mf(c,g)<0;)r(c,null),c=a.getNext();c&&c.isEqual(g)&&(r(c,d),c=a.hasNext()?a.getNext():null),c?p.$(Fr(c)):p.done()}).next(()=>{for(;c;)r(c,null),c=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){let a=t.path,c=[a.popLast().toArray(),a.lastSegment(),Hs(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Jt(e).U(IDBKeyRange.bound(c,u,!0)).next(d=>{s==null||s.incrementDocumentReadCount(d.length);let p=xe();for(let g of d){let T=this.nr(x.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);T.isFoundDocument()&&(di(t,T)||i.has(T.key))&&(p=p.insert(T.key,T))}return p})}getAllFromCollectionGroup(e,t,r,i){let s=xe(),a=Lf(t,r),c=Lf(t,Ue.max());return Jt(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(a,c,!0)},(u,d,p)=>{let g=this.nr(x.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);s=s.insert(g.key,g),s.size===i&&p.done()}).next(()=>s)}newChangeBuffer(e){return new hu(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Vf(e).get("remoteDocumentGlobalKey").next(t=>(U(!!t),t))}tr(e,t){return Vf(e).put("remoteDocumentGlobalKey",t)}nr(e,t){if(t){let r=Iv(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(B.min())))return r}return ye.newInvalidDocument(e)}};function jp(n){return new lu(n)}var hu=class extends Zs{constructor(e,t){super(),this.ar=e,this.trackRemovals=t,this.ur=new tt(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){let t=[],r=0,i=new te((s,a)=>K(s.canonicalString(),a.canonicalString()));return this.changes.forEach((s,a)=>{let c=this.ur.get(s);if(t.push(this.ar.removeEntry(e,s,c.readTime)),a.isValidDocument()){let u=Ef(this.ar.serializer,a);i=i.add(s.path.popLast());let d=Ys(u);r+=d-c.size,t.push(this.ar.addEntry(e,s,u))}else if(r-=c.size,this.trackRemovals){let u=Ef(this.ar.serializer,a.convertToNoDocument(B.min()));t.push(this.ar.addEntry(e,s,u))}}),i.forEach(s=>{t.push(this.ar.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.ar.updateMetadata(e,r)),b.waitFor(t)}getFromCache(e,t){return this.ar.rr(e,t).next(r=>(this.ur.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.ar.sr(e,t).next(({documents:r,_r:i})=>(i.forEach((s,a)=>{this.ur.set(s,{size:a,readTime:r.get(s).readTime})}),r))}};function Vf(n){return fe(n,"remoteDocumentGlobal")}function Jt(n){return fe(n,"remoteDocumentsV14")}function Fr(n){let e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Lf(n,e){let t=e.documentKey.path.toArray();return[n,Hs(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Mf(n,e){let t=n.path.toArray(),r=e.path.toArray(),i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=K(t[s],r[s]),i)return i;return i=K(t.length,r.length),i||(i=K(t[t.length-2],r[r.length-2]),i||K(t[t.length-1],r[r.length-1]))}var du=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};var eo=class{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Kr(r.mutation,i,Ge.empty(),ce.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,$()).next(()=>r))}getLocalViewOfDocuments(e,t,r=$()){let i=Xe();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=Br();return s.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){let r=Xe();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,$()))}populateOverlays(e,t,r){let i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,i){let s=xe(),a=Gr(),c=function(){return Gr()}();return t.forEach((u,d)=>{let p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof nt)?s=s.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Kr(p.mutation,d,p.mutation.getFieldMask(),ce.now())):a.set(d.key,Ge.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var g;return c.set(d,new du(p,(g=a.get(d))!==null&&g!==void 0?g:null))}),c))}recalculateAndSaveOverlays(e,t){let r=Gr(),i=new ie((a,c)=>a-c),s=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(let c of a)c.keys().forEach(u=>{let d=t.get(u);if(d===null)return;let p=r.get(u)||Ge.empty();p=c.applyToLocalView(d,p),r.set(u,p);let g=(i.get(c.batchId)||$()).add(u);i=i.insert(c.batchId,g)})}).next(()=>{let a=[],c=i.getReverseIterator();for(;c.hasNext();){let u=c.getNext(),d=u.key,p=u.value,g=pp();p.forEach(T=>{if(!s.has(T)){let R=wp(t.get(T),r.get(T));R!==null&&g.set(T,R),s=s.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return b.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return x.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):zI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{let a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):b.resolve(Xe()),c=-1,u=s;return a.next(d=>b.forEach(d,(p,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),s.get(p)?b.resolve():this.remoteDocumentCache.getEntry(e,p).next(T=>{u=u.insert(p,T)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,$())).next(p=>({batchId:c,changes:fp(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new x(t)).next(r=>{let i=Br();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){let s=t.collectionGroup,a=Br();return this.indexManager.getCollectionParents(e,s).next(c=>b.forEach(c,u=>{let d=function(g,T){return new Kn(T,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((g,T)=>{a=a.insert(g,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((u,d)=>{let p=d.getKey();a.get(p)===null&&(a=a.insert(p,ye.newInvalidDocument(p)))});let c=Br();return a.forEach((u,d)=>{let p=s.get(u);p!==void 0&&Kr(p.mutation,d,Ge.empty(),ce.now()),di(t,d)&&(c=c.insert(u,d))}),c})}};var fu=class{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return b.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Ce(i.createTime)}}(t)),b.resolve()}getNamedQuery(e,t){return b.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(i){return{name:i.name,query:Lp(i.bundledQuery),readTime:Ce(i.readTime)}}(t)),b.resolve()}};var pu=class{constructor(){this.overlays=new ie(x.comparator),this.hr=new Map}getOverlay(e,t){return b.resolve(this.overlays.get(t))}getOverlays(e,t){let r=Xe();return b.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),b.resolve()}removeOverlaysForBatchId(e,t,r){let i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),b.resolve()}getOverlaysForCollection(e,t,r){let i=Xe(),s=t.length+1,a=new x(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){let u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return b.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new ie((d,p)=>d-p),a=this.overlays.getIterator();for(;a.hasNext();){let d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=s.get(d.largestBatchId);p===null&&(p=Xe(),s=s.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}let c=Xe(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>c.set(d,p)),!(c.size()>=i)););return b.resolve(c)}ht(e,t,r){let i=this.overlays.get(r.key);if(i!==null){let a=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new ti(t,r));let s=this.hr.get(t);s===void 0&&(s=$(),this.hr.set(t,s)),this.hr.set(t,s.add(r.key))}};var ii=class{constructor(){this.Pr=new te(he.Ir),this.Tr=new te(he.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){let r=new he(e,t);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ar(new he(e,t))}Rr(e,t){e.forEach(r=>this.removeReference(r,t))}Vr(e){let t=new x(new re([])),r=new he(t,e),i=new he(t,e+1),s=[];return this.Tr.forEachInRange([r,i],a=>{this.Ar(a),s.push(a.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){let t=new x(new re([])),r=new he(t,e),i=new he(t,e+1),s=$();return this.Tr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){let t=new he(e,0),r=this.Pr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}},he=class{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return x.comparator(e.key,t.key)||K(e.pr,t.pr)}static Er(e,t){return K(e.pr,t.pr)||x.comparator(e.key,t.key)}};var mu=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new te(he.Ir)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){let s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let a=new ei(s,t,r,i);this.mutationQueue.push(a);for(let c of i)this.wr=this.wr.add(new he(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return b.resolve(a)}lookupMutationBatch(e,t){return b.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){let r=t+1,i=this.br(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new he(t,0),i=new he(t,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],a=>{let c=this.Sr(a.pr);s.push(c)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new te(K);return t.forEach(i=>{let s=new he(i,0),a=new he(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,a],c=>{r=r.add(c.pr)})}),b.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,i=r.length+1,s=r;x.isDocumentKey(s)||(s=s.child(""));let a=new he(new x(s),0),c=new te(K);return this.wr.forEachWhile(u=>{let d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(c=c.add(u.pr)),!0)},a),b.resolve(this.Dr(c))}Dr(e){let t=[];return e.forEach(r=>{let i=this.Sr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){U(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return b.forEach(t.mutations,i=>{let s=new he(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,t){let r=new he(t,0),i=this.wr.firstAfterOrEqual(r);return b.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){let t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};var gu=class{constructor(e){this.vr=e,this.docs=function(){return new ie(x.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.vr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return b.resolve(r?r.document.mutableCopy():ye.newInvalidDocument(t))}getEntries(e,t){let r=xe();return t.forEach(i=>{let s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ye.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=xe(),a=t.path,c=new x(a.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){let{key:d,value:{document:p}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||ol(Wf(p),r)<=0||(i.has(p.key)||di(t,p))&&(s=s.insert(p.key,p.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,t,r,i){M()}Fr(e,t){return b.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new _u(this)}getSize(e){return b.resolve(this.size)}},_u=class extends Zs{constructor(e){super(),this.ar=e}applyChanges(e){let t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),b.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}};var yu=class{constructor(e){this.persistence=e,this.Mr=new tt(t=>cn(t),hi),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Or=0,this.Nr=new ii,this.targetCount=0,this.Lr=Jn.Nn()}forEachTarget(e,t){return this.Mr.forEach((r,i)=>t(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Or&&(this.Or=t),b.resolve()}qn(e){this.Mr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Lr=new Jn(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,b.resolve()}updateTargetData(e,t){return this.qn(t),b.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,t,r){let i=0,s=[];return this.Mr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Mr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,t){let r=this.Mr.get(t)||null;return b.resolve(r)}addMatchingKeys(e,t,r){return this.Nr.dr(t,r),b.resolve()}removeMatchingKeys(e,t,r){this.Nr.Rr(t,r);let i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),b.resolve()}getMatchingKeysForTargetId(e,t){let r=this.Nr.gr(t);return b.resolve(r)}containsKey(e,t){return b.resolve(this.Nr.containsKey(t))}};var to=class{constructor(e,t){this.Br={},this.overlays={},this.kr=new De(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new yu(this),this.indexManager=new ru,this.remoteDocumentCache=function(i){return new gu(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new $s(t),this.$r=new fu(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new pu,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new mu(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,r){C("MemoryPersistence","Starting transaction:",e);let i=new Iu(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,t){return b.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}},Iu=class extends Ns{constructor(e){super(),this.currentSequenceNumber=e}},no=class n{constructor(e){this.persistence=e,this.zr=new ii,this.jr=null}static Hr(e){return new n(e)}get Jr(){if(this.jr)return this.jr;throw M()}addReference(e,t,r){return this.zr.addReference(r,t),this.Jr.delete(r.toString()),b.resolve()}removeReference(e,t,r){return this.zr.removeReference(r,t),this.Jr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),b.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(i=>this.Jr.add(i.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Jr,r=>{let i=x.fromPath(r);return this.Yr(e,i).next(s=>{s||t.removeEntry(i,B.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(r=>{r?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return b.or([()=>b.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}};var vu=class{constructor(e){this.serializer=e}O(e,t,r,i){let s=new ks("createOrUpgrade",t);r<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Zd,{unique:!0}),u.createObjectStore("documentMutations")}(e),Ff(e),function(u){u.createObjectStore("remoteDocuments")}(e));let a=b.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),Ff(e)),a=a.next(()=>function(u){let d=u.store("targetGlobal"),p={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:B.min().toTimestamp(),targetCount:0};return d.put("targetGlobalKey",p)}(s))),r<4&&i>=4&&(r!==0&&(a=a.next(()=>function(u,d){return d.store("mutations").U().next(p=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Zd,{unique:!0});let g=d.store("mutations"),T=p.map(R=>g.put(R));return b.waitFor(T)})}(e,s))),a=a.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(a=a.next(()=>this.Xr(s))),r<6&&i>=6&&(a=a.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ei(s)))),r<7&&i>=7&&(a=a.next(()=>this.ti(s))),r<8&&i>=8&&(a=a.next(()=>this.ni(e,s))),r<9&&i>=9&&(a=a.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(a=a.next(()=>this.ri(s))),r<11&&i>=11&&(a=a.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(a=a.next(()=>{(function(u){let d=u.createObjectStore("documentOverlays",{keyPath:OI});d.createIndex("collectionPathOverlayIndex",xI,{unique:!1}),d.createIndex("collectionGroupOverlayIndex",VI,{unique:!1})})(e)})),r<13&&i>=13&&(a=a.next(()=>function(u){let d=u.createObjectStore("remoteDocumentsV14",{keyPath:EI});d.createIndex("documentKeyIndex",TI),d.createIndex("collectionGroupIndex",AI)}(e)).next(()=>this.ii(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(a=a.next(()=>this.si(e,s))),r<15&&i>=15&&(a=a.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:CI}).createIndex("sequenceNumberIndex",DI,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:NI}).createIndex("documentKeyIndex",kI,{unique:!1})}(e))),r<16&&i>=16&&(a=a.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),a}ei(e){let t=0;return e.store("remoteDocuments").J((r,i)=>{t+=Ys(i)}).next(()=>{let r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Xr(e){let t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(i=>b.forEach(i,s=>{let a=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",a).next(c=>b.forEach(c,u=>{U(u.userId===s.userId);let d=Zt(this.serializer,u);return Up(e,s.userId,d).next(()=>{})}))}))}ti(e){let t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{let s=[];return r.J((a,c)=>{let u=new re(a),d=function(g){return[0,Pe(g)]}(u);s.push(t.get(d).next(p=>p?b.resolve():(g=>t.put({targetId:0,path:Pe(g),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>b.waitFor(s))})}ni(e,t){e.createObjectStore("collectionParents",{keyPath:PI});let r=t.store("collectionParents"),i=new ri,s=a=>{if(i.add(a)){let c=a.lastSegment(),u=a.popLast();return r.put({collectionId:c,parent:Pe(u)})}};return t.store("remoteDocuments").J({H:!0},(a,c)=>{let u=new re(a);return s(u.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([a,c,u],d)=>{let p=Ye(c);return s(p.popLast())}))}ri(e){let t=e.store("targets");return t.J((r,i)=>{let s=qr(i),a=Vp(this.serializer,s);return t.put(a)})}ii(e,t){let r=t.store("remoteDocuments"),i=[];return r.J((s,a)=>{let c=t.store("remoteDocumentsV14"),u=function(g){return g.document?new x(re.fromString(g.document.name).popFirst(5)):g.noDocument?x.fromSegments(g.noDocument.path):g.unknownDocument?x.fromSegments(g.unknownDocument.path):M()}(a).path.toArray(),d={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};i.push(c.put(d))}).next(()=>b.waitFor(i))}si(e,t){let r=t.store("mutations"),i=jp(this.serializer),s=new to(no.Hr,this.serializer.ct);return r.U().next(a=>{let c=new Map;return a.forEach(u=>{var d;let p=(d=c.get(u.userId))!==null&&d!==void 0?d:$();Zt(this.serializer,u).keys().forEach(g=>p=p.add(g)),c.set(u.userId,p)}),b.forEach(c,(u,d)=>{let p=new _e(d),g=Ws.lt(this.serializer,p),T=s.getIndexManager(p),R=Xs.lt(p,this.serializer,T,s.referenceDelegate);return new eo(i,R,g,T).recalculateAndSaveOverlaysForDocumentKeys(new Qr(t,De.oe),u).next()})})}};function Ff(n){n.createObjectStore("targetDocuments",{keyPath:SI}).createIndex("documentTargetsIndex",RI,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",bI,{unique:!0}),n.createObjectStore("targetGlobal")}var lc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",wu=class n{constructor(e,t,r,i,s,a,c,u,d,p,g=16){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.oi=s,this.window=a,this.document=c,this._i=d,this.ai=p,this.ui=g,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=T=>Promise.resolve(),!n.D())throw new V(P.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new uu(this,i),this.Ti=t+"main",this.serializer=new $s(u),this.Ei=new Bn(this.Ti,this.ui,new vu(this.serializer)),this.Qr=new su(this.referenceDelegate,this.serializer),this.remoteDocumentCache=jp(this.serializer),this.$r=new Jc,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,p===!1&&Re("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new V(P.FAILED_PRECONDITION,lc);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new De(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Es(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(t=>{t||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(t=>this.isPrimary&&!t?this.yi(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(Mt(e))return C("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return C("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return Ur(e).get("owner").next(t=>b.resolve(this.Si(t)))}bi(e){return Es(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();let e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{let r=fe(t,"clientMetadata");return r.U().next(i=>{let s=this.vi(i,18e5),a=i.filter(c=>s.indexOf(c)===-1);return b.forEach(a,c=>r.delete(c.clientId)).next(()=>a)})}).catch(()=>[]);if(this.di)for(let t of e)this.di.removeItem(this.Fi(t.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?b.resolve(!0):Ur(e).get("owner").next(t=>{if(t!==null&&this.Ci(t.leaseTimestampMs,5e3)&&!this.Mi(t.ownerId)){if(this.Si(t)&&this.networkEnabled)return!0;if(!this.Si(t)){if(!t.allowTabSynchronization)throw new V(P.FAILED_PRECONDITION,lc);return!1}}return!(!this.networkEnabled||!this.inForeground)||Es(e).U().next(r=>this.vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){let s=!this.networkEnabled&&i.networkEnabled,a=!this.inForeground&&i.inForeground,c=this.networkEnabled===i.networkEnabled;if(s||a&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&C("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{let t=new Qr(e,De.oe);return this.yi(t).next(()=>this.bi(t))}),this.Ei.close(),this.Li()}vi(e,t){return e.filter(r=>this.Ci(r.updateTimeMs,t)&&!this.Mi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>Es(e).U().next(t=>this.vi(t,18e5).map(r=>r.clientId)))}get started(){return this.qr}getMutationQueue(e,t){return Xs.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new iu(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Ws.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,t,r){C("IndexedDbPersistence","Starting transaction:",e);let i=t==="readonly"?"readonly":"readwrite",s=function(u){return u===16?MI:u===15?tp:u===14?ep:u===13?Zf:u===12?LI:u===11?Xf:void M()}(this.ui),a;return this.Ei.runTransaction(e,i,s,c=>(a=new Qr(c,this.kr?this.kr.next():De.oe),t==="readwrite-primary"?this.gi(a).next(u=>!!u||this.pi(a)).next(u=>{if(!u)throw Re(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new V(P.FAILED_PRECONDITION,Qf);return r(a)}).next(u=>this.wi(a).next(()=>u)):this.ki(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}ki(e){return Ur(e).get("owner").next(t=>{if(t!==null&&this.Ci(t.leaseTimestampMs,5e3)&&!this.Mi(t.ownerId)&&!this.Si(t)&&!(this.ai||this.allowTabSynchronization&&t.allowTabSynchronization))throw new V(P.FAILED_PRECONDITION,lc)})}wi(e){let t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ur(e).put("owner",t)}static D(){return Bn.D()}yi(e){let t=Ur(e);return t.get("owner").next(r=>this.Si(r)?(C("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):b.resolve())}Ci(e,t){let r=Date.now();return!(e<r-t)&&(!(e>r)||(Re(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();let t=/(?:Version|Mobile)\/1[456]/;oa()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var t;try{let r=((t=this.di)===null||t===void 0?void 0:t.getItem(this.Fi(e)))!==null;return C("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Re("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){Re("Failed to set zombie client id.",e)}}Li(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}};function Ur(n){return fe(n,"owner")}function Es(n){return fe(n,"clientMetadata")}function Tv(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}var Eu=class n{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.qi=r,this.Qi=i}static Ki(e,t){let r=$(),i=$();for(let s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new n(e,t.fromCache,r,i)}};var Tu=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var ro=class{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return oa()?8:Jf(oe())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,r,i){let s={result:null};return this.ji(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Hi(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;let a=new Tu;return this.Ji(e,t,a).next(c=>{if(s.result=c,this.Ui)return this.Yi(e,t,a,c.size)})}).next(()=>s.result)}Yi(e,t,r,i){return r.documentReadCount<this.Wi?(Dn()<=W.DEBUG&&C("QueryEngine","SDK will not create cache indexes for query:",Nn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),b.resolve()):(Dn()<=W.DEBUG&&C("QueryEngine","Query:",Nn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Dn()<=W.DEBUG&&C("QueryEngine","The SDK decides to create cache indexes for query:",Nn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Me(t))):b.resolve())}ji(e,t){if(hf(t))return b.resolve(null);let r=Me(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Fc(t,null,"F"),r=Me(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{let a=$(...s);return this.zi.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{let d=this.Zi(t,c);return this.Xi(t,d,a,u.readTime)?this.ji(e,Fc(t,null,"F")):this.es(e,d,t,u)}))})))}Hi(e,t,r,i){return hf(t)||i.isEqual(B.min())?b.resolve(null):this.zi.getDocuments(e,r).next(s=>{let a=this.Zi(t,s);return this.Xi(t,a,r,i)?b.resolve(null):(Dn()<=W.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Nn(t)),this.es(e,a,t,yI(i,-1)).next(c=>c))})}Zi(e,t){let r=new te(hp(e));return t.forEach((i,s)=>{di(e,s)&&(r=r.add(s))}),r}Xi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;let s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,t,r){return Dn()<=W.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",Nn(t)),this.zi.getDocumentsMatchingQuery(e,t,Ue.min(),r)}es(e,t,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}};var Au=class{constructor(e,t,r,i){this.persistence=e,this.ts=t,this.serializer=i,this.ns=new ie(K),this.rs=new tt(s=>cn(s),hi),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eo(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}};function zp(n,e,t,r){return new Au(n,e,t,r)}async function Gp(n,e){let t=z(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t._s(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{let a=[],c=[],u=$();for(let d of i){a.push(d.batchId);for(let p of d.mutations)u=u.add(p.key)}for(let d of s){c.push(d.batchId);for(let p of d.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(r,u).next(d=>({us:d,removedBatchIds:a,addedBatchIds:c}))})})}function Av(n,e){let t=z(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{let i=e.batch.keys(),s=t.os.newChangeBuffer({trackRemovals:!0});return function(c,u,d,p){let g=d.batch,T=g.keys(),R=b.resolve();return T.forEach(N=>{R=R.next(()=>p.getEntry(u,N)).next(O=>{let D=d.docVersions.get(N);U(D!==null),O.version.compareTo(D)<0&&(g.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),p.addEntry(O)))})}),R.next(()=>c.mutationQueue.removeMutationBatch(u,g))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=$();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Kp(n){let e=z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function bv(n,e){let t=z(n),r=e.snapshotVersion,i=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{let a=t.os.newChangeBuffer({trackRemovals:!0});i=t.ns;let c=[];e.targetChanges.forEach((p,g)=>{let T=i.get(g);if(!T)return;c.push(t.Qr.removeMatchingKeys(s,p.removedDocuments,g).next(()=>t.Qr.addMatchingKeys(s,p.addedDocuments,g)));let R=T.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?R=R.withResumeToken(Ae.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):p.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(p.resumeToken,r)),i=i.insert(g,R),function(O,D,G){return O.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(T,R,p)&&c.push(t.Qr.updateTargetData(s,R))});let u=xe(),d=$();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,p))}),c.push(Sv(s,a,e.documentUpdates).next(p=>{u=p.cs,d=p.ls})),!r.isEqual(B.min())){let p=t.Qr.getLastRemoteSnapshotVersion(s).next(g=>t.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(p)}return b.waitFor(c).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(t.ns=i,s))}function Sv(n,e,t){let r=$(),i=$();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=xe();return t.forEach((c,u)=>{let d=s.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(B.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):C("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)}),{cs:a,ls:i}})}function Rv(n,e){let t=z(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Pv(n,e){let t=z(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Qr.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):t.Qr.allocateTargetId(r).next(a=>(i=new Qn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{let i=t.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ns=t.ns.insert(r.targetId,r),t.rs.set(e,r.targetId)),r})}async function bu(n,e,t){let r=z(n),i=r.ns.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Mt(a))throw a;C("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function Uf(n,e,t){let r=z(n),i=B.min(),s=$();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,p){let g=z(u),T=g.rs.get(p);return T!==void 0?b.resolve(g.ns.get(T)):g.Qr.getTargetData(d,p)}(r,a,Me(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,c.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(a,e,t?i:B.min(),t?s:$())).next(c=>(Cv(r,KI(e),c),{documents:c,hs:s})))}function Cv(n,e,t){let r=n.ss.get(e)||B.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.ss.set(e,r)}var io=class{constructor(){this.activeTargetIds=YI()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};var so=class{constructor(){this.no=new io,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,r){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new io,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var Su=class{io(e){}shutdown(){}};var oo=class{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(let e of this.uo)e(0)}ao(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(let e of this.uo)e(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var Ts=null;function hc(){return Ts===null?Ts=function(){return 268435456+Math.round(2147483648*Math.random())}():Ts++,"0x"+Ts.toString(16)}var Dv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};var Ru=class{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}};var Te="WebChannelConnection",Pu=class extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;let r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+t.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(t,r,i,s,a){let c=hc(),u=this.vo(t,r.toUriEncodedString());C("RestConnection",`Sending RPC '${t}' ${c}:`,u,i);let d={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(d,s,a),this.Mo(t,u,d,i).then(p=>(C("RestConnection",`Received RPC '${t}' ${c}: `,p),p),p=>{throw $r("RestConnection",`RPC '${t}' ${c} failed with error: `,p,"url: ",u,"request:",i),p})}xo(t,r,i,s,a,c){return this.Co(t,r,i,s,a)}Fo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}vo(t,r){let i=Dv[t];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,r,i){let s=hc();return new Promise((a,c)=>{let u=new rc;u.setWithCredentials(!0),u.listenOnce(sc.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Vr.NO_ERROR:let p=u.getResponseJson();C(Te,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(p)),a(p);break;case Vr.TIMEOUT:C(Te,`RPC '${e}' ${s} timed out`),c(new V(P.DEADLINE_EXCEEDED,"Request time out"));break;case Vr.HTTP_ERROR:let g=u.getStatus();if(C(Te,`RPC '${e}' ${s} failed with status:`,g,"response text:",u.getResponseText()),g>0){let T=u.getResponseJson();Array.isArray(T)&&(T=T[0]);let R=T==null?void 0:T.error;if(R&&R.status&&R.message){let N=function(D){let G=D.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(G)>=0?G:P.UNKNOWN}(R.status);c(new V(N,R.message))}else c(new V(P.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new V(P.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{C(Te,`RPC '${e}' ${s} completed.`)}});let d=JSON.stringify(i);C(Te,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",d,r,15)})}Oo(e,t,r){let i=hc(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=cc(),c=ac(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.xmlHttpFactory=new ic({})),this.Fo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;let p=s.join("");C(Te,`Creating RPC '${e}' stream ${i}: ${p}`,u);let g=a.createWebChannel(p,u),T=!1,R=!1,N=new Ru({lo:D=>{R?C(Te,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(T||(C(Te,`Opening RPC '${e}' stream ${i} transport.`),g.open(),T=!0),C(Te,`RPC '${e}' stream ${i} sending:`,D),g.send(D))},ho:()=>g.close()}),O=(D,G,q)=>{D.listen(G,F=>{try{q(F)}catch(H){setTimeout(()=>{throw H},0)}})};return O(g,bn.EventType.OPEN,()=>{R||(C(Te,`RPC '${e}' stream ${i} transport opened.`),N.mo())}),O(g,bn.EventType.CLOSE,()=>{R||(R=!0,C(Te,`RPC '${e}' stream ${i} transport closed`),N.po())}),O(g,bn.EventType.ERROR,D=>{R||(R=!0,$r(Te,`RPC '${e}' stream ${i} transport errored:`,D),N.po(new V(P.UNAVAILABLE,"The operation could not be completed")))}),O(g,bn.EventType.MESSAGE,D=>{var G;if(!R){let q=D.data[0];U(!!q);let F=q,H=F.error||((G=F[0])===null||G===void 0?void 0:G.error);if(H){C(Te,`RPC '${e}' stream ${i} received error:`,H);let Y=H.status,j=function(y){let v=le[y];if(v!==void 0)return Tp(v)}(Y),I=H.message;j===void 0&&(j=P.INTERNAL,I="Unknown error status: "+Y+" with message "+H.message),R=!0,N.po(new V(j,I)),g.close()}else C(Te,`RPC '${e}' stream ${i} received:`,q),N.yo(q)}}),O(c,oc.STAT_EVENT,D=>{D.stat===Is.PROXY?C(Te,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===Is.NOPROXY&&C(Te,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.fo()},0),N}};function Nv(){return typeof window!="undefined"?window:null}function Ps(){return typeof document!="undefined"?document:null}function So(n){return new Kc(n,!0)}var ao=class{constructor(e,t,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=t,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();let t=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,t-r);i>0&&C("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}};var co=class{constructor(e,t,r,i,s,a,c,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new ao(e,t)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(Re(t.toString()),Re("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;let e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===t&&this.u_(r,i)},r=>{e(()=>{let i=new V(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,t){let r=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return C("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget(()=>this.jo===e?t():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},Cu=class extends co{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}l_(e,t){return this.connection.Oo("Listen",e,t)}onMessage(e){this.Yo.reset();let t=dv(this.serializer,e),r=function(s){if(!("targetChange"in s))return B.min();let a=s.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?Ce(a.readTime):B.min()}(e);return this.listener.h_(t,r)}P_(e){let t={};t.database=Wc(this.serializer),t.addTarget=function(s,a){let c,u=a.target;if(c=Ms(u)?{documents:Cp(s,u)}:{query:Dp(s,u)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Ap(s,a.resumeToken);let d=$c(s,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(B.min())>0){c.readTime=Wn(s,a.snapshotVersion.toTimestamp());let d=$c(s,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);let r=pv(this.serializer,e);r&&(t.labels=r),this.i_(t)}I_(e){let t={};t.database=Wc(this.serializer),t.removeTarget=e,this.i_(t)}},Du=class extends co{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,t){return this.connection.Oo("Write",e,t)}onMessage(e){if(U(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();let t=fv(e.writeResults,e.commitTime),r=Ce(e.commitTime);return this.listener.A_(r,t)}return U(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){let e={};e.database=Wc(this.serializer),this.i_(e)}d_(e){let t={streamToken:this.lastStreamToken,writes:e.map(r=>Ks(this.serializer,r))};this.i_(t)}};var Nu=class extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new V(P.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Co(e,Hc(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(P.UNKNOWN,s.toString())})}xo(e,t,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.xo(e,Hc(t,r),i,a,c,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(P.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}},ku=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Re(t),this.y_=!1):C("OnlineStateTracker",t)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}};var Ou=class{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(a=>{r.enqueueAndForget(async()=>{pn(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(u){let d=z(u);d.M_.add(4),await fi(d),d.N_.set("Unknown"),d.M_.delete(4),await Ro(d)}(this))})}),this.N_=new ku(r,i)}};async function Ro(n){if(pn(n))for(let e of n.x_)await e(!0)}async function fi(n){for(let e of n.x_)await e(!1)}function $p(n,e){let t=z(n);t.F_.has(e.targetId)||(t.F_.set(e.targetId,e),_l(t)?gl(t):er(t).Xo()&&ml(t,e))}function pl(n,e){let t=z(n),r=er(t);t.F_.delete(e),r.Xo()&&Hp(t,e),t.F_.size===0&&(r.Xo()?r.n_():pn(t)&&t.N_.set("Unknown"))}function ml(n,e){if(n.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){let t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}er(n).P_(e)}function Hp(n,e){n.L_.xe(e),er(n).I_(e)}function gl(n){n.L_=new Gc({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.F_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),er(n).start(),n.N_.w_()}function _l(n){return pn(n)&&!er(n).Zo()&&n.F_.size>0}function pn(n){return z(n).M_.size===0}function Wp(n){n.L_=void 0}async function kv(n){n.N_.set("Online")}async function Ov(n){n.F_.forEach((e,t)=>{ml(n,e)})}async function xv(n,e){Wp(n),_l(n)?(n.N_.D_(e),gl(n)):n.N_.set("Unknown")}async function Vv(n,e,t){if(n.N_.set("Online"),e instanceof js&&e.state===2&&e.cause)try{await async function(i,s){let a=s.cause;for(let c of s.targetIds)i.F_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.F_.delete(c),i.L_.removeTarget(c))}(n,e)}catch(r){C("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await uo(n,r)}else if(e instanceof Mn?n.L_.Ke(e):e instanceof qs?n.L_.He(e):n.L_.We(e),!t.isEqual(B.min()))try{let r=await Kp(n.localStore);t.compareTo(r)>=0&&await function(s,a){let c=s.L_.rt(a);return c.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){let p=s.F_.get(d);p&&s.F_.set(d,p.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,d)=>{let p=s.F_.get(u);if(!p)return;s.F_.set(u,p.withResumeToken(Ae.EMPTY_BYTE_STRING,p.snapshotVersion)),Hp(s,u);let g=new Qn(p.target,u,d,p.sequenceNumber);ml(s,g)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){C("RemoteStore","Failed to raise snapshot:",r),await uo(n,r)}}async function uo(n,e,t){if(!Mt(e))throw e;n.M_.add(1),await fi(n),n.N_.set("Offline"),t||(t=()=>Kp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{C("RemoteStore","Retrying IndexedDB access"),await t(),n.M_.delete(1),await Ro(n)})}function Qp(n,e){return e().catch(t=>uo(n,t,e))}async function pi(n){let e=z(n),t=Lt(e),r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;Lv(e);)try{let i=await Rv(e.localStore,r);if(i===null){e.v_.length===0&&t.n_();break}r=i.batchId,Mv(e,i)}catch(i){await uo(e,i)}Jp(e)&&Yp(e)}function Lv(n){return pn(n)&&n.v_.length<10}function Mv(n,e){n.v_.push(e);let t=Lt(n);t.Xo()&&t.E_&&t.d_(e.mutations)}function Jp(n){return pn(n)&&!Lt(n).Zo()&&n.v_.length>0}function Yp(n){Lt(n).start()}async function Fv(n){Lt(n).V_()}async function Uv(n){let e=Lt(n);for(let t of n.v_)e.d_(t.mutations)}async function Bv(n,e,t){let r=n.v_.shift(),i=qc.from(r,e,t);await Qp(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await pi(n)}async function qv(n,e){e&&Lt(n).E_&&await async function(r,i){if(function(a){return iv(a)&&a!==P.ABORTED}(i.code)){let s=r.v_.shift();Lt(r).t_(),await Qp(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await pi(r)}}(n,e),Jp(n)&&Yp(n)}async function Bf(n,e){let t=z(n);t.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");let r=pn(t);t.M_.add(3),await fi(t),r&&t.N_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.M_.delete(3),await Ro(t)}async function jv(n,e){let t=z(n);e?(t.M_.delete(2),await Ro(t)):e||(t.M_.add(2),await fi(t),t.N_.set("Unknown"))}function er(n){return n.B_||(n.B_=function(t,r,i){let s=z(t);return s.f_(),new Cu(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Po:kv.bind(null,n),To:Ov.bind(null,n),Ao:xv.bind(null,n),h_:Vv.bind(null,n)}),n.x_.push(async e=>{e?(n.B_.t_(),_l(n)?gl(n):n.N_.set("Unknown")):(await n.B_.stop(),Wp(n))})),n.B_}function Lt(n){return n.k_||(n.k_=function(t,r,i){let s=z(t);return s.f_(),new Du(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:Fv.bind(null,n),Ao:qv.bind(null,n),R_:Uv.bind(null,n),A_:Bv.bind(null,n)}),n.x_.push(async e=>{e?(n.k_.t_(),await pi(n)):(await n.k_.stop(),n.v_.length>0&&(C("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}var xu=class n{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new $e,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){let a=Date.now()+r,c=new n(e,t,a,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function yl(n,e){if(Re("AsyncQueue",`${e}: ${n}`),Mt(n))return new V(P.UNAVAILABLE,`${e}: ${n}`);throw n}var lo=class n{constructor(e){this.comparator=e?(t,r)=>e(t,r)||x.comparator(t.key,r.key):(t,r)=>x.comparator(t.key,r.key),this.keyedMap=Br(),this.sortedSet=new ie(this.comparator)}static emptySet(e){return new n(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){let r=new n;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}};var ho=class{constructor(){this.q_=new ie(x.comparator)}track(e){let t=e.doc.key,r=this.q_.get(t);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(t,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(t):e.type===1&&r.type===2?this.q_=this.q_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):M():this.q_=this.q_.insert(t,e)}Q_(){let e=[];return this.q_.inorderTraversal((t,r)=>{e.push(r)}),e}},Yn=class n{constructor(e,t,r,i,s,a,c,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){let a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new n(e,t,lo.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}};var Vu=class{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}},Lu=class{constructor(){this.queries=new tt(e=>lp(e),bo),this.onlineState="Unknown",this.z_=new Set}};async function zv(n,e){let t=z(n),r=3,i=e.query,s=t.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new Vu,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await t.onListen(i,!0);break;case 1:s.K_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){let c=yl(a,`Initialization of query '${Nn(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.U_.push(e),e.j_(t.onlineState),s.K_&&e.H_(s.K_)&&Il(t)}async function Gv(n,e){let t=z(n),r=e.query,i=3,s=t.queries.get(r);if(s){let a=s.U_.indexOf(e);a>=0&&(s.U_.splice(a,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Kv(n,e){let t=z(n),r=!1;for(let i of e){let s=i.query,a=t.queries.get(s);if(a){for(let c of a.U_)c.H_(i)&&(r=!0);a.K_=i}}r&&Il(t)}function $v(n,e,t){let r=z(n),i=r.queries.get(e);if(i)for(let s of i.U_)s.onError(t);r.queries.delete(e)}function Il(n){n.z_.forEach(e=>{e.next()})}var Mu,qf;(qf=Mu||(Mu={})).J_="default",qf.Cache="cache";var Fu=class{constructor(e,t,r){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){let r=[];for(let i of e.docChanges)i.type!==3&&r.push(i);e=new Yn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){if(!e.fromCache||!this.G_())return!0;let r=t!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ea(e){if(e.docChanges.length>0)return!0;let t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}na(e){e=Yn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Mu.Cache}};var fo=class{constructor(e){this.key=e}},po=class{constructor(e){this.key=e}},Uu=class{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=$(),this.mutatedKeys=$(),this.Ia=hp(e),this.Ta=new lo(this.Ia)}get Ea(){return this.la}da(e,t){let r=t?t.Aa:new ho,i=t?t.Ta:this.Ta,s=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1,u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,g)=>{let T=i.get(p),R=di(this.query,g)?g:null,N=!!T&&this.mutatedKeys.has(T.key),O=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations),D=!1;T&&R?T.data.isEqual(R.data)?N!==O&&(r.track({type:3,doc:R}),D=!0):this.Ra(T,R)||(r.track({type:2,doc:R}),D=!0,(u&&this.Ia(R,u)>0||d&&this.Ia(R,d)<0)&&(c=!0)):!T&&R?(r.track({type:0,doc:R}),D=!0):T&&!R&&(r.track({type:1,doc:T}),D=!0,(u||d)&&(c=!0)),D&&(R?(a=a.add(R),s=O?s.add(p):s.delete(p)):(a=a.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){let p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{Ta:a,Aa:r,Xi:c,mutatedKeys:s}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){let s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;let a=e.Aa.Q_();a.sort((p,g)=>function(R,N){let O=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return O(R)-O(N)}(p.type,g.type)||this.Ia(p.doc,g.doc)),this.Va(r),i=i!=null&&i;let c=t&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,d=u!==this.ha;return this.ha=u,a.length!==0||d?{snapshot:new Yn(this.query,e.Ta,s,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new ho,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(t=>this.la=this.la.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.la=this.la.delete(t)),this.current=e.current)}ma(){if(!this.current)return[];let e=this.Pa;this.Pa=$(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});let t=[];return e.forEach(r=>{this.Pa.has(r)||t.push(new po(r))}),this.Pa.forEach(r=>{e.has(r)||t.push(new fo(r))}),t}pa(e){this.la=e.hs,this.Pa=$();let t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return Yn.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}},Bu=class{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}},qu=class{constructor(e){this.key=e,this.wa=!1}},ju=class{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new tt(c=>lp(c),bo),this.Da=new Map,this.Ca=new Set,this.va=new ie(x.comparator),this.Fa=new Map,this.Ma=new ii,this.xa={},this.Oa=new Map,this.Na=Jn.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}};async function Hv(n,e,t=!0){let r=rm(n),i,s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await Xp(r,e,t,!0),i}async function Wv(n,e){let t=rm(n);await Xp(t,e,!0,!1)}async function Xp(n,e,t,r){let i=await Pv(n.localStore,Me(e)),s=i.targetId,a=t?n.sharedClientState.addLocalQueryTarget(s):"not-current",c;return r&&(c=await Qv(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&$p(n.remoteStore,i),c}async function Qv(n,e,t,r,i){n.Ba=(g,T,R)=>async function(O,D,G,q){let F=D.view.da(G);F.Xi&&(F=await Uf(O.localStore,D.query,!1).then(({documents:I})=>D.view.da(I,F)));let H=q&&q.targetChanges.get(D.targetId),Y=q&&q.targetMismatches.get(D.targetId)!=null,j=D.view.applyChanges(F,O.isPrimaryClient,H,Y);return zf(O,D.targetId,j.fa),j.snapshot}(n,g,T,R);let s=await Uf(n.localStore,e,!0),a=new Uu(e,s.hs),c=a.da(s.documents),u=ni.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(c,n.isPrimaryClient,u);zf(n,t,d.fa);let p=new Bu(e,t,a);return n.ba.set(e,p),n.Da.has(t)?n.Da.get(t).push(e):n.Da.set(t,[e]),d.snapshot}async function Jv(n,e,t){let r=z(n),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(a=>!bo(a,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await bu(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&pl(r.remoteStore,i.targetId),zu(r,i.targetId)}).catch(fn)):(zu(r,i.targetId),await bu(r.localStore,i.targetId,!0))}async function Yv(n,e){let t=z(n),r=t.ba.get(e),i=t.Da.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),pl(t.remoteStore,r.targetId))}async function Xv(n,e,t){let r=im(n);try{let i=await function(a,c){let u=z(a),d=ce.now(),p=c.reduce((R,N)=>R.add(N.key),$()),g,T;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let N=xe(),O=$();return u.os.getEntries(R,p).next(D=>{N=D,N.forEach((G,q)=>{q.isValidDocument()||(O=O.add(G))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,N)).next(D=>{g=D;let G=[];for(let q of c){let F=rv(q,g.get(q.key).overlayedDocument);F!=null&&G.push(new nt(q.key,F,ip(F.value.mapValue),Ke.exists(!0)))}return u.mutationQueue.addMutationBatch(R,d,G,c)}).next(D=>{T=D;let G=D.applyToLocalDocumentSet(g,O);return u.documentOverlayCache.saveOverlays(R,D.batchId,G)})}).then(()=>({batchId:T.batchId,changes:fp(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,u){let d=a.xa[a.currentUser.toKey()];d||(d=new ie(K)),d=d.insert(c,u),a.xa[a.currentUser.toKey()]=d}(r,i.batchId,t),await mi(r,i.changes),await pi(r.remoteStore)}catch(i){let s=yl(i,"Failed to persist write");t.reject(s)}}async function Zp(n,e){let t=z(n);try{let r=await bv(t.localStore,e);e.targetChanges.forEach((i,s)=>{let a=t.Fa.get(s);a&&(U(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.wa=!0:i.modifiedDocuments.size>0?U(a.wa):i.removedDocuments.size>0&&(U(a.wa),a.wa=!1))}),await mi(t,r,e)}catch(r){await fn(r)}}function jf(n,e,t){let r=z(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){let i=[];r.ba.forEach((s,a)=>{let c=a.view.j_(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){let u=z(a);u.onlineState=c;let d=!1;u.queries.forEach((p,g)=>{for(let T of g.U_)T.j_(c)&&(d=!0)}),d&&Il(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Zv(n,e,t){let r=z(n);r.sharedClientState.updateQueryState(e,"rejected",t);let i=r.Fa.get(e),s=i&&i.key;if(s){let a=new ie(x.comparator);a=a.insert(s,ye.newNoDocument(s,B.min()));let c=$().add(s),u=new Bs(B.min(),new Map,new ie(K),a,c);await Zp(r,u),r.va=r.va.remove(s),r.Fa.delete(e),vl(r)}else await bu(r.localStore,e,!1).then(()=>zu(r,e,t)).catch(fn)}async function ew(n,e){let t=z(n),r=e.batch.batchId;try{let i=await Av(t.localStore,e);tm(t,r,null),em(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await mi(t,i)}catch(i){await fn(i)}}async function tw(n,e,t){let r=z(n);try{let i=await function(a,c){let u=z(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,c).next(g=>(U(g!==null),p=g.keys(),u.mutationQueue.removeMutationBatch(d,g))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,e);tm(r,e,t),em(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await mi(r,i)}catch(i){await fn(i)}}function em(n,e){(n.Oa.get(e)||[]).forEach(t=>{t.resolve()}),n.Oa.delete(e)}function tm(n,e,t){let r=z(n),i=r.xa[r.currentUser.toKey()];if(i){let s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function zu(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(let r of n.Da.get(e))n.ba.delete(r),t&&n.Sa.ka(r,t);n.Da.delete(e),n.isPrimaryClient&&n.Ma.Vr(e).forEach(r=>{n.Ma.containsKey(r)||nm(n,r)})}function nm(n,e){n.Ca.delete(e.path.canonicalString());let t=n.va.get(e);t!==null&&(pl(n.remoteStore,t),n.va=n.va.remove(e),n.Fa.delete(t),vl(n))}function zf(n,e,t){for(let r of t)r instanceof fo?(n.Ma.addReference(r.key,e),nw(n,r)):r instanceof po?(C("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,e),n.Ma.containsKey(r.key)||nm(n,r.key)):M()}function nw(n,e){let t=e.key,r=t.path.canonicalString();n.va.get(t)||n.Ca.has(r)||(C("SyncEngine","New document in limbo: "+t),n.Ca.add(r),vl(n))}function vl(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){let e=n.Ca.values().next().value;n.Ca.delete(e);let t=new x(re.fromString(e)),r=n.Na.next();n.Fa.set(r,new qu(t)),n.va=n.va.insert(t,r),$p(n.remoteStore,new Qn(Me(Ao(t.path)),r,"TargetPurposeLimboResolution",De.oe))}}async function mi(n,e,t){let r=z(n),i=[],s=[],a=[];r.ba.isEmpty()||(r.ba.forEach((c,u)=>{a.push(r.Ba(u,e,t).then(d=>{if((d||t)&&r.isPrimaryClient){let p=d&&!d.fromCache;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(d){i.push(d);let p=Eu.Ki(u.targetId,d);s.push(p)}}))}),await Promise.all(a),r.Sa.h_(i),await async function(u,d){let p=z(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>b.forEach(d,T=>b.forEach(T.qi,R=>p.persistence.referenceDelegate.addReference(g,T.targetId,R)).next(()=>b.forEach(T.Qi,R=>p.persistence.referenceDelegate.removeReference(g,T.targetId,R)))))}catch(g){if(!Mt(g))throw g;C("LocalStore","Failed to update sequence numbers: "+g)}for(let g of d){let T=g.targetId;if(!g.fromCache){let R=p.ns.get(T),N=R.snapshotVersion,O=R.withLastLimboFreeSnapshotVersion(N);p.ns=p.ns.insert(T,O)}}}(r.localStore,s))}async function rw(n,e){let t=z(n);if(!t.currentUser.isEqual(e)){C("SyncEngine","User change. New user:",e.toKey());let r=await Gp(t.localStore,e);t.currentUser=e,function(s,a){s.Oa.forEach(c=>{c.forEach(u=>{u.reject(new V(P.CANCELLED,a))})}),s.Oa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await mi(t,r.us)}}function iw(n,e){let t=z(n),r=t.Fa.get(e);if(r&&r.wa)return $().add(r.key);{let i=$(),s=t.Da.get(e);if(!s)return i;for(let a of s){let c=t.ba.get(a);i=i.unionWith(c.view.Ea)}return i}}function rm(n){let e=z(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Zp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Zv.bind(null,e),e.Sa.h_=Kv.bind(null,e.eventManager),e.Sa.ka=$v.bind(null,e.eventManager),e}function im(n){let e=z(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ew.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tw.bind(null,e),e}var si=class{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=So(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return zp(this.persistence,new ro,e.initialUser,this.serializer)}createPersistence(e){return new to(no.Hr,this.serializer)}createSharedClientState(e){return new so}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};var Gu=class extends si{constructor(e,t,r){super(),this.Qa=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Qa.initialize(this,e),await im(this.Qa.syncEngine),await pi(this.Qa.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return zp(this.persistence,new ro,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){let r=this.persistence.referenceDelegate.garbageCollector;return new au(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){let r=new Ac(t,this.persistence);return new Tc(e.asyncQueue,r)}createPersistence(e){let t=Tv(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Le.withCacheSize(this.cacheSizeBytes):Le.DEFAULT;return new wu(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Nv(),Ps(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new so}};var mo=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>jf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rw.bind(null,this.syncEngine),await jv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Lu}()}createDatastore(e){let t=So(e.databaseInfo.databaseId),r=function(s){return new Pu(s)}(e.databaseInfo);return function(s,a,c,u){return new Nu(s,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,c){return new Ou(r,i,s,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>jf(this.syncEngine,t,0),function(){return oo.D()?new oo:new Su}())}createSyncEngine(e,t){return function(i,s,a,c,u,d,p){let g=new ju(i,s,a,c,u,d);return p&&(g.La=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(r){let i=z(r);C("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await fi(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}};var Ku=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Re("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}};var $u=class{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=_e.UNAUTHENTICATED,this.clientId=Cs.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{C("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(C("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new $e;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let r=yl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}};async function dc(n,e){n.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");let t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Gp(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Gf(n,e){n.asyncQueue.verifyOperationInProgress();let t=await ow(n);C("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Bf(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Bf(e.remoteStore,i)),n._onlineComponents=e}function sw(n){return n.name==="FirebaseError"?n.code===P.FAILED_PRECONDITION||n.code===P.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function ow(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){C("FirestoreClient","Using user provided OfflineComponentProvider");try{await dc(n,n._uninitializedComponentsProvider._offline)}catch(e){let t=e;if(!sw(t))throw t;$r("Error using user provided cache. Falling back to memory cache: "+t),await dc(n,new si)}}else C("FirestoreClient","Using default OfflineComponentProvider"),await dc(n,new si);return n._offlineComponents}async function sm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(C("FirestoreClient","Using user provided OnlineComponentProvider"),await Gf(n,n._uninitializedComponentsProvider._online)):(C("FirestoreClient","Using default OnlineComponentProvider"),await Gf(n,new mo))),n._onlineComponents}function aw(n){return sm(n).then(e=>e.syncEngine)}async function cw(n){let e=await sm(n),t=e.eventManager;return t.onListen=Hv.bind(null,e.syncEngine),t.onUnlisten=Jv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Wv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Yv.bind(null,e.syncEngine),t}function uw(n,e,t={}){let r=new $e;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,c,u,d){let p=new Ku({next:T=>{a.enqueueAndForget(()=>Gv(s,g));let R=T.docs.has(c);!R&&T.fromCache?d.reject(new V(P.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&T.fromCache&&u&&u.source==="server"?d.reject(new V(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(T)},error:T=>d.reject(T)}),g=new Fu(Ao(c.path),p,{includeMetadataChanges:!0,ra:!0});return zv(s,g)}(await cw(n),n.asyncQueue,e,t,r)),r.promise}function om(n){let e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}var Kf=new Map;function lw(n,e,t){if(!t)throw new V(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function hw(n,e,t,r){if(e===!0&&r===!0)throw new V(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function $f(n){if(!x.isDocumentKey(n))throw new V(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function wl(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{let e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":M()}function go(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=wl(n);throw new V(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}var _o=class{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=om((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},yo=class{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _o({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _o(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new pc;switch(r.type){case"firstParty":return new _c(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let r=Kf.get(t);r&&(C("ComponentProvider","Removing Datastore"),Kf.delete(t),r.terminate())}(this),Promise.resolve()}};var Hu=class n{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new n(this.firestore,e,this._query)}},Fe=class n{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n(this.firestore,e,this._key)}},oi=class n extends Hu{constructor(e,t,r){super(e,t,Ao(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new Fe(this.firestore,null,new x(e))}withConverter(e){return new n(this.firestore,e,this._path)}};function am(n,e,...t){if(n=me(n),arguments.length===1&&(e=Cs.newId()),lw("doc","path",e),n instanceof yo){let r=re.fromString(e,...t);return $f(r),new Fe(n,null,new x(r))}{if(!(n instanceof Fe||n instanceof oi))throw new V(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(re.fromString(e,...t));return $f(r),new Fe(n.firestore,n instanceof oi?n.converter:null,new x(r))}}var Wu=class{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new ao(this,"async_queue_retry"),this.hu=()=>{let t=Ps();t&&C("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};let e=Ps();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;let t=Ps();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});let t=new $e;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Mt(e))throw e;C("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){let t=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;let i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw Re("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=t,t}enqueueAfterDelay(e,t,r){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);let i=xu.createAndSchedule(this,e,t,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&M()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(let t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(let t of this._u)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){let t=this._u.indexOf(e);this._u.splice(t,1)}};var ai=class extends yo{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new Wu}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||um(this),this._firestoreClient.terminate()}};function El(n,e,t){t||(t="(default)");let r=wr(n,"firestore");if(r.isInitialized(t)){let i=r.getImmediate({identifier:t}),s=r.getOptions(t);if(yt(s,e))return i;throw new V(P.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new V(P.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:t})}function cm(n){return n._firestoreClient||um(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function um(n){var e,t,r;let i=n._freezeSettings(),s=function(c,u,d,p){return new bc(c,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,om(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new $u(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}var ci=class n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n(Ae.fromBase64String(e))}catch(t){throw new V(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new n(Ae.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}};var ui=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new de(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var Io=class{constructor(e){this._methodName=e}};var li=class{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}};var dw=/^__.*__$/,Qu=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new nt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Vt(e,this.data,t,this.fieldTransforms)}};function lm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}var Ju=class n{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new n(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return vo(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(lm(this.fu)&&dw.test(e))throw this.Du('Document fields cannot begin and end with "__"')}},Yu=class{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||So(e)}Fu(e,t,r,i=!1){return new Ju({fu:e,methodName:t,vu:r,path:de.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function fw(n){let e=n._freezeSettings(),t=So(n._databaseId);return new Yu(n._databaseId,!!e.ignoreUndefinedProperties,t)}function pw(n,e,t,r,i,s={}){let a=n.Fu(s.merge||s.mergeFields?2:0,e,t,i);pm("Data must be an object, but it was:",a,r);let c=dm(r,a),u,d;if(s.merge)u=new Ge(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){let p=[];for(let g of s.mergeFields){let T=mw(e,g,t);if(!a.contains(T))throw new V(P.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);_w(p,T)||p.push(T)}u=new Ge(p),d=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,d=a.fieldTransforms;return new Qu(new Oe(c),u,d)}function hm(n,e){if(fm(n=me(n)))return pm("Unsupported field value:",e,n),dm(n,e);if(n instanceof Io)return function(r,i){if(!lm(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);let s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){let s=[],a=0;for(let c of r){let u=hm(c,i.bu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return XI(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){let s=ce.fromDate(r);return{timestampValue:Wn(i.serializer,s)}}if(r instanceof ce){let s=new ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wn(i.serializer,s)}}if(r instanceof li)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ci)return{bytesValue:Ap(i.serializer,r._byteString)};if(r instanceof Fe){let s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:dl(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${wl(r)}`)}(n,e)}function dm(n,e){let t={};return np(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zn(n,(r,i)=>{let s=hm(i,e.pu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function fm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ce||n instanceof li||n instanceof ci||n instanceof Fe||n instanceof Io)}function pm(n,e,t){if(!fm(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){let r=wl(t);throw r==="an object"?e.Du(n+" a custom object"):e.Du(n+" "+r)}}function mw(n,e,t){if((e=me(e))instanceof ui)return e._internalPath;if(typeof e=="string")return mm(n,e);throw vo("Field path arguments must be of type string or ",n,!1,void 0,t)}var gw=new RegExp("[~\\*/\\[\\]]");function mm(n,e,t){if(e.search(gw)>=0)throw vo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ui(...e.split("."))._internalPath}catch{throw vo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function vo(n,e,t,r,i){let s=r&&!r.isEmpty(),a=i!==void 0,c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new V(P.INVALID_ARGUMENT,c+n+u)}function _w(n,e){return n.some(t=>t.isEqual(e))}var wo=class{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new Xu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(gm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Xu=class extends wo{data(){return super.data()}};function gm(n,e){return typeof e=="string"?mm(n,e):e instanceof ui?e._internalPath:e._delegate._internalPath}var Zu=class{convertValue(e,t="none"){switch(an(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Dt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw M()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return Zn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new li(ae(e.latitude),ae(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=ul(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Jr(e));default:return null}}convertTimestamp(e){let t=ft(e);return new ce(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=re.fromString(e);U(xp(r));let i=new qn(r.get(1),r.get(3)),s=new x(r.popFirst(5));return i.isEqual(t)||Re(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}};function yw(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}var el=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},Eo=class extends wo{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new tl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(gm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},tl=class extends Eo{data(e={}){return super.data(e)}};function _m(n){n=go(n,Fe);let e=go(n.firestore,ai);return uw(cm(e),n._key).then(t=>vw(e,n,t))}var nl=class extends Zu{constructor(e){super(),this.firestore=e}convertBytes(e){return new ci(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new Fe(this.firestore,null,t)}};function ym(n,e,t){n=go(n,Fe);let r=go(n.firestore,ai),i=yw(n.converter,e,t);return Iw(r,[pw(fw(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Ke.none())])}function Iw(n,e){return function(r,i){let s=new $e;return r.asyncQueue.enqueueAndForget(async()=>Xv(await aw(r),i,s)),s.promise}(cm(n),e)}function vw(n,e,t){let r=t.docs.get(e._key),i=new nl(n);return new Eo(n,i,e._key,r,new el(t.hasPendingWrites,t.fromCache),e.converter)}var rl=class{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=ww(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}};function Im(n){return new rl(n)}var il=class{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=new mo,this._offlineComponentProvider=new Gu(this._onlineComponentProvider,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}};function ww(n){return new il(n==null?void 0:n.forceOwnership)}(function(e,t=!0){(function(i){Xn=i})(Et),wt(new Ve("firestore",(r,{instanceIdentifier:i,options:s})=>{let a=r.getProvider("app").getImmediate(),c=new ai(new mc(r.getProvider("auth-internal")),new Ic(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new V(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qn(d.options.projectId,p)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),qe(Jd,"4.6.3",e),qe(Jd,"4.6.3","esm2017")})();var Tl=wa({apiKey:"AIzaSyDnnCbABavq2VhtIi-WH028hwPrTCahp6s",authDomain:"hanguk-6fdea.firebaseapp.com",projectId:"hanguk-6fdea",storageBucket:"hanguk-6fdea.firebasestorage.app",messagingSenderId:"152035634964",appId:"1:152035634964:web:4ccccb1f299d9843d8dc01"}),vm=tc(Tl);Ja(vm,gs).catch(()=>{});var Al;try{Al=El(Tl,{localCache:Im()})}catch{Al=El(Tl,{})}window.FB={auth:vm,db:Al,onAuthStateChanged:Ya,signInWithEmailAndPassword:Qa,createUserWithEmailAndPassword:Wa,sendPasswordResetEmail:Ha,signOut:Xa,doc:am,getDoc:_m,setDoc:ym};window.dispatchEvent(new Event("fb-ready"));})();
/*! Bundled license information:

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-454a0f5f.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
