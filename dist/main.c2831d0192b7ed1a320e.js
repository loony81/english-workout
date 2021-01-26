/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([55,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./app/assets/scripts/App.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(27);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(1);

// CONCATENATED MODULE: ./app/assets/scripts/components/Navbar.css
// extracted by mini-css-extract-plugin

// CONCATENATED MODULE: ./app/assets/scripts/components/Navbar.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Navbar_Navbar = function Navbar(_ref) {
  var audio = _ref.audio,
      online = _ref.online;

  var _useState = Object(react["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      click = _useState2[0],
      setClick = _useState2[1];

  var handleClick = function handleClick() {
    return setClick(!click);
  }; // const closeMobileMenu = () => setClick(false)


  var closeMobileMenu = function closeMobileMenu() {
    setClick(false);
    audio.pause(); //stop current audio playback when switching between pages
  };

  var navs = [{
    path: '/',
    page: 'HOME'
  }, {
    path: '/grammar',
    page: 'GRAMMAR'
  }, {
    path: '/proverbs',
    page: 'PROVERBS'
  }, {
    path: '/about',
    page: 'ABOUT'
  }];
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("nav", {
    className: "Navbar"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "Navbar-container"
  }, /*#__PURE__*/react_default.a.createElement(react_router_dom["b" /* Link */], {
    to: "/",
    className: "Navbar-logo",
    onClick: closeMobileMenu
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: "assets/images/dumbbell.svg"
  }), "\xA0ENGLISH WORKOUT"), /*#__PURE__*/react_default.a.createElement("ul", {
    className: click ? 'Navbar-menu active' : 'Navbar-menu'
  }, navs.map(function (item, i) {
    return /*#__PURE__*/react_default.a.createElement("li", {
      key: i,
      className: "Navbar-item"
    }, /*#__PURE__*/react_default.a.createElement(react_router_dom["c" /* NavLink */], {
      to: item.path,
      exact: true,
      className: "Navbar-link",
      activeClassName: "Navbar-link-active",
      onClick: closeMobileMenu
    }, item.page));
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "Navbar-hamburger",
    onClick: handleClick
  }, /*#__PURE__*/react_default.a.createElement("i", {
    className: click ? 'fas fa-times' : 'fas fa-bars'
  })))));
};

/* harmony default export */ var components_Navbar = (Navbar_Navbar);
// CONCATENATED MODULE: ./app/assets/scripts/components/PageLayout.css
// extracted by mini-css-extract-plugin

// CONCATENATED MODULE: ./app/assets/scripts/components/PageLayout.js



var PageLayout_Layout = function Layout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "PageLayout"
  }, children);
};

/* harmony default export */ var PageLayout = (PageLayout_Layout);
// CONCATENATED MODULE: ./app/assets/scripts/components/Button.css
// extracted by mini-css-extract-plugin

// CONCATENATED MODULE: ./app/assets/scripts/components/Button.js




var Button_Button = function Button(_ref) {
  var children = _ref.children,
      to = _ref.to,
      onClickMe = _ref.onClickMe,
      disabled = _ref.disabled;

  if (to) {
    return /*#__PURE__*/react_default.a.createElement(react_router_dom["b" /* Link */], {
      to: to,
      className: "Button"
    }, /*#__PURE__*/react_default.a.createElement("button", null, children));
  }

  return /*#__PURE__*/react_default.a.createElement("a", {
    className: "Button"
  }, /*#__PURE__*/react_default.a.createElement("button", {
    onClick: onClickMe,
    disabled: disabled
  }, children));
};

/* harmony default export */ var components_Button = (Button_Button);
// CONCATENATED MODULE: ./app/assets/scripts/components/Home.js




var Home_Home = function Home() {
  return /*#__PURE__*/react_default.a.createElement(PageLayout, null, /*#__PURE__*/react_default.a.createElement("h1", null, "Exercise your English by listening to and typing out English proverbs, sayings and quotes!"), /*#__PURE__*/react_default.a.createElement(components_Button, {
    to: "/grammar"
  }, "Get Started! ", /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("i", {
    className: "fas fa-play-circle"
  })));
};

/* harmony default export */ var components_Home = (Home_Home);
// CONCATENATED MODULE: ./app/assets/scripts/components/About.js



