/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/axios",{

/***/ "./pages/axios/index.js":
/*!******************************!*\
  !*** ./pages/axios/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AxiosPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_dongwonshin_Desktop_codecamp_class_node_modules_next_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError.js\");\n/* harmony import */ var _Users_dongwonshin_Desktop_codecamp_class_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_dongwonshin_Desktop_codecamp_class_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_dongwonshin_Desktop_codecamp_class_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_dongwonshin_Desktop_codecamp_class_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_axios_Axios_styles_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/axios/Axios.styles.js */ \"./styles/axios/Axios.styles.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/dongwonshin/Desktop/codecamp/class/pages/axios/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction AxiosPage() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),\n      data2 = _useState2[0],\n      setData2 = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),\n      next = _useState3[0],\n      setNext = _useState3[1]; // async function handleClickData() {}\n\n\n  var handleClickData = /*#__PURE__*/function () {\n    var _ref = (0,_Users_dongwonshin_Desktop_codecamp_class_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_Users_dongwonshin_Desktop_codecamp_class_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n      var aaa;\n      return _Users_dongwonshin_Desktop_codecamp_class_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_4___default().get('https://koreanjson.com/posts');\n\n            case 2:\n              aaa = _context.sent;\n              // 백엔드 요청  // response로 데이터 받아서 해당 API이름이 객체데이터로 변경됨\n              // console.log(aaa.data[0])\n              // console.log(bbb.data)\n              setData(aaa.data[0].title);\n              setData2(aaa.data[0].content);\n              setNext(aaa.data[0].id); // Promise는 비동기 처리를 다루기위해 사용되는 객체\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleClickData() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var OnClickNextData = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_dongwonshin_Desktop_codecamp_class_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_Users_dongwonshin_Desktop_codecamp_class_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {\n      var nextPage;\n      return _Users_dongwonshin_Desktop_codecamp_class_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"https://koreanjson.com/posts/\".concat(next + 1));\n\n            case 2:\n              nextPage = _context2.sent;\n\n              if (next < 200) {\n                setData(nextPage.data.title);\n                setData2(nextPage.data.content);\n                setNext(nextPage.data.id);\n              } else {\n                alert('마지막 페이지입니다.');\n              }\n\n            case 4:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function OnClickNextData() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var OnClickPreData = /*#__PURE__*/function () {\n    var _ref3 = (0,_Users_dongwonshin_Desktop_codecamp_class_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_Users_dongwonshin_Desktop_codecamp_class_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {\n      var nextPage;\n      return _Users_dongwonshin_Desktop_codecamp_class_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"https://koreanjson.com/posts/\".concat(next - 1));\n\n            case 2:\n              nextPage = _context3.sent;\n\n              if (!(next > 1)) {\n                _context3.next = 9;\n                break;\n              }\n\n              setData(nextPage.data.title);\n              setData2(nextPage.data.content);\n              setNext(nextPage.data.id);\n              _context3.next = 13;\n              break;\n\n            case 9:\n              (0,_Users_dongwonshin_Desktop_codecamp_class_node_modules_next_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__.default)(\"nextPage\");\n\n              _context3.next = 12;\n              return axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"https://koreanjson.com/posts/\".concat(next + 200));\n\n            case 12:\n              nextPage = _context3.sent;\n\n            case 13:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function OnClickPreData() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_axios_Axios_styles_js__WEBPACK_IMPORTED_MODULE_6__.Box, {\n      children: next\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_axios_Axios_styles_js__WEBPACK_IMPORTED_MODULE_6__.Box, {\n      children: data\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_axios_Axios_styles_js__WEBPACK_IMPORTED_MODULE_6__.Box, {\n      children: data2\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      onClick: OnClickPreData,\n      children: \"\\uC774\\uC804\\uD398\\uC774\\uC9C0\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      onClick: handleClickData,\n      children: \"\\uB370\\uC774\\uD130 \\uBD88\\uB7EC\\uC624\\uAE30\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      onClick: OnClickNextData,\n      children: \"\\uB2E4\\uC74C\\uD398\\uC774\\uC9C0\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(AxiosPage, \"pxQfWxW4D70EdBh/l9H/KIl6FLU=\");\n\n_c = AxiosPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"AxiosPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXhpb3MvaW5kZXguanM/YmFkZiJdLCJuYW1lcyI6WyJBeGlvc1BhZ2UiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwiZGF0YTIiLCJzZXREYXRhMiIsIm5leHQiLCJzZXROZXh0IiwiaGFuZGxlQ2xpY2tEYXRhIiwiYXhpb3MiLCJhYWEiLCJ0aXRsZSIsImNvbnRlbnQiLCJpZCIsIk9uQ2xpY2tOZXh0RGF0YSIsIm5leHRQYWdlIiwiYWxlcnQiLCJPbkNsaWNrUHJlRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUtlLFNBQVNBLFNBQVQsR0FBc0I7QUFBQTs7QUFBQSxrQkFFWEMsK0NBQVEsQ0FBQyxFQUFELENBRkc7QUFBQSxNQUU1QkMsSUFGNEI7QUFBQSxNQUV0QkMsT0FGc0I7O0FBQUEsbUJBR1RGLCtDQUFRLENBQUMsRUFBRCxDQUhDO0FBQUEsTUFHNUJHLEtBSDRCO0FBQUEsTUFHckJDLFFBSHFCOztBQUFBLG1CQUlaSiwrQ0FBUSxDQUFDLEVBQUQsQ0FKSTtBQUFBLE1BSTVCSyxJQUo0QjtBQUFBLE1BSXRCQyxPQUpzQixrQkFNbkM7OztBQUNBLE1BQU1DLGVBQWU7QUFBQSx5VUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVKQyxnREFBQSxDQUFVLDhCQUFWLENBRkk7O0FBQUE7QUFFaEJDLGlCQUZnQjtBQUV1QztBQUU3RDtBQUNBO0FBQ0FQLHFCQUFPLENBQUNPLEdBQUcsQ0FBQ1IsSUFBSixDQUFTLENBQVQsRUFBWVMsS0FBYixDQUFQO0FBQ0FOLHNCQUFRLENBQUNLLEdBQUcsQ0FBQ1IsSUFBSixDQUFTLENBQVQsRUFBWVUsT0FBYixDQUFSO0FBQ0FMLHFCQUFPLENBQUNHLEdBQUcsQ0FBQ1IsSUFBSixDQUFTLENBQVQsRUFBWVcsRUFBYixDQUFQLENBUnNCLENBU2dCOztBQVRoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFmTCxlQUFlO0FBQUE7QUFBQTtBQUFBLEtBQXJCOztBQVlBLE1BQU1NLGVBQWU7QUFBQSwwVUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNETCxnREFBQSx3Q0FBMENILElBQUksR0FBQyxDQUEvQyxFQURDOztBQUFBO0FBQ2xCUyxzQkFEa0I7O0FBRXRCLGtCQUFJVCxJQUFJLEdBQUcsR0FBWCxFQUFnQjtBQUNoQkgsdUJBQU8sQ0FBQ1ksUUFBUSxDQUFDYixJQUFULENBQWNTLEtBQWYsQ0FBUDtBQUNBTix3QkFBUSxDQUFDVSxRQUFRLENBQUNiLElBQVQsQ0FBY1UsT0FBZixDQUFSO0FBQ0FMLHVCQUFPLENBQUNRLFFBQVEsQ0FBQ2IsSUFBVCxDQUFjVyxFQUFmLENBQVA7QUFDRyxlQUpILE1BSVM7QUFDTEcscUJBQUssQ0FBQyxhQUFELENBQUw7QUFDRDs7QUFSbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZkYsZUFBZTtBQUFBO0FBQUE7QUFBQSxLQUFyQjs7QUFXQSxNQUFNRyxjQUFjO0FBQUEsMFVBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDRVIsZ0RBQUEsd0NBQTBDSCxJQUFJLEdBQUMsQ0FBL0MsRUFERjs7QUFBQTtBQUNmUyxzQkFEZTs7QUFBQSxvQkFFZlQsSUFBSSxHQUFHLENBRlE7QUFBQTtBQUFBO0FBQUE7O0FBR2pCSCxxQkFBTyxDQUFDWSxRQUFRLENBQUNiLElBQVQsQ0FBY1MsS0FBZixDQUFQO0FBQ0FOLHNCQUFRLENBQUNVLFFBQVEsQ0FBQ2IsSUFBVCxDQUFjVSxPQUFmLENBQVI7QUFDQUwscUJBQU8sQ0FBQ1EsUUFBUSxDQUFDYixJQUFULENBQWNXLEVBQWYsQ0FBUDtBQUxpQjtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkFPRkosZ0RBQUEsd0NBQTBDSCxJQUFJLEdBQUMsR0FBL0MsRUFQRTs7QUFBQTtBQU9uQlMsc0JBUG1COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWRFLGNBQWM7QUFBQTtBQUFBO0FBQUEsS0FBcEI7O0FBZUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyw4REFBRDtBQUFBLGdCQUFNWDtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLDhEQUFDLDhEQUFEO0FBQUEsZ0JBQU1KO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0UsOERBQUMsOERBQUQ7QUFBQSxnQkFBTUU7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFPRTtBQUFRLGFBQU8sRUFBRWEsY0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRixlQVFFO0FBQVEsYUFBTyxFQUFFVCxlQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBU0U7QUFBUSxhQUFPLEVBQUVNLGVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEY7QUFBQSxrQkFERjtBQWFEOztHQTFEdUJkLFM7O0tBQUFBLFMiLCJmaWxlIjoiLi9wYWdlcy9heGlvcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtCb3h9IGZyb20gJy4uLy4uL3N0eWxlcy9heGlvcy9BeGlvcy5zdHlsZXMuanMnXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF4aW9zUGFnZSAoKSB7XG5cbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtkYXRhMiwgc2V0RGF0YTJdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtuZXh0LCBzZXROZXh0XSA9dXNlU3RhdGUoJycpXG5cbiAgLy8gYXN5bmMgZnVuY3Rpb24gaGFuZGxlQ2xpY2tEYXRhKCkge31cbiAgY29uc3QgaGFuZGxlQ2xpY2tEYXRhID0gYXN5bmMgKCkgPT4geyAgICAgICAgICAgICAvLyDtmZTsgrTtkZwg7ZWo7IiYID0+IGFzeW5jIOychOy5mCA6IGNvbnN0IO2VqOyImOuqhSA9IGFzeW5jICgpID0+IHt9XG5cbiAgICBjb25zdCBhYWEgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8va29yZWFuanNvbi5jb20vcG9zdHMnKSAgLy8g67Cx7JeU65OcIOyalOyyrSAgLy8gcmVzcG9uc2XroZwg642w7J207YSwIOuwm+yVhOyEnCDtlbTri7kgQVBJ7J2066aE7J20IOqwneyytOuNsOydtO2EsOuhnCDrs4Dqsr3rkKhcbiAgICBcbiAgICAvLyBjb25zb2xlLmxvZyhhYWEuZGF0YVswXSlcbiAgICAvLyBjb25zb2xlLmxvZyhiYmIuZGF0YSlcbiAgICBzZXREYXRhKGFhYS5kYXRhWzBdLnRpdGxlKVxuICAgIHNldERhdGEyKGFhYS5kYXRhWzBdLmNvbnRlbnQpXG4gICAgc2V0TmV4dChhYWEuZGF0YVswXS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFByb21pc2XripQg67mE64+Z6riwIOyymOumrOulvCDri6Tro6jquLDsnITtlbQg7IKs7Jqp65CY64qUIOqwneyytFxuICB9XG5cbiAgY29uc3QgT25DbGlja05leHREYXRhID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBuZXh0UGFnZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9rb3JlYW5qc29uLmNvbS9wb3N0cy8ke25leHQrMX1gKVxuICAgIGlmIChuZXh0IDwgMjAwKSB7XG4gICAgc2V0RGF0YShuZXh0UGFnZS5kYXRhLnRpdGxlKVxuICAgIHNldERhdGEyKG5leHRQYWdlLmRhdGEuY29udGVudClcbiAgICBzZXROZXh0KG5leHRQYWdlLmRhdGEuaWQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydCgn66eI7KeA66eJIO2OmOydtOyngOyeheuLiOuLpC4nKVxuICAgICAgfVxuICAgIH1cblxuICBjb25zdCBPbkNsaWNrUHJlRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBuZXh0UGFnZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9rb3JlYW5qc29uLmNvbS9wb3N0cy8ke25leHQtMX1gKVxuICAgICAgaWYgKG5leHQgPiAxKSB7XG4gICAgICAgIHNldERhdGEobmV4dFBhZ2UuZGF0YS50aXRsZSlcbiAgICAgICAgc2V0RGF0YTIobmV4dFBhZ2UuZGF0YS5jb250ZW50KVxuICAgICAgICBzZXROZXh0KG5leHRQYWdlLmRhdGEuaWQpXG4gICAgfSBlbHNlIHtcbiAgICAgIG5leHRQYWdlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2tvcmVhbmpzb24uY29tL3Bvc3RzLyR7bmV4dCsyMDB9YClcbiAgICB9XG4gIH1cblxuICBcblxuXG5cbiAgcmV0dXJuKFxuICAgIDw+XG4gICAgICA8Qm94PntuZXh0fTwvQm94PlxuICAgICAgPGhyIC8+XG4gICAgICA8Qm94PntkYXRhfTwvQm94PlxuICAgICAgPGhyIC8+XG4gICAgICA8Qm94PntkYXRhMn08L0JveD5cbiAgICAgIDxociAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtPbkNsaWNrUHJlRGF0YX0+7J207KCE7Y6Y7J207KeAPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrRGF0YX0+642w7J207YSwIOu2iOufrOyYpOq4sDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtPbkNsaWNrTmV4dERhdGF9PuuLpOydjO2OmOydtOyngDwvYnV0dG9uPlxuICAgIDwvPlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/axios/index.js\n");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _readOnlyError; }\n/* harmony export */ });\nfunction _readOnlyError(name) {\n  throw new TypeError(\"\\\"\" + name + \"\\\" is read-only\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlYWRPbmx5RXJyb3IuanM/ZGYzMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlYWRPbmx5RXJyb3IuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcmVhZE9ubHlFcnJvcihuYW1lKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJcXFwiXCIgKyBuYW1lICsgXCJcXFwiIGlzIHJlYWQtb25seVwiKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError.js\n");

/***/ })

});