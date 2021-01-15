/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/tabsy-css/src/tabsy.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/tabsy-css/src/tabsy.scss ***!
  \****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@-webkit-keyframes showTab {\\n  from {\\n    opacity: 0;\\n    transform: translateY(10px);\\n  }\\n  to {\\n    opacity: 1;\\n    transform: translateY(0);\\n  }\\n}\\n@keyframes showTab {\\n  from {\\n    opacity: 0;\\n    transform: translateY(10px);\\n  }\\n  to {\\n    opacity: 1;\\n    transform: translateY(0);\\n  }\\n}\\n.tabsy > button {\\n  width: 100%;\\n  font-family: inherit;\\n  font-size: 100%;\\n  margin: 0;\\n  outline: 0;\\n  border: 0;\\n  vertical-align: baseline;\\n  box-sizing: border-box;\\n  background: transparent;\\n}\\n.tabsy > .tabButton {\\n  display: block;\\n  margin-top: 1px;\\n  background: #5a5243;\\n  color: #F5F5F5;\\n  text-align: center;\\n  transition: all 200ms ease-in-out;\\n}\\n.tabsy > input {\\n  display: none;\\n}\\n.tabsy > input:checked + label + .tab {\\n  display: block;\\n}\\n.tabsy > input:checked + label + .tab > .content {\\n  -webkit-animation: showTab 200ms ease-in-out;\\n  animation: showTab 200ms ease-in-out;\\n}\\n.tabsy > .tab {\\n  background: #fff;\\n  display: none;\\n}\\n@media screen and (min-width: 768px) {\\n  .tabsy {\\n    display: flex;\\n    flex-wrap: wrap;\\n  }\\n  .tabsy > .tabButton {\\n    order: 1;\\n    align-items: flex-start;\\n    cursor: pointer;\\n  }\\n  .tabsy > input:checked + label {\\n    background: #fff;\\n    color: #5a5243;\\n  }\\n  .tabsy > .tab {\\n    order: 2;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tod-restaurant-page/./node_modules/tabsy-css/src/tabsy.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html, body, div, span, applet, object,\\niframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym,\\naddress, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small,\\nstrike, sub, sup, tt, var, center, dl, dt, dd, ol, ul, li, fieldset, form,\\nlabel, legend, table, caption, tbody, tfoot, thead, tr, th, td, article,\\naside, canvas, details, embed, figure, figcaption, footer, header,\\nhgroup, menu, nav, output, ruby, section, summary, time, mark, audio,\\nvideo {\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n}\\n\\nbody {\\n  font-size: 1em;\\n  background: #F5F5F5;\\n  font-family: \\\"Dosis\\\", sans-serif;\\n  color: #565659;\\n  background-color: #f6f3ee;\\n}\\n\\nmain {\\n  display: block;\\n  margin: 80px auto;\\n  padding: 0 20px;\\n  text-align: center;\\n}\\n\\nh1 {\\n  font-size: 70px;\\n  font-family: \\\"Fredoka One\\\", cursive;\\n  text-align: center;\\n  color: #5a5243;\\n}\\n\\nh1 sup {\\n  font-size: 14px;\\n  margin-left: -20px;\\n  display: inline-block;\\n  line-height: 1;\\n}\\n\\nh2 {\\n  font-size: 22px;\\n  text-align: center;\\n  margin: -7px 0 80px 0;\\n  padding: 5px 5px 6px 5px;\\n  display: inline-block;\\n  line-height: 30px;\\n  border-bottom: 1px solid #5a5243;\\n  border-top: 1px solid #5a5243;\\n}\\n\\n.tabButton {\\n  font-size: 15px;\\n  font-weight: bold;\\n  padding: 15px 20px;\\n}\\n\\n.tab {\\n  padding: 20px;\\n  text-align: left;\\n}\\n\\nh3 {\\n  font-size: 20px;\\n  font-weight: bold;\\n}\\n\\np {\\n  font-size: 15px;\\n  margin-top: 10px;\\n}\\n\\n.list {\\n  margin: 10px 0 20px 20px;\\n}\\n\\n.list > li {\\n  font-size: 15px;\\n}\\n\\n.home-item-grid-container {\\n  margin-top: 20px;\\n  display: grid;\\n  grid-template-columns: auto 250px;\\n  grid-row-gap: 20px;\\n}\\n\\n.home-item-grid-container > div:nth-child(2) {\\n  justify-self: right;\\n}\\n\\n.home-item-image {\\n  width: 200px;\\n  height: auto;\\n  border-radius: 10px;\\n  filter: drop-shadow(8px 8px 10px gray) brightness(120%);\\n  margin-top: 15px;\\n}\\n\\n.menu-item-grid-container {\\n  margin-top: 20px;\\n  display: grid;\\n  grid-template-columns: 300px auto;\\n  grid-row-gap: 20px;\\n}\\n\\n.menu-item-image {\\n  width: 200px;\\n  height: auto;\\n  border-radius: 10px;\\n  filter: sepia(70%) drop-shadow(8px 8px 10px gray) brightness(120%);\\n}\\n\\n@media screen and (min-width: 768px) {\\n  main {\\n    width: 700px;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tod-restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://tod-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/assets/burger.jpg":
/*!*******************************!*\
  !*** ./src/assets/burger.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/b95590102548daafafb8141a78a8f505.jpg\");\n\n//# sourceURL=webpack://tod-restaurant-page/./src/assets/burger.jpg?");

/***/ }),