var About_About = function About() {
  var styles = {
    background: '#fff',
    borderRadius: '4px',
    padding: '5px',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)'
  };
  return /*#__PURE__*/react_default.a.createElement(PageLayout, null, /*#__PURE__*/react_default.a.createElement("div", {
    style: styles
  }, /*#__PURE__*/react_default.a.createElement("p", null, "\xA0\xA0 How not to forget English? If you've been learning English for quite some time and have gained some significant knowledge (at least by your own reckoning), you understand that if you are not a native speaker, you'll start to 'lose' your English very quickly without practice. It is a natural phenomenon. Apparently remembering a language, even your mother tongue, isn't quite like riding a bicycle. Without practice, your English will start to 'fade away'. So, how to maintain your English level?"), /*#__PURE__*/react_default.a.createElement("p", null, "I have found a solution. I have written an app that will help you keep your English at high level all the time! The web app consists of two parts: 'Grammar' and 'Proverbs'. The 'Grammar' part allows you to practice your English grammar. This is a collection of completely arbitrary sentences and phrases recorded in English which explain English grammar rules. The app randomly generates a phrase when you press the button. Your job is to listen to the recording carefully, understand it, and type it exactly like it sounds. The 'Proverbs' part contains a huge collection of recorded English proverbs, idioms, quotes, etc. It works exactly the same way: you generate recordings and type them precisely. You can recite them out loud if you want, to better memorize them. For most proverbs there is also an interpretation in parentheses that you also need to type. This app will not only improve your pronunciation and listening skills, but also touch typing skills. Being able to quickly type in English is a must have skill nowadays."), /*#__PURE__*/react_default.a.createElement("p", null, "I chose proverbs for a reason. It is very efficient to learn English by memorizing proverbs because they have a tendency to get imprinted into your brain much better than ordinary sentences and phrases. 5-7 proverbs per day will be enough. It will only take 20 min of your time, or you can practice it throughout the day whenever you have free time and access to the Internet. Just make a habit of it! And I guarantee you that you'll never forget English! This app contains over 4000 recordings made in American English (mostly). And I keep adding new ones all the time."), /*#__PURE__*/react_default.a.createElement("p", null, "Don't let your English rust, keep it shiny!")));
};

/* harmony default export */ var components_About = (About_About);
// CONCATENATED MODULE: ./app/assets/scripts/components/WorkingArea.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/localforage/dist/localforage.js
var localforage = __webpack_require__(11);
var localforage_default = /*#__PURE__*/__webpack_require__.n(localforage);

// CONCATENATED MODULE: ./app/assets/scripts/components/WorkingArea.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function WorkingArea_slicedToArray(arr, i) { return WorkingArea_arrayWithHoles(arr) || WorkingArea_iterableToArrayLimit(arr, i) || WorkingArea_unsupportedIterableToArray(arr, i) || WorkingArea_nonIterableRest(); }

function WorkingArea_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function WorkingArea_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return WorkingArea_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return WorkingArea_arrayLikeToArray(o, minLen); }

