(()=>{var e={757:(e,t,n)=>{e.exports=n(666)},666:e=>{var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),i=new j(r||[]);return a._invoke=function(e,t,n){var r=p;return function(o,a){if(r===f)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw a;return L()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=T(i,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var s=l(e,t,n);if("normal"===s.type){if(r=n.done?d:h,s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=d,n.method="throw",n.arg=s.arg)}}}(e,n,i),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var p="suspendedStart",h="suspendedYield",f="executing",d="completed",y={};function m(){}function g(){}function v(){}var b={};s(b,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(P([])));x&&x!==n&&r.call(x,a)&&(b=x);var k=v.prototype=m.prototype=Object.create(b);function I(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(o,a,i,c){var s=l(e[o],e,a);if("throw"!==s.type){var u=s.arg,p=u.value;return p&&"object"==typeof p&&r.call(p,"__await")?t.resolve(p.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(p).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(s.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function T(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,T(e,n),"throw"===n.method))return y;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,y;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function P(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:L}}function L(){return{value:t,done:!0}}return g.prototype=v,s(k,"constructor",v),s(v,"constructor",g),g.displayName=s(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},I(E.prototype),s(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new E(u(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},I(k),s(k,c,"Generator"),s(k,a,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=P,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:P(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),y}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function r(e){return function(){var n=this,r=arguments;return new Promise((function(o,a){var i=e.apply(n,r);function c(e){t(i,o,a,c,s,"next",e)}function s(e){t(i,o,a,c,s,"throw",e)}c(void 0)}))}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function c(e,t){var n=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}(e,t);return function(e,t){return t.get?t.get.call(e):t.value}(e,n)}var s=n(757),u=n.n(s),l="http://localhost:5000",p=function(){function e(t,n){o(this,e),this.metaData=t,this.containerId=n}return i(e,[{key:"embed",value:function(){var e=document.getElementsByTagName("head")[0];e.innerHTML+='<link rel="stylesheet" href="'.concat("https://firebasestorage.googleapis.com/v0/b/charitybh-dc293.appspot.com/o/su%2Fsecuuth.css?alt=media&token=f5aa2257-d506-447e-89ec-afced4a02d48",'" />');var t=document.createElement("script");t.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9/core.js");var n=document.createElement("script");n.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9/sha256.js"),e.insertBefore(t,e.childNodes[0]),e.insertBefore(n,e.childNodes[0])}},{key:"injectCss",value:function(){var e=this.metaData,t=e.modalTitleColor,n=e.modalBackgroundColor,r=e.btnTextColor,o=e.btnBgColor,a="\n    <style>\n    #".concat(this.containerId," {\n      padding: 50px 20px;\n      border-radius: 12px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      background-color: rgba(").concat(n.color.r,",").concat(n.color.g,",").concat(n.color.b,",").concat(n.color.a,");\n      position: relative;\n    }\n    \n    .su-btn {\n      background-color: rgba(").concat(o.color.r,",").concat(o.color.g,",").concat(o.color.b,",").concat(o.color.a,");\n      color: ").concat(r.hex||"white",";\n    }\n    .su-title {\n      color: ").concat(t.hex||"black","\n    }\n    </style>\n    ");document.getElementsByTagName("head")[0].innerHTML+=a}}]),e}(),h=function(){function e(t){o(this,e),this.fields=t}var t;return i(e,[{key:"formHTMLControls",value:(t=r(u().mark((function e(t){var n,r,o,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n='<div class="form-group">',e.t0=t.type,e.next="text"===e.t0?4:9;break;case 4:return r=t.label,o=t.name,a=t.placeholder,n+='\n                  <label for="'.concat(o,'">').concat(r,':</label>\n                  <input type="text" class="secuuth-db" id="').concat(o,'" name="').concat(o,'" placeholder="').concat(a,'"/>\n                '),e.abrupt("break",9);case 9:return n+="</div>",e.abrupt("return",n);case 11:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}],[{key:"getJSX",value:function(e,t,n){var r,o=e.profileMetaData,a=o.basicStyling,i=o.advancedStyling,c=(a.isSms,a.countryCode),s=i.modalTitle,u=i.logo,l=i.btnText,p=e.signInMode;return console.log("sign In Mode"+p),console.log("PROFILE"),console.log(e),r="0"==p?"abc@mail.com":"".concat("1"==p?c.phone:c.phone+" or abc@mail.com"),'\n    \n        <img\n          src="'.concat(u||"https://uploads-ssl.webflow.com/61234975b500ae0500a02f42/6123751c35c797119be587e3_Screenshot%20(275)%203-p-500.png",'"\n          alt="logo"\n          class="logo"\n        />\n        \n        <div class="su-title">').concat(s,"</div>\n       \n      \n        <input ").concat(p?'type="number"':'type="text"','  class="su-ip-text" id="suipemailp" name="email" autoComplete="on"   placeholder="').concat(r,'" required  />\n        <button class="su-btn" id="su-submit-btn" >').concat(l,'</button>\n        <p id="su-msg"></p>\n      \n    ')}},{key:"getJSXOtp",value:function(e,t,n){var r=e.profileMetaData,o=r.basicStyling,a=r.advancedStyling,i=(o.isSms,o.countryCode),c=a.modalTitle,s=a.logo,u=a.btnText,l=e.signInMode;return console.log("sign In Mode"+l),console.log("PROFILE"),console.log(e),"0"==l||"".concat("1"==l?i.phone:i.phone+" or abc@mail.com"),'\n    \n        <img\n          src="'.concat(s||"https://uploads-ssl.webflow.com/61234975b500ae0500a02f42/6123751c35c797119be587e3_Screenshot%20(275)%203-p-500.png",'"\n          alt="logo"\n          class="logo"\n        />\n        \n        <div class="su-title">').concat(c,'</div>\n        \n        \n        \n        <p id="su-msg"></p>\n        \n      \n        <input type="number"  class="su-ip-text" id="otp" name="otp"  pattern="[0-9]{6}"  placeholder="Enter The OTP" required  />\n        <button class="su-btn" id="su-submits-btn"   >').concat(u,'</button>\n        <div  id="times"></div>\n        <div  id="otp-msg"></div>\n        \n        \n      \n    ')}}]),e}();function f(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}var d=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(l,"/auth/fetchProfile?keyId=").concat(t,"&profileName=").concat(n));case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){f(a,r,o,i,c,"next",e)}function c(e){f(a,r,o,i,c,"throw",e)}i(void 0)}))});return function(e,n){return t.apply(this,arguments)}}();function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function g(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){m(a,r,o,i,c,"next",e)}function c(e){m(a,r,o,i,c,"throw",e)}i(void 0)}))}}var v=function(){var e=g(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("publicKey"),(n=localStorage.getItem("privateKey"))&&t){e.next=12;break}return e.next=5,crypto.subtle.generateKey({name:"RSA-OAEP",modulusLength:4096,publicExponent:new Uint8Array([1,0,1]),hash:"SHA-256"},!0,["encrypt","decrypt"]);case 5:return r=e.sent,e.next=8,crypto.subtle.exportKey("jwk",r.publicKey);case 8:return t=e.sent,e.next=11,crypto.subtle.exportKey("jwk",r.privateKey);case 11:n=e.sent;case 12:return localStorage.setItem("publicKey",t),localStorage.setItem("privateKey",n),e.abrupt("return",{publicKey:t,privateKey:n});case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(e){return new Promise((function(t){return setTimeout(t,e)}))},w=function(){var e=g(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(32);case 2:return t=e.sent,n=x(t),e.abrupt("return",{codeVerifier:t,hash:n});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=g(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,crypto.subtle.digest("SHA-256",(new TextEncoder).encode(t));case 2:return n=e.sent,r=btoa(String.fromCharCode.apply(String,(o=new Uint8Array(n),function(e){if(Array.isArray(e))return y(e)}(o)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(o)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_"),e.abrupt("return",r);case 5:case"end":return e.stop()}var o}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=g(regeneratorRuntime.mark((function e(t){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=0;o<t;o++)n+=r.charAt(Math.floor(Math.random()*r.length));return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function I(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function E(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){I(a,r,o,i,c,"next",e)}function c(e){I(a,r,o,i,c,"throw",e)}i(void 0)}))}}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S,O,j=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.profileName=n,this.keyId=t}var t,n,r,o,a;return t=e,n=[{key:"getTokens",value:(a=E(regeneratorRuntime.mark((function e(t,n,r,o){var a,i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.signInMode,i={userId:t.userId,keyId:this.keyId,authCode:n,signInMode:a||0,additionalInfo:"AdditionalInfo",codeVerifier:o},c=null,e.next=5,fetch("".concat(l,"/auth/tokens"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(i)});case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e,this)}))),function(e,t,n,r){return a.apply(this,arguments)})},{key:"verifyAuth",value:(o=E(regeneratorRuntime.mark((function e(t){var n,r,o,a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.userId,r=t.challengeId,o=t.challenge,a={userId:n,challengeId:r,challenge:o},i=null,e.next=5,fetch("".concat(l,"/auth/verify"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(a)});case 5:return i=e.sent,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)}))),function(e){return o.apply(this,arguments)})},{key:"initiateAuth",value:(r=E(regeneratorRuntime.mark((function e(t,n,r){var o,a,i,c,s,u,p,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:if((o=e.sent).publicKey,o.privateKey,a=localStorage.getItem("pKey")){e.next=11;break}return e.next=9,k(32);case 9:a=e.sent,localStorage.setItem("pKey",a);case 11:return e.next=13,k(32);case 13:return i=e.sent,c=n.profileId,s=n.signInMode,u=n.idType,p={profileId:c,userPublicId:t,keyId:this.keyId,publicKey:a,deviceType:navigator.platform,deviceName:navigator.userAgent,codeChallenge:r,state:i,signInMode:s||0,idType:u||0},e.prev=16,e.next=19,fetch("".concat(l,"/auth/initiate"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(p)});case 19:return h=e.sent,e.abrupt("return",h);case 23:throw e.prev=23,e.t0=e.catch(16),console.log("Error from /auth/initiate : "+e.t0),e.t0;case 27:case"end":return e.stop()}}),e,this,[[16,23]])}))),function(e,t,n){return r.apply(this,arguments)})}],n&&T(t.prototype,n),e}();function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?P(Object(r),!0).forEach((function(n){e(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function B(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}var A,R,M,C=1,N="OOPS! Something went wrong, please try again later",_=new WeakMap,H=new WeakMap,K=new WeakMap,F=function(){function e(t){var n,a,i,s=this,l=t.keyId,f=t.profileName,y=t.containerId,m=t.onSubmit;o(this,e),B(this,_,{writable:!0,value:(n=r(u().mark((function e(){var t,n,r,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(s.keyId,s.profileName);case 2:t=e.sent,n=t.profileMetaData,r=JSON.parse(n),o=L(L({},t),{},{profileMetaData:L({},r)}),s.profile=o,s.csx=new p(s.profile.profileMetaData.advancedStyling,s.containerId),s.csx.embed(),c(s,H).call(s,"");case 10:case"end":return e.stop()}}),e)}))),function(){return n.apply(this,arguments)})}),B(this,H,{writable:!0,value:(a=r(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.idTypes=s.profile.idType,s.csx.injectCss(),n=h.getJSX(s.profile),document.getElementById(s.containerId).innerHTML=n,document.getElementById("su-submit-btn").onclick=function(){return s.submit().then((function(e){return s.clientSubmit(e)})).catch((function(e){return console.log("Something went wrong"+e)}))},document.getElementById("su-msg").innerHTML=t,e.abrupt("return");case 7:case"end":return e.stop()}}),e)}))),function(e){return a.apply(this,arguments)})}),B(this,K,{writable:!0,value:(i=r(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(403!=t.status){e.next=8;break}return e.next=3,response.json();case 3:return n=e.sent,console.log("Response body: "+n),e.abrupt("return",1);case 8:if(404!=t.status&&401!=t.status&&500!=t.status&&403!=t.status&&429!=t.status&&400!=t.status){e.next=10;break}return e.abrupt("return",0);case 10:return e.abrupt("return",1);case 11:case"end":return e.stop()}}),e)}))),function(e){return i.apply(this,arguments)})}),this.profile,this.hash,this.codeVerifier,this.email,this.idType,this.challenge,this.challengeId,this.userId,this.initAuthResponseBody,this.keyId=l,this.profileName=f,this.containerId=y,this.clientSubmit=m,this.auth=new j(this.keyId,this.profileName),c(this,_).call(this)}var t,n,a,s,l,f,y,m;return i(e,[{key:"otpForm",value:(m=r(u().mark((function e(t){var n,r=this;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=h.getJSXOtp(this.profile),document.getElementById(this.containerId).innerHTML=n,document.getElementById("su-msg").innerHTML=t,document.getElementById("otp-msg").innerHTML="Did not receive otp <a href='http://localhost:3000/login'>start again</a>",document.getElementById("su-submits-btn").onclick=function(){return r.SubmitOtp().then((function(e){return r.clientSubmit(e)})).catch((function(e){return console.log("OTP PROBLEM"+e)}))};case 5:case"end":return e.stop()}}),e,this)}))),function(e){return m.apply(this,arguments)})},{key:"submit",value:(y=r(u().mark((function e(){var t,n,r,o,a,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==document.getElementById("suipemailp")&&null!=document.getElementById("suipemailp")&&(this.email=document.getElementById("suipemailp").value),console.log("IDTYPES"+this.idTypes),!this.idTypes){e.next=17;break}return e.next=5,this.InitAuthResponseBody();case 5:return t=e.sent,this.initAuthResponseBody=t,console.log(this.idTypes),n=t.challengeId,r=t.userId,t.challenges,this.challengeId=n,this.userId=r,this.otpForm("OTP sent to"+this.email),S=30,O=setInterval(this.countdown,1e3),e.abrupt("return");case 17:return e.next=19,this.InitAuthResponseBody();case 19:if(o=e.sent,(a=this.profile.profileMetaData.magicLinkPromptConfig).logo,a.subHeading,a.heading,document.getElementById(this.containerId).innerHTML+='<div class="su-overlay" id="su-overlay">\n                                <div id="su-cover-spin"></div>\n                                <div class="su-msg-overlay" id="su-msg-overlay"><div/>\n                              </div>',console.log(o),"Yes"!=o.challengeSent){e.next=46;break}document.getElementById("su-msg-overlay").innerHTML="Link has been sent to your Email <b>".concat(this.email,"</b>"),i=0;case 28:if(!(i<100)){e.next=41;break}return e.next=31,this.verifyChallenge(o);case 31:if("Pending"!=(R=e.sent).approved){e.next=37;break}return e.next=35,b(3e3);case 35:e.next=38;break;case 37:return e.abrupt("break",41);case 38:i++,e.next=28;break;case 41:"No"==R.approved&&(C=0,document.getElementById("su-msg").innerHTML="\n              Email link is expired, please try again"),A=R.authCode,console.log("auth code else"+A),e.next=48;break;case 46:A=o.authCode,console.log("auth code else"+A);case 48:if(1!=C){e.next=52;break}return e.next=51,this.fetchToken(o,A);case 51:M=e.sent;case 52:return e.abrupt("return",M);case 53:case"end":return e.stop()}}),e,this)}))),function(){return y.apply(this,arguments)})},{key:"InitAuthResponseBody",value:(f=r(u().mark((function e(){var t,n,r,o,a,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("InitAuthResponseBody"),e.next=3,w();case 3:return t=e.sent,n=t.hash,r=t.codeVerifier,this.hash=n,this.codeVerifier=r,e.next=10,this.auth.initiateAuth(this.email,this.profile,r);case 10:if(200==(o=e.sent).status){e.next=20;break}if(document.getElementById("su-overlay").remove(),403!=o.status){e.next=18;break}return e.next=16,o.json();case 16:a=e.sent,N=a.message;case 18:return c(this,H).call(this,N),e.abrupt("return");case 20:return e.next=22,o.json();case 22:if(!("retStatus"in(i=e.sent))){e.next=27;break}return document.getElementById("su-overlay").remove(),c(this,H).call(this,N),e.abrupt("return");case 27:return console.log("initAuthResponse Body value"+i),e.abrupt("return",i);case 29:case"end":return e.stop()}}),e,this)}))),function(){return f.apply(this,arguments)})},{key:"verifyChallenge",value:(l=r(u().mark((function e(t){var n,r,o,a,i,s;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("verifyChallenge"),console.log(t),console.log("verifyChallenge"),n=t.challengeId,r=t.userId,o=t.challenge,this.idTypes&&(a=document.getElementById("otp").value,o=a),console.log(n),console.log(o),i=null,s=null,e.next=11,this.auth.verifyAuth({challenge:o,userId:r,challengeId:n});case 11:if(200==(i=e.sent).status){e.next=17;break}return document.getElementById("su-overlay").remove(),console.log("VerifyAuthResp Error"),c(this,H).call(this,N),e.abrupt("return");case 17:return e.next=19,i.json();case 19:return s=e.sent,e.abrupt("return",s);case 21:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)})},{key:"fetchToken",value:(s=r(u().mark((function e(t,n){var r,o,a,i,s,l;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetch Token"),e.next=3,this.auth.getTokens(t,n,this.profile,this.codeVerifier);case 3:if(200==(r=e.sent).status){e.next=9;break}return document.getElementById("su-overlay").remove(),console.log("Get Token error"),c(this,H).call(this,N),e.abrupt("return");case 9:return e.next=11,r.json();case 11:return o=e.sent,a=o.accessToken,i=o.idToken,s=o.refreshToken,a&&i&&s&&(localStorage.setItem("refreshToken",s),(l=document.getElementById("su-overlay"))&&l.remove()),e.abrupt("return",o);case 15:case"end":return e.stop()}}),e,this)}))),function(e,t){return s.apply(this,arguments)})},{key:"SubmitOtp",value:(a=r(u().mark((function e(){var t,n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S<=-1&&(clearInterval(O),this.submit()),"Yes"!=this.initAuthResponseBody.challengeSent){e.next=28;break}return e.next=4,this.submitChallenge(this.challengeId,this.userId);case 4:t=e.sent,6!=document.getElementById("otp").length&&this.otpForm("Please enter 6 digit otp"),200!=t.status&&this.otpForm("wrong otp"),n=0;case 8:if(!(n<100)){e.next=21;break}return e.next=11,this.verifyChallenge(this.initAuthResponseBody);case 11:if("Pending"!=(R=e.sent).approved){e.next=17;break}return e.next=15,b(3e3);case 15:e.next=18;break;case 17:return e.abrupt("break",21);case 18:n++,e.next=8;break;case 21:"No"==R.approved&&(C=0,document.getElementById("su-msg").innerHTML="\n            OTP is expired, please try again"),console.log("verifyAuthRespBody"),console.log(R),A=R.authCode,console.log("auth code"+A),e.next=30;break;case 28:A=this.initAuthResponseBody.authCode,console.log("auth code else"+A);case 30:if(1!=C){e.next=36;break}return clearInterval(O),e.next=34,this.fetchToken(this.initAuthResponseBody,A);case 34:return r=e.sent,e.abrupt("return",r);case 36:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"countdown",value:(n=r(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(-1!=S){e.next=8;break}return this.otpForm("otp expired"),clearInterval(O),document.getElementById("times").remove(),document.getElementById("otp").remove(),e.abrupt("return");case 8:document.getElementById("times").innerHTML="\n      Expires in ".concat(S," "),S--;case 10:return e.abrupt("return");case 11:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"submitChallenge",value:(t=r(u().mark((function e(t,n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=document.getElementById("otp").value,fetch("http://localhost:5000/auth/submitChallenge",{method:"POST",body:JSON.stringify({userId:n,challengeType:this.profile.signInMode,challenge:r,challengeId:t,profileId:this.profile.profileId}),headers:{"Content-type":"application/json; charset=UTF-8"}});case 2:case"end":return e.stop()}}),e,this)}))),function(e,n){return t.apply(this,arguments)})}]),e}();window.Secuuth=F})()})();