/***/ "./src/assets/hogsmeade.jpg":
/*!**********************************!*\
  !*** ./src/assets/hogsmeade.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/60c609fafe74597ab6ab1ef6cd7ac7c9.jpg\");\n\n//# sourceURL=webpack://tod-restaurant-page/./src/assets/hogsmeade.jpg?");

/***/ }),

/***/ "./src/assets/pizza.jpg":
/*!******************************!*\
  !*** ./src/assets/pizza.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/c4bd8055182a1c3f4c472352c2826500.jpg\");\n\n//# sourceURL=webpack://tod-restaurant-page/./src/assets/pizza.jpg?");

/***/ }),

/***/ "./src/assets/wok.jpg":
/*!****************************!*\
  !*** ./src/assets/wok.jpg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/8aacb682b4f044aba637b71dd9626436.jpg\");\n\n//# sourceURL=webpack://tod-restaurant-page/./src/assets/wok.jpg?");

/***/ }),

/***/ "./node_modules/tabsy-css/src/tabsy.scss":
/*!***********************************************!*\
  !*** ./node_modules/tabsy-css/src/tabsy.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_loader_dist_cjs_js_sass_loader_dist_cjs_js_tabsy_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!../../sass-loader/dist/cjs.js!./tabsy.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/tabsy-css/src/tabsy.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_sass_loader_dist_cjs_js_tabsy_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_sass_loader_dist_cjs_js_tabsy_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://tod-restaurant-page/./node_modules/tabsy-css/src/tabsy.scss?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://tod-restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tod-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/Contact.js":
/*!************************!*\
  !*** ./src/Contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst Contact = () => {\n  return (`\n    <h3>Floo Network Ports</h3>\n    <p>Riddikulus levicorpus imperio reducio protego. Vow legilimens evanesco mobilicorpus portus evanesco protego momentum expecto stupefy serpensortia. Nox morsmordre reducio protego totalus engorgio apparate incarcerous:</p>\n    \n    <ul class=\"list\">\n      <li>Main lobby</li>\n      <li>Dining area</li>\n      <li>Upstairs lobby</li>\n    </ul>\n    \n    <h3>Address</h3>\n    <p>High Street 66, Hogsmeade</p>  \n  `);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);\n\n//# sourceURL=webpack://tod-restaurant-page/./src/Contact.js?");

/***/ }),