function WorkingArea_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function WorkingArea_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function WorkingArea_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var WorkingArea_WorkingArea = function WorkingArea(_ref) {
  var items = _ref.items,
      generate = _ref.generate,
      context = _ref.context,
      online = _ref.online,
      audio = _ref.audio;

  var _useState = Object(react["useState"])(items.length - 1),
      _useState2 = WorkingArea_slicedToArray(_useState, 2),
      currentItem = _useState2[0],
      setCurrentItem = _useState2[1];

  var _useState3 = Object(react["useState"])(false),
      _useState4 = WorkingArea_slicedToArray(_useState3, 2),
      sentenceVisibility = _useState4[0],
      setSentenceVisibility = _useState4[1]; // a flag to hide or show a proverb/grammar sentence


  var _useState5 = Object(react["useState"])(''),
      _useState6 = WorkingArea_slicedToArray(_useState5, 2),
      revealedSentence = _useState6[0],
      setRevealedSentence = _useState6[1]; // revealedSentence shows a correctly typed portion of a sentence


  var _useState7 = Object(react["useState"])(false),
      _useState8 = WorkingArea_slicedToArray(_useState7, 2),
      description = _useState8[0],
      setDescription = _useState8[1]; // a flag to toggle between the textarea and the description section


  var _useState9 = Object(react["useState"])(0),
      _useState10 = WorkingArea_slicedToArray(_useState9, 2),
      animation = _useState10[0],
      setAnimation = _useState10[1]; // this state is needed for setting and clearing loading animation


  var _useState11 = Object(react["useState"])(false),
      _useState12 = WorkingArea_slicedToArray(_useState11, 2),
      loading = _useState12[0],
      setLoading = _useState12[1]; // to prevent a user from generating another item while current item is being downloaded


  var taRef = Object(react["useRef"])(); // to access textarea directly (we can't use getElementById from within React)

  var pRef = Object(react["useRef"])(); // to access paragraph directly

  Object(react["useEffect"])(function () {
    if (items.length > 0) {
      setLoading(false); // clearInterval(animation) // remove loading animation
    } // as soon as a new item has been downloaded and added to the items array, we reset the currentItem index
    // to point to the latest item


    setCurrentItem(items.length - 1);
    setSentenceVisibility(false); // hide the sentence in case it is shown

    setDescription(false); // hide the description in case it is shown
  }, [items.length]);
  Object(react["useEffect"])(function () {
    if (loading) showLoadingAnimation(); // display loading animation while download is in progress
    else clearInterval(animation); // remove loading animation
  }, [loading]);
  Object(react["useEffect"])(function () {
    // reset revealedSentence to be fully hidden when switching between items
    if (currentItem >= 0) setRevealedSentence(items[currentItem].mask);
    taRef.current.value = ''; // clear textarea when switching between items
  }, [currentItem]);
  Object(react["useEffect"])(function () {
    // in case a user is back online but the loading animation is still in progress, then remove it
    if (online && loading) {
      setLoading(false);
      items.length > 0 ? pRef.current.textContent = items[currentItem].mask : pRef.current.textContent = '';
    }
  }, [online]); // this hook will run when the component unmounts

  Object(react["useEffect"])(function () {
    return function () {
      if (loading) {
        // terminate the loading animation in case download is in progress when navigating to another page
        setLoading(false);
      }
    };
  }, []);

  var getNext = function getNext() {
    // prevent initiating another download if an item is being downloaded
    if (!loading) {
      audio.pause(); //stop current audio playback

      setLoading(true);
      generate(context);
      setDescription(false); // hide the description in case it is shown

      taRef.current.value = ''; // clear textarea
    }
  };

  var getPrevious = function getPrevious() {
    audio.pause(); //stop current audio playback when switching to the previous item

    if (animation) clearInterval(animation); // remove loading animation if there is

    setLoading(false);
    setCurrentItem(currentItem - 1);
    setSentenceVisibility(false); // hide the sentence in case it is shown

    setDescription(false); // hide the description in case it is shown
  };

  var showLoadingAnimation = function showLoadingAnimation() {
    //clear text inside paragraph and start the loading animation
    pRef.current.textContent = '';
    setAnimation(setInterval(function () {
      var p = pRef.current;
      if (!p) return;
      if (p.textContent.length >= 3) p.textContent = '.';else p.textContent += '.';
    }, 500));
  };

  function playSound() {
    return _playSound.apply(this, arguments);
  } // this event handler compares the text being typed in the textarea with the masked sentence
  // and gradually reveals it if it is typed correctly


  function _playSound() {
    _playSound = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var fileName, fileUrl, blob;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (loading) {
                _context.next = 16;
                break;
              }

              fileName = items[currentItem].audioFileName;
              fileUrl = items[currentItem].audioFileUrl;

              if (!fileUrl) {
                _context.next = 16;
                break;
              }

              _context.prev = 4;
              _context.next = 7;
              return localforage_default.a.getItem(fileName);

            case 7:
              blob = _context.sent;

              if (!blob) {
                // if audio can't be found in indexedDB and fileUrl is not an empty string
                // then try to play it direclty from Google Drive
                audio.src = fileUrl;
                console.log('playing from Google Drive');
              } else {
                audio.src = URL.createObjectURL(blob);
              }

              _context.next = 11;
              return audio.play();

            case 11:
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](4);
              console.log(_context.t0.message);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 13]]);
    }));
    return _playSound.apply(this, arguments);
  }

  var compareText = function compareText(e) {
    var color = e.target.style.color;
    var text = e.target.value;
    var l = e.target.value.length;
    var item = items[currentItem];

    if (item.sentence.startsWith(text)) {
      setRevealedSentence(text + item.mask.slice(l));
      if (color === 'red' || 'green') e.target.style.color = 'black';

      if (item.sentence.length === l) {
        e.target.style.color = 'green';
        setSentenceVisibility(true);
      }
    } else {
      e.target.style.color = 'red';
    }
  };

  var toggleVisibility = function toggleVisibility() {
    // prevent toggling visibility while other item is being downloaded
    if (!loading) {
      setSentenceVisibility(!sentenceVisibility); // hide or show a proverb/grammar sentence

      setRevealedSentence(items[currentItem].mask); // reset revealedSentence to be fully hidden
    }
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "WorkingArea"
  }, /*#__PURE__*/react_default.a.createElement("h5", {
    style: {
      visibility: online ? 'hidden' : 'visible'
    }
  }, "You are currently offline. Please check your internet connection."), /*#__PURE__*/react_default.a.createElement("div", {
    className: "WorkingArea-show"
  }, /*#__PURE__*/react_default.a.createElement("p", {
    ref: pRef
  }, currentItem > -1 && (sentenceVisibility ? items[currentItem].sentence : revealedSentence)), /*#__PURE__*/react_default.a.createElement("textarea", {
    onChange: compareText,
    ref: taRef,
    style: {
      visibility: description ? 'hidden' : 'visible'
    },
    placeholder: "Type it here"
  }), context == 'grammar' && /*#__PURE__*/react_default.a.createElement("p", {
    style: {
      visibility: description ? 'visible' : 'hidden'
    }
  }, currentItem == -1 ? '' : items[currentItem].description), context == 'grammar' && currentItem > -1 && /*#__PURE__*/react_default.a.createElement("button", {
    onClick: function onClick() {
      return setDescription(!description);
    }
  }, description ? /*#__PURE__*/react_default.a.createElement("i", {
    className: "fas fa-keyboard"
  }) : /*#__PURE__*/react_default.a.createElement("i", {
    className: "fas fa-info-circle"
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "WorkingArea-navigation"
  }, /*#__PURE__*/react_default.a.createElement(components_Button, {
    onClickMe: function onClickMe() {
      return getNext();
    },
    disabled: online ? false : true
  }, "Next ", /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("i", {
    className: "fas fa-chevron-circle-right"
  })), /*#__PURE__*/react_default.a.createElement(components_Button, {
    onClickMe: function onClickMe() {
      return playSound();
    },
    disabled: currentItem < 0 ? true : false
  }, "Play ", /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("i", {
    className: "fas fa-volume-up"
  })), /*#__PURE__*/react_default.a.createElement(components_Button, {
    onClickMe: function onClickMe() {
      return toggleVisibility();
    },
    disabled: currentItem < 0 ? true : false
  }, sentenceVisibility ? 'Hide' : 'Show', " ", /*#__PURE__*/react_default.a.createElement("br", null), sentenceVisibility ? /*#__PURE__*/react_default.a.createElement("i", {
    className: "fas fa-eye-slash"
  }) : /*#__PURE__*/react_default.a.createElement("i", {
    className: "fas fa-eye"
  })), /*#__PURE__*/react_default.a.createElement(components_Button, {
    onClickMe: function onClickMe() {
      return getPrevious();
    },
    disabled: currentItem <= 0 ? true : false
  }, "Previous ", /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("i", {
    className: "fas fa-chevron-circle-left"
  }))));
};

