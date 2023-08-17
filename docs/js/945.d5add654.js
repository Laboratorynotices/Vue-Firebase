"use strict";(self["webpackChunkvue_firebase"]=self["webpackChunkvue_firebase"]||[]).push([[945],{6077:function(t,e,n){var r=n(614),i=String,s=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw s("Can't set "+i(t)+" as a prototype")}},5787:function(t,e,n){var r=n(7976),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw i("Incorrect invocation")}},3013:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){var r,i,s,o=n(3013),a=n(9781),c=n(7854),u=n(614),h=n(111),l=n(2597),d=n(648),f=n(6330),p=n(8880),g=n(8052),m=n(7045),y=n(7976),v=n(9518),w=n(7674),E=n(5112),_=n(9711),b=n(9909),T=b.enforce,I=b.get,S=c.Int8Array,C=S&&S.prototype,A=c.Uint8ClampedArray,D=A&&A.prototype,N=S&&v(S),k=C&&v(C),R=Object.prototype,x=c.TypeError,O=E("toStringTag"),L=_("TYPED_ARRAY_TAG"),M="TypedArrayConstructor",P=o&&!!w&&"Opera"!==d(c.opera),F=!1,V={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},U={BigInt64Array:8,BigUint64Array:8},B=function(t){if(!h(t))return!1;var e=d(t);return"DataView"===e||l(V,e)||l(U,e)},j=function(t){var e=v(t);if(h(e)){var n=I(e);return n&&l(n,M)?n[M]:j(e)}},q=function(t){if(!h(t))return!1;var e=d(t);return l(V,e)||l(U,e)},$=function(t){if(q(t))return t;throw x("Target is not a typed array")},z=function(t){if(u(t)&&(!w||y(N,t)))return t;throw x(f(t)+" is not a typed array constructor")},K=function(t,e,n,r){if(a){if(n)for(var i in V){var s=c[i];if(s&&l(s.prototype,t))try{delete s.prototype[t]}catch(o){try{s.prototype[t]=e}catch(u){}}}k[t]&&!n||g(k,t,n?e:P&&C[t]||e,r)}},G=function(t,e,n){var r,i;if(a){if(w){if(n)for(r in V)if(i=c[r],i&&l(i,t))try{delete i[t]}catch(s){}if(N[t]&&!n)return;try{return g(N,t,n?e:P&&N[t]||e)}catch(s){}}for(r in V)i=c[r],!i||i[t]&&!n||g(i,t,e)}};for(r in V)i=c[r],s=i&&i.prototype,s?T(s)[M]=i:P=!1;for(r in U)i=c[r],s=i&&i.prototype,s&&(T(s)[M]=i);if((!P||!u(N)||N===Function.prototype)&&(N=function(){throw x("Incorrect invocation")},P))for(r in V)c[r]&&w(c[r],N);if((!P||!k||k===R)&&(k=N.prototype,P))for(r in V)c[r]&&w(c[r].prototype,k);if(P&&v(D)!==k&&w(D,k),a&&!l(k,O))for(r in F=!0,m(k,O,{configurable:!0,get:function(){return h(this)?this[L]:void 0}}),V)c[r]&&p(c[r],L,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:P,TYPED_ARRAY_TAG:F&&L,aTypedArray:$,aTypedArrayConstructor:z,exportTypedArrayMethod:K,exportTypedArrayStaticMethod:G,getTypedArrayConstructor:j,isView:B,isTypedArray:q,TypedArray:N,TypedArrayPrototype:k}},7745:function(t,e,n){var r=n(6244);t.exports=function(t,e){var n=0,i=r(e),s=new t(i);while(i>n)s[n]=e[n++];return s}},1843:function(t,e,n){var r=n(6244);t.exports=function(t,e){for(var n=r(t),i=new e(n),s=0;s<n;s++)i[s]=t[n-s-1];return i}},1572:function(t,e,n){var r=n(6244),i=n(9303),s=RangeError;t.exports=function(t,e,n,o){var a=r(t),c=i(n),u=c<0?a+c:c;if(u>=a||u<0)throw s("Incorrect index");for(var h=new e(a),l=0;l<a;l++)h[l]=l===u?o:t[l];return h}},648:function(t,e,n){var r=n(1694),i=n(614),s=n(4326),o=n(5112),a=o("toStringTag"),c=Object,u="Arguments"==s(function(){return arguments}()),h=function(t,e){try{return t[e]}catch(n){}};t.exports=r?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=h(e=c(t),a))?n:u?s(e):"Object"==(r=s(e))&&i(e.callee)?"Arguments":r}},8544:function(t,e,n){var r=n(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},7045:function(t,e,n){var r=n(6339),i=n(3070);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),i.f(t,e,n)}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},1060:function(t,e,n){var r=n(1702),i=Error,s=r("".replace),o=function(t){return String(i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);t.exports=function(t,e){if(c&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=s(t,a,"");return t}},5668:function(t,e,n){var r=n(1702),i=n(9662);t.exports=function(t,e,n){try{return r(i(Object.getOwnPropertyDescriptor(t,e)[n]))}catch(s){}}},9587:function(t,e,n){var r=n(614),i=n(111),s=n(7674);t.exports=function(t,e,n){var o,a;return s&&r(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},4067:function(t,e,n){var r=n(648);t.exports=function(t){var e=r(t);return"BigInt64Array"==e||"BigUint64Array"==e}},6277:function(t,e,n){var r=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},9518:function(t,e,n){var r=n(2597),i=n(614),s=n(7908),o=n(6200),a=n(8544),c=o("IE_PROTO"),u=Object,h=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=s(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof u?h:null}},7674:function(t,e,n){var r=n(5668),i=n(9670),s=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.prototype,"__proto__","set"),t(n,[]),e=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),e?t(n,r):n.__proto__=r,n}}():void 0)},4599:function(t,e,n){var r=n(7593),i=TypeError;t.exports=function(t){var e=r(t,"number");if("number"==typeof e)throw i("Can't convert number to bigint");return BigInt(e)}},1694:function(t,e,n){var r=n(5112),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},1340:function(t,e,n){var r=n(648),i=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},1439:function(t,e,n){var r=n(1843),i=n(260),s=i.aTypedArray,o=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;o("toReversed",(function(){return r(s(this),a(this))}))},7585:function(t,e,n){var r=n(260),i=n(1702),s=n(9662),o=n(7745),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,h=i(r.TypedArrayPrototype.sort);u("toSorted",(function(t){void 0!==t&&s(t);var e=a(this),n=o(c(e),e);return h(n,t)}))},5315:function(t,e,n){var r=n(1572),i=n(260),s=n(4067),o=n(9303),a=n(4599),c=i.aTypedArray,u=i.getTypedArrayConstructor,h=i.exportTypedArrayMethod,l=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}();h("with",{with:function(t,e){var n=c(this),i=o(t),h=s(n)?a(e):+e;return r(n,u(n),i,h)}}["with"],!l)},2801:function(t,e,n){var r=n(2109),i=n(7854),s=n(5005),o=n(9114),a=n(3070).f,c=n(2597),u=n(5787),h=n(9587),l=n(6277),d=n(3678),f=n(1060),p=n(9781),g=n(1913),m="DOMException",y=s("Error"),v=s(m),w=function(){u(this,E);var t=arguments.length,e=l(t<1?void 0:arguments[0]),n=l(t<2?void 0:arguments[1],"Error"),r=new v(e,n),i=y(e);return i.name=m,a(r,"stack",o(1,f(i.stack,1))),h(r,this,w),r},E=w.prototype=v.prototype,_="stack"in y(m),b="stack"in new v(1,2),T=v&&p&&Object.getOwnPropertyDescriptor(i,m),I=!!T&&!(T.writable&&T.configurable),S=_&&!I&&!b;r({global:!0,constructor:!0,forced:g||S},{DOMException:S?w:v});var C=s(m),A=C.prototype;if(A.constructor!==C)for(var D in g||a(A,"constructor",o(1,C)),d)if(c(d,D)){var N=d[D],k=N.s;c(C,k)||a(C,k,o(6,N.c))}},1945:function(t,e,n){n.r(e),n.d(e,{default:function(){return Vp}});var r=n(3396),i=n(7139),s=n(4870);n(7658),n(2801);
/**
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
 */
const o=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},a=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,h=(3&e)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(l=64)),r.push(n[u],n[h],n[l],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(o(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):a(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,o=s?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const h=i<t.length,l=h?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==c||null==l)throw new u;const d=e<<2|o>>4;if(r.push(d),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
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
 */class u extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const h=function(t){const e=o(t);return c.encodeByteArray(e,!0)},l=function(t){return h(t).replace(/\./g,"")},d=function(t){try{return c.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
 */
function f(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
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
 */const p=()=>f().__FIREBASE_DEFAULTS__,g=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/Vue-Firebase/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},m=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&d(t[1]);return e&&JSON.parse(e)},y=()=>{try{return p()||g()||m()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},v=t=>{var e,n;return null===(n=null===(e=y())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},w=t=>{const e=v(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},E=()=>{var t;return null===(t=y())||void 0===t?void 0:t.config};
/**
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
 */
class _{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
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
 */function b(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[l(JSON.stringify(n)),l(JSON.stringify(o)),a].join(".")}
/**
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
 */function T(){try{return"object"===typeof indexedDB}catch(t){return!1}}function I(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
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
 */
const S="FirebaseError";class C extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=S,Object.setPrototypeOf(this,C.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,A.prototype.create)}}class A{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?D(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new C(r,o,n);return a}}function D(t,e){return t.replace(N,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const N=/\{\$([^}]+)}/g;
/**
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
 */function k(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(R(n)&&R(s)){if(!k(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function R(t){return null!==t&&"object"===typeof t}
/**
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
 */
/**
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
 */
function x(t){return t&&t._delegate?t._delegate:t}class O{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
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
 */const L="[DEFAULT]";
/**
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
 */class M{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new _;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(F(t))try{this.getOrInitializeService({instanceIdentifier:L})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=L){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=L){return this.instances.has(t)}getOptions(t=L){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:P(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=L){return this.component?this.component.multipleInstances?t:L:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function P(t){return t===L?void 0:t}function F(t){return"EAGER"===t.instantiationMode}
/**
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
 */class V{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new M(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
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
 */
const U=[];var B;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(B||(B={}));const j={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},q=B.INFO,$={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},z=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=$[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class K{constructor(t){this.name=t,this._logLevel=q,this._logHandler=z,this._userLogHandler=null,U.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in B))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?j[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...t),this._logHandler(this,B.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...t),this._logHandler(this,B.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,B.INFO,...t),this._logHandler(this,B.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,B.WARN,...t),this._logHandler(this,B.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...t),this._logHandler(this,B.ERROR,...t)}}const G=(t,e)=>e.some((e=>t instanceof e));let H,Q;function W(){return H||(H=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function X(){return Q||(Q=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Y=new WeakMap,J=new WeakMap,Z=new WeakMap,tt=new WeakMap,et=new WeakMap;function nt(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(ct(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&Y.set(e,t)})).catch((()=>{})),et.set(e,t),e}function rt(t){if(J.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));J.set(t,e)}let it={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return J.get(t);if("objectStoreNames"===e)return t.objectStoreNames||Z.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ct(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function st(t){it=t(it)}function ot(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?X().includes(t)?function(...e){return t.apply(ut(this),e),ct(Y.get(this))}:function(...e){return ct(t.apply(ut(this),e))}:function(e,...n){const r=t.call(ut(this),e,...n);return Z.set(r,e.sort?e.sort():[e]),ct(r)}}function at(t){return"function"===typeof t?ot(t):(t instanceof IDBTransaction&&rt(t),G(t,W())?new Proxy(t,it):t)}function ct(t){if(t instanceof IDBRequest)return nt(t);if(tt.has(t))return tt.get(t);const e=at(t);return e!==t&&(tt.set(t,e),et.set(e,t)),e}const ut=t=>et.get(t);function ht(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ct(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(ct(o.result),t.oldVersion,t.newVersion,ct(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const lt=["get","getKey","getAll","getAllKeys","count"],dt=["put","add","delete","clear"],ft=new Map;function pt(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(ft.get(e))return ft.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=dt.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!lt.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return ft.set(e,s),s}st((t=>({...t,get:(e,n,r)=>pt(e,n)||t.get(e,n,r),has:(e,n)=>!!pt(e,n)||t.has(e,n)})));
/**
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
 */
class gt{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(mt(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function mt(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const yt="@firebase/app",vt="0.9.15",wt=new K("@firebase/app"),Et="@firebase/app-compat",_t="@firebase/analytics-compat",bt="@firebase/analytics",Tt="@firebase/app-check-compat",It="@firebase/app-check",St="@firebase/auth",Ct="@firebase/auth-compat",At="@firebase/database",Dt="@firebase/database-compat",Nt="@firebase/functions",kt="@firebase/functions-compat",Rt="@firebase/installations",xt="@firebase/installations-compat",Ot="@firebase/messaging",Lt="@firebase/messaging-compat",Mt="@firebase/performance",Pt="@firebase/performance-compat",Ft="@firebase/remote-config",Vt="@firebase/remote-config-compat",Ut="@firebase/storage",Bt="@firebase/storage-compat",jt="@firebase/firestore",qt="@firebase/firestore-compat",$t="firebase",zt="10.1.0",Kt="[DEFAULT]",Gt={[yt]:"fire-core",[Et]:"fire-core-compat",[bt]:"fire-analytics",[_t]:"fire-analytics-compat",[It]:"fire-app-check",[Tt]:"fire-app-check-compat",[St]:"fire-auth",[Ct]:"fire-auth-compat",[At]:"fire-rtdb",[Dt]:"fire-rtdb-compat",[Nt]:"fire-fn",[kt]:"fire-fn-compat",[Rt]:"fire-iid",[xt]:"fire-iid-compat",[Ot]:"fire-fcm",[Lt]:"fire-fcm-compat",[Mt]:"fire-perf",[Pt]:"fire-perf-compat",[Ft]:"fire-rc",[Vt]:"fire-rc-compat",[Ut]:"fire-gcs",[Bt]:"fire-gcs-compat",[jt]:"fire-fst",[qt]:"fire-fst-compat","fire-js":"fire-js",[$t]:"fire-js-all"},Ht=new Map,Qt=new Map;function Wt(t,e){try{t.container.addComponent(e)}catch(n){wt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xt(t){const e=t.name;if(Qt.has(e))return wt.debug(`There were multiple attempts to register component ${e}.`),!1;Qt.set(e,t);for(const n of Ht.values())Wt(n,t);return!0}function Yt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
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
 */
const Jt={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Zt=new A("app","Firebase",Jt);
/**
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
 */
class te{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new O("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}}
/**
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
 */const ee=zt;function ne(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const r=Object.assign({name:Kt,automaticDataCollectionEnabled:!1},e),i=r.name;if("string"!==typeof i||!i)throw Zt.create("bad-app-name",{appName:String(i)});if(n||(n=E()),!n)throw Zt.create("no-options");const s=Ht.get(i);if(s){if(k(n,s.options)&&k(r,s.config))return s;throw Zt.create("duplicate-app",{appName:i})}const o=new V(i);for(const c of Qt.values())o.addComponent(c);const a=new te(n,r,o);return Ht.set(i,a),a}function re(t=Kt){const e=Ht.get(t);if(!e&&t===Kt&&E())return ne();if(!e)throw Zt.create("no-app",{appName:t});return e}function ie(t,e,n){var r;let i=null!==(r=Gt[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void wt.warn(t.join(" "))}Xt(new O(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
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
 */
const se="firebase-heartbeat-database",oe=1,ae="firebase-heartbeat-store";let ce=null;function ue(){return ce||(ce=ht(se,oe,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ae)}}}).catch((t=>{throw Zt.create("idb-open",{originalErrorMessage:t.message})}))),ce}async function he(t){try{const e=await ue(),n=await e.transaction(ae).objectStore(ae).get(de(t));return n}catch(e){if(e instanceof C)wt.warn(e.message);else{const t=Zt.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});wt.warn(t.message)}}}async function le(t,e){try{const n=await ue(),r=n.transaction(ae,"readwrite"),i=r.objectStore(ae);await i.put(e,de(t)),await r.done}catch(n){if(n instanceof C)wt.warn(n.message);else{const t=Zt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});wt.warn(t.message)}}}function de(t){return`${t.name}!${t.options.appId}`}
/**
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
 */const fe=1024,pe=2592e6;class ge{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ve(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=me();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=pe})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=me(),{heartbeatsToSend:e,unsentEntries:n}=ye(this._heartbeatsCache.heartbeats),r=l(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function me(){const t=new Date;return t.toISOString().substring(0,10)}function ye(t,e=fe){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),we(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),we(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ve{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!T()&&I().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await he(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return le(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return le(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function we(t){return l(JSON.stringify({version:2,heartbeats:t})).length}
/**
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
 */function Ee(t){Xt(new O("platform-logger",(t=>new gt(t)),"PRIVATE")),Xt(new O("heartbeat",(t=>new ge(t)),"PRIVATE")),ie(yt,vt,t),ie(yt,vt,"esm2017"),ie("fire-js","")}Ee("");var _e="firebase",be="10.1.0";
/**
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
 */
ie(_e,be,"app");n(1439),n(7585),n(5315);var Te,Ie="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},Se={},Ce=Ce||{},Ae=Ie||self;function De(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function Ne(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function ke(t){return Object.prototype.hasOwnProperty.call(t,Re)&&t[Re]||(t[Re]=++xe)}var Re="closure_uid_"+(1e9*Math.random()>>>0),xe=0;function Oe(t,e,n){return t.call.apply(t.bind,arguments)}function Le(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Me(t,e,n){return Me=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Oe:Le,Me.apply(null,arguments)}function Pe(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Fe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function Ve(){this.s=this.s,this.o=this.o}var Ue=0;Ve.prototype.s=!1,Ve.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==Ue)||ke(this)},Ve.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Be=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function je(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function qe(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(De(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}function $e(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}$e.prototype.h=function(){this.defaultPrevented=!0};var ze=function(){if(!Ae.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Ae.addEventListener("test",(()=>{}),e),Ae.removeEventListener("test",(()=>{}),e)}catch(n){}return t}();function Ke(t){return/^[\s\xa0]*$/.test(t)}function Ge(){var t=Ae.navigator;return t&&(t=t.userAgent)?t:""}function He(t){return-1!=Ge().indexOf(t)}function Qe(t){return Qe[" "](t),t}function We(t,e){var n=Ps;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}Qe[" "]=function(){};var Xe,Ye,Je=He("Opera"),Ze=He("Trident")||He("MSIE"),tn=He("Edge"),en=tn||Ze,nn=He("Gecko")&&!(-1!=Ge().toLowerCase().indexOf("webkit")&&!He("Edge"))&&!(He("Trident")||He("MSIE"))&&!He("Edge"),rn=-1!=Ge().toLowerCase().indexOf("webkit")&&!He("Edge");function sn(){var t=Ae.document;return t?t.documentMode:void 0}t:{var on="",an=function(){var t=Ge();return nn?/rv:([^\);]+)(\)|;)/.exec(t):tn?/Edge\/([\d\.]+)/.exec(t):Ze?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):rn?/WebKit\/(\S+)/.exec(t):Je?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(an&&(on=an?an[1]:""),Ze){var cn=sn();if(null!=cn&&cn>parseFloat(on)){Xe=String(cn);break t}}Xe=on}if(Ae.document&&Ze){var un=sn();Ye=un||(parseInt(Xe,10)||void 0)}else Ye=void 0;var hn=Ye;function ln(t,e){if($e.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(nn){t:{try{Qe(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:dn[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ln.$.h.call(this)}}Fe(ln,$e);var dn={2:"touch",3:"pen",4:"mouse"};ln.prototype.h=function(){ln.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var fn="closure_listenable_"+(1e6*Math.random()|0),pn=0;function gn(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++pn,this.fa=this.ia=!1}function mn(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function yn(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function vn(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function wn(t){const e={};for(const n in t)e[n]=t[n];return e}const En="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _n(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<En.length;e++)n=En[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function bn(t){this.src=t,this.g={},this.h=0}function Tn(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=Be(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(mn(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function In(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}bn.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=In(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new gn(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};var Sn="closure_lm_"+(1e6*Math.random()|0),Cn={};function An(t,e,n,r,i){if(r&&r.once)return kn(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)An(t,e[s],n,r,i);return null}return n=Fn(n),t&&t[fn]?t.O(e,n,Ne(r)?!!r.capture:!!r,i):Dn(t,e,n,!1,r,i)}function Dn(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ne(i)?!!i.capture:!!i,a=Mn(t);if(a||(t[Sn]=a=new bn(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=Nn(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ze||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(On(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function Nn(){function t(n){return e.call(t.src,t.listener,n)}const e=Ln;return t}function kn(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)kn(t,e[s],n,r,i);return null}return n=Fn(n),t&&t[fn]?t.P(e,n,Ne(r)?!!r.capture:!!r,i):Dn(t,e,n,!0,r,i)}function Rn(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Rn(t,e[s],n,r,i);else r=Ne(r)?!!r.capture:!!r,n=Fn(n),t&&t[fn]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=In(s,n,r,i),-1<n&&(mn(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Mn(t))&&(e=t.g[e.toString()],t=-1,e&&(t=In(e,n,r,i)),(n=-1<t?e[t]:null)&&xn(n))}function xn(t){if("number"!==typeof t&&t&&!t.fa){var e=t.src;if(e&&e[fn])Tn(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(On(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Mn(e))?(Tn(n,t),0==n.h&&(n.src=null,e[Sn]=null)):mn(t)}}}function On(t){return t in Cn?Cn[t]:Cn[t]="on"+t}function Ln(t,e){if(t.fa)t=!0;else{e=new ln(e,this);var n=t.listener,r=t.la||t.src;t.ia&&xn(t),t=n.call(r,e)}return t}function Mn(t){return t=t[Sn],t instanceof bn?t:null}var Pn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fn(t){return"function"===typeof t?t:(t[Pn]||(t[Pn]=function(e){return t.handleEvent(e)}),t[Pn])}function Vn(){Ve.call(this),this.i=new bn(this),this.S=this,this.J=null}function Un(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,"string"===typeof e)e=new $e(e,t);else if(e instanceof $e)e.target=e.target||t;else{var i=e;e=new $e(r,t),_n(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Bn(o,r,!0,e)&&i}if(o=e.g=t,i=Bn(o,r,!0,e)&&i,i=Bn(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Bn(o,r,!1,e)&&i}function Bn(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Tn(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}Fe(Vn,Ve),Vn.prototype[fn]=!0,Vn.prototype.removeEventListener=function(t,e,n,r){Rn(this,t,e,n,r)},Vn.prototype.N=function(){if(Vn.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)mn(n[r]);delete e.g[t],e.h--}}this.J=null},Vn.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Vn.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var jn=Ae.JSON.stringify;class qn{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function $n(){var t=Yn;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class zn{constructor(){this.h=this.g=null}add(t,e){const n=Kn.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Kn=new qn((()=>new Gn),(t=>t.reset()));class Gn{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Hn(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Qn(t){Ae.setTimeout((()=>{throw t}),0)}let Wn,Xn=!1,Yn=new zn,Jn=()=>{const t=Ae.Promise.resolve(void 0);Wn=()=>{t.then(Zn)}};var Zn=()=>{for(var t;t=$n();){try{t.h.call(t.g)}catch(n){Qn(n)}var e=Kn;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Xn=!1};function tr(t,e){Vn.call(this),this.h=t||1,this.g=e||Ae,this.j=Me(this.qb,this),this.l=Date.now()}function er(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function nr(t,e,n){if("function"===typeof t)n&&(t=Me(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Me(t.handleEvent,t)}return 2147483647<Number(e)?-1:Ae.setTimeout(t,e||0)}function rr(t){t.g=nr((()=>{t.g=null,t.i&&(t.i=!1,rr(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Fe(tr,Vn),Te=tr.prototype,Te.ga=!1,Te.T=null,Te.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Un(this,"tick"),this.ga&&(er(this),this.start()))}},Te.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Te.N=function(){tr.$.N.call(this),er(this),delete this.g};class ir extends Ve{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:rr(this)}N(){super.N(),this.g&&(Ae.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function sr(t){Ve.call(this),this.h=t,this.g={}}Fe(sr,Ve);var or=[];function ar(t,e,n,r){Array.isArray(n)||(n&&(or[0]=n.toString()),n=or);for(var i=0;i<n.length;i++){var s=An(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function cr(t){yn(t.g,(function(t,e){this.g.hasOwnProperty(e)&&xn(t)}),t),t.g={}}function ur(){this.g=!0}function hr(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function lr(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function dr(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+pr(t,n)+(r?" "+r:"")}))}function fr(t,e){t.info((function(){return"TIMEOUT: "+e}))}function pr(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return jn(n)}catch(a){return e}}sr.prototype.N=function(){sr.$.N.call(this),cr(this)},sr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},ur.prototype.Ea=function(){this.g=!1},ur.prototype.info=function(){};var gr={},mr=null;function yr(){return mr=mr||new Vn}function vr(t){$e.call(this,gr.Ta,t)}function wr(t){const e=yr();Un(e,new vr(e))}function Er(t,e){$e.call(this,gr.STAT_EVENT,t),this.stat=e}function _r(t){const e=yr();Un(e,new Er(e,t))}function br(t,e){$e.call(this,gr.Ua,t),this.size=e}function Tr(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return Ae.setTimeout((function(){t()}),e)}gr.Ta="serverreachability",Fe(vr,$e),gr.STAT_EVENT="statevent",Fe(Er,$e),gr.Ua="timingevent",Fe(br,$e);var Ir={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Sr={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Cr(){}function Ar(t){return t.h||(t.h=t.i())}function Dr(){}Cr.prototype.h=null;var Nr,kr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Rr(){$e.call(this,"d")}function xr(){$e.call(this,"c")}function Or(){}function Lr(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new sr(this),this.P=Pr,t=en?125:void 0,this.V=new tr(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Mr}function Mr(){this.i=null,this.g="",this.h=!1}Fe(Rr,$e),Fe(xr,$e),Fe(Or,Cr),Or.prototype.g=function(){return new XMLHttpRequest},Or.prototype.i=function(){return{}},Nr=new Or;var Pr=45e3,Fr={},Vr={};function Ur(t,e,n){t.L=1,t.v=ai(ni(e)),t.s=n,t.S=!0,Br(t,null)}function Br(t,e){t.G=Date.now(),zr(t),t.A=ni(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Ei(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Mr,t.g=Ss(t.l,n?e:null,!t.s),0<t.O&&(t.M=new ir(Me(t.Pa,t,t.g),t.O)),ar(t.U,t.g,"readystatechange",t.nb),e=t.I?wn(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),wr(),hr(t.j,t.u,t.A,t.m,t.W,t.s)}function jr(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function qr(t,e,n){let r,i=!0;for(;!t.J&&t.C<n.length;){if(r=$r(t,n),r==Vr){4==e&&(t.o=4,_r(14),i=!1),dr(t.j,t.m,null,"[Incomplete Response]");break}if(r==Fr){t.o=4,_r(15),dr(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}dr(t.j,t.m,r,null),Wr(t,r)}jr(t)&&r!=Vr&&r!=Fr&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,_r(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ys(e),e.M=!0,_r(11))):(dr(t.j,t.m,n,"[Invalid Chunked Response]"),Qr(t),Hr(t))}function $r(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Vr:(n=Number(e.substring(n,r)),isNaN(n)?Fr:(r+=1,r+n>e.length?Vr:(e=e.slice(r,r+n),t.C=r+n,e)))}function zr(t){t.Y=Date.now()+t.P,Kr(t,t.P)}function Kr(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Tr(Me(t.lb,t),e)}function Gr(t){t.B&&(Ae.clearTimeout(t.B),t.B=null)}function Hr(t){0==t.l.H||t.J||Es(t.l,t)}function Qr(t){Gr(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,er(t.V),cr(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Wr(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||Di(n.i,t)))if(!t.K&&Di(n.i,t)&&3==n.H){try{var r=n.Ja.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;ws(n),cs(n)}ms(n),_r(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=Tr(Me(n.ib,n),6e3));if(1>=Ai(n.i)&&n.oa){try{n.oa()}catch(u){}n.oa=void 0}}else bs(n,11)}else if((t.K||n.g==t)&&ws(n),!Ke(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const e=u[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const h=u[5];null!=h&&"number"===typeof h&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Ni(s,s.h),s.h=null))}if(r.F){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.Da=t,oi(r.I,r.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Is(r,r.J?r.pa:null,r.Y),o.K){ki(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Gr(a),zr(a)),r.g=o}else gs(r);0<n.j.length&&hs(n)}else"stop"!=u[0]&&"close"!=u[0]||bs(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?bs(n,7):as(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}wr(4)}catch(u){}}function Xr(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(De(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Yr(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(De(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Jr(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(De(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Yr(t),r=Xr(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}Te=Lr.prototype,Te.setTimeout=function(t){this.P=t},Te.nb=function(t){t=t.target;const e=this.M;e&&3==ts(t)?e.l():this.Pa(t)},Te.Pa=function(t){try{if(t==this.g)t:{const h=ts(this.g);var e=this.g.Ia();const l=this.g.da();if(!(3>h)&&(3!=h||en||this.g&&(this.h.h||this.g.ja()||es(this.g)))){this.J||4!=h||7==e||wr(8==e||0>=l?3:2),Gr(this);var n=this.g.da();this.ca=n;e:if(jr(this)){var r=es(this.g);t="";var i=r.length,s=4==ts(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Qr(this),Hr(this);var o="";break e}this.h.i=new Ae.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,lr(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ke(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,_r(12),Qr(this),Hr(this);break t}dr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Wr(this,n)}this.S?(qr(this,h,o),en&&this.i&&3==h&&(ar(this.U,this.V,"tick",this.mb),this.V.start())):(dr(this.j,this.m,o,null),Wr(this,o)),4==h&&Qr(this),this.i&&!this.J&&(4==h?Es(this.l,this):(this.i=!1,zr(this)))}else ns(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,_r(12)):(this.o=0,_r(13)),Qr(this),Hr(this)}}}catch(h){}},Te.mb=function(){if(this.g){var t=ts(this.g),e=this.g.ja();this.C<e.length&&(Gr(this),qr(this,t,e),this.i&&4!=t&&zr(this))}},Te.cancel=function(){this.J=!0,Qr(this)},Te.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(fr(this.j,this.A),2!=this.L&&(wr(),_r(17)),Qr(this),this.o=2,Hr(this)):Kr(this,this.Y-t)};var Zr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ti(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ei(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ei){this.h=t.h,ri(this,t.j),this.s=t.s,this.g=t.g,ii(this,t.m),this.l=t.l;var e=t.i,n=new mi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),si(this,n),this.o=t.o}else t&&(e=String(t).match(Zr))?(this.h=!1,ri(this,e[1]||"",!0),this.s=ci(e[2]||""),this.g=ci(e[3]||"",!0),ii(this,e[4]),this.l=ci(e[5]||"",!0),si(this,e[6]||"",!0),this.o=ci(e[7]||"")):(this.h=!1,this.i=new mi(null,this.h))}function ni(t){return new ei(t)}function ri(t,e,n){t.j=n?ci(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ii(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function si(t,e,n){e instanceof mi?(t.i=e,bi(t.i,t.h)):(n||(e=ui(e,pi)),t.i=new mi(e,t.h))}function oi(t,e,n){t.i.set(e,n)}function ai(t){return oi(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ci(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ui(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,hi),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function hi(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}ei.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ui(e,li,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(ui(e,li,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(ui(n,"/"==n.charAt(0)?fi:di,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ui(n,gi)),t.join("")};var li=/[#\/\?@]/g,di=/[#\?:]/g,fi=/[#\?]/g,pi=/[#\?@]/g,gi=/#/g;function mi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function yi(t){t.g||(t.g=new Map,t.h=0,t.i&&ti(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function vi(t,e){yi(t),e=_i(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function wi(t,e){return yi(t),e=_i(t,e),t.g.has(e)}function Ei(t,e,n){vi(t,e),0<n.length&&(t.i=null,t.g.set(_i(t,e),je(n)),t.h+=n.length)}function _i(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function bi(t,e){e&&!t.j&&(yi(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(vi(this,e),Ei(this,n,t))}),t)),t.j=e}Te=mi.prototype,Te.add=function(t,e){yi(this),this.i=null,t=_i(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Te.forEach=function(t,e){yi(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},Te.ta=function(){yi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},Te.Z=function(t){yi(this);let e=[];if("string"===typeof t)wi(this,t)&&(e=e.concat(this.g.get(_i(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},Te.set=function(t,e){return yi(this),this.i=null,t=_i(this,t),wi(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Te.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e},Te.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};var Ti=class{constructor(t,e){this.g=t,this.map=e}};function Ii(t){this.l=t||Si,Ae.PerformanceNavigationTiming?(t=Ae.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(Ae.g&&Ae.g.Ka&&Ae.g.Ka()&&Ae.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Si=10;function Ci(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Ai(t){return t.h?1:t.g?t.g.size:0}function Di(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Ni(t,e){t.g?t.g.add(e):t.h=e}function ki(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Ri(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return je(t.i)}Ii.prototype.cancel=function(){if(this.i=Ri(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var xi=class{stringify(t){return Ae.JSON.stringify(t,void 0)}parse(t){return Ae.JSON.parse(t,void 0)}};function Oi(){this.g=new xi}function Li(t,e,n){const r=n||"";try{Jr(t,(function(t,n){let i=t;Ne(t)&&(i=jn(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Mi(t,e){const n=new ur;if(Ae.Image){const r=new Image;r.onload=Pe(Pi,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Pe(Pi,n,r,"TestLoadImage: error",!1,e),r.onabort=Pe(Pi,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Pe(Pi,n,r,"TestLoadImage: timeout",!1,e),Ae.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Pi(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function Fi(t){this.l=t.fc||null,this.j=t.ob||!1}function Vi(t,e){Vn.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Ui,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Fe(Fi,Cr),Fi.prototype.g=function(){return new Vi(this.l,this.j)},Fi.prototype.i=function(t){return function(){return t}}({}),Fe(Vi,Vn);var Ui=0;function Bi(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function ji(t){t.readyState=4,t.l=null,t.j=null,t.A=null,qi(t)}function qi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Te=Vi.prototype,Te.open=function(t,e){if(this.readyState!=Ui)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,qi(this)},Te.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Ae).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},Te.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ji(this)),this.readyState=Ui},Te.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,qi(this)),this.g&&(this.readyState=3,qi(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof Ae.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Bi(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},Te.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ji(this):qi(this),3==this.readyState&&Bi(this)}},Te.Za=function(t){this.g&&(this.response=this.responseText=t,ji(this))},Te.Ya=function(t){this.g&&(this.response=t,ji(this))},Te.ka=function(){this.g&&ji(this)},Te.setRequestHeader=function(t,e){this.v.append(t,e)},Te.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Te.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Vi.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var $i=Ae.JSON.parse;function zi(t){Vn.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ki,this.L=this.M=!1}Fe(zi,Vn);var Ki="",Gi=/^https?$/i,Hi=["POST","PUT"];function Qi(t){return Ze&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Wi(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Xi(t),Ji(t)}function Xi(t){t.F||(t.F=!0,Un(t,"complete"),Un(t,"error"))}function Yi(t){if(t.h&&"undefined"!=typeof Ce&&(!t.C[1]||4!=ts(t)||2!=t.da()))if(t.v&&4==ts(t))nr(t.La,0,t);else if(Un(t,"readystatechange"),4==ts(t)){t.h=!1;try{const a=t.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===a){var i=String(t.I).match(Zr)[1]||null;!i&&Ae.self&&Ae.self.location&&(i=Ae.self.location.protocol.slice(0,-1)),r=!Gi.test(i?i.toLowerCase():"")}n=r}if(n)Un(t,"complete"),Un(t,"success");else{t.m=6;try{var s=2<ts(t)?t.g.statusText:""}catch(o){s=""}t.j=s+" ["+t.da()+"]",Xi(t)}}finally{Ji(t)}}}function Ji(t,e){if(t.g){Zi(t);const r=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Un(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Zi(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Ae.clearTimeout(t.A),t.A=null)}function ts(t){return t.g?t.g.readyState:0}function es(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Ki:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(fo){return null}}function ns(t){const e={};t=(t.g&&2<=ts(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(Ke(t[r]))continue;var n=Hn(t[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}vn(e,(function(t){return t.join(", ")}))}function rs(t){let e="";return yn(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function is(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=rs(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):oi(t,e,n))}function ss(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function os(t){this.Ga=0,this.j=[],this.l=new ur,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ss("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ss("baseRetryDelayMs",5e3,t),this.hb=ss("retryDelaySeedMs",1e4,t),this.eb=ss("forwardChannelMaxRetries",2,t),this.xa=ss("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Ii(t&&t.concurrentRequestLimit),this.Ja=new Oi,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function as(t){if(us(t),3==t.H){var e=t.W++,n=ni(t.I);if(oi(n,"SID",t.K),oi(n,"RID",e),oi(n,"TYPE","terminate"),fs(t,n),e=new Lr(t,t.l,e),e.L=2,e.v=ai(ni(n)),n=!1,Ae.navigator&&Ae.navigator.sendBeacon)try{n=Ae.navigator.sendBeacon(e.v.toString(),"")}catch(r){}!n&&Ae.Image&&((new Image).src=e.v,n=!0),n||(e.g=Ss(e.l,null),e.g.ha(e.v)),e.G=Date.now(),zr(e)}Ts(t)}function cs(t){t.g&&(ys(t),t.g.cancel(),t.g=null)}function us(t){cs(t),t.u&&(Ae.clearTimeout(t.u),t.u=null),ws(t),t.i.cancel(),t.m&&("number"===typeof t.m&&Ae.clearTimeout(t.m),t.m=null)}function hs(t){if(!Ci(t.i)&&!t.m){t.m=!0;var e=t.Na;Wn||Jn(),Xn||(Wn(),Xn=!0),Yn.add(e,t),t.C=0}}function ls(t,e){return!(Ai(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.j=e.F.concat(t.j),!0):!(1==t.H||2==t.H||t.C>=(t.cb?0:t.eb))&&(t.m=Tr(Me(t.Na,t,e),_s(t,t.C)),t.C++,!0))}function ds(t,e){var n;n=e?e.m:t.W++;const r=ni(t.I);oi(r,"SID",t.K),oi(r,"RID",n),oi(r,"AID",t.V),fs(t,r),t.o&&t.s&&is(r,t.o,t.s),n=new Lr(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=ps(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ni(t.i,n),Ur(n,r,e)}function fs(t,e){t.na&&yn(t.na,(function(t,n){oi(e,n,t)})),t.h&&Jr({},(function(t,n){oi(e,n,t)}))}function ps(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Me(t.h.Va,t.h,t):null;t:{var i=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const c=i[a].map;if(n-=e,0>n)e=Math.max(0,i[a].g-100),o=!1;else try{Li(c,t,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,r}function gs(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Wn||Jn(),Xn||(Wn(),Xn=!0),Yn.add(e,t),t.A=0}}function ms(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=Tr(Me(t.Ma,t),_s(t,t.A)),t.A++,!0)}function ys(t){null!=t.B&&(Ae.clearTimeout(t.B),t.B=null)}function vs(t){t.g=new Lr(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=ni(t.wa);oi(e,"RID","rpc"),oi(e,"SID",t.K),oi(e,"AID",t.V),oi(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&oi(e,"TO",t.qa),oi(e,"TYPE","xmlhttp"),fs(t,e),t.o&&t.s&&is(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=ai(ni(e)),n.s=null,n.S=!0,Br(n,t)}function ws(t){null!=t.v&&(Ae.clearTimeout(t.v),t.v=null)}function Es(t,e){var n=null;if(t.g==e){ws(t),ys(t),t.g=null;var r=2}else{if(!Di(t.i,e))return;n=e.F,ki(t.i,e),r=1}if(0!=t.H)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=yr(),Un(r,new br(r,n)),hs(t)}else gs(t);else if(i=e.o,3==i||0==i&&0<e.ca||!(1==r&&ls(t,e)||2==r&&ms(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:bs(t,5);break;case 4:bs(t,10);break;case 3:bs(t,6);break;default:bs(t,2)}}function _s(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function bs(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var r=Me(t.pb,t);n||(n=new ei("//www.google.com/images/cleardot.gif"),Ae.location&&"http"==Ae.location.protocol||ri(n,"https"),ai(n)),Mi(n.toString(),r)}else _r(2);t.H=0,t.h&&t.h.za(e),Ts(t),us(t)}function Ts(t){if(t.H=0,t.ma=[],t.h){const e=Ri(t.i);0==e.length&&0==t.j.length||(qe(t.ma,e),qe(t.ma,t.j),t.i.i.length=0,je(t.j),t.j.length=0),t.h.ya()}}function Is(t,e,n){var r=n instanceof ei?ni(n):new ei(n);if(""!=r.g)e&&(r.g=e+"."+r.g),ii(r,r.m);else{var i=Ae.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ei(null);r&&ri(s,r),e&&(s.g=e),i&&ii(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&oi(r,n,e),oi(r,"VER",t.ra),fs(t,r),r}function Ss(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new zi(new Fi({ob:!0})):new zi(t.va),e.Oa(t.J),e}function Cs(){}function As(){if(Ze&&!(10<=Number(hn)))throw Error("Environmental error: no available transport.")}function Ds(t,e){Vn.call(this),this.g=new os(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ke(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ke(e)&&(this.g.F=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Rs(this)}function Ns(t){Rr.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function ks(){xr.call(this),this.status=1}function Rs(t){this.g=t}function xs(){this.blockSize=-1}function Os(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Ls(t,e,n){n||(n=0);var r=Array(16);if("string"===typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}function Ms(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}Te=zi.prototype,Te.Oa=function(t){this.M=t},Te.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Nr.g(),this.C=this.u?Ar(this.u):Ar(Nr),this.g.onreadystatechange=Me(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){return void Wi(this,s)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=Ae.FormData&&t instanceof Ae.FormData,!(0<=Be(Hi,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Zi(this),0<this.B&&((this.L=Qi(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Me(this.ua,this)):this.A=nr(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Wi(this,s)}},Te.ua=function(){"undefined"!=typeof Ce&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Un(this,"timeout"),this.abort(8))},Te.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Un(this,"complete"),Un(this,"abort"),Ji(this))},Te.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ji(this,!0)),zi.$.N.call(this)},Te.La=function(){this.s||(this.G||this.v||this.l?Yi(this):this.kb())},Te.kb=function(){Yi(this)},Te.isActive=function(){return!!this.g},Te.da=function(){try{return 2<ts(this)?this.g.status:-1}catch(t){return-1}},Te.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Te.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),$i(e)}},Te.Ia=function(){return this.m},Te.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},Te=os.prototype,Te.ra=8,Te.H=1,Te.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Lr(this,this.l,t);let s=this.s;if(this.U&&(s?(s=wn(s),_n(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var r=this.j[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=ps(this,i,e),n=ni(this.I),oi(n,"RID",t),oi(n,"CVER",22),this.F&&oi(n,"X-HTTP-Session-Id",this.F),fs(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(rs(s)))+"&"+e:this.o&&is(n,this.o,s)),Ni(this.i,i),this.bb&&oi(n,"TYPE","init"),this.P?(oi(n,"$req",e),oi(n,"SID","null"),i.aa=!0,Ur(i,n,null)):Ur(i,n,e),this.H=2}}else 3==this.H&&(t?ds(this,t):0==this.j.length||Ci(this.i)||ds(this))},Te.Ma=function(){if(this.u=null,vs(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Tr(Me(this.jb,this),t)}},Te.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,_r(10),cs(this),vs(this))},Te.ib=function(){null!=this.v&&(this.v=null,cs(this),ms(this),_r(19))},Te.pb=function(t){t?(this.l.info("Successfully pinged google.com"),_r(2)):(this.l.info("Failed to ping google.com"),_r(1))},Te.isActive=function(){return!!this.h&&this.h.isActive(this)},Te=Cs.prototype,Te.Ba=function(){},Te.Aa=function(){},Te.za=function(){},Te.ya=function(){},Te.isActive=function(){return!0},Te.Va=function(){},As.prototype.g=function(t,e){return new Ds(t,e)},Fe(Ds,Vn),Ds.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;_r(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Is(t,null,t.Y),hs(t)},Ds.prototype.close=function(){as(this.g)},Ds.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=jn(t),t=n);e.j.push(new Ti(e.fb++,t)),3==e.H&&hs(e)},Ds.prototype.N=function(){this.g.h=null,delete this.j,as(this.g),delete this.g,Ds.$.N.call(this)},Fe(Ns,Rr),Fe(ks,xr),Fe(Rs,Cs),Rs.prototype.Ba=function(){Un(this.g,"a")},Rs.prototype.Aa=function(t){Un(this.g,new Ns(t))},Rs.prototype.za=function(t){Un(this.g,new ks)},Rs.prototype.ya=function(){Un(this.g,"b")},Fe(Os,xs),Os.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Os.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(0==i)for(;s<=n;)Ls(this,t,s),s+=this.blockSize;if("string"===typeof t){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Ls(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Ls(this,r),i=0;break}}this.h=i,this.i+=e},Os.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var Ps={};function Fs(t){return-128<=t&&128>t?We(t,(function(t){return new Ms([0|t],0>t?-1:0)})):new Ms([0|t],0>t?-1:0)}function Vs(t){if(isNaN(t)||!isFinite(t))return js;if(0>t)return Gs(Vs(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Bs;return new Ms(e,0)}function Us(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return Gs(Us(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Vs(Math.pow(e,8)),r=js,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Vs(Math.pow(e,s)),r=r.R(s).add(Vs(o))):(r=r.R(n),r=r.add(Vs(o)))}return r}var Bs=4294967296,js=Fs(0),qs=Fs(1),$s=Fs(16777216);function zs(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function Ks(t){return-1==t.h}function Gs(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ms(n,~t.h).add(qs)}function Hs(t,e){return t.add(Gs(e))}function Qs(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ws(t,e){this.g=t,this.h=e}function Xs(t,e){if(zs(e))throw Error("division by zero");if(zs(t))return new Ws(js,js);if(Ks(t))return e=Xs(Gs(t),e),new Ws(Gs(e.g),Gs(e.h));if(Ks(e))return e=Xs(t,Gs(e)),new Ws(Gs(e.g),e.h);if(30<t.g.length){if(Ks(t)||Ks(e))throw Error("slowDivide_ only works with positive integers.");for(var n=qs,r=e;0>=r.X(t);)n=Ys(n),r=Ys(r);var i=Js(n,1),s=Js(r,1);for(r=Js(r,2),n=Js(n,2);!zs(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Js(r,1),n=Js(n,1)}return e=Hs(t,i.R(e)),new Ws(i,e)}for(i=js;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Vs(n),o=s.R(e);Ks(o)||0<o.X(t);)n-=r,s=Vs(n),o=s.R(e);zs(s)&&(s=qs),i=i.add(s),t=Hs(t,o)}return new Ws(i,t)}function Ys(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ms(n,t.h)}function Js(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Ms(i,t.h)}Te=Ms.prototype,Te.ea=function(){if(Ks(this))return-Gs(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Bs+r)*e,e*=Bs}return t},Te.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(zs(this))return"0";if(Ks(this))return"-"+Gs(this).toString(t);for(var e=Vs(Math.pow(t,6)),n=this,r="";;){var i=Xs(n,e).g;n=Hs(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,zs(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},Te.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},Te.X=function(t){return t=Hs(this,t),Ks(t)?-1:zs(t)?0:1},Te.abs=function(){return Ks(this)?Gs(this):this},Te.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(65535&this.D(i))+(65535&t.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Ms(n,-2147483648&n[n.length-1]?-1:0)},Te.R=function(t){if(zs(this)||zs(t))return js;if(Ks(this))return Ks(t)?Gs(this).R(Gs(t)):Gs(Gs(this).R(t));if(Ks(t))return Gs(this.R(Gs(t)));if(0>this.X($s)&&0>t.X($s))return Vs(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=t.D(i)>>>16,c=65535&t.D(i);n[2*r+2*i]+=o*c,Qs(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Qs(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Qs(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Qs(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ms(n,0)},Te.gb=function(t){return Xs(this,t).h},Te.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ms(n,this.h&t.h)},Te.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ms(n,this.h|t.h)},Te.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ms(n,this.h^t.h)},As.prototype.createWebChannel=As.prototype.g,Ds.prototype.send=Ds.prototype.u,Ds.prototype.open=Ds.prototype.m,Ds.prototype.close=Ds.prototype.close,Ir.NO_ERROR=0,Ir.TIMEOUT=8,Ir.HTTP_ERROR=6,Sr.COMPLETE="complete",Dr.EventType=kr,kr.OPEN="a",kr.CLOSE="b",kr.ERROR="c",kr.MESSAGE="d",Vn.prototype.listen=Vn.prototype.O,zi.prototype.listenOnce=zi.prototype.P,zi.prototype.getLastError=zi.prototype.Sa,zi.prototype.getLastErrorCode=zi.prototype.Ia,zi.prototype.getStatus=zi.prototype.da,zi.prototype.getResponseJson=zi.prototype.Wa,zi.prototype.getResponseText=zi.prototype.ja,zi.prototype.send=zi.prototype.ha,zi.prototype.setWithCredentials=zi.prototype.Oa,Os.prototype.digest=Os.prototype.l,Os.prototype.reset=Os.prototype.reset,Os.prototype.update=Os.prototype.j,Ms.prototype.add=Ms.prototype.add,Ms.prototype.multiply=Ms.prototype.R,Ms.prototype.modulo=Ms.prototype.gb,Ms.prototype.compare=Ms.prototype.X,Ms.prototype.toNumber=Ms.prototype.ea,Ms.prototype.toString=Ms.prototype.toString,Ms.prototype.getBits=Ms.prototype.D,Ms.fromNumber=Vs,Ms.fromString=Us;var Zs=Se.createWebChannelTransport=function(){return new As},to=Se.getStatEventTarget=function(){return yr()},eo=Se.ErrorCode=Ir,no=Se.EventType=Sr,ro=Se.Event=gr,io=Se.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},so=Se.FetchXmlHttpFactory=Fi,oo=Se.WebChannel=Dr,ao=Se.XhrIo=zi,co=Se.Md5=Os,uo=Se.Integer=Ms;const ho="@firebase/firestore";
/**
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
 */class lo{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}lo.UNAUTHENTICATED=new lo(null),lo.GOOGLE_CREDENTIALS=new lo("google-credentials-uid"),lo.FIRST_PARTY=new lo("first-party-uid"),lo.MOCK_USER=new lo("mock-user");
/**
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
 */
let fo="10.1.0";
/**
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
 */const po=new K("@firebase/firestore");function go(){return po.logLevel}function mo(t,...e){if(po.logLevel<=B.DEBUG){const n=e.map(wo);po.debug(`Firestore (${fo}): ${t}`,...n)}}function yo(t,...e){if(po.logLevel<=B.ERROR){const n=e.map(wo);po.error(`Firestore (${fo}): ${t}`,...n)}}function vo(t,...e){if(po.logLevel<=B.WARN){const n=e.map(wo);po.warn(`Firestore (${fo}): ${t}`,...n)}}function wo(t){if("string"==typeof t)return t;try{
/**
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
 */return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
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
 */function Eo(t="Unexpected state"){const e=`FIRESTORE (${fo}) INTERNAL ASSERTION FAILED: `+t;throw yo(e),new Error(e)}function _o(t,e){t||Eo()}function bo(t,e){return t}
/**
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
 */const To={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Io extends C{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class So{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
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
 */class Co{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ao{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(lo.UNAUTHENTICATED)))}shutdown(){}}class Do{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class No{constructor(t){this.t=t,this.currentUser=lo.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new So;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new So,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{mo("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(mo("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new So)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(mo("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(_o("string"==typeof e.accessToken),new Co(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return _o(null===t||"string"==typeof t),new lo(t)}}class ko{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=lo.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ro{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new ko(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(lo.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class xo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Oo{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&mo("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,mo("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{mo("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?r(t):mo("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(_o("string"==typeof t.token),this.R=t.token,new xo(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
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
 */
function Lo(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
 */class Mo{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=Lo(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function Po(t,e){return t<e?-1:t>e?1:0}function Fo(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
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
 */
class Vo{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Io(To.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Io(To.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Io(To.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Io(To.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Vo.fromMillis(Date.now())}static fromDate(t){return Vo.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Vo(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Po(this.nanoseconds,t.nanoseconds):Po(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class Uo{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Uo(t)}static min(){return new Uo(new Vo(0,0))}static max(){return new Uo(new Vo(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */class Bo{constructor(t,e,n){void 0===e?e=0:e>t.length&&Eo(),void 0===n?n=t.length-e:n>t.length-e&&Eo(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Bo.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Bo?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class jo extends Bo{construct(t,e,n){return new jo(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Io(To.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new jo(e)}static emptyPath(){return new jo([])}}const qo=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $o extends Bo{construct(t,e,n){return new $o(t,e,n)}static isValidIdentifier(t){return qo.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$o.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new $o(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Io(To.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Io(To.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Io(To.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new Io(To.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new $o(e)}static emptyPath(){return new $o([])}}
/**
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
 */class zo{constructor(t){this.path=t}static fromPath(t){return new zo(jo.fromString(t))}static fromName(t){return new zo(jo.fromString(t).popFirst(5))}static empty(){return new zo(jo.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===jo.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return jo.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new zo(new jo(t.slice()))}}
/**
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
 */class Ko{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}Ko.UNKNOWN_ID=-1;function Go(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Uo.fromTimestamp(1e9===r?new Vo(n+1,0):new Vo(n,r));return new Qo(i,zo.empty(),e)}function Ho(t){return new Qo(t.readTime,t.key,-1)}class Qo{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Qo(Uo.min(),zo.empty(),-1)}static max(){return new Qo(Uo.max(),zo.empty(),-1)}}function Wo(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=zo.comparator(t.documentKey,e.documentKey),0!==n?n:Po(t.largestBatchId,e.largestBatchId))}
/**
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
 */const Xo="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Yo{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
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
 */async function Jo(t){if(t.code!==To.FAILED_PRECONDITION||t.message!==Xo)throw t;mo("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class Zo{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Eo(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Zo(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Zo?e:Zo.resolve(e)}catch(t){return Zo.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Zo.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Zo.reject(e)}static resolve(t){return new Zo(((e,n)=>{e(t)}))}static reject(t){return new Zo(((e,n)=>{n(t)}))}static waitFor(t){return new Zo(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=Zo.resolve(!1);for(const n of t)e=e.next((t=>t?Zo.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new Zo(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new Zo(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
/**
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
 */function ta(t){return"IndexedDbTransactionError"===t.name}
/**
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
 */
class ea{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.oe(t),this._e=t=>e.writeSequenceNumber(t))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}function na(t){return null==t}function ra(t){return 0===t&&1/t==-1/0}function ia(t){return"number"==typeof t&&Number.isInteger(t)&&!ra(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
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
 */ea.ae=-1;const sa=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],oa=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],aa=oa;
/**
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
 */
/**
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
 */
function ca(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ua(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ha(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
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
 */class la{constructor(t,e){this.comparator=t,this.root=e||fa.EMPTY}insert(t,e){return new la(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,fa.BLACK,null,null))}remove(t){return new la(this.comparator,this.root.remove(t,this.comparator).copy(null,null,fa.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new da(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new da(this.root,t,this.comparator,!1)}getReverseIterator(){return new da(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new da(this.root,t,this.comparator,!0)}}class da{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class fa{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:fa.RED,this.left=null!=r?r:fa.EMPTY,this.right=null!=i?i:fa.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new fa(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return fa.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return fa.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,fa.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,fa.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Eo();if(this.right.isRed())throw Eo();const t=this.left.check();if(t!==this.right.check())throw Eo();return t+(this.isRed()?0:1)}}fa.EMPTY=null,fa.RED=!0,fa.BLACK=!1,fa.EMPTY=new class{constructor(){this.size=0}get key(){throw Eo()}get value(){throw Eo()}get color(){throw Eo()}get left(){throw Eo()}get right(){throw Eo()}copy(t,e,n,r,i){return this}insert(t,e,n){return new fa(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class pa{constructor(t){this.comparator=t,this.data=new la(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ga(this.data.getIterator())}getIteratorFrom(t){return new ga(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof pa))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new pa(this.comparator);return e.data=t,e}}class ga{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */
class ma{constructor(t){this.fields=t,t.sort($o.comparator)}static empty(){return new ma([])}unionWith(t){let e=new pa($o.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new ma(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Fo(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
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
 */class ya extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
 */
/**
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
 */
class va{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new ya("Invalid base64 string: "+t):t}}(t);return new va(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new va(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Po(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}va.EMPTY_BYTE_STRING=new va("");const wa=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ea(t){if(_o(!!t),"string"==typeof t){let e=0;const n=wa.exec(t);if(_o(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:_a(t.seconds),nanos:_a(t.nanos)}}function _a(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function ba(t){return"string"==typeof t?va.fromBase64String(t):va.fromUint8Array(t)}
/**
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
 */function Ta(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ia(t){const e=t.mapValue.fields.__previous_value__;return Ta(e)?Ia(e):e}function Sa(t){const e=Ea(t.mapValue.fields.__local_write_time__.timestampValue);return new Vo(e.seconds,e.nanos)}
/**
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
 */class Ca{constructor(t,e,n,r,i,s,o,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class Aa{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Aa("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Aa&&t.projectId===this.projectId&&t.database===this.database}}
/**
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
 */const Da={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Na(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ta(t)?4:$a(t)?9007199254740991:10:Eo()}function ka(t,e){if(t===e)return!0;const n=Na(t);if(n!==Na(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Sa(t).isEqual(Sa(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ea(t.timestampValue),r=Ea(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return ba(t.bytesValue).isEqual(ba(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return _a(t.geoPointValue.latitude)===_a(e.geoPointValue.latitude)&&_a(t.geoPointValue.longitude)===_a(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return _a(t.integerValue)===_a(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=_a(t.doubleValue),r=_a(e.doubleValue);return n===r?ra(n)===ra(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return Fo(t.arrayValue.values||[],e.arrayValue.values||[],ka);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(ca(n)!==ca(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!ka(n[i],r[i])))return!1;return!0}(t,e);default:return Eo()}}function Ra(t,e){return void 0!==(t.values||[]).find((t=>ka(t,e)))}function xa(t,e){if(t===e)return 0;const n=Na(t),r=Na(e);if(n!==r)return Po(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Po(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=_a(t.integerValue||t.doubleValue),r=_a(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Oa(t.timestampValue,e.timestampValue);case 4:return Oa(Sa(t),Sa(e));case 5:return Po(t.stringValue,e.stringValue);case 6:return function(t,e){const n=ba(t),r=ba(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=Po(n[i],r[i]);if(0!==t)return t}return Po(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Po(_a(t.latitude),_a(e.latitude));return 0!==n?n:Po(_a(t.longitude),_a(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=xa(n[i],r[i]);if(t)return t}return Po(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Da.mapValue&&e===Da.mapValue)return 0;if(t===Da.mapValue)return 1;if(e===Da.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=Po(r[o],s[o]);if(0!==t)return t;const e=xa(n[r[o]],i[s[o]]);if(0!==e)return e}return Po(r.length,s.length)}(t.mapValue,e.mapValue);default:throw Eo()}}function Oa(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Po(t,e);const n=Ea(t),r=Ea(e),i=Po(n.seconds,r.seconds);return 0!==i?i:Po(n.nanos,r.nanos)}function La(t){return Ma(t)}function Ma(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ea(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return ba(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return zo.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Ma(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${Ma(t.fields[i])}`;return n+"}"}(t.mapValue):Eo()}function Pa(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Fa(t){return!!t&&"integerValue"in t}function Va(t){return!!t&&"arrayValue"in t}function Ua(t){return!!t&&"nullValue"in t}function Ba(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ja(t){return!!t&&"mapValue"in t}function qa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ua(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=qa(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $a(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
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
 */
class za{constructor(t){this.value=t}static empty(){return new za({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ja(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=qa(e)}setAll(t){let e=$o.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=qa(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());ja(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ka(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];ja(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){ua(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new za(qa(this.value))}}function Ka(t){const e=[];return ua(t.fields,((t,n)=>{const r=new $o([t]);if(ja(n)){const t=Ka(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new ma(e)
/**
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
 */}class Ga{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new Ga(t,0,Uo.min(),Uo.min(),Uo.min(),za.empty(),0)}static newFoundDocument(t,e,n,r){return new Ga(t,1,e,Uo.min(),n,r,0)}static newNoDocument(t,e){return new Ga(t,2,e,Uo.min(),Uo.min(),za.empty(),0)}static newUnknownDocument(t,e){return new Ga(t,3,e,Uo.min(),Uo.min(),za.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Uo.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=za.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=za.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Uo.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Ga&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ga(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class Ha{constructor(t,e){this.position=t,this.inclusive=e}}function Qa(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?zo.comparator(zo.fromName(o.referenceValue),n.key):xa(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Wa(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ka(t.position[n],e.position[n]))return!1;return!0}
/**
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
 */class Xa{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ya(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
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
 */class Ja{}class Za extends Ja{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new ac(t,e,n):"array-contains"===e?new lc(t,n):"in"===e?new dc(t,n):"not-in"===e?new fc(t,n):"array-contains-any"===e?new pc(t,n):new Za(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new cc(t,n):new uc(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(xa(e,this.value)):null!==e&&Na(this.value)===Na(e)&&this.matchesComparison(xa(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Eo()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class tc extends Ja{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new tc(t,e)}matches(t){return ec(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le((t=>t.isInequality()));return null!==t?t.field:null}le(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function ec(t){return"and"===t.op}function nc(t){return rc(t)&&ec(t)}function rc(t){for(const e of t.filters)if(e instanceof tc)return!1;return!0}function ic(t){if(t instanceof Za)return t.field.canonicalString()+t.op.toString()+La(t.value);if(nc(t))return t.filters.map((t=>ic(t))).join(",");{const e=t.filters.map((t=>ic(t))).join(",");return`${t.op}(${e})`}}function sc(t,e){return t instanceof Za?function(t,e){return e instanceof Za&&t.op===e.op&&t.field.isEqual(e.field)&&ka(t.value,e.value)}(t,e):t instanceof tc?function(t,e){return e instanceof tc&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&sc(n,e.filters[r])),!0)}(t,e):void Eo()}function oc(t){return t instanceof Za?function(t){return`${t.field.canonicalString()} ${t.op} ${La(t.value)}`}(t):t instanceof tc?function(t){return t.op.toString()+" {"+t.getFilters().map(oc).join(" ,")+"}"}(t):"Filter"}class ac extends Za{constructor(t,e,n){super(t,e,n),this.key=zo.fromName(n.referenceValue)}matches(t){const e=zo.comparator(t.key,this.key);return this.matchesComparison(e)}}class cc extends Za{constructor(t,e){super(t,"in",e),this.keys=hc("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class uc extends Za{constructor(t,e){super(t,"not-in",e),this.keys=hc("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function hc(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>zo.fromName(t.referenceValue)))}class lc extends Za{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Va(e)&&Ra(e.arrayValue,this.value)}}class dc extends Za{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Ra(this.value.arrayValue,e)}}class fc extends Za{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ra(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Ra(this.value.arrayValue,e)}}class pc extends Za{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Va(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Ra(this.value.arrayValue,t)))}}
/**
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
 */class gc{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.he=null}}function mc(t,e=null,n=[],r=[],i=null,s=null,o=null){return new gc(t,e,n,r,i,s,o)}function yc(t){const e=bo(t);if(null===e.he){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>ic(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),na(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>La(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>La(t))).join(",")),e.he=t}return e.he}function vc(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ya(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!sc(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Wa(t.startAt,e.startAt)&&Wa(t.endAt,e.endAt)}function wc(t){return zo.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
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
 */
class Ec{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function _c(t,e,n,r,i,s,o,a){return new Ec(t,e,n,r,i,s,o,a)}function bc(t){return new Ec(t)}function Tc(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Ic(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Sc(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function Cc(t){return null!==t.collectionGroup}function Ac(t){const e=bo(t);if(null===e.Pe){e.Pe=[];const t=Sc(e),n=Ic(e);if(null!==t&&null===n)t.isKeyField()||e.Pe.push(new Xa(t)),e.Pe.push(new Xa($o.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.Pe.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Xa($o.keyField(),t))}}}return e.Pe}function Dc(t){const e=bo(t);if(!e.Ie)if("F"===e.limitType)e.Ie=mc(e.path,e.collectionGroup,Ac(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Ac(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Xa(i.field,e))}const n=e.endAt?new Ha(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ha(e.startAt.position,e.startAt.inclusive):null;e.Ie=mc(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.Ie}function Nc(t,e){e.getFirstInequalityField(),Sc(t);const n=t.filters.concat([e]);return new Ec(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function kc(t,e,n){return new Ec(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Rc(t,e){return vc(Dc(t),Dc(e))&&t.limitType===e.limitType}function xc(t){return`${yc(Dc(t))}|lt:${t.limitType}`}function Oc(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>oc(t))).join(", ")}]`),na(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>La(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>La(t))).join(",")),`Target(${e})`}(Dc(t))}; limitType=${t.limitType})`}function Lc(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):zo.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Ac(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Qa(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Ac(t),e))&&!(t.endAt&&!function(t,e,n){const r=Qa(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Ac(t),e))}(t,e)}function Mc(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Pc(t){return(e,n)=>{let r=!1;for(const i of Ac(t)){const t=Fc(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Fc(t,e,n){const r=t.field.isKeyField()?zo.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?xa(r,i):Eo()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Eo()}}
/**
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
 */class Vc{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){ua(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return ha(this.inner)}size(){return this.innerSize}}
/**
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
 */const Uc=new la(zo.comparator);function Bc(){return Uc}const jc=new la(zo.comparator);function qc(...t){let e=jc;for(const n of t)e=e.insert(n.key,n);return e}function $c(t){let e=jc;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function zc(){return Gc()}function Kc(){return Gc()}function Gc(){return new Vc((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Hc=new la(zo.comparator),Qc=new pa(zo.comparator);function Wc(...t){let e=Qc;for(const n of t)e=e.add(n);return e}const Xc=new pa(Po);function Yc(){return Xc}
/**
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
 */function Jc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ra(e)?"-0":e}}function Zc(t){return{integerValue:""+t}}function tu(t,e){return ia(e)?Zc(e):Jc(t,e)}
/**
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
 */class eu{constructor(){this._=void 0}}function nu(t,e,n){return t instanceof su?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Ta(e)&&(e=Ia(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof ou?au(t,e):t instanceof cu?uu(t,e):function(t,e){const n=iu(t,e),r=lu(n)+lu(t.Te);return Fa(n)&&Fa(t.Te)?Zc(r):Jc(t.serializer,r)}(t,e)}function ru(t,e,n){return t instanceof ou?au(t,e):t instanceof cu?uu(t,e):n}function iu(t,e){return t instanceof hu?function(t){return Fa(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class su extends eu{}class ou extends eu{constructor(t){super(),this.elements=t}}function au(t,e){const n=du(e);for(const r of t.elements)n.some((t=>ka(t,r)))||n.push(r);return{arrayValue:{values:n}}}class cu extends eu{constructor(t){super(),this.elements=t}}function uu(t,e){let n=du(e);for(const r of t.elements)n=n.filter((t=>!ka(t,r)));return{arrayValue:{values:n}}}class hu extends eu{constructor(t,e){super(),this.serializer=t,this.Te=e}}function lu(t){return _a(t.integerValue||t.doubleValue)}function du(t){return Va(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
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
 */function fu(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof ou&&e instanceof ou||t instanceof cu&&e instanceof cu?Fo(t.elements,e.elements,ka):t instanceof hu&&e instanceof hu?ka(t.Te,e.Te):t instanceof su&&e instanceof su}(t.transform,e.transform)}class pu{constructor(t,e){this.version=t,this.transformResults=e}}class gu{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new gu}static exists(t){return new gu(void 0,t)}static updateTime(t){return new gu(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function mu(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class yu{}function vu(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Du(t.key,gu.none()):new Tu(t.key,t.data,gu.none());{const n=t.data,r=za.empty();let i=new pa($o.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new Iu(t.key,r,new ma(i.toArray()),gu.none())}}function wu(t,e,n){t instanceof Tu?function(t,e,n){const r=t.value.clone(),i=Cu(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Iu?function(t,e,n){if(!mu(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Cu(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Su(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Eu(t,e,n,r){return t instanceof Tu?function(t,e,n,r){if(!mu(t.precondition,e))return n;const i=t.value.clone(),s=Au(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof Iu?function(t,e,n,r){if(!mu(t.precondition,e))return n;const i=Au(t.fieldTransforms,r,e),s=e.data;return s.setAll(Su(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return mu(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function _u(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=iu(r.transform,t||null);null!=i&&(null===n&&(n=za.empty()),n.set(r.field,i))}return n||null}function bu(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Fo(t,e,((t,e)=>fu(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Tu extends yu{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Iu extends yu{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Su(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Cu(t,e,n){const r=new Map;_o(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,ru(o,a,n[i]))}return r}function Au(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,nu(t,s,e))}return r}class Du extends yu{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Nu extends yu{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
 */class ku{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&wu(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Eu(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Eu(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Kc();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=vu(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Uo.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Wc())}isEqual(t){return this.batchId===t.batchId&&Fo(this.mutations,t.mutations,((t,e)=>bu(t,e)))&&Fo(this.baseMutations,t.baseMutations,((t,e)=>bu(t,e)))}}class Ru{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){_o(t.mutations.length===n.length);let r=function(){return Hc}();const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Ru(t,e,n,r)}}
/**
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
 */class xu{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
 */
/**
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
 */
class Ou{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
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
 */var Lu,Mu;function Pu(t){switch(t){default:return Eo();case To.CANCELLED:case To.UNKNOWN:case To.DEADLINE_EXCEEDED:case To.RESOURCE_EXHAUSTED:case To.INTERNAL:case To.UNAVAILABLE:case To.UNAUTHENTICATED:return!1;case To.INVALID_ARGUMENT:case To.NOT_FOUND:case To.ALREADY_EXISTS:case To.PERMISSION_DENIED:case To.FAILED_PRECONDITION:case To.ABORTED:case To.OUT_OF_RANGE:case To.UNIMPLEMENTED:case To.DATA_LOSS:return!0}}function Fu(t){if(void 0===t)return yo("GRPC error has no .code"),To.UNKNOWN;switch(t){case Lu.OK:return To.OK;case Lu.CANCELLED:return To.CANCELLED;case Lu.UNKNOWN:return To.UNKNOWN;case Lu.DEADLINE_EXCEEDED:return To.DEADLINE_EXCEEDED;case Lu.RESOURCE_EXHAUSTED:return To.RESOURCE_EXHAUSTED;case Lu.INTERNAL:return To.INTERNAL;case Lu.UNAVAILABLE:return To.UNAVAILABLE;case Lu.UNAUTHENTICATED:return To.UNAUTHENTICATED;case Lu.INVALID_ARGUMENT:return To.INVALID_ARGUMENT;case Lu.NOT_FOUND:return To.NOT_FOUND;case Lu.ALREADY_EXISTS:return To.ALREADY_EXISTS;case Lu.PERMISSION_DENIED:return To.PERMISSION_DENIED;case Lu.FAILED_PRECONDITION:return To.FAILED_PRECONDITION;case Lu.ABORTED:return To.ABORTED;case Lu.OUT_OF_RANGE:return To.OUT_OF_RANGE;case Lu.UNIMPLEMENTED:return To.UNIMPLEMENTED;case Lu.DATA_LOSS:return To.DATA_LOSS;default:return Eo()}}(Mu=Lu||(Lu={}))[Mu.OK=0]="OK",Mu[Mu.CANCELLED=1]="CANCELLED",Mu[Mu.UNKNOWN=2]="UNKNOWN",Mu[Mu.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Mu[Mu.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Mu[Mu.NOT_FOUND=5]="NOT_FOUND",Mu[Mu.ALREADY_EXISTS=6]="ALREADY_EXISTS",Mu[Mu.PERMISSION_DENIED=7]="PERMISSION_DENIED",Mu[Mu.UNAUTHENTICATED=16]="UNAUTHENTICATED",Mu[Mu.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Mu[Mu.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Mu[Mu.ABORTED=10]="ABORTED",Mu[Mu.OUT_OF_RANGE=11]="OUT_OF_RANGE",Mu[Mu.UNIMPLEMENTED=12]="UNIMPLEMENTED",Mu[Mu.INTERNAL=13]="INTERNAL",Mu[Mu.UNAVAILABLE=14]="UNAVAILABLE",Mu[Mu.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
class Vu{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Uu}static getOrCreateInstance(){return null===Uu&&(Uu=new Vu),Uu}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach((e=>e(t)))}}let Uu=null;
/**
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
 */function Bu(){return new TextEncoder}
/**
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
 */const ju=new uo([4294967295,4294967295],0);function qu(t){const e=Bu().encode(t),n=new co;return n.update(e),new Uint8Array(n.digest())}function $u(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new uo([n,r],0),new uo([i,s],0)]}class zu{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Ku(`Invalid padding: ${e}`);if(n<0)throw new Ku(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new Ku(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new Ku(`Invalid padding when bitmap length is 0: ${e}`);this.de=8*t.length-e,this.Ae=uo.fromNumber(this.de)}Re(t,e,n){let r=t.add(e.multiply(uo.fromNumber(n)));return 1===r.compare(ju)&&(r=new uo([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ae).toNumber()}Ve(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.de)return!1;const e=qu(t),[n,r]=$u(e);for(let i=0;i<this.hashCount;i++){const t=this.Re(n,r,i);if(!this.Ve(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),s=new zu(i,r,e);return n.forEach((t=>s.insert(t))),s}insert(t){if(0===this.de)return;const e=qu(t),[n,r]=$u(e);for(let i=0;i<this.hashCount;i++){const t=this.Re(n,r,i);this.me(t)}}me(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Ku extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
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
 */class Gu{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,Hu.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Gu(Uo.min(),r,new la(Po),Bc(),Wc())}}class Hu{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Hu(n,e,Wc(),Wc(),Wc())}}
/**
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
 */class Qu{constructor(t,e,n,r){this.fe=t,this.removedTargetIds=e,this.key=n,this.ge=r}}class Wu{constructor(t,e){this.targetId=t,this.pe=e}}class Xu{constructor(t,e,n=va.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Yu{constructor(){this.ye=0,this.we=th(),this.Se=va.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return 0!==this.ye}get Ce(){return this.De}Fe(t){t.approximateByteSize()>0&&(this.De=!0,this.Se=t)}Me(){let t=Wc(),e=Wc(),n=Wc();return this.we.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Eo()}})),new Hu(this.Se,this.be,t,e,n)}xe(){this.De=!1,this.we=th()}Oe(t,e){this.De=!0,this.we=this.we.insert(t,e)}Ne(t){this.De=!0,this.we=this.we.remove(t)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class Ju{constructor(t){this.qe=t,this.Qe=new Map,this.Ke=Bc(),this.$e=Zu(),this.Ue=new la(Po)}We(t){for(const e of t.fe)t.ge&&t.ge.isFoundDocument()?this.Ge(e,t.ge):this.ze(e,t.key,t.ge);for(const e of t.removedTargetIds)this.ze(e,t.key,t.ge)}je(t){this.forEachTarget(t,(e=>{const n=this.He(e);switch(t.state){case 0:this.Je(e)&&n.Fe(t.resumeToken);break;case 1:n.Le(),n.ve||n.xe(),n.Fe(t.resumeToken);break;case 2:n.Le(),n.ve||this.removeTarget(e);break;case 3:this.Je(e)&&(n.ke(),n.Fe(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),n.Fe(t.resumeToken));break;default:Eo()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Qe.forEach(((t,n)=>{this.Je(n)&&e(n)}))}Ze(t){var e,n;const r=t.targetId,i=t.pe.count,s=this.Xe(r);if(s){const o=s.target;if(wc(o))if(0===i){const t=new zo(o.path);this.ze(r,t,Ga.newNoDocument(t,Uo.min()))}else _o(1===i);else{const s=this.et(r);if(s!==i){const i=this.tt(t,s);if(0!==i.status){this.Ye(r);const t=2===i.status?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(r,t)}null===(e=Vu.instance)||void 0===e||e.notifyOnExistenceFilterMismatch(function(t,e,n,r){var i,s,o,a,c,u;const h={localCacheCount:n,existenceFilterCount:r.count},l=r.unchangedNames;return l&&(h.bloomFilter={applied:0===t,hashCount:null!==(i=null==l?void 0:l.hashCount)&&void 0!==i?i:0,bitmapLength:null!==(a=null===(o=null===(s=null==l?void 0:l.bits)||void 0===s?void 0:s.bitmap)||void 0===o?void 0:o.length)&&void 0!==a?a:0,padding:null!==(u=null===(c=null==l?void 0:l.bits)||void 0===c?void 0:c.padding)&&void 0!==u?u:0},e&&(h.bloomFilter.mightContain=e)),h}
/**
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
 */(i.status,null!==(n=i.nt)&&void 0!==n?n:null,s,t.pe))}}}}tt(t,e){const{unchangedNames:n,count:r}=t.pe;if(!n||!n.bits)return{status:1};const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let a,c;try{a=ba(i).toUint8Array()}catch(t){if(t instanceof ya)return vo("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw t}try{c=new zu(a,s,o)}catch(t){return vo(t instanceof Ku?"BloomFilter error: ":"Applying bloom filter failed: ",t),{status:1}}const u=t=>{const e=this.qe.rt();return c.mightContain(`projects/${e.projectId}/databases/${e.database}/documents/${t}`)};return 0===c.de?{status:1}:{status:r===e-this.it(t.targetId,u)?0:2,nt:u}}it(t,e){const n=this.qe.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{e(n.path.canonicalString())||(this.ze(t,n,null),r++)})),r}st(t){const e=new Map;this.Qe.forEach(((n,r)=>{const i=this.Xe(r);if(i){if(n.current&&wc(i.target)){const e=new zo(i.target.path);null!==this.Ke.get(e)||this.ot(r,e)||this.ze(r,e,Ga.newNoDocument(e,t))}n.Ce&&(e.set(r,n.Me()),n.xe())}}));let n=Wc();this.$e.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Xe(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.Ke.forEach(((e,n)=>n.setReadTime(t)));const r=new Gu(t,e,this.Ue,this.Ke,n);return this.Ke=Bc(),this.$e=Zu(),this.Ue=new la(Po),r}Ge(t,e){if(!this.Je(t))return;const n=this.ot(t,e.key)?2:0;this.He(t).Oe(e.key,n),this.Ke=this.Ke.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t))}ze(t,e,n){if(!this.Je(t))return;const r=this.He(t);this.ot(t,e)?r.Oe(e,1):r.Ne(e),this.$e=this.$e.insert(e,this._t(e).delete(t)),n&&(this.Ke=this.Ke.insert(e,n))}removeTarget(t){this.Qe.delete(t)}et(t){const e=this.He(t).Me();return this.qe.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Be(t){this.He(t).Be()}He(t){let e=this.Qe.get(t);return e||(e=new Yu,this.Qe.set(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new pa(Po),this.$e=this.$e.insert(t,e)),e}Je(t){const e=null!==this.Xe(t);return e||mo("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.Qe.get(t);return e&&e.ve?null:this.qe.ut(t)}Ye(t){this.Qe.set(t,new Yu),this.qe.getRemoteKeysForTarget(t).forEach((e=>{this.ze(t,e,null)}))}ot(t,e){return this.qe.getRemoteKeysForTarget(t).has(e)}}function Zu(){return new la(zo.comparator)}function th(){return new la(zo.comparator)}const eh=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),nh=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),rh=(()=>{const t={and:"AND",or:"OR"};return t})();class ih{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function sh(t,e){return t.useProto3Json||na(e)?e:{value:e}}function oh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ah(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ch(t,e){return oh(t,e.toTimestamp())}function uh(t){return _o(!!t),Uo.fromTimestamp(function(t){const e=Ea(t);return new Vo(e.seconds,e.nanos)}(t))}function hh(t,e){return function(t){return new jo(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function lh(t){const e=jo.fromString(t);return _o(Lh(e)),e}function dh(t,e){return hh(t.databaseId,e.path)}function fh(t,e){const n=lh(e);if(n.get(1)!==t.databaseId.projectId)throw new Io(To.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Io(To.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new zo(yh(n))}function ph(t,e){return hh(t.databaseId,e)}function gh(t){const e=lh(t);return 4===e.length?jo.emptyPath():yh(e)}function mh(t){return new jo(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function yh(t){return _o(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function vh(t,e,n){return{name:dh(t,e),fields:n.value.mapValue.fields}}function wh(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Eo()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(_o(void 0===e||"string"==typeof e),va.fromBase64String(e||"")):(_o(void 0===e||e instanceof Uint8Array),va.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?To.UNKNOWN:Fu(t.code);return new Io(e,t.message||"")}(o);n=new Xu(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=fh(t,r.document.name),s=uh(r.document.updateTime),o=r.document.createTime?uh(r.document.createTime):Uo.min(),a=new za({mapValue:{fields:r.document.fields}}),c=Ga.newFoundDocument(i,s,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Qu(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=fh(t,r.document),s=r.readTime?uh(r.readTime):Uo.min(),o=Ga.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Qu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=fh(t,r.document),s=r.removedTargetIds||[];n=new Qu([],s,i,null)}else{if(!("filter"in e))return Eo();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,s=new Ou(r,i),o=t.targetId;n=new Wu(o,s)}}return n}function Eh(t,e){let n;if(e instanceof Tu)n={update:vh(t,e.key,e.value)};else if(e instanceof Du)n={delete:dh(t,e.key)};else if(e instanceof Iu)n={update:vh(t,e.key,e.data),updateMask:Oh(e.fieldMask)};else{if(!(e instanceof Nu))return Eo();n={verify:dh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof su)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ou)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof cu)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof hu)return{fieldPath:e.field.canonicalString(),increment:n.Te};throw Eo()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:ch(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Eo()}(t,e.precondition)),n}function _h(t,e){return t&&t.length>0?(_o(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?uh(t.updateTime):uh(e);return n.isEqual(Uo.min())&&(n=uh(e)),new pu(n,t.transformResults||[])}(t,e)))):[]}function bh(t,e){return{documents:[ph(t,e.path)]}}function Th(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=ph(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ph(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0!==t.length)return xh(tc.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:kh(t.field),direction:Ah(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=sh(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Ih(t){let e=gh(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){_o(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=Ch(t);return e instanceof tc&&nc(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new Xa(Rh(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,na(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Ha(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Ha(n,e)}(n.endAt)),_c(e,i,o,s,a,"F",c,u)}function Sh(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Eo()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function Ch(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Rh(t.unaryFilter.field);return Za.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Rh(t.unaryFilter.field);return Za.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Rh(t.unaryFilter.field);return Za.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Rh(t.unaryFilter.field);return Za.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Eo()}}(t):void 0!==t.fieldFilter?function(t){return Za.create(Rh(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Eo()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return tc.create(t.compositeFilter.filters.map((t=>Ch(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Eo()}}(t.compositeFilter.op))}(t):Eo()}function Ah(t){return eh[t]}function Dh(t){return nh[t]}function Nh(t){return rh[t]}function kh(t){return{fieldPath:t.canonicalString()}}function Rh(t){return $o.fromServerFormat(t.fieldPath)}function xh(t){return t instanceof Za?function(t){if("=="===t.op){if(Ba(t.value))return{unaryFilter:{field:kh(t.field),op:"IS_NAN"}};if(Ua(t.value))return{unaryFilter:{field:kh(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Ba(t.value))return{unaryFilter:{field:kh(t.field),op:"IS_NOT_NAN"}};if(Ua(t.value))return{unaryFilter:{field:kh(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kh(t.field),op:Dh(t.op),value:t.value}}}(t):t instanceof tc?function(t){const e=t.getFilters().map((t=>xh(t)));return 1===e.length?e[0]:{compositeFilter:{op:Nh(t.op),filters:e}}}(t):Eo()}function Oh(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Lh(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
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
 */class Mh{constructor(t,e,n,r,i=Uo.min(),s=Uo.min(),o=va.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new Mh(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Mh(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Mh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Mh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
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
 */class Ph{constructor(t){this.ct=t}}function Fh(t){const e=Ih({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?kc(e,e.limit,"L"):e}
/**
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
 */class Vh{constructor(){}Pt(t,e){this.It(t,e),e.Tt()}It(t,e){if("nullValue"in t)this.Et(e,5);else if("booleanValue"in t)this.Et(e,10),e.dt(t.booleanValue?1:0);else if("integerValue"in t)this.Et(e,15),e.dt(_a(t.integerValue));else if("doubleValue"in t){const n=_a(t.doubleValue);isNaN(n)?this.Et(e,13):(this.Et(e,15),ra(n)?e.dt(0):e.dt(n))}else if("timestampValue"in t){const n=t.timestampValue;this.Et(e,20),"string"==typeof n?e.At(n):(e.At(`${n.seconds||""}`),e.dt(n.nanos||0))}else if("stringValue"in t)this.Rt(t.stringValue,e),this.Vt(e);else if("bytesValue"in t)this.Et(e,30),e.ft(ba(t.bytesValue)),this.Vt(e);else if("referenceValue"in t)this.gt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Et(e,45),e.dt(n.latitude||0),e.dt(n.longitude||0)}else"mapValue"in t?$a(t)?this.Et(e,Number.MAX_SAFE_INTEGER):(this.yt(t.mapValue,e),this.Vt(e)):"arrayValue"in t?(this.wt(t.arrayValue,e),this.Vt(e)):Eo()}Rt(t,e){this.Et(e,25),this.St(t,e)}St(t,e){e.At(t)}yt(t,e){const n=t.fields||{};this.Et(e,55);for(const r of Object.keys(n))this.Rt(r,e),this.It(n[r],e)}wt(t,e){const n=t.values||[];this.Et(e,50);for(const r of n)this.It(r,e)}gt(t,e){this.Et(e,37),zo.fromName(t).path.forEach((t=>{this.Et(e,60),this.St(t,e)}))}Et(t,e){t.dt(e)}Vt(t){t.dt(2)}}Vh.bt=new Vh;
/**
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
 */
class Uh{constructor(){this.sn=new Bh}addToCollectionParentIndex(t,e){return this.sn.add(e),Zo.resolve()}getCollectionParents(t,e){return Zo.resolve(this.sn.getEntries(e))}addFieldIndex(t,e){return Zo.resolve()}deleteFieldIndex(t,e){return Zo.resolve()}getDocumentsMatchingTarget(t,e){return Zo.resolve(null)}getIndexType(t,e){return Zo.resolve(0)}getFieldIndexes(t,e){return Zo.resolve([])}getNextCollectionGroupToUpdate(t){return Zo.resolve(null)}getMinOffset(t,e){return Zo.resolve(Qo.min())}getMinOffsetFromCollectionGroup(t,e){return Zo.resolve(Qo.min())}updateCollectionGroup(t,e,n){return Zo.resolve()}updateIndexEntries(t,e){return Zo.resolve()}}class Bh{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new pa(jo.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new pa(jo.comparator)).toArray()}}
/**
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
 */new Uint8Array(0);class jh{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new jh(t,jh.DEFAULT_COLLECTION_PERCENTILE,jh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
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
 */
/**
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
 */jh.DEFAULT_COLLECTION_PERCENTILE=10,jh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,jh.DEFAULT=new jh(41943040,jh.DEFAULT_COLLECTION_PERCENTILE,jh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),jh.DISABLED=new jh(-1,0,0);
/**
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
 */
class qh{constructor(t){this.Mn=t}next(){return this.Mn+=2,this.Mn}static xn(){return new qh(0)}static On(){return new qh(-1)}}
/**
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
 */
/**
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
 */
class $h{constructor(){this.changes=new Vc((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ga.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Zo.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
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
 */
/**
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
 */
/**
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
 */
class zh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
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
 */class Kh{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Eu(n.mutation,t,ma.empty(),Vo.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Wc()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Wc()){const r=zc();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=qc();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=zc();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Wc())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=Bc();const s=Gc(),o=function(){return Gc()}();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Iu)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),Eu(o.mutation,e,o.mutation.getFieldMask(),Vo.now())):s.set(e.key,ma.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new zh(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Gc();let r=new la(((t,e)=>t-e)),i=Wc();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||ma.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||Wc()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Kc();c.forEach((t=>{if(!i.has(t)){const r=vu(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Zo.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return zo.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Cc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):Zo.resolve(zc());let o=-1,a=i;return s.next((e=>Zo.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Zo.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Wc()))).next((t=>({batchId:o,changes:$c(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new zo(e)).next((t=>{let e=qc();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=qc();return this.indexManager.getCollectionParents(t,r).next((s=>Zo.forEach(s,(s=>{const o=function(t,e){return new Ec(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r)))).next((t=>{r.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,Ga.newInvalidDocument(r)))}));let n=qc();return t.forEach(((t,i)=>{const s=r.get(t);void 0!==s&&Eu(s.mutation,i,ma.empty(),Vo.now()),Lc(e,i)&&(n=n.insert(t,i))})),n}))}}
/**
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
 */class Gh{constructor(t){this.serializer=t,this.ar=new Map,this.ur=new Map}getBundleMetadata(t,e){return Zo.resolve(this.ar.get(e))}saveBundleMetadata(t,e){return this.ar.set(e.id,function(t){return{id:t.id,version:t.version,createTime:uh(t.createTime)}}(e)),Zo.resolve()}getNamedQuery(t,e){return Zo.resolve(this.ur.get(e))}saveNamedQuery(t,e){return this.ur.set(e.name,function(t){return{name:t.name,query:Fh(t.bundledQuery),readTime:uh(t.readTime)}}(e)),Zo.resolve()}}
/**
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
 */class Hh{constructor(){this.overlays=new la(zo.comparator),this.cr=new Map}getOverlay(t,e){return Zo.resolve(this.overlays.get(e))}getOverlays(t,e){const n=zc();return Zo.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ht(t,e,r)})),Zo.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.cr.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.cr.delete(n)),Zo.resolve()}getOverlaysForCollection(t,e,n){const r=zc(),i=e.length+1,s=new zo(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Zo.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new la(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=zc(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=zc(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return Zo.resolve(o)}ht(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.cr.get(r.largestBatchId).delete(n.key);this.cr.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new xu(e,n));let i=this.cr.get(e);void 0===i&&(i=Wc(),this.cr.set(e,i)),this.cr.set(e,i.add(n.key))}}
/**
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
 */class Qh{constructor(){this.lr=new pa(Wh.hr),this.Pr=new pa(Wh.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(t,e){const n=new Wh(t,e);this.lr=this.lr.add(n),this.Pr=this.Pr.add(n)}Tr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Er(new Wh(t,e))}dr(t,e){t.forEach((t=>this.removeReference(t,e)))}Ar(t){const e=new zo(new jo([])),n=new Wh(e,t),r=new Wh(e,t+1),i=[];return this.Pr.forEachInRange([n,r],(t=>{this.Er(t),i.push(t.key)})),i}Rr(){this.lr.forEach((t=>this.Er(t)))}Er(t){this.lr=this.lr.delete(t),this.Pr=this.Pr.delete(t)}Vr(t){const e=new zo(new jo([])),n=new Wh(e,t),r=new Wh(e,t+1);let i=Wc();return this.Pr.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Wh(t,0),n=this.lr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Wh{constructor(t,e){this.key=t,this.mr=e}static hr(t,e){return zo.comparator(t.key,e.key)||Po(t.mr,e.mr)}static Ir(t,e){return Po(t.mr,e.mr)||zo.comparator(t.key,e.key)}}
/**
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
 */class Xh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.gr=1,this.pr=new pa(Wh.hr)}checkEmpty(t){return Zo.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new ku(i,e,n,r);this.mutationQueue.push(s);for(const o of r)this.pr=this.pr.add(new Wh(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Zo.resolve(s)}lookupMutationBatch(t,e){return Zo.resolve(this.yr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.wr(n),i=r<0?0:r;return Zo.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Zo.resolve(0===this.mutationQueue.length?-1:this.gr-1)}getAllMutationBatches(t){return Zo.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Wh(e,0),r=new Wh(e,Number.POSITIVE_INFINITY),i=[];return this.pr.forEachInRange([n,r],(t=>{const e=this.yr(t.mr);i.push(e)})),Zo.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new pa(Po);return e.forEach((t=>{const e=new Wh(t,0),r=new Wh(t,Number.POSITIVE_INFINITY);this.pr.forEachInRange([e,r],(t=>{n=n.add(t.mr)}))})),Zo.resolve(this.Sr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;zo.isDocumentKey(i)||(i=i.child(""));const s=new Wh(new zo(i),0);let o=new pa(Po);return this.pr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.mr)),!0)}),s),Zo.resolve(this.Sr(o))}Sr(t){const e=[];return t.forEach((t=>{const n=this.yr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){_o(0===this.br(e.batchId,"removed")),this.mutationQueue.shift();let n=this.pr;return Zo.forEach(e.mutations,(r=>{const i=new Wh(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.pr=n}))}Cn(t){}containsKey(t,e){const n=new Wh(e,0),r=this.pr.firstAfterOrEqual(n);return Zo.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Zo.resolve()}br(t,e){return this.wr(t)}wr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}yr(t){const e=this.wr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
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
 */class Yh{constructor(t){this.Dr=t,this.docs=function(){return new la(zo.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Dr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Zo.resolve(n?n.document.mutableCopy():Ga.newInvalidDocument(e))}getEntries(t,e){let n=Bc();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Ga.newInvalidDocument(t))})),Zo.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=Bc();const s=e.path,o=new zo(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||Wo(Ho(o),n)<=0||(r.has(o.key)||Lc(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Zo.resolve(i)}getAllFromCollectionGroup(t,e,n,r){Eo()}vr(t,e){return Zo.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Jh(this)}getSize(t){return Zo.resolve(this.size)}}class Jh extends $h{constructor(t){super(),this.sr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.sr.addEntry(t,r)):this.sr.removeEntry(n)})),Zo.waitFor(e)}getFromCache(t,e){return this.sr.getEntry(t,e)}getAllFromCache(t,e){return this.sr.getEntries(t,e)}}
/**
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
 */class Zh{constructor(t){this.persistence=t,this.Cr=new Vc((t=>yc(t)),vc),this.lastRemoteSnapshotVersion=Uo.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Qh,this.targetCount=0,this.Or=qh.xn()}forEachTarget(t,e){return this.Cr.forEach(((t,n)=>e(n))),Zo.resolve()}getLastRemoteSnapshotVersion(t){return Zo.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Zo.resolve(this.Fr)}allocateTargetId(t){return this.highestTargetId=this.Or.next(),Zo.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Fr&&(this.Fr=e),Zo.resolve()}Ln(t){this.Cr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Or=new qh(e),this.highestTargetId=e),t.sequenceNumber>this.Fr&&(this.Fr=t.sequenceNumber)}addTargetData(t,e){return this.Ln(e),this.targetCount+=1,Zo.resolve()}updateTargetData(t,e){return this.Ln(e),Zo.resolve()}removeTargetData(t,e){return this.Cr.delete(e.target),this.Mr.Ar(e.targetId),this.targetCount-=1,Zo.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Cr.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Cr.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Zo.waitFor(i).next((()=>r))}getTargetCount(t){return Zo.resolve(this.targetCount)}getTargetData(t,e){const n=this.Cr.get(e)||null;return Zo.resolve(n)}addMatchingKeys(t,e,n){return this.Mr.Tr(e,n),Zo.resolve()}removeMatchingKeys(t,e,n){this.Mr.dr(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Zo.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Mr.Ar(e),Zo.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Mr.Vr(e);return Zo.resolve(n)}containsKey(t,e){return Zo.resolve(this.Mr.containsKey(e))}}
/**
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
 */class tl{constructor(t,e){this.Nr={},this.overlays={},this.Br=new ea(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=t(this),this.kr=new Zh(this),this.indexManager=new Uh,this.remoteDocumentCache=function(t){return new Yh(t)}((t=>this.referenceDelegate.qr(t))),this.serializer=new Ph(e),this.Qr=new Gh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Hh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Nr[t.toKey()];return n||(n=new Xh(e,this.referenceDelegate),this.Nr[t.toKey()]=n),n}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(t,e,n){mo("MemoryPersistence","Starting transaction:",t);const r=new el(this.Br.next());return this.referenceDelegate.Kr(),n(r).next((t=>this.referenceDelegate.$r(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ur(t,e){return Zo.or(Object.values(this.Nr).map((n=>()=>n.containsKey(t,e))))}}class el extends Yo{constructor(t){super(),this.currentSequenceNumber=t}}class nl{constructor(t){this.persistence=t,this.Wr=new Qh,this.Gr=null}static zr(t){return new nl(t)}get jr(){if(this.Gr)return this.Gr;throw Eo()}addReference(t,e,n){return this.Wr.addReference(n,e),this.jr.delete(n.toString()),Zo.resolve()}removeReference(t,e,n){return this.Wr.removeReference(n,e),this.jr.add(n.toString()),Zo.resolve()}markPotentiallyOrphaned(t,e){return this.jr.add(e.toString()),Zo.resolve()}removeTarget(t,e){this.Wr.Ar(e.targetId).forEach((t=>this.jr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.jr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Kr(){this.Gr=new Set}$r(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Zo.forEach(this.jr,(n=>{const r=zo.fromPath(n);return this.Hr(t,r).next((t=>{t||e.removeEntry(r,Uo.min())}))})).next((()=>(this.Gr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Hr(t,e).next((t=>{t?this.jr.delete(e.toString()):this.jr.add(e.toString())}))}qr(t){return 0}Hr(t,e){return Zo.or([()=>Zo.resolve(this.Wr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ur(t,e)])}}
/**
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
 */
class rl{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Li=n,this.ki=r}static qi(t,e){let n=Wc(),r=Wc();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new rl(t,e.fromCache,n,r)}}
/**
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
 */class il{constructor(){this.Qi=!1}initialize(t,e){this.Ki=t,this.indexManager=e,this.Qi=!0}getDocumentsMatchingQuery(t,e,n,r){return this.$i(t,e).next((i=>i||this.Ui(t,e,r,n))).next((n=>n||this.Wi(t,e)))}$i(t,e){if(Tc(e))return Zo.resolve(null);let n=Dc(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=kc(e,null,"F"),n=Dc(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=Wc(...r);return this.Ki.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Gi(e,r);return this.zi(e,s,i,n.readTime)?this.$i(t,kc(e,null,"F")):this.ji(t,s,e,n)}))))})))))}Ui(t,e,n,r){return Tc(e)||r.isEqual(Uo.min())?this.Wi(t,e):this.Ki.getDocuments(t,n).next((i=>{const s=this.Gi(e,i);return this.zi(e,s,n,r)?this.Wi(t,e):(go()<=B.DEBUG&&mo("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Oc(e)),this.ji(t,s,e,Go(r,-1)))}))}Gi(t,e){let n=new pa(Pc(t));return e.forEach(((e,r)=>{Lc(t,r)&&(n=n.add(r))})),n}zi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Wi(t,e){return go()<=B.DEBUG&&mo("QueryEngine","Using full collection scan to execute query:",Oc(e)),this.Ki.getDocumentsMatchingQuery(t,e,Qo.min())}ji(t,e,n,r){return this.Ki.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
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
 */class sl{constructor(t,e,n,r){this.persistence=t,this.Hi=e,this.serializer=r,this.Ji=new la(Po),this.Yi=new Vc((t=>yc(t)),vc),this.Zi=new Map,this.Xi=t.getRemoteDocumentCache(),this.kr=t.getTargetCache(),this.Qr=t.getBundleCache(),this.es(n)}es(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Kh(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ji)))}}function ol(t,e,n,r){return new sl(t,e,n,r)}async function al(t,e){const n=bo(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.es(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=Wc();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ts:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function cl(t,e){const n=bo(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=Zo.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);_o(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Wc();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function ul(t){const e=bo(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.kr.getLastRemoteSnapshotVersion(t)))}function hl(t,e){const n=bo(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const o=[];e.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.kr.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.kr.addMatchingKeys(t,s.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(va.EMPTY_BYTE_STRING,Uo.min()).withLastLimboFreeSnapshotVersion(Uo.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.kr.updateTargetData(t,u))}));let a=Bc(),c=Wc();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(ll(t,s,e.documentUpdates).next((t=>{a=t.ns,c=t.rs}))),!r.isEqual(Uo.min())){const e=n.kr.getLastRemoteSnapshotVersion(t).next((e=>n.kr.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Zo.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ji=i,t)))}function ll(t,e,n){let r=Wc(),i=Wc();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Bc();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Uo.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):mo("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{ns:r,rs:i}}))}function dl(t,e){const n=bo(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function fl(t,e){const n=bo(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.kr.getTargetData(t,e).next((i=>i?(r=i,Zo.resolve(r)):n.kr.allocateTargetId(t).next((i=>(r=new Mh(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.kr.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.Ji.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(t.targetId,t),n.Yi.set(e,t.targetId)),t}))}async function pl(t,e,n){const r=bo(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!ta(t))throw t;mo("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function gl(t,e,n){const r=bo(t);let i=Uo.min(),s=Wc();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=bo(t),i=r.Yi.get(n);return void 0!==i?Zo.resolve(r.Ji.get(i)):r.kr.getTargetData(e,n)}(r,t,Dc(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Hi.getDocumentsMatchingQuery(t,e,n?i:Uo.min(),n?s:Wc()))).next((t=>(ml(r,Mc(e),t),{documents:t,ss:s})))))}function ml(t,e,n){let r=t.Zi.get(e)||Uo.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Zi.set(e,r)}class yl{constructor(){this.activeTargetIds=Yc()}hs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ps(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ls(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class vl{constructor(){this.Hs=new yl,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Hs.hs(t),this.Js[t]||"not-current"}updateQueryState(t,e,n){this.Js[t]=e}removeLocalQueryTarget(t){this.Hs.Ps(t)}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){delete this.Js[t]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(t){return this.Hs.activeTargetIds.has(t)}start(){return this.Hs=new yl,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
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
 */class wl{Ys(t){}shutdown(){}}
/**
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
 */class El{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(t){this.ro.push(t)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){mo("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ro)t(0)}no(){mo("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ro)t(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */let _l=null;function bl(){return null===_l?_l=function(){return 268435456+Math.round(2147483648*Math.random())}():_l++,"0x"+_l.toString(16)
/**
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
 */}const Tl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
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
 */class Il{constructor(t){this.so=t.so,this.oo=t.oo}_o(t){this.ao=t}uo(t){this.co=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.so(t)}ho(){this.ao()}Po(t){this.co(t)}Io(t){this.lo(t)}}
/**
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
 */const Sl="WebChannelConnection";class Cl extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.To=e+"://"+t.host,this.Eo=`projects/${n}/databases/${r}`,this.Ao="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Ro(){return!1}Vo(t,e,n,r,i){const s=bl(),o=this.mo(t,e);mo("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(a,r,i),this.po(t,o,a,n).then((e=>(mo("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw vo("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}yo(t,e,n,r,i,s){return this.Vo(t,e,n,r,i)}fo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}mo(t,e){const n=Tl[t];return`${this.To}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}po(t,e,n,r){const i=bl();return new Promise(((s,o)=>{const a=new ao;a.setWithCredentials(!0),a.listenOnce(no.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case eo.NO_ERROR:const e=a.getResponseJson();mo(Sl,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case eo.TIMEOUT:mo(Sl,`RPC '${t}' ${i} timed out`),o(new Io(To.DEADLINE_EXCEEDED,"Request time out"));break;case eo.HTTP_ERROR:const n=a.getStatus();if(mo(Sl,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(To).indexOf(e)>=0?e:To.UNKNOWN}(e.status);o(new Io(t,e.message))}else o(new Io(To.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Io(To.UNAVAILABLE,"Connection failed."));break;default:Eo()}}finally{mo(Sl,`RPC '${t}' ${i} completed.`)}}));const c=JSON.stringify(r);mo(Sl,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",c,n,15)}))}wo(t,e,n){const r=bl(),i=[this.To,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Zs(),o=to(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new so({})),this.fo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=i.join("");mo(Sl,`Creating RPC '${t}' stream ${r}: ${u}`,a);const h=s.createWebChannel(u,a);let l=!1,d=!1;const f=new Il({so:e=>{d?mo(Sl,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(l||(mo(Sl,`Opening RPC '${t}' stream ${r} transport.`),h.open(),l=!0),mo(Sl,`RPC '${t}' stream ${r} sending:`,e),h.send(e))},oo:()=>h.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(h,oo.EventType.OPEN,(()=>{d||mo(Sl,`RPC '${t}' stream ${r} transport opened.`)})),p(h,oo.EventType.CLOSE,(()=>{d||(d=!0,mo(Sl,`RPC '${t}' stream ${r} transport closed`),f.Po())})),p(h,oo.EventType.ERROR,(e=>{d||(d=!0,vo(Sl,`RPC '${t}' stream ${r} transport errored:`,e),f.Po(new Io(To.UNAVAILABLE,"The operation could not be completed")))})),p(h,oo.EventType.MESSAGE,(e=>{var n;if(!d){const i=e.data[0];_o(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){mo(Sl,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=Lu[t];if(void 0!==e)return Fu(e)}(e),i=o.message;void 0===n&&(n=To.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),d=!0,f.Po(new Io(n,i)),h.close()}else mo(Sl,`RPC '${t}' stream ${r} received:`,i),f.Io(i)}})),p(o,ro.STAT_EVENT,(e=>{e.stat===io.PROXY?mo(Sl,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===io.NOPROXY&&mo(Sl,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.ho()}),0),f}}
/**
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
 */
/**
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
 */function Al(){return"undefined"!=typeof document?document:null}
/**
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
 */function Dl(t){return new ih(t,!0)}
/**
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
 */class Nl{constructor(t,e,n=1e3,r=1.5,i=6e4){this.ii=t,this.timerId=e,this.So=n,this.bo=r,this.Do=i,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(t){this.cancel();const e=Math.floor(this.vo+this.Oo()),n=Math.max(0,Date.now()-this.Fo),r=Math.max(0,e-n);r>0&&mo("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.vo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,r,(()=>(this.Fo=Date.now(),t()))),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){null!==this.Co&&(this.Co.skipDelay(),this.Co=null)}cancel(){null!==this.Co&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}
/**
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
 */class kl{constructor(t,e,n,r,i,s,o,a){this.ii=t,this.Bo=n,this.Lo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Nl(t,e)}$o(){return 1===this.state||5===this.state||this.Uo()}Uo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&null===this.qo&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,(()=>this.jo())))}Ho(t){this.Jo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(t,e){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,4!==t?this.Ko.reset():e&&e.code===To.RESOURCE_EXHAUSTED?(yo(e.toString()),yo("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):e&&e.code===To.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Zo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.uo(e)}Zo(){}auth(){this.state=1;const t=this.Xo(this.ko),e=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.ko===e&&this.e_(t,n)}),(e=>{t((()=>{const t=new Io(To.UNKNOWN,"Fetching auth token failed: "+e.message);return this.t_(t)}))}))}e_(t,e){const n=this.Xo(this.ko);this.stream=this.n_(t,e),this.stream._o((()=>{n((()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,(()=>(this.Uo()&&(this.state=3),Promise.resolve()))),this.listener._o())))})),this.stream.uo((t=>{n((()=>this.t_(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Wo(){this.state=5,this.Ko.xo((async()=>{this.state=0,this.start()}))}t_(t){return mo("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return e=>{this.ii.enqueueAndForget((()=>this.ko===t?e():(mo("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Rl extends kl{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}n_(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.Ko.reset();const e=wh(this.serializer,t),n=function(t){if(!("targetChange"in t))return Uo.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Uo.min():e.readTime?uh(e.readTime):Uo.min()}(t);return this.listener.r_(e,n)}i_(t){const e={};e.database=mh(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=wc(r)?{documents:bh(t,r)}:{query:Th(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=ah(t,e.resumeToken);const r=sh(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(Uo.min())>0){n.readTime=oh(t,e.snapshotVersion.toTimestamp());const r=sh(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=Sh(this.serializer,t);n&&(e.labels=n),this.Ho(e)}s_(t){const e={};e.database=mh(this.serializer),e.removeTarget=t,this.Ho(e)}}class xl extends kl{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(_o(!!t.streamToken),this.lastStreamToken=t.streamToken,this.o_){this.Ko.reset();const e=_h(t.writeResults,t.commitTime),n=uh(t.commitTime);return this.listener.u_(n,e)}return _o(!t.writeResults||0===t.writeResults.length),this.o_=!0,this.listener.c_()}l_(){const t={};t.database=mh(this.serializer),this.Ho(t)}a_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Eh(this.serializer,t)))};this.Ho(e)}}
/**
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
 */class Ol extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.h_=!1}P_(){if(this.h_)throw new Io(To.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(t,e,n){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.Vo(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===To.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Io(To.UNKNOWN,t.toString())}))}yo(t,e,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.yo(t,e,n,i,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===To.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Io(To.UNKNOWN,t.toString())}))}terminate(){this.h_=!0}}class Ll{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){0===this.T_&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve()))))}m_(t){"Online"===this.state?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.R_("Offline")))}set(t){this.f_(),this.T_=0,"Online"===t&&(this.d_=!1),this.R_(t)}R_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}V_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(yo(e),this.d_=!1):mo("OnlineStateTracker",e)}f_(){null!==this.E_&&(this.E_.cancel(),this.E_=null)}}
/**
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
 */class Ml{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=i,this.S_.Ys((t=>{n.enqueueAndForget((async()=>{zl(this)&&(mo("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=bo(t);e.y_.add(4),await Fl(e),e.b_.set("Unknown"),e.y_.delete(4),await Pl(e)}(this))}))})),this.b_=new Ll(n,r)}}async function Pl(t){if(zl(t))for(const e of t.w_)await e(!0)}async function Fl(t){for(const e of t.w_)await e(!1)}function Vl(t,e){const n=bo(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),$l(n)?ql(n):cd(n).Uo()&&Bl(n,e))}function Ul(t,e){const n=bo(t),r=cd(n);n.p_.delete(e),r.Uo()&&jl(n,e),0===n.p_.size&&(r.Uo()?r.zo():zl(n)&&n.b_.set("Unknown"))}function Bl(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Uo.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}cd(t).i_(e)}function jl(t,e){t.D_.Be(e),cd(t).s_(e)}function ql(t){t.D_=new Ju({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),cd(t).start(),t.b_.A_()}function $l(t){return zl(t)&&!cd(t).$o()&&t.p_.size>0}function zl(t){return 0===bo(t).y_.size}function Kl(t){t.D_=void 0}async function Gl(t){t.p_.forEach(((e,n)=>{Bl(t,e)}))}async function Hl(t,e){Kl(t),$l(t)?(t.b_.m_(e),ql(t)):t.b_.set("Unknown")}async function Ql(t,e,n){if(t.b_.set("Online"),e instanceof Xu&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.p_.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.p_.delete(r),t.D_.removeTarget(r))}(t,e)}catch(n){mo("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Wl(t,n)}else if(e instanceof Qu?t.D_.We(e):e instanceof Wu?t.D_.Ze(e):t.D_.je(e),!n.isEqual(Uo.min()))try{const e=await ul(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.D_.st(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.p_.get(r);i&&t.p_.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t.p_.get(e);if(!r)return;t.p_.set(e,r.withResumeToken(va.EMPTY_BYTE_STRING,r.snapshotVersion)),jl(t,e);const i=new Mh(r.target,e,n,r.sequenceNumber);Bl(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){mo("RemoteStore","Failed to raise snapshot:",e),await Wl(t,e)}}async function Wl(t,e,n){if(!ta(e))throw e;t.y_.add(1),await Fl(t),t.b_.set("Offline"),n||(n=()=>ul(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{mo("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await Pl(t)}))}function Xl(t,e){return e().catch((n=>Wl(t,n,e)))}async function Yl(t){const e=bo(t),n=ud(e);let r=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;Jl(e);)try{const t=await dl(e.localStore,r);if(null===t){0===e.g_.length&&n.zo();break}r=t.batchId,Zl(e,t)}catch(t){await Wl(e,t)}td(e)&&ed(e)}function Jl(t){return zl(t)&&t.g_.length<10}function Zl(t,e){t.g_.push(e);const n=ud(t);n.Uo()&&n.__&&n.a_(e.mutations)}function td(t){return zl(t)&&!ud(t).$o()&&t.g_.length>0}function ed(t){ud(t).start()}async function nd(t){ud(t).l_()}async function rd(t){const e=ud(t);for(const n of t.g_)e.a_(n.mutations)}async function id(t,e,n){const r=t.g_.shift(),i=Ru.from(r,e,n);await Xl(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Yl(t)}async function sd(t,e){e&&ud(t).__&&await async function(t,e){if(function(t){return Pu(t)&&t!==To.ABORTED}(e.code)){const n=t.g_.shift();ud(t).Go(),await Xl(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Yl(t)}}(t,e),td(t)&&ed(t)}async function od(t,e){const n=bo(t);n.asyncQueue.verifyOperationInProgress(),mo("RemoteStore","RemoteStore received new credentials");const r=zl(n);n.y_.add(3),await Fl(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await Pl(n)}async function ad(t,e){const n=bo(t);e?(n.y_.delete(2),await Pl(n)):e||(n.y_.add(2),await Fl(n),n.b_.set("Unknown"))}function cd(t){return t.v_||(t.v_=function(t,e,n){const r=bo(t);return r.P_(),new Rl(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
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
 */}(t.datastore,t.asyncQueue,{_o:Gl.bind(null,t),uo:Hl.bind(null,t),r_:Ql.bind(null,t)}),t.w_.push((async e=>{e?(t.v_.Go(),$l(t)?ql(t):t.b_.set("Unknown")):(await t.v_.stop(),Kl(t))}))),t.v_}function ud(t){return t.C_||(t.C_=function(t,e,n){const r=bo(t);return r.P_(),new xl(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{_o:nd.bind(null,t),uo:sd.bind(null,t),c_:rd.bind(null,t),u_:id.bind(null,t)}),t.w_.push((async e=>{e?(t.C_.Go(),await Yl(t)):(await t.C_.stop(),t.g_.length>0&&(mo("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))}))),t.C_
/**
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
 */}class hd{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new So,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new hd(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Io(To.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ld(t,e){if(yo("AsyncQueue",`${e}: ${t}`),ta(t))return new Io(To.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
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
 */class dd{constructor(t){this.comparator=t?(e,n)=>t(e,n)||zo.comparator(e.key,n.key):(t,e)=>zo.comparator(t.key,e.key),this.keyedMap=qc(),this.sortedSet=new la(this.comparator)}static emptySet(t){return new dd(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof dd))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new dd;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
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
 */class fd{constructor(){this.F_=new la(zo.comparator)}track(t){const e=t.doc.key,n=this.F_.get(e);n?0!==t.type&&3===n.type?this.F_=this.F_.insert(e,t):3===t.type&&1!==n.type?this.F_=this.F_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.F_=this.F_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.F_=this.F_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.F_=this.F_.remove(e):1===t.type&&2===n.type?this.F_=this.F_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.F_=this.F_.insert(e,{type:2,doc:t.doc}):Eo():this.F_=this.F_.insert(e,t)}M_(){const t=[];return this.F_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class pd{constructor(t,e,n,r,i,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new pd(t,e,dd.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Rc(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
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
 */class gd{constructor(){this.x_=void 0,this.listeners=[]}}class md{constructor(){this.queries=new Vc((t=>xc(t)),Rc),this.onlineState="Unknown",this.O_=new Set}}async function yd(t,e){const n=bo(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new gd),i)try{s.x_=await n.onListen(r)}catch(t){const n=ld(t,`Initialization of query '${Oc(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.N_(n.onlineState),s.x_&&e.B_(s.x_)&&_d(n)}async function vd(t,e){const n=bo(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function wd(t,e){const n=bo(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.B_(i)&&(r=!0);e.x_=i}}r&&_d(n)}function Ed(t,e,n){const r=bo(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function _d(t){t.O_.forEach((t=>{t.next()}))}class bd{constructor(t,e,n){this.query=t,this.L_=e,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=n||{}}B_(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new pd(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.k_?this.Q_(t)&&(this.L_.next(t),e=!0):this.K_(t,this.onlineState)&&(this.U_(t),e=!0),this.q_=t,e}onError(t){this.L_.error(t)}N_(t){this.onlineState=t;let e=!1;return this.q_&&!this.k_&&this.K_(this.q_,t)&&(this.U_(this.q_),e=!0),e}K_(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.W_||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Q_(t){if(t.docChanges.length>0)return!0;const e=this.q_&&this.q_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}U_(t){t=pd.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.k_=!0,this.L_.next(t)}}
/**
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
 */
/**
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
 */
class Td{constructor(t){this.key=t}}class Id{constructor(t){this.key=t}}class Sd{constructor(t,e){this.query=t,this.X_=e,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=Wc(),this.mutatedKeys=Wc(),this.na=Pc(t),this.ra=new dd(this.na)}get ia(){return this.X_}sa(t,e){const n=e?e.oa:new fd,r=e?e.ra:this.ra;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),h=Lc(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this._a(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.na(h,a)>0||c&&this.na(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(s=s.add(h),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{ra:s,oa:n,zi:o,mutatedKeys:i}}_a(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.ra;this.ra=t.ra,this.mutatedKeys=t.mutatedKeys;const i=t.oa.M_();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Eo()}};return n(t)-n(e)}
/**
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
 */(t.type,e.type)||this.na(t.doc,e.doc))),this.aa(n);const s=e?this.ua():[],o=0===this.ta.size&&this.current?1:0,a=o!==this.ea;return this.ea=o,0!==i.length||a?{snapshot:new pd(this.query,t.ra,r,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),ca:s}:{ca:s}}N_(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({ra:this.ra,oa:new fd,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(t){return!this.X_.has(t)&&!!this.ra.has(t)&&!this.ra.get(t).hasLocalMutations}aa(t){t&&(t.addedDocuments.forEach((t=>this.X_=this.X_.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.X_=this.X_.delete(t))),this.current=t.current)}ua(){if(!this.current)return[];const t=this.ta;this.ta=Wc(),this.ra.forEach((t=>{this.la(t.key)&&(this.ta=this.ta.add(t.key))}));const e=[];return t.forEach((t=>{this.ta.has(t)||e.push(new Id(t))})),this.ta.forEach((n=>{t.has(n)||e.push(new Td(n))})),e}ha(t){this.X_=t.ss,this.ta=Wc();const e=this.sa(t.documents);return this.applyChanges(e,!0)}Pa(){return pd.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,0===this.ea,this.hasCachedResults)}}class Cd{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Ad{constructor(t){this.key=t,this.Ia=!1}}class Dd{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ta={},this.Ea=new Vc((t=>xc(t)),Rc),this.da=new Map,this.Aa=new Set,this.Ra=new la(zo.comparator),this.Va=new Map,this.ma=new Qh,this.fa={},this.ga=new Map,this.pa=qh.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return!0===this.ya}}async function Nd(t,e){const n=Qd(t);let r,i;const s=n.Ea.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const t=await fl(n.localStore,Dc(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await kd(n,e,r,"current"===s,t.resumeToken),n.isPrimaryClient&&Vl(n.remoteStore,t)}return i}async function kd(t,e,n,r,i){t.wa=(e,n,r)=>async function(t,e,n,r){let i=e.view.sa(n);i.zi&&(i=await gl(t.localStore,e.query,!1).then((({documents:t})=>e.view.sa(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return qd(t,e.targetId,o.ca),o.snapshot}(t,e,n,r);const s=await gl(t.localStore,e,!0),o=new Sd(e,s.ss),a=o.sa(s.documents),c=Hu.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);qd(t,n,u.ca);const h=new Cd(e,n,o);return t.Ea.set(e,h),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),u.snapshot}async function Rd(t,e){const n=bo(t),r=n.Ea.get(e),i=n.da.get(r.targetId);if(i.length>1)return n.da.set(r.targetId,i.filter((t=>!Rc(t,e)))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await pl(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Ul(n.remoteStore,r.targetId),Bd(n,r.targetId)})).catch(Jo)):(Bd(n,r.targetId),await pl(n.localStore,r.targetId,!0))}async function xd(t,e,n){const r=Wd(t);try{const t=await function(t,e){const n=bo(t),r=Vo.now(),i=e.reduce(((t,e)=>t.add(e.key)),Wc());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Bc(),c=Wc();return n.Xi.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{s=i;const o=[];for(const t of e){const e=_u(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new Iu(t.key,e,Ka(e.value.mapValue),gu.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:$c(s)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.fa[t.currentUser.toKey()];r||(r=new la(Po)),r=r.insert(e,n),t.fa[t.currentUser.toKey()]=r}(r,t.batchId,n),await Kd(r,t.changes),await Yl(r.remoteStore)}catch(t){const e=ld(t,"Failed to persist write");n.reject(e)}}async function Od(t,e){const n=bo(t);try{const t=await hl(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.Va.get(e);r&&(_o(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Ia=!0:t.modifiedDocuments.size>0?_o(r.Ia):t.removedDocuments.size>0&&(_o(r.Ia),r.Ia=!1))})),await Kd(n,t,e)}catch(t){await Jo(t)}}function Ld(t,e,n){const r=bo(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Ea.forEach(((n,r)=>{const i=r.view.N_(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=bo(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.N_(e)&&(r=!0)})),r&&_d(n)}(r.eventManager,e),t.length&&r.Ta.r_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Md(t,e,n){const r=bo(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Va.get(e),s=i&&i.key;if(s){let t=new la(zo.comparator);t=t.insert(s,Ga.newNoDocument(s,Uo.min()));const n=Wc().add(s),i=new Gu(Uo.min(),new Map,new la(Po),t,n);await Od(r,i),r.Ra=r.Ra.remove(s),r.Va.delete(e),zd(r)}else await pl(r.localStore,e,!1).then((()=>Bd(r,e,n))).catch(Jo)}async function Pd(t,e){const n=bo(t),r=e.batch.batchId;try{const t=await cl(n.localStore,e);Ud(n,r,null),Vd(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Kd(n,t)}catch(t){await Jo(t)}}async function Fd(t,e,n){const r=bo(t);try{const t=await function(t,e){const n=bo(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(_o(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);Ud(r,e,n),Vd(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Kd(r,t)}catch(n){await Jo(n)}}function Vd(t,e){(t.ga.get(e)||[]).forEach((t=>{t.resolve()})),t.ga.delete(e)}function Ud(t,e,n){const r=bo(t);let i=r.fa[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.fa[r.currentUser.toKey()]=i}}function Bd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.da.get(e))t.Ea.delete(r),n&&t.Ta.Sa(r,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach((e=>{t.ma.containsKey(e)||jd(t,e)}))}function jd(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);null!==n&&(Ul(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),zd(t))}function qd(t,e,n){for(const r of n)r instanceof Td?(t.ma.addReference(r.key,e),$d(t,r)):r instanceof Id?(mo("SyncEngine","Document no longer in limbo: "+r.key),t.ma.removeReference(r.key,e),t.ma.containsKey(r.key)||jd(t,r.key)):Eo()}function $d(t,e){const n=e.key,r=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(r)||(mo("SyncEngine","New document in limbo: "+n),t.Aa.add(r),zd(t))}function zd(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new zo(jo.fromString(e)),r=t.pa.next();t.Va.set(r,new Ad(n)),t.Ra=t.Ra.insert(n,r),Vl(t.remoteStore,new Mh(Dc(bc(n.path)),r,"TargetPurposeLimboResolution",ea.ae))}}async function Kd(t,e,n){const r=bo(t),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach(((t,a)=>{o.push(r.wa(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=rl.qi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.Ta.r_(i),await async function(t,e){const n=bo(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Zo.forEach(e,(e=>Zo.forEach(e.Li,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Zo.forEach(e.ki,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!ta(t))throw t;mo("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Ji.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Ji=n.Ji.insert(t,i)}}}(r.localStore,s))}async function Gd(t,e){const n=bo(t);if(!n.currentUser.isEqual(e)){mo("SyncEngine","User change. New user:",e.toKey());const t=await al(n.localStore,e);n.currentUser=e,function(t,e){t.ga.forEach((t=>{t.forEach((t=>{t.reject(new Io(To.CANCELLED,e))}))})),t.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Kd(n,t.ts)}}function Hd(t,e){const n=bo(t),r=n.Va.get(e);if(r&&r.Ia)return Wc().add(r.key);{let t=Wc();const r=n.da.get(e);if(!r)return t;for(const e of r){const r=n.Ea.get(e);t=t.unionWith(r.view.ia)}return t}}function Qd(t){const e=bo(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Od.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Hd.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Md.bind(null,e),e.Ta.r_=wd.bind(null,e.eventManager),e.Ta.Sa=Ed.bind(null,e.eventManager),e}function Wd(t){const e=bo(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Pd.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Fd.bind(null,e),e}class Xd{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Dl(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return ol(this.persistence,new il,t.initialUser,this.serializer)}createPersistence(t){return new tl(nl.zr,this.serializer)}createSharedClientState(t){return new vl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Yd{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Ld(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gd.bind(null,this.syncEngine),await ad(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new md}()}createDatastore(t){const e=Dl(t.databaseInfo.databaseId),n=function(t){return new Cl(t)}(t.databaseInfo);return function(t,e,n,r){return new Ol(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,i){return new Ml(t,e,n,r,i)}(this.localStore,this.datastore,t.asyncQueue,(t=>Ld(this.syncEngine,t,0)),function(){return El.v()?new El:new wl}())}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Dd(t,e,n,r,i,s);return o&&(a.ya=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=bo(t);mo("RemoteStore","RemoteStore shutting down."),e.y_.add(5),await Fl(e),e.S_.shutdown(),e.b_.set("Unknown")}(this.remoteStore)}}
/**
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
 */
/**
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
 */
/**
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
 */
class Jd{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.va(this.observer.next,t)}error(t){this.observer.error?this.va(this.observer.error,t):yo("Uncaught Error in snapshot listener:",t.toString())}Ca(){this.muted=!0}va(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
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
 */
/**
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
 */
class Zd{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=lo.UNAUTHENTICATED,this.clientId=Mo.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{mo("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(mo("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Io(To.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new So;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=ld(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function tf(t,e){t.asyncQueue.verifyOperationInProgress(),mo("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await al(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function ef(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rf(t);mo("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>od(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>od(e.remoteStore,n))),t._onlineComponents=e}function nf(t){return"FirebaseError"===t.name?t.code===To.FAILED_PRECONDITION||t.code===To.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function rf(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){mo("FirestoreClient","Using user provided OfflineComponentProvider");try{await tf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!nf(n))throw n;vo("Error using user provided cache. Falling back to memory cache: "+n),await tf(t,new Xd)}}else mo("FirestoreClient","Using default OfflineComponentProvider"),await tf(t,new Xd);return t._offlineComponents}async function sf(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(mo("FirestoreClient","Using user provided OnlineComponentProvider"),await ef(t,t._uninitializedComponentsProvider._online)):(mo("FirestoreClient","Using default OnlineComponentProvider"),await ef(t,new Yd))),t._onlineComponents}function of(t){return sf(t).then((t=>t.syncEngine))}async function af(t){const e=await sf(t),n=e.eventManager;return n.onListen=Nd.bind(null,e.syncEngine),n.onUnlisten=Rd.bind(null,e.syncEngine),n}function cf(t,e,n={}){const r=new So;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new Jd({next:n=>{e.enqueueAndForget((()=>vd(t,o))),n.fromCache&&"server"===r.source?i.reject(new Io(To.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new bd(n,s,{includeMetadataChanges:!0,W_:!0});return yd(t,o)}(await af(t),t.asyncQueue,e,n,r))),r.promise}
/**
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
 */
function uf(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
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
 */}const hf=new Map;
/**
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
 */function lf(t,e,n){if(!n)throw new Io(To.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function df(t,e,n,r){if(!0===e&&!0===r)throw new Io(To.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ff(t){if(!zo.isDocumentKey(t))throw new Io(To.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function pf(t){if(zo.isDocumentKey(t))throw new Io(To.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function gf(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Eo()}function mf(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Io(To.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gf(t);throw new Io(To.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
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
 */
class yf{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new Io(To.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Io(To.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}df("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uf(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new Io(To.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new Io(To.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new Io(To.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class vf{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Io(To.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Io(To.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yf(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Ao;switch(t.type){case"firstParty":return new Ro(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Io(To.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=hf.get(t);e&&(mo("ComponentProvider","Removing Datastore"),hf.delete(t),e.terminate())}(this),Promise.resolve()}}function wf(t,e,n,r={}){var i;const s=(t=mf(t,vf))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&vo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=lo.MOCK_USER;else{e=b(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new Io(To.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new lo(s)}t._authCredentials=new Do(new Co(e,n))}}
/**
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
 */class Ef{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Ef(this.firestore,t,this._query)}}class _f{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bf(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new _f(this.firestore,t,this._key)}}class bf extends Ef{constructor(t,e,n){super(t,e,bc(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new _f(this.firestore,null,new zo(t))}withConverter(t){return new bf(this.firestore,t,this._path)}}function Tf(t,e,...n){if(t=x(t),lf("collection","path",e),t instanceof vf){const r=jo.fromString(e,...n);return pf(r),new bf(t,null,r)}{if(!(t instanceof _f||t instanceof bf))throw new Io(To.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(jo.fromString(e,...n));return pf(r),new bf(t.firestore,null,r)}}function If(t,e,...n){if(t=x(t),1===arguments.length&&(e=Mo.V()),lf("doc","path",e),t instanceof vf){const r=jo.fromString(e,...n);return ff(r),new _f(t,null,new zo(r))}{if(!(t instanceof _f||t instanceof bf))throw new Io(To.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(jo.fromString(e,...n));return ff(r),new _f(t.firestore,t instanceof bf?t.converter:null,new zo(r))}}
/**
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
 */
class Sf{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Nl(this,"async_queue_retry"),this.Xa=()=>{const t=Al();t&&mo("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Ko.No()};const t=Al();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.eu(),this.tu(t)}enterRestrictedMode(t){if(!this.za){this.za=!0,this.Ya=t||!1;const e=Al();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Xa)}}enqueue(t){if(this.eu(),this.za)return new Promise((()=>{}));const e=new So;return this.tu((()=>this.za&&this.Ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Ga.push(t),this.nu())))}async nu(){if(0!==this.Ga.length){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(t){if(!ta(t))throw t;mo("AsyncQueue","Operation failed with retryable error: "+t)}this.Ga.length>0&&this.Ko.xo((()=>this.nu()))}}tu(t){const e=this.Wa.then((()=>(this.Ja=!0,t().catch((t=>{this.Ha=t,this.Ja=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
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
 */(t);throw yo("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Ja=!1,t))))));return this.Wa=e,e}enqueueAfterDelay(t,e,n){this.eu(),this.Za.indexOf(t)>-1&&(e=0);const r=hd.createAndSchedule(this,t,e,n,(t=>this.ru(t)));return this.ja.push(r),r}eu(){this.Ha&&Eo()}verifyOperationInProgress(){}async iu(){let t;do{t=this.Wa,await t}while(t!==this.Wa)}su(t){for(const e of this.ja)if(e.timerId===t)return!0;return!1}ou(t){return this.iu().then((()=>{this.ja.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.ja)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.iu()}))}_u(t){this.Za.push(t)}ru(t){const e=this.ja.indexOf(t);this.ja.splice(e,1)}}function Cf(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
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
 */(t,["next","error","complete"])}class Af extends vf{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=function(){return new Sf}(),this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kf(this),this._firestoreClient.terminate()}}function Df(t,e){const n="object"==typeof t?t:re(),r="string"==typeof t?t:e||"(default)",i=Yt(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const t=w("firestore");t&&wf(i,...t)}return i}function Nf(t){return t._firestoreClient||kf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function kf(t){var e,n,r;const i=t._freezeSettings(),s=function(t,e,n,r){return new Ca(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,uf(r.experimentalLongPollingOptions),r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Zd(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}
/**
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
 */
class Rf{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Rf(va.fromBase64String(t))}catch(t){throw new Io(To.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Rf(va.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
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
 */class xf{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Io(To.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $o(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
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
 */
class Of{constructor(t){this._methodName=t}}
/**
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
 */class Lf{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Io(To.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Io(To.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Po(this._lat,t._lat)||Po(this._long,t._long)}}
/**
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
 */const Mf=/^__.*__$/;class Pf{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Iu(t,this.data,this.fieldMask,e,this.fieldTransforms):new Tu(t,this.data,e,this.fieldTransforms)}}function Ff(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Eo()}}class Vf{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.au(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(t){return new Vf(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.cu({path:n,hu:!1});return r.Pu(t),r}Iu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.cu({path:n,hu:!1});return r.au(),r}Tu(t){return this.cu({path:void 0,hu:!0})}Eu(t){return Xf(t,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}au(){if(this.path)for(let t=0;t<this.path.length;t++)this.Pu(this.path.get(t))}Pu(t){if(0===t.length)throw this.Eu("Document fields must not be empty");if(Ff(this.uu)&&Mf.test(t))throw this.Eu('Document fields cannot begin and end with "__"')}}class Uf{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Dl(t)}Ru(t,e,n,r=!1){return new Vf({uu:t,methodName:e,Au:n,path:$o.emptyPath(),hu:!1,du:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bf(t){const e=t._freezeSettings(),n=Dl(t._databaseId);return new Uf(t._databaseId,!!e.ignoreUndefinedProperties,n)}function jf(t,e,n,r,i,s={}){const o=t.Ru(s.merge||s.mergeFields?2:0,e,n,i);Gf("Data must be an object, but it was:",o,r);const a=zf(r,o);let c,u;if(s.merge)c=new ma(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Hf(e,r,n);if(!o.contains(i))throw new Io(To.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Yf(t,i)||t.push(i)}c=new ma(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Pf(new za(a),c,u)}function qf(t,e,n,r=!1){return $f(n,t.Ru(r?4:3,e))}function $f(t,e){if(Kf(t=x(t)))return Gf("Unsupported field value:",e,t),zf(t,e);if(t instanceof Of)return function(t,e){if(!Ff(e.uu))throw e.Eu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Eu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&4!==e.uu)throw e.Eu("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=$f(i,e.Tu(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=x(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return tu(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Vo.fromDate(t);return{timestampValue:oh(e.serializer,n)}}if(t instanceof Vo){const n=new Vo(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:oh(e.serializer,n)}}if(t instanceof Lf)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Rf)return{bytesValue:ah(e.serializer,t._byteString)};if(t instanceof _f){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Eu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:hh(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Eu(`Unsupported field value: ${gf(t)}`)}(t,e)}function zf(t,e){const n={};return ha(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ua(t,((t,r)=>{const i=$f(r,e.lu(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Kf(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Vo||t instanceof Lf||t instanceof Rf||t instanceof _f||t instanceof Of)}function Gf(t,e,n){if(!Kf(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=gf(n);throw"an object"===r?e.Eu(t+" a custom object"):e.Eu(t+" "+r)}}function Hf(t,e,n){if((e=x(e))instanceof xf)return e._internalPath;if("string"==typeof e)return Wf(t,e);throw Xf("Field path arguments must be of type string or ",t,!1,void 0,n)}const Qf=new RegExp("[~\\*/\\[\\]]");function Wf(t,e,n){if(e.search(Qf)>=0)throw Xf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xf(...e.split("."))._internalPath}catch(Fe){throw Xf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Xf(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Io(To.INVALID_ARGUMENT,a+t+c)}function Yf(t,e){return t.some((t=>t.isEqual(e)))}
/**
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
 */class Jf{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _f(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Zf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(tp("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Zf extends Jf{data(){return super.data()}}function tp(t,e){return"string"==typeof e?Wf(t,e):e instanceof xf?e._internalPath:e._delegate._internalPath}
/**
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
 */function ep(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Io(To.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class np{}class rp extends np{}function ip(t,e,...n){let r=[];e instanceof np&&r.push(e),r=r.concat(n),function(t){const e=t.filter((t=>t instanceof op)).length,n=t.filter((t=>t instanceof sp)).length;if(e>1||e>0&&n>0)throw new Io(To.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
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
 */(r);for(const i of r)t=i._apply(t);return t}class sp extends rp{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new sp(t,e,n)}_apply(t){const e=this._parse(t);return up(t._query,e),new Ef(t.firestore,t.converter,Nc(t._query,e))}_parse(t){const e=Bf(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Io(To.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){cp(o,s);const e=[];for(const n of o)e.push(ap(r,t,n));a={arrayValue:{values:e}}}else a=ap(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||cp(o,s),a=qf(n,e,o,"in"===s||"not-in"===s);return Za.create(i,s,a)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}class op extends np{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new op(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:tc.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const i of r)up(n,i),n=Nc(n,i)}(t._query,e),new Ef(t.firestore,t.converter,Nc(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function ap(t,e,n){if("string"==typeof(n=x(n))){if(""===n)throw new Io(To.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Cc(e)&&-1!==n.indexOf("/"))throw new Io(To.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(jo.fromString(n));if(!zo.isDocumentKey(r))throw new Io(To.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Pa(t,new zo(r))}if(n instanceof _f)return Pa(t,n._key);throw new Io(To.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gf(n)}.`)}function cp(t,e){if(!Array.isArray(t)||0===t.length)throw new Io(To.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function up(t,e){if(e.isInequality()){const n=Sc(t),r=e.field;if(null!==n&&!n.isEqual(r))throw new Io(To.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=Ic(t);null!==i&&hp(t,r,i)}const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new Io(To.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Io(To.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function hp(t,e,n){if(!n.isEqual(e))throw new Io(To.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class lp{convertValue(t,e="none"){switch(Na(t)){case 0:return null;case 1:return t.booleanValue;case 2:return _a(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ba(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Eo()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return ua(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new Lf(_a(t.latitude),_a(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Ia(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Sa(t));default:return null}}convertTimestamp(t){const e=Ea(t);return new Vo(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=jo.fromString(t);_o(Lh(n));const r=new Aa(n.get(1),n.get(3)),i=new zo(n.popFirst(5));return r.isEqual(e)||yo(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
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
 */function dp(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
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
 */
class fp{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class pp extends Jf{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new gp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(tp("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class gp extends pp{data(t={}){return super.data(t)}}class mp{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new fp(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new gp(this._firestore,this._userDataWriter,n.key,n,new fp(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Io(To.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new gp(t._firestore,t._userDataWriter,n.doc.key,n.doc,new fp(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new gp(t._firestore,t._userDataWriter,e.doc.key,e.doc,new fp(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:yp(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function yp(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Eo()}}class vp extends lp{constructor(t){super(),this.firestore=t}convertBytes(t){return new Rf(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new _f(this.firestore,null,e)}}function wp(t){t=mf(t,Ef);const e=mf(t.firestore,Af),n=Nf(e),r=new vp(e);return ep(t._query),cf(n,t._query).then((n=>new mp(e,r,t,n)))}function Ep(t){return Tp(mf(t.firestore,Af),[new Du(t._key,gu.none())])}function _p(t,e){const n=mf(t.firestore,Af),r=If(t),i=dp(t.converter,e);return Tp(n,[jf(Bf(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,gu.exists(!1))]).then((()=>r))}function bp(t,...e){var n,r,i;t=x(t);let s={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||Cf(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Cf(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[o+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let c,u,h;if(t instanceof _f)u=mf(t.firestore,Af),h=bc(t._key.path),c={next:n=>{e[o]&&e[o](Ip(u,t,n))},error:e[o+1],complete:e[o+2]};else{const n=mf(t,Ef);u=mf(n.firestore,Af),h=n._query;const r=new vp(u);c={next:t=>{e[o]&&e[o](new mp(u,r,n,t))},error:e[o+1],complete:e[o+2]},ep(t._query)}return function(t,e,n,r){const i=new Jd(r),s=new bd(e,i,n);return t.asyncQueue.enqueueAndForget((async()=>yd(await af(t),s))),()=>{i.Ca(),t.asyncQueue.enqueueAndForget((async()=>vd(await af(t),s)))}}(Nf(u),h,a,c)}function Tp(t,e){return function(t,e){const n=new So;return t.asyncQueue.enqueueAndForget((async()=>xd(await of(t),e,n))),n.promise}(Nf(t),e)}function Ip(t,e,n){const r=n.docs.get(e._key),i=new vp(t);return new pp(t,i,e._key,r,new fp(n.hasPendingWrites,n.fromCache),e.converter)}
/**
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
 */!function(t,e=!0){!function(t){fo=t}(ee),Xt(new O("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new Af(new No(t.getProvider("auth-internal")),new Oo(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Io(To.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Aa(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),ie(ho,"4.1.0",t),ie(ho,"4.1.0","esm2017")}();const Sp={apiKey:"AIzaSyDRU8ntuFip17ss9h9B8H2AR3SHvpBjcKA",authDomain:"vue-firebase-project-a507d.firebaseapp.com",projectId:"vue-firebase-project-a507d",storageBucket:"vue-firebase-project-a507d.appspot.com",messagingSenderId:"313650505514",appId:"1:313650505514:web:17b8b4f948b88a86422053"},Cp=ne(Sp),Ap=Df(Cp),Dp="groups",Np=t=>{wp(Tf(Ap,Dp));bp(ip(Tf(Ap,Dp)),(e=>{const n=[];e.forEach((t=>{n.push({id:t.id,...t.data()})})),t.value=n}))},kp=async t=>await _p(Tf(Ap,Dp),t),Rp=async t=>{await Ep(If(Ap,Dp,t))};var xp=n(9242),Op=(0,r.aZ)({__name:"GroupAddForm",setup(t){const e=(0,s.iH)(""),n=[t=>!!t||"Вы должны ввести название группы."],i=(0,s.iH)(!1),o=async t=>{i.value=!0;const n=await t;return i.value=!1,!!n.valid&&(kp({name:e.value}),e.value="",!0)};return(t,s)=>{const a=(0,r.up)("v-text-field"),c=(0,r.up)("v-btn"),u=(0,r.up)("v-form"),h=(0,r.up)("v-divider"),l=(0,r.up)("v-sheet");return(0,r.wg)(),(0,r.j4)(l,{width:"400",class:"mx-auto"},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{"validate-on":"submit lazy",onSubmit:(0,xp.iM)(o,["prevent"]),class:"mb-7"},{default:(0,r.w5)((()=>[(0,r.Wm)(a,{modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=t=>e.value=t),rules:n,label:"Название группы"},null,8,["modelValue"]),(0,r.Wm)(c,{loading:i.value,type:"submit",block:"",class:"mt-2"},{default:(0,r.w5)((()=>[(0,r.Uk)("Отправить")])),_:1},8,["loading"])])),_:1},8,["onSubmit"]),(0,r.Wm)(h)])),_:1})}}});const Lp=Op;var Mp=Lp,Pp=(0,r.aZ)({__name:"GroupsIndexView",setup(t){const e=(0,s.iH)([]);return(0,r.bv)((()=>{Np(e)})),(t,n)=>{const o=(0,r.up)("v-card-title"),a=(0,r.up)("v-card-item"),c=(0,r.up)("v-card-text"),u=(0,r.up)("v-icon"),h=(0,r.up)("v-btn"),l=(0,r.up)("v-card-actions"),d=(0,r.up)("v-card");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(Mp),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.value,(t=>((0,r.wg)(),(0,r.j4)(d,{key:t.id,width:"400",class:"mx-auto my-6"},{default:(0,r.w5)((()=>[(0,r.Wm)(a,null,{default:(0,r.w5)((()=>[(0,r.Wm)(o,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(t.name),1)])),_:2},1024)])),_:2},1024),(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[(0,r.Uk)("Текст")])),_:1}),(0,r.Wm)(l,null,{default:(0,r.w5)((()=>[(0,r.Wm)(h,{"prepend-icon":"mdi-trash-can-outline",onClick:e=>(0,s.SU)(Rp)(t.id)},{prepend:(0,r.w5)((()=>[(0,r.Wm)(u,{color:"error"})])),default:(0,r.w5)((()=>[(0,r.Uk)(" Удалить ")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)))),128))],64)}}});const Fp=Pp;var Vp=Fp}}]);
//# sourceMappingURL=945.d5add654.js.map