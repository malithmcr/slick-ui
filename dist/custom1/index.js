(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["custom1"] = factory(require("react"));
	else
		root["custom1"] = factory(root["react"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/custom1/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core/TextBody.tsx":
/*!*******************************!*\
  !*** ./src/core/TextBody.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar TextBody = function (_a) {\n    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.color, color = _c === void 0 ? 'blue' : _c, _d = _a.value, value = _d === void 0 ? 'Hello' : _d;\n    var style = {\n        color: color,\n    };\n    return (react_1[\"default\"].createElement(\"p\", { style: style, className: className }, value));\n};\nexports[\"default\"] = TextBody;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY29yZS9UZXh0Qm9keS50c3g/NWQwMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlFQUF5QjtBQWlCekIsSUFBTSxRQUFRLEdBQXlCLFVBQUMsRUFJeEI7UUFIZCxpQkFBWSxFQUFaLFNBQVMsbUJBQUMsRUFBRSxPQUNaLGFBQVksRUFBWixLQUFLLG1CQUFDLE1BQU0sT0FDWixhQUFhLEVBQWIsS0FBSyxtQkFBQyxPQUFPO0lBRWIsSUFBTSxLQUFLLEdBQUc7UUFDWixLQUFLO0tBQ047SUFDRCxPQUFPLENBQ0wsd0NBQUcsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxJQUNsQyxLQUFLLENBQ0osQ0FDTCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBR0YscUJBQWUsUUFBUSIsImZpbGUiOiIuL3NyYy9jb3JlL1RleHRCb2R5LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW50ZXJmYWNlIFRleHRCb2R5UHJvcHMge1xuICAvKipcbiAgICogdmFsdWVcbiAgICovXG4gIHZhbHVlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBDbGFzcyBuYW1lXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBDb2xvclxuICAgKi9cbiAgY29sb3I/OiBzdHJpbmc7XG59XG5cbmNvbnN0IFRleHRCb2R5OlJlYWN0LkZDPFRleHRCb2R5UHJvcHM+PSh7XG4gIGNsYXNzTmFtZT0nJyxcbiAgY29sb3I9J2JsdWUnLFxuICB2YWx1ZT0nSGVsbG8nLFxufTogVGV4dEJvZHlQcm9wcyk9PntcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgY29sb3IsXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8cCBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIHt2YWx1ZX1cbiAgICA8L3A+XG4gICk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFRleHRCb2R5XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/core/TextBody.tsx\n");

/***/ }),

/***/ "./src/custom1/TextBody.tsx":
/*!**********************************!*\
  !*** ./src/custom1/TextBody.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar TextBody_1 = __importDefault(__webpack_require__(/*! ../core/TextBody */ \"./src/core/TextBody.tsx\"));\nvar TextBody = function (_a) {\n    var _b = _a.className, className = _b === void 0 ? 'custom-1' : _b, _c = _a.color, color = _c === void 0 ? 'red' : _c, _d = _a.value, value = _d === void 0 ? 'Overrided' : _d;\n    return (react_1[\"default\"].createElement(TextBody_1[\"default\"], __assign({}, { color: color, className: className, value: value })));\n};\nexports[\"default\"] = TextBody;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY3VzdG9tMS9UZXh0Qm9keS50c3g/YmFhNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUVBQXlCO0FBQ3pCLHlHQUFtQztBQWlCbkMsSUFBTSxRQUFRLEdBQXlCLFVBQUMsRUFJeEI7UUFIZCxpQkFBb0IsRUFBcEIsU0FBUyxtQkFBQyxVQUFVLE9BQ3BCLGFBQVcsRUFBWCxLQUFLLG1CQUFDLEtBQUssT0FDWCxhQUFpQixFQUFqQixLQUFLLG1CQUFDLFdBQVc7SUFFakIsT0FBTyxDQUNMLGlDQUFDLHFCQUFJLGVBQUssRUFBQyxLQUFLLFNBQUUsU0FBUyxhQUFFLEtBQUssU0FBQyxFQUFHLENBQ3ZDLENBQUM7QUFDSixDQUFDLENBQUM7QUFHRixxQkFBZSxRQUFRIiwiZmlsZSI6Ii4vc3JjL2N1c3RvbTEvVGV4dEJvZHkudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9UZXh0Qm9keSdcblxuaW50ZXJmYWNlIFRleHRCb2R5UHJvcHMge1xuICAvKipcbiAgICogdmFsdWVcbiAgICovXG4gIHZhbHVlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBDbGFzcyBuYW1lXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBDb2xvclxuICAgKi9cbiAgY29sb3I/OiBzdHJpbmc7XG59XG5cbmNvbnN0IFRleHRCb2R5OlJlYWN0LkZDPFRleHRCb2R5UHJvcHM+PSh7XG4gIGNsYXNzTmFtZT0nY3VzdG9tLTEnLFxuICBjb2xvcj0ncmVkJyxcbiAgdmFsdWU9J092ZXJyaWRlZCcsXG59OiBUZXh0Qm9keVByb3BzKT0+e1xuICByZXR1cm4gKFxuICAgIDxCYXNlIHsuLi57Y29sb3IsIGNsYXNzTmFtZSAsdmFsdWV9fS8+XG4gICk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFRleHRCb2R5XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/custom1/TextBody.tsx\n");

/***/ }),

/***/ "./src/custom1/index.less":
/*!********************************!*\
  !*** ./src/custom1/index.less ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY3VzdG9tMS9pbmRleC5sZXNzP2Y1NzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9zcmMvY3VzdG9tMS9pbmRleC5sZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/custom1/index.less\n");

/***/ }),

/***/ "./src/custom1/index.ts":
/*!******************************!*\
  !*** ./src/custom1/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nexports.__esModule = true;\nexports.TextBody = void 0;\n__webpack_require__(/*! ./index.less */ \"./src/custom1/index.less\");\nvar TextBody_1 = __webpack_require__(/*! ./TextBody */ \"./src/custom1/TextBody.tsx\");\n__createBinding(exports, TextBody_1, \"default\", \"TextBody\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY3VzdG9tMS9pbmRleC50cz8wNzQzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxvRUFBcUI7QUFFckIscUZBQWdEO0FBQXZDLDREQUFtQiIsImZpbGUiOiIuL3NyYy9jdXN0b20xL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2luZGV4Lmxlc3MnXG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGV4dEJvZHkgfSBmcm9tICcuL1RleHRCb2R5J1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/custom1/index.ts\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });
});