/* harmony default export */ var components_WorkingArea = (WorkingArea_WorkingArea);
// CONCATENATED MODULE: ./app/assets/scripts/components/Grammar.js




var Grammar_Grammar = function Grammar(_ref) {
  var items = _ref.items,
      generate = _ref.generate,
      online = _ref.online,
      audio = _ref.audio;
  return /*#__PURE__*/react_default.a.createElement(PageLayout, null, /*#__PURE__*/react_default.a.createElement(components_WorkingArea, {
    items: items,
    generate: generate,
    context: "grammar",
    online: online,
    audio: audio
  }));
};

/* harmony default export */ var components_Grammar = (Grammar_Grammar);
// CONCATENATED MODULE: ./app/assets/scripts/components/Proverbs.js




var Proverbs_Proverbs = function Proverbs(_ref) {
  var items = _ref.items,
      generate = _ref.generate,
      online = _ref.online,
      audio = _ref.audio;
  return /*#__PURE__*/react_default.a.createElement(PageLayout, null, /*#__PURE__*/react_default.a.createElement(components_WorkingArea, {
    items: items,
    generate: generate,
    context: "proverb",
    online: online,
    audio: audio
  }));
};

/* harmony default export */ var components_Proverbs = (Proverbs_Proverbs);
// CONCATENATED MODULE: ./app/assets/scripts/components/Footer.css
// extracted by mini-css-extract-plugin

// CONCATENATED MODULE: ./app/assets/scripts/components/Footer.js




