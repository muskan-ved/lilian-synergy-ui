"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./src/config/apiConfig.ts":
/*!*********************************!*\
  !*** ./src/config/apiConfig.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   API: () => (/* binding */ API),\n/* harmony export */   BASE_DOMAIN_URL: () => (/* binding */ BASE_DOMAIN_URL),\n/* harmony export */   BASE_URL: () => (/* binding */ BASE_URL),\n/* harmony export */   locale: () => (/* binding */ locale)\n/* harmony export */ });\n/**\n * This module exports various configuration constants for the API used in the application.\n * \n * The `BASE_URL` and `BASE_DOMAIN_URL` constants are loaded from environment variables and represent the base URLs for the API and the application domain, respectively.\n * \n * The `locale` constant is also loaded from an environment variable and represents the default locale for the application.\n * \n * The `API` object contains various endpoints for different parts of the application, such as the home page, services, BM-P method, about us, contact us, and information pages. Each endpoint is constructed by combining the `BASE_URL` with a specific path.\n */ const BASE_URL = \"https://api-synergyxyz.mangoitsol.com\";\nconst BASE_DOMAIN_URL = \"http://localhost:3000\";\nconst locale = \"en\";\nconst API = {\n    // layout of application\n    websiteConfig: `${BASE_URL}/api/website-configuration`,\n    // home page\n    homeAPI: `${BASE_URL}/api/home-page`,\n    servicesAPI: `${BASE_URL}/api/services`,\n    ourExpertiseService: `${BASE_URL}/api/services-page`,\n    // bmap method page\n    bmapAPI: `${BASE_URL}/api/bm-p-method`,\n    // about us page\n    aboutUsAPI: `${BASE_URL}/api/about-us`,\n    // contact us page\n    contactUsAPI: `${BASE_URL}/api/contact-us`,\n    contactForm: `${BASE_URL}/api/contact-forms`,\n    //Info page\n    privacyPolicyAPI: `${BASE_URL}/api/privacy-and-policy`,\n    termsOfServiceAPI: `${BASE_URL}/api/terms-of-service`\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL2FwaUNvbmZpZy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O0NBUUMsR0FDTSxNQUFNQSxXQUFXQyx1Q0FBK0IsQ0FBQztBQUNqRCxNQUFNRyxrQkFBa0JILHVCQUFrQyxDQUFDO0FBQzNELE1BQU1LLFNBQVNMLElBQThCO0FBRTdDLE1BQU1PLE1BQU07SUFDakIsd0JBQXdCO0lBQ3hCQyxlQUFlLENBQUMsRUFBRVQsU0FBUywwQkFBMEIsQ0FBQztJQUV0RCxZQUFZO0lBQ1pVLFNBQVMsQ0FBQyxFQUFFVixTQUFTLGNBQWMsQ0FBQztJQUNwQ1csYUFBYSxDQUFDLEVBQUVYLFNBQVMsYUFBYSxDQUFDO0lBQ3ZDWSxxQkFBcUIsQ0FBQyxFQUFFWixTQUFTLGtCQUFrQixDQUFDO0lBRXBELG1CQUFtQjtJQUNuQmEsU0FBUyxDQUFDLEVBQUViLFNBQVMsZ0JBQWdCLENBQUM7SUFFdEMsZ0JBQWdCO0lBQ2hCYyxZQUFZLENBQUMsRUFBRWQsU0FBUyxhQUFhLENBQUM7SUFFdEMsa0JBQWtCO0lBQ2xCZSxjQUFjLENBQUMsRUFBRWYsU0FBUyxlQUFlLENBQUM7SUFDMUNnQixhQUFZLENBQUMsRUFBRWhCLFNBQVMsa0JBQWtCLENBQUM7SUFFM0MsV0FBVztJQUNYaUIsa0JBQWtCLENBQUMsRUFBRWpCLFNBQVMsdUJBQXVCLENBQUM7SUFDdERrQixtQkFBbUIsQ0FBQyxFQUFFbEIsU0FBUyxxQkFBcUIsQ0FBQztBQUN2RCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3luZXJneXh5ei13ZWIvLi9zcmMvY29uZmlnL2FwaUNvbmZpZy50cz9jNmZhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBtb2R1bGUgZXhwb3J0cyB2YXJpb3VzIGNvbmZpZ3VyYXRpb24gY29uc3RhbnRzIGZvciB0aGUgQVBJIHVzZWQgaW4gdGhlIGFwcGxpY2F0aW9uLlxuICogXG4gKiBUaGUgYEJBU0VfVVJMYCBhbmQgYEJBU0VfRE9NQUlOX1VSTGAgY29uc3RhbnRzIGFyZSBsb2FkZWQgZnJvbSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgYW5kIHJlcHJlc2VudCB0aGUgYmFzZSBVUkxzIGZvciB0aGUgQVBJIGFuZCB0aGUgYXBwbGljYXRpb24gZG9tYWluLCByZXNwZWN0aXZlbHkuXG4gKiBcbiAqIFRoZSBgbG9jYWxlYCBjb25zdGFudCBpcyBhbHNvIGxvYWRlZCBmcm9tIGFuIGVudmlyb25tZW50IHZhcmlhYmxlIGFuZCByZXByZXNlbnRzIHRoZSBkZWZhdWx0IGxvY2FsZSBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICogXG4gKiBUaGUgYEFQSWAgb2JqZWN0IGNvbnRhaW5zIHZhcmlvdXMgZW5kcG9pbnRzIGZvciBkaWZmZXJlbnQgcGFydHMgb2YgdGhlIGFwcGxpY2F0aW9uLCBzdWNoIGFzIHRoZSBob21lIHBhZ2UsIHNlcnZpY2VzLCBCTS1QIG1ldGhvZCwgYWJvdXQgdXMsIGNvbnRhY3QgdXMsIGFuZCBpbmZvcm1hdGlvbiBwYWdlcy4gRWFjaCBlbmRwb2ludCBpcyBjb25zdHJ1Y3RlZCBieSBjb21iaW5pbmcgdGhlIGBCQVNFX1VSTGAgd2l0aCBhIHNwZWNpZmljIHBhdGguXG4gKi9cbmV4cG9ydCBjb25zdCBCQVNFX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkw7XG5leHBvcnQgY29uc3QgQkFTRV9ET01BSU5fVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRE9NQUlOX1VSTDtcbmV4cG9ydCBjb25zdCBsb2NhbGUgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19MT0NBTEVcblxuZXhwb3J0IGNvbnN0IEFQSSA9IHtcbiAgLy8gbGF5b3V0IG9mIGFwcGxpY2F0aW9uXG4gIHdlYnNpdGVDb25maWc6IGAke0JBU0VfVVJMfS9hcGkvd2Vic2l0ZS1jb25maWd1cmF0aW9uYCxcblxuICAvLyBob21lIHBhZ2VcbiAgaG9tZUFQSTogYCR7QkFTRV9VUkx9L2FwaS9ob21lLXBhZ2VgLFxuICBzZXJ2aWNlc0FQSTogYCR7QkFTRV9VUkx9L2FwaS9zZXJ2aWNlc2AsXG4gIG91ckV4cGVydGlzZVNlcnZpY2U6IGAke0JBU0VfVVJMfS9hcGkvc2VydmljZXMtcGFnZWAsXG5cbiAgLy8gYm1hcCBtZXRob2QgcGFnZVxuICBibWFwQVBJOiBgJHtCQVNFX1VSTH0vYXBpL2JtLXAtbWV0aG9kYCxcblxuICAvLyBhYm91dCB1cyBwYWdlXG4gIGFib3V0VXNBUEk6IGAke0JBU0VfVVJMfS9hcGkvYWJvdXQtdXNgLFxuXG4gIC8vIGNvbnRhY3QgdXMgcGFnZVxuICBjb250YWN0VXNBUEk6IGAke0JBU0VfVVJMfS9hcGkvY29udGFjdC11c2AsXG4gIGNvbnRhY3RGb3JtOmAke0JBU0VfVVJMfS9hcGkvY29udGFjdC1mb3Jtc2AsXG5cbiAgLy9JbmZvIHBhZ2VcbiAgcHJpdmFjeVBvbGljeUFQSTogYCR7QkFTRV9VUkx9L2FwaS9wcml2YWN5LWFuZC1wb2xpY3lgLFxuICB0ZXJtc09mU2VydmljZUFQSTogYCR7QkFTRV9VUkx9L2FwaS90ZXJtcy1vZi1zZXJ2aWNlYCxcbn07XG4iXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsIkJBU0VfRE9NQUlOX1VSTCIsIk5FWFRfUFVCTElDX0RPTUFJTl9VUkwiLCJsb2NhbGUiLCJORVhUX1BVQkxJQ19MT0NBTEUiLCJBUEkiLCJ3ZWJzaXRlQ29uZmlnIiwiaG9tZUFQSSIsInNlcnZpY2VzQVBJIiwib3VyRXhwZXJ0aXNlU2VydmljZSIsImJtYXBBUEkiLCJhYm91dFVzQVBJIiwiY29udGFjdFVzQVBJIiwiY29udGFjdEZvcm0iLCJwcml2YWN5UG9saWN5QVBJIiwidGVybXNPZlNlcnZpY2VBUEkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config/apiConfig.ts\n");

