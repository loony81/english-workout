!function(e){function t(t){for(var r,i,l=t[0],c=t[1],u=t[2],m=0,f=[];m<l.length;m++)i=l[m],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);f.length;)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={0:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=c;o.push([55,1]),n()}({55:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(27),i=n.n(o),l=n(8),c=n(1);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=function(e){var t=e.audio,n=e.online,o=u(Object(r.useState)(!1),2),i=o[0],c=o[1],s=function(){c(!1),t.pause()};return a.a.createElement(a.a.Fragment,null,a.a.createElement("nav",{className:"Navbar"},a.a.createElement("div",{className:"Navbar-container"},a.a.createElement(l.b,{to:"/",className:"Navbar-logo",onClick:s},a.a.createElement("img",{src:"assets/images/dumbbell.svg"})," ENGLISH WORKOUT"),a.a.createElement("img",{style:{visibility:n?"hidden":"visible"},src:"assets/images/offline.svg"}),a.a.createElement("ul",{className:i?"Navbar-menu active":"Navbar-menu"},[{path:"/",page:"HOME"},{path:"/grammar",page:"GRAMMAR"},{path:"/proverbs",page:"PROVERBS"},{path:"/translate",page:"TRANSLATE"},{path:"/about",page:"ABOUT"}].map((function(e,t){return a.a.createElement("li",{key:t,className:"Navbar-item"},a.a.createElement(l.c,{to:e.path,exact:!0,className:"Navbar-link",activeClassName:"Navbar-link-active",onClick:s},e.page))}))),a.a.createElement("div",{className:"Navbar-hamburger",onClick:function(){return c(!i)}},a.a.createElement("i",{className:i?"fas fa-times":"fas fa-bars"})))))},f=function(e){var t=e.children,n=e.online,r=e.currentPage;return a.a.createElement("div",{className:"PageLayout"},a.a.createElement("h5",null,a.a.createElement("span",{className:"offline",style:{visibility:n?"hidden":"visible"}},"You are currently offline. Please check your internet connection."),"home"!=r&&a.a.createElement("span",{className:"current"},r)),t)},p=function(e){var t=e.children,n=e.to,r=e.onClickMe,o=e.disabled;return n?a.a.createElement(l.b,{to:n,className:"Button"},a.a.createElement("button",null,t)):a.a.createElement("a",{className:"Button"},a.a.createElement("button",{onClick:r,disabled:o},t))},h=function(e){var t=e.online;return a.a.createElement(f,{online:t,currentPage:"home"},a.a.createElement("h1",null,"Exercise your English by listening to and typing out English proverbs, sayings and quotes!"),a.a.createElement(p,{to:"/grammar"},"Get Started! ",a.a.createElement("br",null),a.a.createElement("i",{className:"fas fa-play-circle"})))},d=function(e){var t=e.online;return a.a.createElement(f,{online:t,currentPage:"about"},a.a.createElement("div",{style:{fontSize:"1.1rem",background:"#fff",borderRadius:"4px",padding:"5px",boxShadow:"0 0 10px rgba(0,0,0,0.5)"}},a.a.createElement("p",null,"   How not to forget English? If you've been learning English for quite some time and have gained some significant knowledge (at least by your own reckoning), you understand that if you are not a native speaker, you'll start to 'lose' your English very quickly without practice. It is a natural phenomenon. Apparently remembering a language, even your mother tongue, isn't quite like riding a bicycle. Without practice, your English will start to 'fade away'. So, how to maintain your English level?"),a.a.createElement("p",null,"I have found a solution. I have built a web app that will help you keep your English at a high level all the time! The app consists of three sections: 'Grammar', 'Proverbs' and 'Translation'. The 'Grammar' section allows you to practice your English grammar. This is a collection of completely arbitrary sentences and phrases recorded in English which explain English grammar rules. The app randomly generates a phrase when you press the button. Your job is to listen to the recording carefully, understand it, and type it exactly like it sounds. The 'Proverbs' section contains a huge collection of recorded English proverbs, idioms, quotes, movie quotes, popular sayings, etc. It works exactly the same way: you generate recordings and type them precisely. You can recite them out loud if you want, to better memorize them. For most proverbs there is also an interpretation in parentheses that you also need to type. And with 'Translation' you can practice translating very common English phrases from Russian into English. This app will not only improve your pronunciation and listening skills, but also touch typing skills. Being able to quickly type in English is a must have skill nowadays. You can also use the application in offline mode by fetching items in advance (they will be stored in your browser during the session) and practicing when there's no Internet access."),a.a.createElement("p",null,"I chose proverbs for a reason. It is very efficient to learn English by memorizing proverbs and common phrases because they have a tendency to get imprinted into your brain much better than memorizing separate words. You can practice throughout the day whenever you have free time and access to the Internet. Just make a habit of it! And I guarantee you that you'll never forget English! This app contains over 4000 recordings made in American English (mostly). And I keep adding new ones all the time."),a.a.createElement("p",null,"Don't let your English rust, keep it shiny!")))},y=Object(r.forwardRef)((function(e,t){var n={};return"proverb"===e.context?n.visibility="visible":n.visibility=e.description?"hidden":"visible",a.a.createElement("textarea",{onChange:e.compareText,ref:t,style:n,placeholder:"Type here",maxLength:"300"})})),v=n(11),b=n.n(v);function g(e,t,n,r,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,a)}function E(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){g(o,r,a,i,l,"next",e)}function l(e){g(o,r,a,i,l,"throw",e)}i(void 0)}))}}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var k=function(e){var t=e.items,n=e.generate,o=e.context,i=e.online,l=e.audio,c=w(Object(r.useState)(t.length-1),2),u=c[0],s=c[1],m=w(Object(r.useState)(!1),2),f=m[0],h=m[1],d=w(Object(r.useState)(""),2),v=d[0],g=d[1],x=w(Object(r.useState)(!0),2),k=x[0],S=x[1],O=w(Object(r.useState)(0),2),j=O[0],N=O[1],A=w(Object(r.useState)(!1),2),I=A[0],T=A[1],C=Object(r.useRef)(),P=Object(r.useRef)(),R=Object(r.useRef)();Object(r.useEffect)((function(){t.length>0&&T(!1),s(t.length-1),h(!1)}),[t.length]),Object(r.useEffect)((function(){I?M():clearInterval(j)}),[I]),Object(r.useEffect)((function(){u>=0&&g(t[u].mask),C.current.value="",S(!0)}),[u]),Object(r.useEffect)((function(){i&&I&&(T(!1),t.length>0?P.current.textContent=t[u].mask:P.current.textContent="")}),[i]),Object(r.useEffect)((function(){return function(){I&&T(!1)}}),[]);var M=function(){P.current.textContent="",N(setInterval((function(){var e=P.current;e&&(e.textContent.length>=3?e.textContent=".":e.textContent+=".")}),500))};function U(){return(U=E(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(I){e.next=16;break}if(n=t[u].audioFileName,!(r=t[u].audioFileUrl)){e.next=16;break}return e.prev=4,e.next=7,b.a.getItem(n);case 7:return(a=e.sent)?l.src=URL.createObjectURL(a):(l.src=r,console.log("playing from Google Drive")),e.next=11,l.play();case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})))).apply(this,arguments)}return a.a.createElement("div",{className:"WorkingArea"},a.a.createElement("div",{className:"WorkingArea-show"},a.a.createElement("p",{ref:P},u>-1&&(f?t[u].sentence:v)),a.a.createElement("div",null,a.a.createElement(y,{context:o,description:k,compareText:function(e){e.target.style.color;var n=e.target.value,r=e.target.value.length,a=t[u];a.sentence.startsWith(n)?(g(n+a.mask.slice(r)),e.target.style.color="black",a.sentence.length===r&&(e.target.style.color="green",h(!0))):e.target.style.color="red"},ref:C}),("grammar"==o||"translate"==o)&&a.a.createElement("p",{ref:R,style:{visibility:k?"visible":"hidden",display:k?"block":"none"}},-1==u?"":t[u].description),("grammar"==o||"translate"==o)&&u>-1&&a.a.createElement("button",{onClick:function(){return S(!k),void setTimeout((function(){return C.current.focus()}),100)}},k?a.a.createElement("i",{className:"fas fa-keyboard"}):a.a.createElement("i",{className:"fas fa-info-circle"})))),a.a.createElement("div",{className:"WorkingArea-navigation"},a.a.createElement(p,{onClickMe:function(){I||(l.pause(),T(!0),n(o),C.current.value="","proverb"!==o&&(R.current.textContent=""))},disabled:!i},"Next ",a.a.createElement("br",null),a.a.createElement("i",{className:"fas fa-chevron-circle-right"})),"translate"!==o&&a.a.createElement(p,{onClickMe:function(){return function(){return U.apply(this,arguments)}()},disabled:u<0},"Play ",a.a.createElement("br",null),a.a.createElement("i",{className:"fas fa-volume-up"})),a.a.createElement(p,{onClickMe:function(){I||(h(!f),g(t[u].mask))},disabled:u<0},f?"Hide":"Show"," ",a.a.createElement("br",null),f?a.a.createElement("i",{className:"fas fa-eye-slash"}):a.a.createElement("i",{className:"fas fa-eye"})),a.a.createElement(p,{onClickMe:function(){return l.pause(),j&&clearInterval(j),T(!1),s(u-1),void h(!1)},disabled:u<=0},"Previous ",a.a.createElement("br",null),a.a.createElement("i",{className:"fas fa-chevron-circle-left"})),"translate"===o&&a.a.createElement(p,{onClickMe:function(){return function(){if(!I){var e=t[u],n=C.current.value.length;n!==e.sentence.length&&(C.current.value=e.sentence.slice(0,n+1),g(C.current.value+e.mask.slice(n+1)),C.current.value.length===e.sentence.length&&(C.current.style.color="green"))}}()},disabled:u<0},"Hint ",a.a.createElement("br",null),a.a.createElement("i",{className:"fas fa-user-secret"}))))},S=function(e){var t=e.items,n=e.generate,r=e.online,o=e.audio;return a.a.createElement(f,{online:r,currentPage:"grammar"},a.a.createElement(k,{items:t,generate:n,context:"grammar",online:r,audio:o}))},O=function(e){var t=e.items,n=e.generate,r=e.online,o=e.audio;return a.a.createElement(f,{online:r,currentPage:"proverbs"},a.a.createElement(k,{items:t,generate:n,context:"proverb",online:r,audio:o}))},j=function(e){var t=e.items,n=e.generate,r=e.online,o=e.audio;return a.a.createElement(f,{online:r,currentPage:"translation"},a.a.createElement(k,{items:t,generate:n,context:"translate",online:r,audio:o}))},N=function(){return a.a.createElement("footer",{className:"Footer"},a.a.createElement("p",null,"Created with ♥ by Roman Nazarenko ",a.a.createElement("a",{href:"https://github.com/loony81"},a.a.createElement("i",{className:"fab fa-github-alt"}))))},A=n(12),I=n.n(A),T=n(7),C=n.n(T);function P(e){return function(e){if(Array.isArray(e))return L(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||F(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t,n,r,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,a)}function M(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){R(o,r,a,i,l,"next",e)}function l(e){R(o,r,a,i,l,"throw",e)}i(void 0)}))}}function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||F(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){if(e){if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(e,t):void 0}}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var q=function(){var e=U(Object(r.useState)([]),2),t=e[0],n=e[1],o=U(Object(r.useState)([]),2),i=o[0],u=o[1],s=U(Object(r.useState)([]),2),f=s[0],p=s[1],y=U(Object(r.useState)(!0),2),v=y[0],g=y[1],E=U(Object(r.useState)(new Audio),2),w=E[0];E[1];w.volume=1;var x,k=new URL(window.location.origin);Object(r.useEffect)((function(){window.addEventListener("offline",function(){var e=M(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:!e.sent&&v&&g(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),!1),window.addEventListener("online",function(){var e=M(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:e.sent&&g(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),!1)}),[]),Object(r.useEffect)((function(){v||(x=setInterval(M(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t=e.sent,console.log(t),t&&(g(!0),clearInterval(x));case 5:case"end":return e.stop()}}),e)}))),5e3))}),[v]);var A=function(){var e=M(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k.searchParams.set("rand",Date.now()),e.prev=1,e.next=4,I.a.head(k.toString());case 4:return console.log("Connection to the Internet restored."),e.abrupt("return",!0);case 8:return e.prev=8,e.t0=e.catch(1),console.log("Trying to reconnect..."),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),T=function(e){var t,n="",r=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=F(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw o}}}}(e);try{for(r.s();!(t=r.n()).done;){var a=t.value;a.match(/[0-9.,':;()!?\s-]/)?n+=a:a.match(/[A-Z]/)?n+="X":n+="x"}}catch(e){r.e(e)}finally{r.f()}return n},R=function(e){return I.a.post("/audio",{url:e},{responseType:"blob"})};function L(e){return q.apply(this,arguments)}function q(){return(q=M(C.a.mark((function e(r){var a,o,l,c,s,m,h,d,y;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("/get"+r);case 3:if(a=e.sent,o=a.data,l=o.audioFileUrl,c=o.audioFileName,!l||!c){e.next=19;break}return c=r+"/"+c,a.data.audioFileName=c,e.next=10,b.a.getItem(c);case 10:if(s=e.sent,!l||s){e.next=19;break}return e.next=14,R(l);case 14:if(m=e.sent){e.next=17;break}return e.abrupt("return");case 17:return e.next=19,b.a.setItem(c,m.data);case 19:a.data.mask=T(a.data.sentence),"grammar"==r&&(h=[].concat(P(t),[a.data]),n(h)),"proverb"==r&&(d=[].concat(P(i),[a.data]),u(d)),"translate"==r&&(y=[].concat(P(f),[a.data]),p(y)),e.next=29;break;case 25:e.prev=25,e.t0=e.catch(0),console.log("Something wrong inside generate(): "+e.t0.message),e.t0.isAxiosError&&g(!1);case 29:case"end":return e.stop()}}),e,null,[[0,25]])})))).apply(this,arguments)}return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,null,a.a.createElement(m,{audio:w,online:v}),a.a.createElement(c.c,null,a.a.createElement(c.a,{path:"/",exact:!0},a.a.createElement(h,{online:v})),a.a.createElement(c.a,{path:"/grammar"},a.a.createElement(S,{generate:L,items:t,online:v,audio:w})),a.a.createElement(c.a,{path:"/proverbs"},a.a.createElement(O,{generate:L,items:i,online:v,audio:w})),a.a.createElement(c.a,{path:"/translate"},a.a.createElement(j,{generate:L,items:f,online:v,audio:w})),a.a.createElement(c.a,{path:"/about"},a.a.createElement(d,{online:v}))),a.a.createElement(N,null)))};i.a.render(a.a.createElement(q,null),document.querySelector("#root"))}});