var Footer_Footer = function Footer() {
  return /*#__PURE__*/react_default.a.createElement("footer", {
    className: "Footer"
  }, /*#__PURE__*/react_default.a.createElement("p", null, "Created with \u2665 by ", /*#__PURE__*/react_default.a.createElement("a", {
    href: "https://github.com/loony81"
  }, "Roman Nazarenko ", /*#__PURE__*/react_default.a.createElement("i", {
    className: "fab fa-github-alt"
  }))));
};

/* harmony default export */ var components_Footer = (Footer_Footer);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(12);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(7);
var runtime_default = /*#__PURE__*/__webpack_require__.n(runtime);

// CONCATENATED MODULE: ./app/assets/scripts/App.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || App_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return App_arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = App_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function App_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function App_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { App_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { App_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function App_slicedToArray(arr, i) { return App_arrayWithHoles(arr) || App_iterableToArrayLimit(arr, i) || App_unsupportedIterableToArray(arr, i) || App_nonIterableRest(); }

function App_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function App_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return App_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return App_arrayLikeToArray(o, minLen); }

function App_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function App_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function App_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// For a css automated workflow we need to bundle our css files into our main javascript file
// my own styles
 // import React related modules



 // import components






 //import other modules



 // for hot module replacement

if (false) {}