/***/ }),

/***/ "./src/pages/_document.tsx":
/*!*********************************!*\
  !*** ./src/pages/_document.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Document)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/apiConfig */ \"./src/config/apiConfig.ts\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Document() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {\n        lang: _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__.locale,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    id: \"hotjar-script\",\n                    strategy: \"afterInteractive\",\n                    dangerouslySetInnerHTML: {\n                        __html: `\n              (function(h,o,t,j,a,r){\n                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\n                  h._hjSettings={hjid:${\"5104855\"},hjsv:6};\n                  a=o.getElementsByTagName('head')[0];\n                  r=o.createElement('script');r.defer=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\n                  a.appendChild(r);\n              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');\n            `\n                    },\n                    defer: true\n                }, void 0, false, {\n                    fileName: \"/home/muskan/Desktop/client_docs/lilian/synergyxyz-next/src/pages/_document.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/muskan/Desktop/client_docs/lilian/synergyxyz-next/src/pages/_document.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}, void 0, false, {\n                        fileName: \"/home/muskan/Desktop/client_docs/lilian/synergyxyz-next/src/pages/_document.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {}, void 0, false, {\n                        fileName: \"/home/muskan/Desktop/client_docs/lilian/synergyxyz-next/src/pages/_document.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/muskan/Desktop/client_docs/lilian/synergyxyz-next/src/pages/_document.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/muskan/Desktop/client_docs/lilian/synergyxyz-next/src/pages/_document.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2RvY3VtZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNEM7QUFDaUI7QUFDNUI7QUFFbEIsU0FBU007SUFDdEIscUJBQ0UsOERBQUNMLCtDQUFJQTtRQUFDTSxNQUFNUCxxREFBTUE7OzBCQUNoQiw4REFBQ0UsK0NBQUlBOzBCQUNILDRFQUFDRyxvREFBTUE7b0JBQ0xHLElBQUc7b0JBQ0hDLFVBQVM7b0JBQ1RDLHlCQUF5Qjt3QkFDdkJDLFFBQVEsQ0FBQzs7O3NDQUdpQixFQUFFQyxTQUFpQyxDQUFDOzs7OztZQUs5RCxDQUFDO29CQUNIO29CQUNBRyxLQUFLOzs7Ozs7Ozs7OzswQkFHVCw4REFBQ0M7O2tDQUNDLDhEQUFDYiwrQ0FBSUE7Ozs7O2tDQUNMLDhEQUFDQyxxREFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSW5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3luZXJneXh5ei13ZWIvLi9zcmMvcGFnZXMvX2RvY3VtZW50LnRzeD8xODhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvY2FsZSB9IGZyb20gXCJAL2NvbmZpZy9hcGlDb25maWdcIjtcbmltcG9ydCB7IEh0bWwsIEhlYWQsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tIFwibmV4dC9kb2N1bWVudFwiO1xuaW1wb3J0IFNjcmlwdCBmcm9tIFwibmV4dC9zY3JpcHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9jdW1lbnQoKSB7XG4gIHJldHVybiAoXG4gICAgPEh0bWwgbGFuZz17bG9jYWxlfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8U2NyaXB0XG4gICAgICAgICAgaWQ9XCJob3RqYXItc2NyaXB0XCJcbiAgICAgICAgICBzdHJhdGVneT1cImFmdGVySW50ZXJhY3RpdmVcIlxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICBfX2h0bWw6IGBcbiAgICAgICAgICAgICAgKGZ1bmN0aW9uKGgsbyx0LGosYSxyKXtcbiAgICAgICAgICAgICAgICAgIGguaGo9aC5oanx8ZnVuY3Rpb24oKXsoaC5oai5xPWguaGoucXx8W10pLnB1c2goYXJndW1lbnRzKX07XG4gICAgICAgICAgICAgICAgICBoLl9oalNldHRpbmdzPXtoamlkOiR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSE9USkFSX0lEfSxoanN2OjZ9O1xuICAgICAgICAgICAgICAgICAgYT1vLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgICAgICAgICAgICAgICByPW8uY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7ci5kZWZlcj0xO3Iuc3JjPXQraC5faGpTZXR0aW5ncy5oamlkK2oraC5faGpTZXR0aW5ncy5oanN2O1xuICAgICAgICAgICAgICAgICAgYS5hcHBlbmRDaGlsZChyKTtcbiAgICAgICAgICAgICAgfSkod2luZG93LGRvY3VtZW50LCdodHRwczovL3N0YXRpYy5ob3RqYXIuY29tL2MvaG90amFyLScsJy5qcz9zdj0nKTtcbiAgICAgICAgICAgIGAsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBkZWZlclxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxNYWluIC8+XG4gICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9IdG1sPlxuICApO1xufSJdLCJuYW1lcyI6WyJsb2NhbGUiLCJIdG1sIiwiSGVhZCIsIk1haW4iLCJOZXh0U2NyaXB0IiwiU2NyaXB0IiwiRG9jdW1lbnQiLCJsYW5nIiwiaWQiLCJzdHJhdGVneSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0hPVEpBUl9JRCIsImRlZmVyIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_document.tsx\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_document.tsx")));
module.exports = __webpack_exports__;

})();