/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_renderForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/renderForm */ "./src/modules/renderForm.js");
/* harmony import */ var _modules_searchCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/searchCode */ "./src/modules/searchCode.js");
/* harmony import */ var _modules_searchList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/searchList */ "./src/modules/searchList.js");
/* harmony import */ var _modules_clearHistory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/clearHistory */ "./src/modules/clearHistory.js");




(0,_modules_renderForm__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_searchCode__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_searchList__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modules_clearHistory__WEBPACK_IMPORTED_MODULE_3__["default"])();

/***/ }),

/***/ "./src/modules/ajaxServer.js":
/*!***********************************!*\
  !*** ./src/modules/ajaxServer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ajaxService = function ajaxService(term) {
  var url = "https://api.postit.lt/?term=";
  var key = "D3o4WwvUMNZwmu5r1w1s";
  return fetch("".concat(url).concat(term, "&key=").concat(key)).then(function (response) {
    return response.json();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ajaxService);

/***/ }),

/***/ "./src/modules/clearHistory.js":
/*!*************************************!*\
  !*** ./src/modules/clearHistory.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var clearHistory = function clearHistory() {
  document.querySelector('#clearHistory').addEventListener('click', function () {
    document.querySelector('.List-group').remove();
    var ul = document.createElement('ul');
    ul.className = "List-group";
    document.querySelector('section .card-body').appendChild(ul);
    localStorage.clear();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearHistory);

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var form = function form() {
  return "<div class=\"form-group mb-2\">\n                 <input type=\"text\"  class=\"form-control term\" list=\"datalistOptions\" placeholder=\"Adresas\" autocomplete=\"off\"/ >\n\n                         \n                 \n                 \n                 \n                 \n                 <datalist id=\"datalistOptions\">\n                 \n                 </datalist>                                 \n            </div>\n          <div class=\"form-group mx-sm-3 mb-2\">\n                <input type=\"text\" class=\"form-control result\" readonly >\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary mb-2\">Ie\u0161koti kodo</button>\n          <button type=\"reset\" class=\"btn btn-secondary mb-2 history\">Paie\u0161kos istorija</button>\n          <button type=\"reset\" class=\"btn btn-secondary mb-2 \" id=\"clearHistory\">I\u0161valyti istorija</button>                     \n                \n";
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./src/modules/renderForm.js":
/*!***********************************!*\
  !*** ./src/modules/renderForm.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./src/modules/form.js");


var renderForm = function renderForm() {
  var formElement = document.createElement('form');
  formElement.className = 'form-inline';
  formElement.innerHTML = (0,_form__WEBPACK_IMPORTED_MODULE_0__["default"])();
  document.querySelector('main .card-body').appendChild(formElement);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderForm);

/***/ }),

/***/ "./src/modules/searchCode.js":
/*!***********************************!*\
  !*** ./src/modules/searchCode.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ajaxServer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajaxServer */ "./src/modules/ajaxServer.js");
/* harmony import */ var _storeSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storeSearch */ "./src/modules/storeSearch.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var searchCode = function searchCode() {
  // document.querySelector('form').addEventListener('submit', (event) => {
  //     event.preventDefault();
  //     const searchTerm = document.querySelector('.term').value;
  //     let searchResponse;
  //     const input = document.querySelector('.term');
  //     console.log(input);
  //     ajaxService(searchTerm)
  //         .then(result => searchResponse = result)
  //         .then(() => console.log(searchResponse))
  //         .then(() => {
  //             if (searchResponse.total === 1) {
  //                 document.querySelector('.result').value = searchResponse.data[0].post_code
  //                 storeSearch(searchResponse.data[0].post_code, searchResponse.data[0])
  //             } else {
  //                 document.querySelector('main').innerHTML += "<p>Klaida</p>"
  //             }
  //             //.then(result =>document.querySelector('.result').value=result.data[0].post_code)
  //         })
  // })
  var searchResponse;
  var input = document.querySelector('.term');
  var timeoutId;

  var onInput = function onInput(event) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(function () {
      (0,_ajaxServer__WEBPACK_IMPORTED_MODULE_0__["default"])(event.target.value).then(function (result) {
        return searchResponse = result;
      }).then(function () {
        return console.log('search respons', searchResponse.data);
      }).then(function () {
        if (searchResponse.total >= 1) {
          var addressList = searchResponse.data;

          if (addressList.length > 1) {
            var _iterator = _createForOfIteratorHelper(addressList),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var address = _step.value;
                // const li = document.createElement('li');
                // li.className="list-group-item";
                // li.innerText = `${address.address},${address.city}                             `
                // document.querySelector('.dropdown-content').appendChild(li);
                var option = document.createElement('option');
                option.value = "".concat(address.address, " ").concat(address.city, " ");
                document.querySelector('#datalistOptions').appendChild(option);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          } else {
            document.querySelector('.result').value = searchResponse.data[0].post_code;
            (0,_storeSearch__WEBPACK_IMPORTED_MODULE_1__["default"])(searchResponse.data[0].post_code, searchResponse.data[0]);
          }
        } else {
          document.querySelector('main').innerHTML += "<p>Klaida</p>";
        } //.then(result =>document.querySelector('.result').value=result.data[0].post_code)

      });
    }, 1000);
  };

  input.addEventListener('input', onInput);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchCode);

/***/ }),

/***/ "./src/modules/searchList.js":
/*!***********************************!*\
  !*** ./src/modules/searchList.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var searchList = function searchList() {
  document.querySelector('.history').addEventListener('click', function () {
    console.log(localStorage);

    for (var key in localStorage) {
      console.log('key', localStorage.getItem(key));

      if (localStorage.getItem(key) !== null) {
        var result = JSON.parse(localStorage.getItem(key)); // console.log(result);

        var li = document.createElement('li');
        li.className = "List-goup-item";
        li.textContent = "Adresas: ".concat(result.address, ". Pasto kodas: ").concat(result.post_code);
        document.querySelector('ul').appendChild(li);
      }
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchList);

/***/ }),

/***/ "./src/modules/storeSearch.js":
/*!************************************!*\
  !*** ./src/modules/storeSearch.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var storeSearch = function storeSearch(id, data) {
  localStorage.setItem(id, JSON.stringify(data));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storeSearch);

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklaravel_mix"] = self["webpackChunklaravel_mix"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/scss/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;