var App_App = function App() {
  //state
  var _useState = Object(react["useState"])([]),
      _useState2 = App_slicedToArray(_useState, 2),
      grammarItems = _useState2[0],
      setGrammarItems = _useState2[1];

  var _useState3 = Object(react["useState"])([]),
      _useState4 = App_slicedToArray(_useState3, 2),
      proverbs = _useState4[0],
      setProverbs = _useState4[1];

  var _useState5 = Object(react["useState"])(true),
      _useState6 = App_slicedToArray(_useState5, 2),
      online = _useState6[0],
      setOnline = _useState6[1]; // a flag to check if a user is currently online of offline


  var _useState7 = Object(react["useState"])(new Audio()),
      _useState8 = App_slicedToArray(_useState7, 2),
      audio = _useState8[0],
      setAudio = _useState8[1];

  audio.volume = 1; // this url is to check internet connection during development, for production change it to origin
  // const url = new URL('https://ipv4.icanhazip.com')

  var url = new URL(window.location.origin);
  var interval;
  Object(react["useEffect"])(function () {
    window.addEventListener('offline', /*#__PURE__*/function () {
      var _ref = App_asyncToGenerator( /*#__PURE__*/runtime_default.a.mark(function _callee(e) {
        var result;
        return runtime_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return checkInternetConnection();

              case 2:
                result = _context.sent;

                if (!result && online) {
                  setOnline(false);
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), false);
    window.addEventListener('online', /*#__PURE__*/function () {
      var _ref2 = App_asyncToGenerator( /*#__PURE__*/runtime_default.a.mark(function _callee2(e) {
        var result;
        return runtime_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return checkInternetConnection();

              case 2:
                result = _context2.sent;

                if (result) {
                  setOnline(true);
                }

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }(), false);
  }, []);
  Object(react["useEffect"])(function () {
    if (!online) {
      interval = setInterval( /*#__PURE__*/App_asyncToGenerator( /*#__PURE__*/runtime_default.a.mark(function _callee3() {
        var result;
        return runtime_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return checkInternetConnection();

              case 2:
                result = _context3.sent;
                console.log(result);

                if (result) {
                  setOnline(true);
                  clearInterval(interval);
                }

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      })), 5000);
    }
  }, [online]);

  var checkInternetConnection = /*#__PURE__*/function () {
    var _ref4 = App_asyncToGenerator( /*#__PURE__*/runtime_default.a.mark(function _callee4() {
      return runtime_default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              // random value to prevent cached responses
              url.searchParams.set('rand', Date.now());
              _context4.prev = 1;
              _context4.next = 4;
              return axios_default.a.head(url.toString());

            case 4:
              console.log('Connection to the Internet restored.');
              return _context4.abrupt("return", true);

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](1);
              console.log('Trying to reconnect...');
              return _context4.abrupt("return", false);

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 8]]);
    }));

    return function checkInternetConnection() {
      return _ref4.apply(this, arguments);
    };
  }(); //this function creates a mask for a proverb or grammar sentence 
  // (special characters and spaces won't be masked)


  var createMask = function createMask(str) {
    var mask = '';

    var _iterator = _createForOfIteratorHelper(str),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _char = _step.value;

        if (_char.match(/[0-9.,':;()!?\s-]/)) {
          mask += _char;
        } else {
          _char.match(/[A-Z]/) ? mask += 'X' : mask += 'x';
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return mask;
  }; // due to the CORS issue we can't download audio files directly from Google Drive,
  // so instead we make a request to our own server and make it download the audio file from Google Drive
  // and send it back to us
  // 26.01.2021 note: after adding the helmet package on the server side, it is now possible to load audio directly from Google Drive


  var getAudio = function getAudio(url) {
    return axios_default.a.post('/audio', {
      url: url
    }, {
      responseType: 'blob'
    });
  }; //this function makes a request to the server, 
  // gets a new proverb or grammar sentence and saves it in state


  function generate(_x3) {
    return _generate.apply(this, arguments);
  }

  function _generate() {
    _generate = App_asyncToGenerator( /*#__PURE__*/runtime_default.a.mark(function _callee5(context) {
      var item, _item$data, audioFileUrl, audioFileName, audioFileAlreadyInDB, audioFile, newGrammarItems, newProverbs;

      return runtime_default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return axios_default.a.get('/get' + context);

            case 3:
              item = _context5.sent;
              _item$data = item.data, audioFileUrl = _item$data.audioFileUrl, audioFileName = _item$data.audioFileName;
              audioFileName = context + '/' + audioFileName; //add a prefix to a name to prevent name collisions inside indexedDB

              item.data.audioFileName = audioFileName; //check if there is alreay an audio file with this name in indexedDB

              _context5.next = 9;
              return localforage_default.a.getItem(audioFileName);

            case 9:
              audioFileAlreadyInDB = _context5.sent;
              console.log(audioFileUrl || 'there\'s no audio for this item yet'); // if there is no such file, download it from Google Drive and save it to db

              if (!(audioFileUrl && !audioFileAlreadyInDB)) {
                _context5.next = 19;
                break;
              }

              _context5.next = 14;
              return getAudio(audioFileUrl);

            case 14:
              audioFile = _context5.sent;

              if (audioFile) {
                _context5.next = 17;
                break;
              }

              return _context5.abrupt("return");

            case 17:
              _context5.next = 19;
              return localforage_default.a.setItem(audioFileName, audioFile.data);

            case 19:
              //create a mask to hide the sentence, add it to the item as one of the properties
              //could've added it on the serverside but there's no need to transfer extra data 
              item.data.mask = createMask(item.data.sentence);

              if (context == 'grammar') {
                newGrammarItems = [].concat(_toConsumableArray(grammarItems), [item.data]);
                setGrammarItems(newGrammarItems);
              }

              if (context == 'proverb') {
                newProverbs = [].concat(_toConsumableArray(proverbs), [item.data]);
                setProverbs(newProverbs);
              }

              _context5.next = 28;
              break;

            case 24:
              _context5.prev = 24;
              _context5.t0 = _context5["catch"](0);
              console.log('Something wrong inside generate(): ' + _context5.t0.message);
              if (_context5.t0.isAxiosError) setOnline(false);

            case 28:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 24]]);
    }));
    return _generate.apply(this, arguments);
  }

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(react_router_dom["a" /* BrowserRouter */], null, /*#__PURE__*/react_default.a.createElement(components_Navbar, {
    audio: audio,
    online: online
  }), /*#__PURE__*/react_default.a.createElement(react_router["c" /* Switch */], null, /*#__PURE__*/react_default.a.createElement(react_router["a" /* Route */], {
    path: "/",
    exact: true
  }, /*#__PURE__*/react_default.a.createElement(components_Home, null)), /*#__PURE__*/react_default.a.createElement(react_router["a" /* Route */], {
    path: "/grammar"
  }, /*#__PURE__*/react_default.a.createElement(components_Grammar, {
    generate: generate,
    items: grammarItems,
    online: online,
    audio: audio
  })), /*#__PURE__*/react_default.a.createElement(react_router["a" /* Route */], {
    path: "/proverbs"
  }, /*#__PURE__*/react_default.a.createElement(components_Proverbs, {
    generate: generate,
    items: proverbs,
    online: online,
    audio: audio
  })), /*#__PURE__*/react_default.a.createElement(react_router["a" /* Route */], {
    path: "/about"
  }, /*#__PURE__*/react_default.a.createElement(components_About, null))), /*#__PURE__*/react_default.a.createElement(components_Footer, null)));
};

react_dom_default.a.render( /*#__PURE__*/react_default.a.createElement(App_App, null), document.querySelector('#root'));

/***/ })

/******/ });