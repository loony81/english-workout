!function(e){function t(t){for(var r,i,c=t[0],l=t[1],u=t[2],m=0,f=[];m<c.length;m++)i=c[m],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);f.length;)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={0:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=l;o.push([55,1]),n()}({55:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(27),i=n.n(o),c=n(8),l=n(1);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=function(e){var t=e.audio,n=e.online,o=u(Object(r.useState)(!1),2),i=o[0],l=o[1],s=function(){l(!1),t.pause()};return a.a.createElement(a.a.Fragment,null,a.a.createElement("nav",{className:"Navbar"},a.a.createElement("div",{className:"Navbar-container"},a.a.createElement(c.b,{to:"/",className:"Navbar-logo",onClick:s},a.a.createElement("img",{src:"assets/images/dumbbell.svg"})," ENGLISH WORKOUT"),a.a.createElement("img",{style:{visibility:n?"hidden":"visible"},src:"assets/images/offline.svg"}),a.a.createElement("ul",{className:i?"Navbar-menu active":"Navbar-menu"},[{path:"/",page:"HOME"},{path:"/grammar",page:"GRAMMAR"},{path:"/proverbs",page:"PROVERBS"},{path:"/translate",page:"TRANSLATE"},{path:"/about",page:"ABOUT"}].map((function(e,t){return a.a.createElement("li",{key:t,className:"Navbar-item"},a.a.createElement(c.c,{to:e.path,exact:!0,className:"Navbar-link",activeClassName:"Navbar-link-active",onClick:s},e.page))}))),a.a.createElement("div",{className:"Navbar-hamburger",onClick:function(){return l(!i)}},a.a.createElement("i",{className:i?"fas fa-times":"fas fa-bars"})))))},f=function(e){var t=e.children,n=e.online,r=e.currentPage;return a.a.createElement("div",{className:"PageLayout"},a.a.createElement("h5",null,a.a.createElement("span",{className:"offline",style:{visibility:n?"hidden":"visible"}},"You are currently offline. Please check your internet connection."),"home"!=r&&a.a.createElement("span",{className:"current"},r)),t)},p=function(e){var t=e.children,n=e.to,r=e.onClickMe,o=e.disabled;return n?a.a.createElement(c.b,{to:n,className:"Button"},a.a.createElement("button",null,t)):a.a.createElement("a",{className:"Button"},a.a.createElement("button",{onClick:r,disabled:o},t))},d=function(e){var t=e.online;return a.a.createElement(f,{online:t,currentPage:"home"},a.a.createElement("h1",null,"Exercise your English by listening to and typing out English proverbs, sayings and quotes!"),a.a.createElement(p,{to:"/grammar"},"Get Started! ",a.a.createElement("br",null),a.a.createElement("i",{className:"fas fa-play-circle"})))},h=function(e){var t=e.online;return a.a.createElement(f,{online:t,currentPage:"about"},a.a.createElement("div",{style:{fontSize:"1.1rem",background:"#fff",borderRadius:"4px",padding:"5px",boxShadow:"0 0 10px rgba(0,0,0,0.5)"}},a.a.createElement("p",null,"   How not to forget English? If you've been learning English for quite some time and have gained some significant knowledge (at least by your own reckoning), you understand that if you are not a native speaker, you'll start to 'lose' your English very quickly without practice. It is a natural phenomenon. Apparently remembering a language, even your mother tongue, isn't quite like riding a bicycle. Without practice, your English will start to 'fade away'. So, how to maintain your English level?"),a.a.createElement("p",null,"I have found a solution. I have built a web app that will help you keep your English at a high level all the time! The app consists of three sections: 'Grammar', 'Proverbs' and 'Translation'. The 'Grammar' section allows you to practice your English grammar. This is a collection of completely arbitrary sentences and phrases recorded in English which explain English grammar rules. The app randomly generates a phrase when you press the button. Your job is to listen to the recording carefully, understand it, and type it exactly like it sounds. The 'Proverbs' section contains a huge collection of recorded English proverbs, idioms, quotes, movie quotes, popular sayings, etc. It works exactly the same way: you generate recordings and type them precisely. You can recite them out loud if you want, to better memorize them. For most proverbs there is also an interpretation in parentheses that you also need to type. And with 'Translation' you can practice translating very common English phrases from Russian into English. This app will not only improve your pronunciation and listening skills, but also touch typing skills. Being able to quickly type in English is a must have skill nowadays. You can also use the application in offline mode by fetching items in advance (they will be stored in your browser during the session) and practicing when there's no Internet access."),a.a.createElement("p",null,"I chose proverbs for a reason. It is very efficient to learn English by memorizing proverbs and common phrases because they have a tendency to get imprinted into your brain much better than memorizing separate words. You can practice throughout the day whenever you have free time and access to the Internet. Just make a habit of it! And I guarantee you that you'll never forget English! This app contains over 4000 recordings made in American English (mostly). And I keep adding new ones all the time."),a.a.createElement("p",null,"Don't let your English rust, keep it shiny!")))},y=Object(r.forwardRef)((function(e,t){var n={};return"proverb"===e.context?n.visibility="visible":n.visibility=e.description?"hidden":"visible",a.a.createElement("textarea",{onChange:e.compareText,ref:t,style:n,placeholder:"Type here",maxLength:"300"})})),v=Object(r.forwardRef)((function(e,t){var n={};e.description?(n.visibility="visible",n.display="block"):(n.visibility="hidden",n.display="none");var r=e.currentItem;return a.a.createElement(a.a.Fragment,null,("grammar"==e.context||"translate"==e.context)&&a.a.createElement("p",{ref:t,style:n},-1==r?"":e.items[r].description))})),b=function(e){var t=e.context,n=e.currentItem,r=e.description,o=e.toggleTextarea;return a.a.createElement(a.a.Fragment,null,("grammar"==t||"translate"==t)&&n>-1&&a.a.createElement("button",{onClick:function(){return o()}},r?a.a.createElement("i",{className:"fas fa-keyboard"}):a.a.createElement("i",{className:"fas fa-info-circle"})))},g=n(11),E=n.n(g);function w(e,t,n,r,a,o,i){try{var c=e[o](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,a)}function x(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){w(o,r,a,i,c,"next",e)}function c(e){w(o,r,a,i,c,"throw",e)}i(void 0)}))}}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var O=function(e){var t=e.items,n=e.generate,o=e.context,i=e.online,c=e.audio,l=k(Object(r.useState)(t.length-1),2),u=l[0],s=l[1],m=k(Object(r.useState)(!1),2),f=m[0],d=m[1],h=k(Object(r.useState)(""),2),g=h[0],w=h[1],S=k(Object(r.useState)(!0),2),O=S[0],j=S[1],N=k(Object(r.useState)(0),2),A=N[0],I=N[1],T=k(Object(r.useState)(!1),2),C=T[0],P=T[1],R=Object(r.useRef)(),M=Object(r.useRef)(),F=Object(r.useRef)();Object(r.useEffect)((function(){t.length>0&&P(!1),s(t.length-1),d(!1)}),[t.length]),Object(r.useEffect)((function(){C?U():clearInterval(A)}),[C]),Object(r.useEffect)((function(){u>=0&&w(t[u].mask),R.current.value="",j(!0)}),[u]),Object(r.useEffect)((function(){i&&C&&(P(!1),t.length>0?M.current.textContent=t[u].mask:M.current.textContent="")}),[i]),Object(r.useEffect)((function(){return function(){C&&P(!1)}}),[]);var U=function(){M.current.textContent="",I(setInterval((function(){var e=M.current;e&&(e.textContent.length>=3?e.textContent=".":e.textContent+=".")}),500))};function L(){return(L=x(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C){e.next=16;break}if(n=t[u].audioFileName,!(r=t[u].audioFileUrl)){e.next=16;break}return e.prev=4,e.next=7,E.a.getItem(n);case 7:return(a=e.sent)?c.src=URL.createObjectURL(a):(c.src=r,console.log("playing from Google Drive")),e.next=11,c.play();case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})))).apply(this,arguments)}return a.a.createElement("div",{className:"WorkingArea"},a.a.createElement("div",{className:"WorkingArea-show"},a.a.createElement("p",{ref:M},u>-1&&(f?t[u].sentence:g)),a.a.createElement("div",null,a.a.createElement(y,{context:o,description:O,compareText:function(e){e.target.style.color;var n=e.target.value,r=e.target.value.length,a=t[u];a.sentence.startsWith(n)?(w(n+a.mask.slice(r)),e.target.style.color="black",a.sentence.length===r&&(e.target.style.color="green",d(!0))):e.target.style.color="red"},ref:R}),a.a.createElement(v,{context:o,description:O,ref:F,currentItem:u,items:t}),a.a.createElement(b,{context:o,description:O,currentItem:u,toggleTextarea:function(){j(!O),setTimeout((function(){return R.current.focus()}),100)}}))),a.a.createElement("div",{className:"WorkingArea-navigation"},a.a.createElement(p,{onClickMe:function(){C||(c.pause(),P(!0),n(o),R.current.value="","proverb"!==o&&(F.current.textContent=""))},disabled:!i},"Next ",a.a.createElement("br",null),a.a.createElement("i",{className:"fas fa-chevron-circle-right"})),"translate"!==o&&a.a.createElement(p,{onClickMe:function(){return function(){return L.apply(this,arguments)}()},disabled:u<0},"Play ",a.a.createElement("br",null),a.a.createElement("i",{className:"fas fa-volume-up"})),a.a.createElement(p,{onClickMe:function(){C||(d(!f),w(t[u].mask))},disabled:u<0},f?"Hide":"Show"," ",a.a.createElement("br",null),f?a.a.createElement("i",{className:"fas fa-eye-slash"}):a.a.createElement("i",{className:"fas fa-eye"})),a.a.createElement(p,{onClickMe:function(){return c.pause(),A&&clearInterval(A),P(!1),s(u-1),void d(!1)},disabled:u<=0},"Previous ",a.a.createElement("br",null),a.a.createElement("i",{className:"fas fa-chevron-circle-left"})),"translate"===o&&a.a.createElement(p,{onClickMe:function(){return function(){if(!C){var e=t[u],n=R.current.value.length;n!==e.sentence.length&&(R.current.value=e.sentence.slice(0,n+1),w(R.current.value+e.mask.slice(n+1)),R.current.value.length===e.sentence.length&&(R.current.style.color="green"))}}()},disabled:u<0},"Hint ",a.a.createElement("br",null),a.a.createElement("i",{className:"fas fa-user-secret"}))))},j=function(e){var t=e.items,n=e.generate,r=e.online,o=e.audio;return a.a.createElement(f,{online:r,currentPage:"grammar"},a.a.createElement(O,{items:t,generate:n,context:"grammar",online:r,audio:o}))},N=function(e){var t=e.items,n=e.generate,r=e.online,o=e.audio;return a.a.createElement(f,{online:r,currentPage:"proverbs"},a.a.createElement(O,{items:t,generate:n,context:"proverb",online:r,audio:o}))},A=function(e){var t=e.items,n=e.generate,r=e.online,o=e.audio;return a.a.createElement(f,{online:r,currentPage:"translation"},a.a.createElement(O,{items:t,generate:n,context:"translate",online:r,audio:o}))},I=function(){return a.a.createElement("footer",{className:"Footer"},a.a.createElement("p",null,"Created with ♥ by Roman Nazarenko ",a.a.createElement("a",{href:"https://github.com/loony81"},a.a.createElement("i",{className:"fab fa-github-alt"}))))},T=n(12),C=n.n(T),P=n(7),R=n.n(P);function M(e){return function(e){if(Array.isArray(e))return G(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||q(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t,n,r,a,o,i){try{var c=e[o](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,a)}function U(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){F(o,r,a,i,c,"next",e)}function c(e){F(o,r,a,i,c,"throw",e)}i(void 0)}))}}function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||q(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){if(e){if("string"==typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(e,t):void 0}}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var W=function(){var e=L(Object(r.useState)([]),2),t=e[0],n=e[1],o=L(Object(r.useState)([]),2),i=o[0],u=o[1],s=L(Object(r.useState)([]),2),f=s[0],p=s[1],y=L(Object(r.useState)(!0),2),v=y[0],b=y[1],g=L(Object(r.useState)(new Audio),2),w=g[0];g[1];w.volume=1;var x,k=new URL(window.location.origin);Object(r.useEffect)((function(){window.addEventListener("offline",function(){var e=U(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:!e.sent&&v&&b(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),!1),window.addEventListener("online",function(){var e=U(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:e.sent&&b(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),!1)}),[]),Object(r.useEffect)((function(){v||(x=setInterval(U(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,console.log(t),t&&(b(!0),clearInterval(x));case 5:case"end":return e.stop()}}),e)}))),5e3))}),[v]);var S=function(){var e=U(R.a.mark((function e(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k.searchParams.set("rand",Date.now()),e.prev=1,e.next=4,C.a.head(k.toString());case 4:return console.log("Connection to the Internet restored."),e.abrupt("return",!0);case 8:return e.prev=8,e.t0=e.catch(1),console.log("Trying to reconnect..."),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),O=function(e){var t,n="",r=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=q(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}(e);try{for(r.s();!(t=r.n()).done;){var a=t.value;a.match(/[0-9.,':;()!?\s-]/)?n+=a:a.match(/[A-Z]/)?n+="X":n+="x"}}catch(e){r.e(e)}finally{r.f()}return n},T=function(e){return C.a.post("/audio",{url:e},{responseType:"blob"})};function P(e){return F.apply(this,arguments)}function F(){return(F=U(R.a.mark((function e(r){var a,o,c,l,s,m,d,h,y;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("/get"+r);case 3:if(a=e.sent,o=a.data,c=o.audioFileUrl,l=o.audioFileName,!c||!l){e.next=19;break}return l=r+"/"+l,a.data.audioFileName=l,e.next=10,E.a.getItem(l);case 10:if(s=e.sent,!c||s){e.next=19;break}return e.next=14,T(c);case 14:if(m=e.sent){e.next=17;break}return e.abrupt("return");case 17:return e.next=19,E.a.setItem(l,m.data);case 19:a.data.mask=O(a.data.sentence),"grammar"==r&&(d=[].concat(M(t),[a.data]),n(d)),"proverb"==r&&(h=[].concat(M(i),[a.data]),u(h)),"translate"==r&&(y=[].concat(M(f),[a.data]),p(y)),e.next=29;break;case 25:e.prev=25,e.t0=e.catch(0),console.log("Something wrong inside generate(): "+e.t0.message),e.t0.isAxiosError&&b(!1);case 29:case"end":return e.stop()}}),e,null,[[0,25]])})))).apply(this,arguments)}return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,null,a.a.createElement(m,{audio:w,online:v}),a.a.createElement(l.c,null,a.a.createElement(l.a,{path:"/",exact:!0},a.a.createElement(d,{online:v})),a.a.createElement(l.a,{path:"/grammar"},a.a.createElement(j,{generate:P,items:t,online:v,audio:w})),a.a.createElement(l.a,{path:"/proverbs"},a.a.createElement(N,{generate:P,items:i,online:v,audio:w})),a.a.createElement(l.a,{path:"/translate"},a.a.createElement(A,{generate:P,items:f,online:v,audio:w})),a.a.createElement(l.a,{path:"/about"},a.a.createElement(h,{online:v}))),a.a.createElement(I,null)))};i.a.render(a.a.createElement(W,null),document.querySelector("#root"))}});