/***/ "./src/Heading.js":
/*!************************!*\
  !*** ./src/Heading.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst Heading = () => {\n  const container = document.getElementById('content');\n  console.log(container);\n  container.innerHTML = `\n    <h1>Wizardy Food</h1>\n    <h2>Simple and tasty food for all sorcerers and the sorceress</h2>  \n  `;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);\n\n//# sourceURL=webpack://tod-restaurant-page/./src/Heading.js?");

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _assets_hogsmeade_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/hogsmeade.jpg */ \"./src/assets/hogsmeade.jpg\");\n\n\nconst Home = () => {\n  return (`\n    <h3>About us</h3>\n\n    <div class=\"home-item-grid-container\">\n\n      <div class=\"home-grid-item\">\n        <p>Inflamarae aparecium mobilicorpus locomotor tarantallegra evanesco immobilus nox sonorus. Reducio wolfsbane oblivious lacarnum sonorus. Tarantallegra rictusempra orchideous immobilus incantato relashio engorgio incarcerous. Lumos serpensortia quietus tergeo rictusempra patronum patronum expecto engorgio. Evanesco serpensortia sonorus portus episkey stupefy alohomora totalus legilimens mortis.</p>\n        <p>Impedimenta serpensortia expelliarumus incarcerous prior aresto. Evanesco tarantallegra orchideous charm- fidelius sonorous mobilicorpus aresto inflamarae engorgio. Amortentia impedimenta point dissendium waddiwasi ennervate evanesco momentum inflamarae immobilus. Petrificus hover rictusempra avada lumos mortis.</p>\n      </div>\n\n      <div class=\"home-grid-item\">\n        <img src=\"${_assets_hogsmeade_jpg__WEBPACK_IMPORTED_MODULE_0__.default}\" class=\"home-item-image\" />\n      </div>\n\n    </div>  \n  `);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://tod-restaurant-page/./src/Home.js?");

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _assets_wok_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/wok.jpg */ \"./src/assets/wok.jpg\");\n/* harmony import */ var _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/pizza.jpg */ \"./src/assets/pizza.jpg\");\n/* harmony import */ var _assets_burger_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/burger.jpg */ \"./src/assets/burger.jpg\");\n\n\n\n\nconst Menu = () => {\n  return (`\n    <h3>Menu</h3>\n\n    <div class=\"menu-item-grid-container\">\n\n      <div class=\"\"menu-grid-item>\n        <img src=\"${_assets_wok_jpg__WEBPACK_IMPORTED_MODULE_0__.default}\" class=\"menu-item-image\" />\n      </div>\n      \n      <div class=\"\"menu-grid-item>\n        <h3>Whomping Willow Wok</h3>\n        <p>Amortentia impedimenta point dissendium waddiwasi ennervate evanesco momentum inflamarae immobilus.</p>\n        <p><strong>Price: 1 Sickles and 2 Knuts</strong></p>\n      </div>\n\n      <div class=\"\"menu-grid-item>\n        <img src=\"${_assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_1__.default}\" class=\"menu-item-image\" />\n      </div>\n\n      <div class=\"\"menu-grid-item>\n        <h3>Boggard Pizza</h3>\n        <p>Felix lacarnum quietus tarantallegra aparecium conjunctivitis totalus inflamarae evanesco momentum prior lumos tarantallegra mortis.</p>\n        <p><strong>Price: 2 Sickles and 3 Knuts</strong></p>\n      </div>\n\n      <div class=\"\"menu-grid-item>\n        <img src=\"${_assets_burger_jpg__WEBPACK_IMPORTED_MODULE_2__.default}\" class=\"menu-item-image\" />\n      </div>\n\n      <div class=\"\"menu-grid-item>\n        <h3>Dementor Burger</h3>\n        <p>Lacarnum expelliarumus mortis momentum lacarnum impedimenta reducio mobilicorpus serpensortia tarantallegra.</p>\n        <p><strong>Price: 3 Sickles</strong></p>\n      </div>\n\n    </div>  \n  `);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);\n\n//# sourceURL=webpack://tod-restaurant-page/./src/Menu.js?");

/***/ }),

/***/ "./src/TabsyMenu.js":
/*!**************************!*\
  !*** ./src/TabsyMenu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/Home.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contact */ \"./src/Contact.js\");\n/* harmony import */ var tabsy_css_src_tabsy_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tabsy-css/src/tabsy.scss */ \"./node_modules/tabsy-css/src/tabsy.scss\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\n\n\nconst TabsyMenu = () => {\n  const container = document.getElementById('content');\n  container.insertAdjacentHTML('beforeend', `  \n  <div class=\"tabsy\">\n\n      <input type=\"radio\" id=\"tab1\" name=\"tab\" checked>\n      <label class=\"tabButton\" for=\"tab1\">Home</label>\n      \n      <div class=\"tab\">\n        <div class=\"content\" id=\"home\">\n          ${(0,_Home__WEBPACK_IMPORTED_MODULE_0__.default)()}\n        </div>\n      </div>\n\n      <input type=\"radio\" id=\"tab2\" name=\"tab\">\n      <label class=\"tabButton\" for=\"tab2\">Menu</label>\n      \n      <div class=\"tab\">\n        <div class=\"content\" id=\"menu\">\n          ${(0,_Menu__WEBPACK_IMPORTED_MODULE_1__.default)()}\n        </div>\n      </div>\n\n      <input type=\"radio\" id=\"tab3\" name=\"tab\">\n      <label class=\"tabButton\" for=\"tab3\">Contact</label>\n      \n      <div class=\"tab\">\n        <div class=\"content\" id=\"contact\">\n          ${(0,_Contact__WEBPACK_IMPORTED_MODULE_2__.default)()}\n        </div>\n      </div>\n\n  </div>  \n  `);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabsyMenu);\n\n//# sourceURL=webpack://tod-restaurant-page/./src/TabsyMenu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Heading */ \"./src/Heading.js\");\n/* harmony import */ var _TabsyMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabsyMenu */ \"./src/TabsyMenu.js\");\n\n\n\n(0,_Heading__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_TabsyMenu__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n//# sourceURL=webpack://tod-restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;