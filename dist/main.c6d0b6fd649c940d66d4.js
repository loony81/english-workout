!function(e){function t(t){for(var r,i,c=t[0],l=t[1],u=t[2],m=0,f=[];m<c.length;m++)i=c[m],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);f.length;)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={0:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=l;o.push([55,1]),n()}({55:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(27),i=n.n(o),c=n(8),l=n(1),u=Object(r.createContext)(null),s=Object(r.createContext)(null);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=function(){var e=Object(r.useContext)(u).isOnline,t=Object(r.useContext)(s).audio,n=m(Object(r.useState)(!1),2),o=n[0],i=n[1],l=function(){i(!1),t.pause()};return a.a.createElement(a.a.Fragment,null,a.a.createElement("nav",{className:"Navbar"},a.a.createElement("div",{className:"Navbar-container"},a.a.createElement(c.b,{to:"/",className:"Navbar-logo",onClick:l},a.a.createElement("img",{src:"assets/images/dumbbell.svg"})," ENGLISH WORKOUT"),a.a.createElement("img",{style:{visibility:e?"hidden":"visible"},src:"assets/images/offline.svg"}),a.a.createElement("ul",{className:o?"Navbar-menu active":"Navbar-menu"},[{path:"/",page:"HOME"},{path:"/grammar",page:"GRAMMAR"},{path:"/proverbs",page:"PROVERBS"},{path:"/translate",page:"TRANSLATE"},{path:"/about",page:"ABOUT"}].map((function(e,t){return a.a.createElement("li",{key:t,className:"Navbar-item"},a.a.createElement(c.c,{to:e.path,exact:!0,className:"Navbar-link",activeClassName:"Navbar-link-active",onClick:l},e.page))}))),a.a.createElement("div",{className:"Navbar-hamburger",onClick:function(){return i(!o)}},a.a.createElement("i",{className:o?"fas fa-times":"fas fa-bars"})))))},h=function(e){var t=e.children,n=e.currentPage,o=Object(r.useContext)(u).isOnline;return a.a.createElement("div",{className:"PageLayout"},a.a.createElement("h5",null,a.a.createElement("span",{className:"offline",style:{visibility:o?"hidden":"visible"}},"You are currently offline. Please check your internet connection."),"home"!=n&&a.a.createElement("span",{className:"current"},n)),t)},d=function(e){var t=e.children,n=e.to,r=e.onClickMe,o=e.disabled;return n?a.a.createElement(c.b,{to:n,className:"Button"},a.a.createElement("button",null,t)):a.a.createElement("a",{className:"Button"},a.a.createElement("button",{onClick:r,disabled:o},t))},y=function(){return a.a.createElement(h,{currentPage:"home"},a.a.createElement("h1",null,"Exercise your English by listening to and typing out English proverbs, sayings and quotes!"),a.a.createElement(d,{to:"/grammar"},"Get Started! ",a.a.createElement("br",null),a.a.createElement("i",{className:"fas fa-play-circle"})))},b=function(){return a.a.createElement(h,{currentPage:"about"},a.a.createElement("div",{style:{fontSize:"1.1rem",background:"#fff",borderRadius:"4px",padding:"5px",boxShadow:"0 0 10px rgba(0,0,0,0.5)"}},a.a.createElement("p",null,"   How not to forget English? If you've been learning English for quite some time and have gained some significant knowledge (at least by your own reckoning), you understand that if you are not a native speaker, you'll start to 'lose' your English very quickly without practice. It is a natural phenomenon. Apparently remembering a language, even your mother tongue, isn't quite like riding a bicycle. Without practice, your English will start to 'fade away'. So, how to maintain your English level?"),a.a.createElement("p",null,"I have found a solution. I have built a web app that will help you keep your English at a high level all the time! The app consists of three sections: 'Grammar', 'Proverbs' and 'Translation'. The 'Grammar' section allows you to practice your English grammar. This is a collection of completely arbitrary sentences and phrases recorded in English which explain English grammar rules. The app randomly generates a phrase when you press the button. Your job is to listen to the recording carefully, understand it, and type it exactly like it sounds. The 'Proverbs' section contains a huge collection of recorded English proverbs, idioms, quotes, movie quotes, popular sayings, etc. It works exactly the same way: you generate recordings and type them precisely. You can recite them out loud if you want, to better memorize them. For most proverbs there is also an interpretation in parentheses that you also need to type. And with 'Translation' you can practice translating very common English phrases from Russian into English. This app will not only improve your pronunciation and listening skills, but also touch typing skills. Being able to quickly type in English is a must have skill nowadays. You can also use the application in offline mode by fetching items in advance (they will be stored in your browser during the session) and practicing when there's no Internet access."),a.a.createElement("p",null,"I chose proverbs for a reason. It is very efficient to learn English by memorizing proverbs and common phrases because they have a tendency to get imprinted into your brain much better than memorizing separate words. You can practice throughout the day whenever you have free time and access to the Internet. Just make a habit of it! And I guarantee you that you'll never forget English! This app contains over 4000 recordings made in American English (mostly). And I keep adding new ones all the time."),a.a.createElement("p",null,"Don't let your English rust, keep it shiny!")))},v=Object(r.forwardRef)((function(e,t){var n={};return"proverb"===e.context?n.visibility="visible":n.visibility=e.description?"hidden":"visible",a.a.createElement("textarea",{onChange:e.compareText,ref:t,style:n,placeholder:"Type here",maxLength:"300"})})),g=Object(r.forwardRef)((function(e,t){var n={};e.description?(n.visibility="visible",n.display="block"):(n.visibility="hidden",n.display="none");var r=e.currentItem;return a.a.createElement(a.a.Fragment,null,("grammar"==e.context||"translate"==e.context)&&a.a.createElement("p",{ref:t,style:n},-1==r?"":e.items[r].description))})),E=function(e){var t=e.context,n=e.currentItem,r=e.description,o=e.toggleTextarea;return a.a.createElement(a.a.Fragment,null,("grammar"==t||"translate"==t)&&n>-1&&a.a.createElement("button",{onClick:function(){return o()}},r?a.a.createElement("i",{className:"fas fa-keyboard"}):a.a.createElement("i",{className:"fas fa-info-circle"})))},w=function(e){var t=e.context,n=e.currentItem,o=e.sentenceVisibility,i=e.getNext,c=e.playSound,l=e.toggleVisibility,s=e.getPrevious,m=e.showHint,f=Object(r.useContext)(u).isOnline;return a.a.createElement(a.a.Fragment,null,a.a.createElement(d,{onClickMe:function(){return i()},disabled:!f},"Next ",a.a.createElement("br",null),a.a.createElement("i",{className:"fas fa-chevron-circle-right"})),"translate"!==t&&a.a.createElement(d,{onClickMe:function(){return c()},disabled:n<0},"Play ",a.a.createElement("br",null),a.a.createElement("i",{className:"fas fa-volume-up"})),a.a.createElement(d,{onClickMe:function(){return l()},disabled:n<0},o?"Hide":"Show"," ",a.a.createElement("br",null),o?a.a.createElement("i",{className:"fas fa-eye-slash"}):a.a.createElement("i",{className:"fas fa-eye"})),a.a.createElement(d,{onClickMe:function(){return s()},disabled:n<=0},"Previous ",a.a.createElement("br",null),a.a.createElement("i",{className:"fas fa-chevron-circle-left"})),"translate"===t&&a.a.createElement(d,{onClickMe:function(){return m()},disabled:n<0},"Hint ",a.a.createElement("br",null),a.a.createElement("i",{className:"fas fa-user-secret"})))},x=n(11),O=n.n(x);function k(e,t,n,r,a,o,i){try{var c=e[o](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,a)}function j(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){k(o,r,a,i,c,"next",e)}function c(e){k(o,r,a,i,c,"throw",e)}i(void 0)}))}}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var I=function(e){var t=e.items,n=e.generate,o=e.context,i=S(Object(r.useState)(t.length-1),2),c=i[0],l=i[1],m=S(Object(r.useState)(!1),2),f=m[0],p=m[1],h=S(Object(r.useState)(""),2),d=h[0],y=h[1],b=S(Object(r.useState)(!0),2),x=b[0],k=b[1],N=S(Object(r.useState)(0),2),I=N[0],A=N[1],C=S(Object(r.useState)(!1),2),P=C[0],T=C[1],R=Object(r.useRef)(),M=Object(r.useRef)(),F=Object(r.useRef)(),U=Object(r.useContext)(u).isOnline,L=Object(r.useContext)(s).audio;Object(r.useEffect)((function(){t.length>0&&T(!1),l(t.length-1),p(!1)}),[t.length]),Object(r.useEffect)((function(){P?q():clearInterval(I)}),[P]),Object(r.useEffect)((function(){c>=0&&y(t[c].mask),R.current.value="",k(!0)}),[c]),Object(r.useEffect)((function(){U&&P&&(T(!1),t.length>0?M.current.textContent=t[c].mask:M.current.textContent="")}),[U]),Object(r.useEffect)((function(){return function(){P&&T(!1)}}),[]);var q=function(){M.current.textContent="",A(setInterval((function(){var e=M.current;e&&(e.textContent.length>=3?e.textContent=".":e.textContent+=".")}),500))};function H(){return(H=j(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(P){e.next=16;break}if(n=t[c].audioFileName,!(r=t[c].audioFileUrl)){e.next=16;break}return e.prev=4,e.next=7,O.a.getItem(n);case 7:return(a=e.sent)?L.src=URL.createObjectURL(a):(L.src=r,console.log("playing from Google Drive")),e.next=11,L.play();case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})))).apply(this,arguments)}return a.a.createElement("div",{className:"WorkingArea"},a.a.createElement("div",{className:"WorkingArea-show"},a.a.createElement("p",{ref:M},c>-1&&(f?t[c].sentence:d)),a.a.createElement("div",null,a.a.createElement(v,{context:o,description:x,compareText:function(e){e.target.style.color;var n=e.target.value,r=e.target.value.length,a=t[c];a.sentence.startsWith(n)?(y(n+a.mask.slice(r)),e.target.style.color="black",a.sentence.length===r&&(e.target.style.color="green",p(!0))):e.target.style.color="red"},ref:R}),a.a.createElement(g,{context:o,description:x,ref:F,currentItem:c,items:t}),a.a.createElement(E,{context:o,description:x,currentItem:c,toggleTextarea:function(){k(!x),setTimeout((function(){return R.current.focus()}),100)}}))),a.a.createElement("div",{className:"WorkingArea-navigation"},a.a.createElement(w,{context:o,currentItem:c,sentenceVisibility:f,getNext:function(){P||(L.pause(),T(!0),n(o),R.current.value="","proverb"!==o&&(F.current.textContent=""))},playSound:function(){return H.apply(this,arguments)},toggleVisibility:function(){P||(p(!f),y(t[c].mask))},getPrevious:function(){L.pause(),I&&clearInterval(I),T(!1),l(c-1),p(!1)},showHint:function(){if(!P){var e=t[c],n=R.current.value.length;n!==e.sentence.length&&(R.current.value=e.sentence.slice(0,n+1),y(R.current.value+e.mask.slice(n+1)),R.current.value.length===e.sentence.length&&(R.current.style.color="green"))}}})))},A=function(e){var t=e.items,n=e.generate;return a.a.createElement(h,{currentPage:"grammar"},a.a.createElement(I,{items:t,generate:n,context:"grammar"}))},C=function(e){var t=e.items,n=e.generate;return a.a.createElement(h,{currentPage:"proverbs"},a.a.createElement(I,{items:t,generate:n,context:"proverb"}))},P=function(e){var t=e.items,n=e.generate;return a.a.createElement(h,{currentPage:"translation"},a.a.createElement(I,{items:t,generate:n,context:"translate"}))},T=function(){return a.a.createElement("footer",{className:"Footer"},a.a.createElement("p",null,"Created with ♥ by Roman Nazarenko ",a.a.createElement("a",{href:"https://github.com/loony81"},a.a.createElement("i",{className:"fab fa-github-alt"}))))},R=n(12),M=n.n(R),F=n(7),U=n.n(F);function L(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||W(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t,n,r,a,o,i){try{var c=e[o](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,a)}function H(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){q(o,r,a,i,c,"next",e)}function c(e){q(o,r,a,i,c,"throw",e)}i(void 0)}))}}function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||W(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var z=function(){var e=G(Object(r.useState)([]),2),t=e[0],n=e[1],o=G(Object(r.useState)([]),2),i=o[0],m=o[1],f=G(Object(r.useState)([]),2),h=f[0],d=f[1],v=G(Object(r.useState)(!0),2),g=v[0],E=v[1],w=new Audio;w.volume=1;var x,k=new URL(window.location.origin);Object(r.useEffect)((function(){window.addEventListener("offline",function(){var e=H(U.a.mark((function e(t){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:!e.sent&&g&&E(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),!1),window.addEventListener("online",function(){var e=H(U.a.mark((function e(t){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:e.sent&&E(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),!1)}),[]),Object(r.useEffect)((function(){g||(x=setInterval(H(U.a.mark((function e(){var t;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,console.log(t),t&&(E(!0),clearInterval(x));case 5:case"end":return e.stop()}}),e)}))),5e3))}),[g]);var j=function(){var e=H(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k.searchParams.set("rand",Date.now()),e.prev=1,e.next=4,M.a.head(k.toString());case 4:return console.log("Connection to the Internet restored."),e.abrupt("return",!0);case 8:return e.prev=8,e.t0=e.catch(1),console.log("Trying to reconnect..."),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),S=function(e){var t,n="",r=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=W(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}(e);try{for(r.s();!(t=r.n()).done;){var a=t.value;a.match(/[0-9.,':;()!?\s-]/)?n+=a:a.match(/[A-Z]/)?n+="X":n+="x"}}catch(e){r.e(e)}finally{r.f()}return n},N=function(e){return M.a.post("/audio",{url:e},{responseType:"blob"})},I=function(e,r){if("grammar"==e){var a=[].concat(L(t),[r.data]);n(a)}if("proverb"==e){var o=[].concat(L(i),[r.data]);m(o)}if("translate"==e){var c=[].concat(L(h),[r.data]);d(c)}};function R(e){return F.apply(this,arguments)}function F(){return(F=H(U.a.mark((function e(t){var n,r,a,o,i,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.get("/get"+t);case 3:if(n=e.sent,r=n.data,a=r.audioFileUrl,o=r.audioFileName,!a||!o){e.next=19;break}return o=t+"/"+o,n.data.audioFileName=o,e.next=10,O.a.getItem(o);case 10:if(i=e.sent,!a||i){e.next=19;break}return e.next=14,N(a);case 14:if(c=e.sent){e.next=17;break}return e.abrupt("return");case 17:return e.next=19,O.a.setItem(o,c.data);case 19:n.data.mask=S(n.data.sentence),I(t,n),e.next=27;break;case 23:e.prev=23,e.t0=e.catch(0),console.log("Something wrong inside generate(): "+e.t0.message),e.t0.isAxiosError&&E(!1);case 27:case"end":return e.stop()}}),e,null,[[0,23]])})))).apply(this,arguments)}return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,null,a.a.createElement(u.Provider,{value:{isOnline:g}},a.a.createElement(s.Provider,{value:{audio:w}},a.a.createElement(p,null),a.a.createElement(l.c,null,a.a.createElement(l.a,{path:"/",exact:!0},a.a.createElement(y,null)),a.a.createElement(l.a,{path:"/grammar"},a.a.createElement(A,{generate:R,items:t})),a.a.createElement(l.a,{path:"/proverbs"},a.a.createElement(C,{generate:R,items:i})),a.a.createElement(l.a,{path:"/translate"},a.a.createElement(P,{generate:R,items:h})),a.a.createElement(l.a,{path:"/about"},a.a.createElement(b,null))),a.a.createElement(T,null)))))};i.a.render(a.a.createElement(z,null),document.querySelector("#root"))}});