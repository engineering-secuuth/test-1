(()=>{var e={757:(e,t,n)=>{e.exports=n(666)},666:e=>{var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),i=new j(r||[]);return a._invoke=function(e,t,n){var r=h;return function(o,a){if(r===f)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw a;return M()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var s=E(i,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?d:p,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}(e,n,i),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var h="suspendedStart",p="suspendedYield",f="executing",d="completed",g={};function m(){}function y(){}function v(){}var b={};c(b,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(P([])));x&&x!==n&&r.call(x,a)&&(b=x);var k=v.prototype=m.prototype=Object.create(b);function I(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function T(e,t){function n(o,a,i,s){var c=l(e[o],e,a);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,i,s)}),(function(e){n("throw",e,i,s)})):t.resolve(h).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,s)}))}s(c.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function E(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,E(e,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=l(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function P(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:M}}function M(){return{value:t,done:!0}}return y.prototype=v,c(k,"constructor",v),c(v,"constructor",y),y.displayName=c(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,c(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},I(T.prototype),c(T.prototype,i,(function(){return this})),e.AsyncIterator=T,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new T(u(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},I(k),c(k,s,"Generator"),c(k,a,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=P,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return s.type="throw",s.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:P(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function r(e){return function(){var n=this,r=arguments;return new Promise((function(o,a){var i=e.apply(n,r);function s(e){t(i,o,a,s,c,"next",e)}function c(e){t(i,o,a,s,c,"throw",e)}s(void 0)}))}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function s(e,t){var n=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}(e,t);return function(e,t){return t.get?t.get.call(e):t.value}(e,n)}var c=n(757),u=n.n(c),l="http://localhost:5000";function h(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function p(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){h(a,r,o,i,s,"next",e)}function s(e){h(a,r,o,i,s,"throw",e)}i(void 0)}))}}var f=function(){var e=p(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(l,"/auth/fetchProfile?keyId=").concat(t,"&profileName=").concat(n));case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=p(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(l,"/auth/renewTokens"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({publicKey:t,refreshToken:n})});case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0.statusCode),console.log(e.t0.message),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}();function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function y(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){m(a,r,o,i,s,"next",e)}function s(e){m(a,r,o,i,s,"throw",e)}i(void 0)}))}}var v=function(){var e=y(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("publicKey"),(n=localStorage.getItem("privateKey"))&&t){e.next=12;break}return e.next=5,crypto.subtle.generateKey({name:"RSA-OAEP",modulusLength:4096,publicExponent:new Uint8Array([1,0,1]),hash:"SHA-256"},!0,["encrypt","decrypt"]);case 5:return r=e.sent,e.next=8,crypto.subtle.exportKey("jwk",r.publicKey);case 8:return t=e.sent,e.next=11,crypto.subtle.exportKey("jwk",r.privateKey);case 11:n=e.sent;case 12:return localStorage.setItem("publicKey",t),localStorage.setItem("privateKey",n),e.abrupt("return",{publicKey:t,privateKey:n});case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(e){return new Promise((function(t){return setTimeout(t,e)}))},w=function(){var e=y(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(32);case 2:return t=e.sent,n=x(t),e.abrupt("return",{codeVerifier:t,hash:n});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=y(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,crypto.subtle.digest("SHA-256",(new TextEncoder).encode(t));case 2:return n=e.sent,r=btoa(String.fromCharCode.apply(String,(o=new Uint8Array(n),function(e){if(Array.isArray(e))return g(e)}(o)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(o)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_"),e.abrupt("return",r);case 5:case"end":return e.stop()}var o}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=y(regeneratorRuntime.mark((function e(t){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=0;o<t;o++)n+=r.charAt(Math.floor(Math.random()*r.length));return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function I(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function T(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){I(a,r,o,i,s,"next",e)}function s(e){I(a,r,o,i,s,"throw",e)}i(void 0)}))}}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S,O,j=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.profileName=n,this.keyId=t}var t,n,r,o,a;return t=e,n=[{key:"getTokens",value:(a=T(regeneratorRuntime.mark((function e(t,n,r,o){var a,i,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.signInMode,i={userId:t.userId,keyId:this.keyId,authCode:n,signInMode:a||0,additionalInfo:"AdditionalInfo",codeVerifier:o},s=null,e.next=5,fetch("".concat(l,"/auth/tokens"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(i)});case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e,this)}))),function(e,t,n,r){return a.apply(this,arguments)})},{key:"verifyAuth",value:(o=T(regeneratorRuntime.mark((function e(t){var n,r,o,a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.userId,r=t.challengeId,o=t.challenge,a={userId:n,challengeId:r,challenge:o},i=null,e.next=5,fetch("".concat(l,"/auth/verify"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(a)});case 5:return i=e.sent,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)}))),function(e){return o.apply(this,arguments)})},{key:"initiateAuth",value:(r=T(regeneratorRuntime.mark((function e(t,n,r,o){var a,i,s,c,u,h,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:if((a=e.sent).publicKey,a.privateKey,i=localStorage.getItem("pKey")){e.next=11;break}return e.next=9,k(32);case 9:i=e.sent,localStorage.setItem("pKey",i);case 11:return e.next=13,k(32);case 13:return s=e.sent,c=n.profileId,n.signInMode,u=n.idType,h={profileId:c,userPublicId:t,keyId:this.keyId,publicKey:i,deviceType:navigator.platform,deviceName:navigator.userAgent,codeChallenge:r,state:s,signInMode:o||0,idType:u||0},e.prev=16,e.next=19,fetch("".concat(l,"/auth/initiate"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(h)});case 19:return p=e.sent,e.abrupt("return",p);case 23:throw e.prev=23,e.t0=e.catch(16),console.log("Error from /auth/initiate : "+e.t0),e.t0;case 27:case"end":return e.stop()}}),e,this,[[16,23]])}))),function(e,t,n,o){return r.apply(this,arguments)})}],n&&E(t.prototype,n),e}(),P=function(){function e(t,n){o(this,e),this.metaData=t,this.containerId=n}return i(e,[{key:"embed",value:function(){var e=document.getElementsByTagName("head")[0];e.innerHTML+='<link rel="stylesheet" href="'.concat("https://dn4nx09vmsk3d.cloudfront.net/CSS/test/css.css",'" />');var t=document.createElement("script");t.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9/core.js");var n=document.createElement("script");n.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9/sha256.js"),e.insertBefore(t,e.childNodes[0]),e.insertBefore(n,e.childNodes[0])}},{key:"injectCss",value:function(){var e=this.metaData,t=e.modalTitleColor,n=e.modalBackgroundColor,r=e.btnTextColor,o=e.btnBgColor,a="\n    <style>\n    #".concat(this.containerId," {\n      padding: 50px 20px;\n      border-radius: 12px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      background-color: rgba(").concat(n.color.r,",").concat(n.color.g,",").concat(n.color.b,",").concat(n.color.a,");\n      position: relative;\n    }\n    \n    .su-btn {\n      background-color: rgba(").concat(o.color.r,",").concat(o.color.g,",").concat(o.color.b,",").concat(o.color.a,");\n      color: ").concat(r.hex||"white",";\n    }\n    .su-title {\n      color: ").concat(t.hex||"black","\n    }\n    </style>\n    ");document.getElementsByTagName("head")[0].innerHTML+=a}}]),e}(),M=function(){function e(t){o(this,e),this.fields=t}var t;return i(e,[{key:"formHTMLControls",value:(t=r(u().mark((function e(t){var n,r,o,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n='<div class="form-group">',e.t0=t.type,e.next="text"===e.t0?4:9;break;case 4:return r=t.label,o=t.name,a=t.placeholder,n+='\n                  <label for="'.concat(o,'">').concat(r,':</label>\n                  <input type="text" class="secuuth-db" id="').concat(o,'" name="').concat(o,'" placeholder="').concat(a,'"/>\n                '),e.abrupt("break",9);case 9:return n+="</div>",e.abrupt("return",n);case 11:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}],[{key:"getJSX",value:function(e,t,n){var r,o=e.profileMetaData,a=o.basicStyling,i=o.advancedStyling,s=(a.isSms,a.countryCode),c=i.modalTitle,u=i.logo,l=i.btnText,h=e.signInMode;return console.log("sign In Mode"+h),console.log("PROFILE"),console.log(e),r="0"==h?"abc@mail.com":"".concat("1"==h?s.phone:s.phone+" or abc@mail.com"),'\n    \n        <img\n          src="'.concat(u||"https://uploads-ssl.webflow.com/61234975b500ae0500a02f42/6123751c35c797119be587e3_Screenshot%20(275)%203-p-500.png",'"\n          alt="logo"\n          class="logo"\n        />\n        \n        <div class="su-title">').concat(c,"</div>\n        \n       \n        <input ").concat(1==h?'type="number"':'type="text"',"  ").concat(1==h?"value=".concat(r):'value=""','  \n         class="su-ip-text" id="suipemailp" name="email" autoComplete="on"   placeholder="').concat(r,'" required  />\n        <button class="su-btn" id="su-submit-btn" >').concat(l,'</button>\n        <p id="su-msg"></p>\n      \n    ')}},{key:"getJSXOtp",value:function(e,t,n){var r=e.profileMetaData,o=r.basicStyling,a=r.advancedStyling,i=(o.isSms,o.countryCode),s=a.modalTitle,c=a.logo,u=a.btnText,l=e.signInMode;return console.log("sign In Mode"+l),console.log("PROFILE"),console.log(e),"0"==l||"".concat("1"==l?i.phone:i.phone+" or abc@mail.com"),'\n    \n        <img\n          src="'.concat(c||"https://uploads-ssl.webflow.com/61234975b500ae0500a02f42/6123751c35c797119be587e3_Screenshot%20(275)%203-p-500.png",'"\n          alt="logo"\n          class="logo"\n        />\n        \n        <div class="su-title">').concat(s,'</div>\n        \n        \n        \n        <p id="su-msg"></p>\n        \n      \n        <input type="number"  class="su-ip-text" id="otp" name="otp"  pattern="[0-9]{6}" maxlength="6" placeholder="Enter The OTP" required  />\n        <button class="su-btn" id="su-submits-btn"   >').concat(u,'</button>\n        <div  id="times"></div>\n        <div  id="otp-msg"></div>\n        \n        \n      \n    ')}}]),e}();function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?B(Object(r),!0).forEach((function(n){e(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function A(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}var R,C,N,H=1,K="OOPS! Something went wrong, please try again later",_=new WeakMap,D=new WeakMap,F=new WeakMap,J=function(){function e(t){var n,a,i,c=this,l=t.keyId,h=t.profileName,p=t.containerId,g=t.refreshTokens,m=t.onSubmit;o(this,e),A(this,_,{writable:!0,value:(n=r(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("pKey")||!localStorage.getItem("refreshToken")){e.next=24;break}return console.log(" renew token "),console.log("local storage token "+localStorage.getItem("refreshToken")),e.next=5,d(localStorage.getItem("pKey"),localStorage.getItem("refreshToken")).then((function(e){return e.json()}));case 5:if(t=e.sent,console.log("Token body "+t),console.log("Refresh Token "+t.refreshToken),t.refreshToken&&(localStorage.setItem("refreshToken",t.refreshToken),console.log("local storage token1 "+localStorage.getItem("refreshToken"))),200==t.status){e.next=12;break}return console.log("user not found"),e.abrupt("return");case 12:e.prev=12,c.clientSubmit(t),e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(12),console.log(e.t0.statusCode),console.log(e.t0.message),e.abrupt("return",e.t0);case 21:return e.abrupt("return",t);case 24:s(c,D).call(c,"");case 25:case"end":return e.stop()}}),e,null,[[12,16]])}))),function(){return n.apply(this,arguments)})}),A(this,D,{writable:!0,value:(a=r(u().mark((function e(){var t,n,r,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(c.keyId,c.profileName);case 2:t=e.sent,n=t.profileMetaData,r=JSON.parse(n),o=L(L({},t),{},{profileMetaData:L({},r)}),c.profile=o,c.csx=new P(c.profile.profileMetaData.advancedStyling,c.containerId),c.csx.embed(),s(c,F).call(c,"");case 10:case"end":return e.stop()}}),e)}))),function(){return a.apply(this,arguments)})}),A(this,F,{writable:!0,value:(i=r(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.idTypes=c.profile.idType,c.signInMode=c.profile.signInMode,c.csx.injectCss(),n=M.getJSX(c.profile),document.getElementById(c.containerId).innerHTML=n,document.getElementById("su-submit-btn").onclick=function(){return c.submit().then((function(e){return c.clientSubmit(e)})).catch((function(e){return console.log("Something went wrong"+e)}))},document.getElementById("su-msg").innerHTML=t,e.abrupt("return");case 8:case"end":return e.stop()}}),e)}))),function(e){return i.apply(this,arguments)})}),this.profile,this.hash,this.codeVerifier,this.email,this.idType,this.signInMode,this.logo,this.subHeading,this.heading,this.mountPoint,this.challenge,this.challengeId,this.userId,this.initAuthResponseBody,this.keyId=l,this.profileName=h,this.containerId=p,this.refreshToken=g,this.clientSubmit=m,this.auth=new j(this.keyId,this.profileName),s(this,_).call(this)}var t,n,a,c,l,h,p,g,m;return i(e,[{key:"otpForm",value:(m=r(u().mark((function e(t){var n,o=this;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=M.getJSXOtp(this.profile),document.getElementById(this.containerId).innerHTML=n,document.getElementById("su-msg").innerHTML=t,document.getElementById("otp-msg").innerHTML="Did not receive otp <a href='http://localhost:3000/login'>start again</a>",document.getElementById("su-submits-btn").onclick=r(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.SubmitOtp().then((function(e){return o.clientSubmit(e)})).catch((function(e){return console.log("OTP PROBLEM"+e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),document.getElementById("su-submits-btn").hidden=!0,document.getElementById("su-submits-btn").disabled=!0,e.abrupt("return");case 8:case"end":return e.stop()}}),e,this)}))),function(e){return m.apply(this,arguments)})},{key:"submit",value:(g=r(u().mark((function e(){var t,n,o,a,i,s,c,l,h,p,f=this;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("IDTYPES "+this.idTypes),console.log("sig in TYPES "+this.signInMode),void 0!==document.getElementById("suipemailp")&&null!=document.getElementById("suipemailp")&&(this.email=document.getElementById("suipemailp").value,2==this.signInMode&&(t=/^\+?[0-9]+$/,this.email.match(t)?(console.log("Another Regx"),this.signInMode=1,this.idTypes=1):(console.log("Regx "),this.signInMode=0,this.idTypes=1))),!(0==this.signInMode&&1==this.idTypes||1==this.signInMode&&1==this.idTypes)){e.next=19;break}return this.otpForm("OTP sent to"+this.email),document.getElementById("otp").onkeyup=r(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.SubmitOtp().then((function(e){return f.clientSubmit(e)})).catch((function(e){return console.log("OTP PROBLEM"+e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),e.next=8,this.InitAuthResponseBody(this.signInMode);case 8:return n=e.sent,this.initAuthResponseBody=n,console.log(this.idTypes),o=n.challengeId,a=n.userId,n.challenges,this.challengeId=o,this.userId=a,S=30,O=setInterval(this.countdown,1e3),e.abrupt("return");case 19:if(0!=this.signInMode||0!=this.idTypes){e.next=59;break}return e.next=22,this.InitAuthResponseBody(this.signInMode);case 22:if(i=e.sent,s=this.profile.profileMetaData.magicLinkPromptConfig,c=s.logo,l=s.subHeading,h=s.heading,this.logo=c,this.subHeading=l,this.heading=h,this.mountPoint=document.getElementById(this.containerId),this.mountPoint.innerHTML+='<div class="su-overlay" id="su-overlay">\n                                <div id="su-cover-spin"></div>\n                                <div class="su-msg-overlay" id="su-msg-overlay"><div/>\n                              </div>',console.log(i),"Yes"!=i.challengeSent){e.next=52;break}document.getElementById("su-msg-overlay").innerHTML="Link has been sent to your Email <b>".concat(this.email,"</b>"),p=0;case 34:if(!(p<100)){e.next=47;break}return e.next=37,this.verifyChallenge(i);case 37:if("Pending"!=(C=e.sent).approved){e.next=43;break}return e.next=41,b(3e3);case 41:e.next=44;break;case 43:return e.abrupt("break",47);case 44:p++,e.next=34;break;case 47:"No"==C.approved&&(H=0,document.getElementById("su-msg").innerHTML="\n              Email link is expired, please try again"),R=C.authCode,console.log("auth code else"+R),e.next=54;break;case 52:R=i.authCode,console.log("auth code else"+R);case 54:if(1!=H){e.next=58;break}return e.next=57,this.fetchToken(i,R);case 57:N=e.sent;case 58:return e.abrupt("return",N);case 59:case"end":return e.stop()}}),e,this)}))),function(){return g.apply(this,arguments)})},{key:"InitAuthResponseBody",value:(p=r(u().mark((function e(t){var n,r,o,a,i,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("InitAuthResponseBody"),e.next=3,w();case 3:return n=e.sent,r=n.hash,o=n.codeVerifier,this.hash=r,this.codeVerifier=o,e.next=10,this.auth.initiateAuth(this.email,this.profile,o,t);case 10:if(200==(a=e.sent).status){e.next=20;break}if(document.getElementById("su-overlay").remove(),403!=a.status){e.next=18;break}return e.next=16,a.json();case 16:i=e.sent,K=i.message;case 18:return s(this,F).call(this,K),e.abrupt("return");case 20:return e.next=22,a.json();case 22:if(!("retStatus"in(c=e.sent))){e.next=27;break}return document.getElementById("su-overlay").remove(),s(this,F).call(this,K),e.abrupt("return");case 27:return console.log("initAuthResponse Body value"+c),e.abrupt("return",c);case 29:case"end":return e.stop()}}),e,this)}))),function(e){return p.apply(this,arguments)})},{key:"verifyChallenge",value:(h=r(u().mark((function e(t){var n,r,o,a,i,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("verifyChallenge"),console.log(t),console.log("verifyChallenge"),n=t.challengeId,r=t.userId,o=t.challenge,this.idTypes&&(a=document.getElementById("otp").value,o=a),console.log(n),console.log(o),i=null,c=null,e.next=11,this.auth.verifyAuth({challenge:o,userId:r,challengeId:n});case 11:if(200==(i=e.sent).status){e.next=17;break}return document.getElementById("su-overlay").remove(),console.log("VerifyAuthResp Error"),s(this,F).call(this,K),e.abrupt("return");case 17:return e.next=19,i.json();case 19:return c=e.sent,e.abrupt("return",c);case 21:case"end":return e.stop()}}),e,this)}))),function(e){return h.apply(this,arguments)})},{key:"fetchToken",value:(l=r(u().mark((function e(t,n){var r,o,a,i,c,l;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetch Token"),e.next=3,this.auth.getTokens(t,n,this.profile,this.codeVerifier);case 3:if(200==(r=e.sent).status){e.next=9;break}return document.getElementById("su-overlay").remove(),console.log("Get Token error"),s(this,F).call(this,K),e.abrupt("return");case 9:return e.next=11,r.json();case 11:return o=e.sent,a=o.accessToken,i=o.idToken,c=o.refreshToken,a&&i&&c&&(localStorage.setItem("refreshToken",c),(l=document.getElementById("su-overlay"))&&l.remove(),0==this.idTypes&&(this.mountPoint.innerHTML+='<div id="su-overlay" class="su-overlay"><img src="https://firebasestorage.googleapis.com/v0/b/charitybh-dc293.appspot.com/o/su%2Ftick.svg?alt=media&token=415b947e-2033-4768-871f-9e690d871e98" class="su-tick" width="99"/><img src="'.concat(this.logo||"https://uploads-ssl.webflow.com/61234975b500ae0500a02f42/6123751c35c797119be587e3_Screenshot%20(275)%203.png",'" width="203"><h3>').concat(this.heading,"<h3/><p>").concat(this.subHeading,"</p></div>"))),e.abrupt("return",o);case 15:case"end":return e.stop()}}),e,this)}))),function(e,t){return l.apply(this,arguments)})},{key:"SubmitOtp",value:(c=r(u().mark((function e(){var t,n,r,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S<=-1&&(clearInterval(O),this.submit(),document.getElementById("su-msg").innerHTML='\n      "OTP sent to "'.concat(this.email)),t=document.getElementById("otp").value,n=document.getElementById("otp").value.length,!t||6!=n){e.next=29;break}return e.next=6,this.submitChallenge(this.challengeId,this.userId,t);case 6:if(r=e.sent,console.log(r),200!=r.status&&(document.getElementById("su-msg").innerHTML="\n              Wrong OTP Please Enter Correct"),200!=r.status){e.next=29;break}return e.next=12,this.verifyChallenge(this.initAuthResponseBody);case 12:if("Pending"!=(C=e.sent).approved){e.next=18;break}return e.next=16,b(3e3);case 16:e.next=18;break;case 18:if("No"==C.approved&&(H=0,document.getElementById("su-msg").innerHTML="\n            OTP is expired, please try again"),console.log("verifyAuthRespBody"),console.log(C),R=C.authCode,console.log("auth code"+R),1!=H){e.next=29;break}return clearInterval(O),e.next=27,this.fetchToken(this.initAuthResponseBody,R);case 27:return o=e.sent,e.abrupt("return",o);case 29:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},{key:"countdown",value:(a=r(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(-1!=S){e.next=11;break}return clearInterval(O),document.getElementById("su-submits-btn").hidden=!1,document.getElementById("su-submits-btn").disabled=!1,document.getElementById("otp").remove(),document.getElementById("times").remove(),document.getElementById("su-msg").innerHTML="\n             otp expire",document.getElementById("su-submits-btn").innerText="Regenerate OTP",e.abrupt("return");case 11:document.getElementById("times").innerHTML="\n      Expires in ".concat(S," "),S--;case 13:return e.abrupt("return");case 14:case"end":return e.stop()}}),e)}))),function(){return a.apply(this,arguments)})},{key:"submitChallenge",value:(n=r(u().mark((function e(t,n,r){var o,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={userId:n,challengeType:this.signInMode,challenge:r,challengeId:t,profileId:this.profile.profileId},e.prev=1,e.next=4,fetch("http://localhost:5000/auth/submitChallenge",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(o)});case 4:return a=e.sent,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e.catch(1),console.log("Error from /auth/submitChallenge : "+e.t0),e.t0;case 12:case"end":return e.stop()}}),e,this,[[1,8]])}))),function(e,t,r){return n.apply(this,arguments)})},{key:"logout",value:(t=r(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,generateKeys();case 2:return t=e.sent,n=t.publicKey,e.next=6,fetch("".concat(HOST,"/auth/logout"),{body:JSON.stringify({userId:"",publicKey:n})});case 6:localStorage.removeItem("refreshToken"),localStorage.removeItem("privateKey"),localStorage.removeItem("publicKey");case 9:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})}]),e}();window.Secuuth=J})()})();
