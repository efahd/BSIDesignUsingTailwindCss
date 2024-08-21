/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build/js/charts/animated-counter-progressbar.js":
/*!*********************************************************!*\
  !*** ./build/js/charts/animated-counter-progressbar.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/**\r\n * jQuery Animated Progressbar\r\n * Author: shakibdshy<shakibdshy@gmail.com>\r\n * Author URL: https://github.com/shakibdshy\r\n * Version: 1.0.0\r\n */\n\n;\n(function ($) {\n  'use strict';\n\n  // Animated Prograssbar\n  $(\"[progress-bar]\").each(function () {\n    $(this).find(\".progress-fill\").animate({\n      width: $(this).attr(\"data-percentage\")\n    }, 2000);\n    $(this).find(\".progress-number-mark\").animate({\n      left: $(this).attr(\"data-percentage\")\n    }, {\n      duration: 2000,\n      step: function step(now, fx) {\n        var data = Math.round(now);\n        $(this).find(\".percent\").html(data + \"%\");\n      }\n    });\n  });\n})(jQuery);\n\n//# sourceURL=webpack://bsidesignusingtailwindcss/./build/js/charts/animated-counter-progressbar.js?");

/***/ }),

/***/ "./src/js/chartLoader.js":
/*!*******************************!*\
  !*** ./src/js/chartLoader.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadChart: () => (/* binding */ loadChart)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = \"function\" == typeof Symbol ? Symbol : {}, a = i.iterator || \"@@iterator\", c = i.asyncIterator || \"@@asyncIterator\", u = i.toStringTag || \"@@toStringTag\"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, \"\"); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, \"_invoke\", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: \"normal\", arg: t.call(e, r) }; } catch (t) { return { type: \"throw\", arg: t }; } } e.wrap = wrap; var h = \"suspendedStart\", l = \"suspendedYield\", f = \"executing\", s = \"completed\", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { [\"next\", \"throw\", \"return\"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if (\"throw\" !== c.type) { var u = c.arg, h = u.value; return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) { invoke(\"next\", t, i, a); }, function (t) { invoke(\"throw\", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke(\"throw\", t, i, a); }); } a(c.arg); } var r; o(this, \"_invoke\", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error(\"Generator is already running\"); if (o === s) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = f; var p = tryCatch(e, r, n); if (\"normal\" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y; var i = tryCatch(o, e.iterator, r.arg); if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = \"normal\", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: \"root\" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || \"\" === e) { var r = e[a]; if (r) return r.call(e); if (\"function\" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) { var e = \"function\" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () { return this; }), define(g, \"toString\", function () { return \"[object Generator]\"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if (\"root\" === i.tryLoc) return handle(\"end\"); if (i.tryLoc <= this.prev) { var c = n.call(i, \"catchLoc\"), u = n.call(i, \"finallyLoc\"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error(\"try statement without catch or finally\"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) { var i = o; break; } } i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, \"catch\": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if (\"throw\" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, \"next\" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n); } _next(void 0); }); }; }\n//-- The code below for placing the charts configuration paths and loads the charts functions -- \nfunction loadChart(_x, _x2, _x3) {\n  return _loadChart.apply(this, arguments);\n}\nfunction _loadChart() {\n  _loadChart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(chartType, elementId, config) {\n    var _yield$import, renderBarChart, _yield$import2, renderBarChartKPI, _yield$import3, renderPieChart, _yield$import4, renderEnergyUsageChart, _yield$import5, renderWaterUsageChart;\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          _context.t0 = chartType;\n          _context.next = _context.t0 === 'bar' ? 4 : _context.t0 === 'barKPI' ? 10 : _context.t0 === 'donut' ? 16 : _context.t0 === 'energy' ? 22 : _context.t0 === 'water' ? 28 : 34;\n          break;\n        case 4:\n          _context.next = 6;\n          return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_apexcharts_dist_apexcharts_common_js\"), __webpack_require__.e(\"build_js_charts_barChart_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../build/js/charts/barChart.js */ \"./build/js/charts/barChart.js\"));\n        case 6:\n          _yield$import = _context.sent;\n          renderBarChart = _yield$import.renderBarChart;\n          renderBarChart(elementId, config);\n          return _context.abrupt(\"break\", 35);\n        case 10:\n          _context.next = 12;\n          return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_apexcharts_dist_apexcharts_common_js\"), __webpack_require__.e(\"build_js_charts_barChartKPI_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../build/js/charts/barChartKPI.js */ \"./build/js/charts/barChartKPI.js\"));\n        case 12:\n          _yield$import2 = _context.sent;\n          renderBarChartKPI = _yield$import2.renderBarChartKPI;\n          renderBarChartKPI(elementId, config.kpiName, config.value);\n          return _context.abrupt(\"break\", 35);\n        case 16:\n          _context.next = 18;\n          return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_apexcharts_dist_apexcharts_common_js\"), __webpack_require__.e(\"build_js_charts_donutChart_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../build/js/charts/donutChart.js */ \"./build/js/charts/donutChart.js\"));\n        case 18:\n          _yield$import3 = _context.sent;\n          renderPieChart = _yield$import3.renderPieChart;\n          renderPieChart(elementId, config.data);\n          return _context.abrupt(\"break\", 35);\n        case 22:\n          _context.next = 24;\n          return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_apexcharts_dist_apexcharts_common_js\"), __webpack_require__.e(\"build_js_charts_LineChartUtility_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../build/js/charts/LineChartUtility.js */ \"./build/js/charts/LineChartUtility.js\"));\n        case 24:\n          _yield$import4 = _context.sent;\n          renderEnergyUsageChart = _yield$import4.renderEnergyUsageChart;\n          renderEnergyUsageChart(elementId, config);\n          return _context.abrupt(\"break\", 35);\n        case 28:\n          _context.next = 30;\n          return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_apexcharts_dist_apexcharts_common_js\"), __webpack_require__.e(\"build_js_charts_LineChartUtility_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../build/js/charts/LineChartUtility.js */ \"./build/js/charts/LineChartUtility.js\"));\n        case 30:\n          _yield$import5 = _context.sent;\n          renderWaterUsageChart = _yield$import5.renderWaterUsageChart;\n          renderWaterUsageChart(elementId, config);\n          return _context.abrupt(\"break\", 35);\n        case 34:\n          console.error('unknown chart type: ', chartType);\n        case 35:\n          _context.next = 40;\n          break;\n        case 37:\n          _context.prev = 37;\n          _context.t1 = _context[\"catch\"](0);\n          //Catch any missing or misconfigured charts\n          console.error(\"Failed to load \".concat(chartType, \" chart in element \").concat(elementId, \":\"), _context.t1);\n        case 40:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee, null, [[0, 37]]);\n  }));\n  return _loadChart.apply(this, arguments);\n}\n\n//# sourceURL=webpack://bsidesignusingtailwindcss/./src/js/chartLoader.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chartLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chartLoader */ \"./src/js/chartLoader.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _build_js_charts_animated_counter_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../build/js/charts/animated-counter-progressbar */ \"./build/js/charts/animated-counter-progressbar.js\");\n/* harmony import */ var _build_js_charts_animated_counter_progressbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_build_js_charts_animated_counter_progressbar__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = \"function\" == typeof Symbol ? Symbol : {}, a = i.iterator || \"@@iterator\", c = i.asyncIterator || \"@@asyncIterator\", u = i.toStringTag || \"@@toStringTag\"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, \"\"); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, \"_invoke\", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: \"normal\", arg: t.call(e, r) }; } catch (t) { return { type: \"throw\", arg: t }; } } e.wrap = wrap; var h = \"suspendedStart\", l = \"suspendedYield\", f = \"executing\", s = \"completed\", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { [\"next\", \"throw\", \"return\"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if (\"throw\" !== c.type) { var u = c.arg, h = u.value; return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) { invoke(\"next\", t, i, a); }, function (t) { invoke(\"throw\", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke(\"throw\", t, i, a); }); } a(c.arg); } var r; o(this, \"_invoke\", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error(\"Generator is already running\"); if (o === s) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = f; var p = tryCatch(e, r, n); if (\"normal\" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y; var i = tryCatch(o, e.iterator, r.arg); if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = \"normal\", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: \"root\" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || \"\" === e) { var r = e[a]; if (r) return r.call(e); if (\"function\" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) { var e = \"function\" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () { return this; }), define(g, \"toString\", function () { return \"[object Generator]\"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if (\"root\" === i.tryLoc) return handle(\"end\"); if (i.tryLoc <= this.prev) { var c = n.call(i, \"catchLoc\"), u = n.call(i, \"finallyLoc\"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error(\"try statement without catch or finally\"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) { var i = o; break; } } i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, \"catch\": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if (\"throw\" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, \"next\" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n); } _next(void 0); }); }; }\n // The charts will be load asynchronously using chartLoader.js\n\n\n\n//-- Function to fetch the chart data from API --\n// Simulate API fetching with dummy data\nfunction simulateFetch(url) {\n  return new Promise(function (resolve, reject) {\n    try {\n      // Simulate network delay\n      setTimeout(function () {\n        var data;\n        switch (url) {\n          //Donut Chart for Work Order Management\n          case '/api/WorkOrder':\n            data = {\n              data: [56, 55, 41, 17, 15]\n            };\n            break;\n          case '/api/PMWorkOrder':\n            data = {\n              data: [15, 25, 35, 45, 12]\n            };\n            break;\n          case '/api/SCMWorkOrder':\n            data = {\n              data: [25, 35, 45, 55, 19]\n            };\n            break;\n          //Donut Chart for Aging Work Order Management\n          case '/api/LessThan30Days':\n            data = {\n              data: [44, 21, 21]\n            };\n            break;\n          case '/api/LessThan60Days':\n            data = {\n              data: [13, 32, 65]\n            };\n            break;\n          case '/api/LessThan90Days':\n            data = {\n              data: [12, 53, 6]\n            };\n            break;\n          case '/api/barData':\n            data = [{\n              seriesName: 'Energy',\n              data: {\n                April: 11.23,\n                May: 54.23\n              }\n            }, {\n              seriesName: 'Water',\n              data: {\n                April: 56.63,\n                May: 74.79\n              }\n            }];\n            break;\n          //Line Chart for Key Performance Index (KPI) Customer Satisfaction Section\n          case '/api/kpiData':\n            data = [{\n              name: 'KPI 1 - Customer Satisfaction',\n              value: 11.23\n            }, {\n              name: 'KPI 2 - Customer Satisfaction',\n              value: 86.43\n            }, {\n              name: 'KPI 3 - Customer Satisfaction',\n              value: 93.34\n            }, {\n              name: 'KPI 4 - Customer Satisfaction',\n              value: 68.75\n            }, {\n              name: 'KPI 5 - Customer Satisfaction',\n              value: 96.53\n            }];\n            break;\n          //Progress Bar for TaskWorkOrder, PMWorkOrder, SCMWorkOrder\n          case '/api/progressTaskWorkOrder':\n            data = {\n              open: 75,\n              closeComplete: 306,\n              cancel: 13,\n              total: 394,\n              percentage: 64.35\n            };\n            break;\n          case '/api/progressDataTaskPMWorkOrder':\n            data = {\n              open: 75,\n              closeComplete: 306,\n              cancel: 13,\n              total: 394,\n              percentage: 84.56\n            };\n            break;\n          case '/api/progressDataTaskSCMWorkOrder':\n            data = {\n              open: 11,\n              closeComplete: 11,\n              cancel: 0,\n              total: 11,\n              percentage: 100\n            };\n            break;\n          //Line Chart with Data Labels for Energy and Water Claim Summary\n          case '/api/energyUsageData':\n            data = {\n              series: [2, 2.5, 2.3, 2.8, 3.1, 2.2, 2.5, 3.0, 3.5],\n              categories: ['1 Oct', '3 Oct', '7 Oct', '10 Oct', '14 Oct', '20 Oct', '23 Oct', '27 Oct', '30 Oct']\n            };\n            break;\n          case '/api/waterUsageData':\n            data = {\n              series: [1.5, 2.0, 2.2, 2.5, 3.0, 2.8, 3.2, 3.4, 3.8],\n              categories: ['1 Oct', '3 Oct', '7 Oct', '10 Oct', '14 Oct', '20 Oct', '23 Oct', '27 Oct', '30 Oct']\n            };\n            break;\n          default:\n            data = [];\n        }\n        resolve(data);\n      }, 10); // Simulate network delay\n    } catch (error) {\n      console.error(\"Error fetching data from \".concat(url, \":\"), error);\n      reject(error); // Reject the promise if an error occurs\n    }\n  });\n}\n\n//-- Place the inputs for the charts in the code below for each charts respectively. --\n// Data fetch from the database will placed in variable 'data' which will load into their own respective charts and their settings.\n// [IMPORTANT] IN DEVELOPMENT MODE, IT IS REQUIRED TO RUN THE FOLLOWING COMMAND 'npx webpack'\ndocument.addEventListener('DOMContentLoaded', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {\n  var donutData1, donutData2, donutData3, LessThan30Days, LessThan60Days, LessThan90Days, barData1, barData2, kpiData, progressData1, progressData2, progressData3, energyData, waterData;\n  return _regeneratorRuntime().wrap(function _callee$(_context) {\n    while (1) switch (_context.prev = _context.next) {\n      case 0:\n        _context.next = 2;\n        return simulateFetch('/api/WorkOrder');\n      case 2:\n        donutData1 = _context.sent;\n        (0,_chartLoader__WEBPACK_IMPORTED_MODULE_0__.loadChart)('donut', '#chart4a', {\n          data: donutData1.data\n        });\n        _context.next = 6;\n        return simulateFetch('/api/PMWorkOrder');\n      case 6:\n        donutData2 = _context.sent;\n        (0,_chartLoader__WEBPACK_IMPORTED_MODULE_0__.loadChart)('donut', '#chart4b', {\n          data: donutData2.data\n        });\n        _context.next = 10;\n        return simulateFetch('/api/SCMWorkOrder');\n      case 10:\n        donutData3 = _context.sent;\n        (0,_chartLoader__WEBPACK_IMPORTED_MODULE_0__.loadChart)('donut', '#chart4c', {\n          data: donutData3.data\n        });\n\n        //-- RENDER CHARTS FOR SUMMARY AGING WORK ORDER MANAGEMENT -- \n        _context.next = 14;\n        return simulateFetch('/api/LessThan30Days');\n      case 14:\n        LessThan30Days = _context.sent;\n        (0,_chartLoader__WEBPACK_IMPORTED_MODULE_0__.loadChart)('donut', '#chart5a', {\n          data: LessThan30Days.data\n        });\n        _context.next = 18;\n        return simulateFetch('/api/LessThan60Days');\n      case 18:\n        LessThan60Days = _context.sent;\n        (0,_chartLoader__WEBPACK_IMPORTED_MODULE_0__.loadChart)('donut', '#chart5b', {\n          data: LessThan60Days.data\n        });\n        _context.next = 22;\n        return simulateFetch('/api/LessThan90Days');\n      case 22:\n        LessThan90Days = _context.sent;\n        (0,_chartLoader__WEBPACK_IMPORTED_MODULE_0__.loadChart)('donut', '#chart5c', {\n          data: LessThan90Days.data\n        });\n\n        //-- RENDER BAR CHARTS FOR UTILITY MANAGEMENT --    \n\n        // Load Energy Chart\n        _context.next = 26;\n        return simulateFetch('/api/barData');\n      case 26:\n        barData1 = _context.sent;\n        (0,_chartLoader__WEBPACK_IMPORTED_MODULE_0__.loadChart)('bar', '#chart6a', {\n          seriesName: barData1[0].seriesName,\n          data: barData1[0].data\n        });\n\n        // Load Water Chart\n        _context.next = 30;\n        return simulateFetch('/api/barData');\n      case 30:\n        barData2 = _context.sent;\n        (0,_chartLoader__WEBPACK_IMPORTED_MODULE_0__.loadChart)('bar', '#chart6b', {\n          seriesName: barData2[1].seriesName,\n          data: barData2[1].data\n        });\n\n        //--RENDER BAR CHARTS FOR KEY PERFORMANCE INDEX(KPI) --    \n\n        // Load KPI Bar Chart\n        _context.next = 34;\n        return simulateFetch('/api/kpiData');\n      case 34:\n        kpiData = _context.sent;\n        kpiData.forEach(function (kpi, index) {\n          (0,_chartLoader__WEBPACK_IMPORTED_MODULE_0__.loadChart)('barKPI', \"#kpiBarChart\".concat(index + 1), {\n            kpiName: kpi.name,\n            value: kpi.value\n          });\n        });\n\n        //-- RENDER PROGRESS BAR SCRIPT --    \n        // Fetch and render the first set of progress bars (Work Order Management)\n        _context.next = 38;\n        return simulateFetch('/api/progressTaskWorkOrder');\n      case 38:\n        progressData1 = _context.sent;\n        updateProgressBar('.progress-bar-container-1', progressData1);\n\n        // Fetch and render the second set of progress bars (PM Work Order)\n        _context.next = 42;\n        return simulateFetch('/api/progressDataTaskPMWorkOrder');\n      case 42:\n        progressData2 = _context.sent;\n        updateProgressBar('.progress-bar-container-2', progressData2);\n\n        // Fetch and render the third set of progress bars (SCM Work Order)\n        _context.next = 46;\n        return simulateFetch('/api/progressDataTaskSCMWorkOrder');\n      case 46:\n        progressData3 = _context.sent;\n        updateProgressBar('.progress-bar-container-3', progressData3);\n\n        //-- RENDER LINE CHART for Claim Summary Utility Management --\n        // Fetch and render Energy Usage chart\n        _context.next = 50;\n        return simulateFetch('/api/energyUsageData');\n      case 50:\n        energyData = _context.sent;\n        console.log(\"Fetched Energy Data:\", energyData);\n        (0,_chartLoader__WEBPACK_IMPORTED_MODULE_0__.loadChart)('energy', '#energyUsageChart', {\n          series: energyData.series,\n          categories: energyData.categories\n        });\n\n        // Fetch and render Water Usage chart\n        _context.next = 55;\n        return simulateFetch('/api/waterUsageData');\n      case 55:\n        waterData = _context.sent;\n        console.log(\"Fetched Water Data:\", waterData);\n        (0,_chartLoader__WEBPACK_IMPORTED_MODULE_0__.loadChart)('water', '#waterUsageChart', {\n          series: waterData.series,\n          categories: waterData.categories\n        });\n      case 58:\n      case \"end\":\n        return _context.stop();\n    }\n  }, _callee);\n})));\n\n//-- THIS IS A PROGRESS BAR CONFIGURATION TO LOAD THE PROGRESS BAR FOR WORK ORDER, PMWORK ORDER and SCM WORKORDER RESPECTIVELY --\n//-- ONLY CHANGE THIS CODE IF THERE ARE CHANGES IN THE UI LAYOUT OR CALCULATIONS --\nfunction updateProgressBar(containerSelector, progressData) {\n  var open = progressData.open,\n    closeComplete = progressData.closeComplete,\n    cancel = progressData.cancel,\n    total = progressData.total;\n  console.log(\"Progress Bar Value:\", progressData); // Check the log for progress Bar Value\n\n  // Update the values for each progress bar\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()(\"\".concat(containerSelector, \" [data-type=\\\"open\\\"]\")).attr(\"data-percentage\", \"\".concat(open / total * 100, \"%\"));\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()(\"\".concat(containerSelector, \" .progress-value-open\")).text(open);\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()(\"\".concat(containerSelector, \" [data-type=\\\"closeComplete\\\"]\")).attr(\"data-percentage\", \"\".concat(closeComplete / total * 100, \"%\"));\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()(\"\".concat(containerSelector, \" .progress-value-closeComplete\")).text(closeComplete);\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()(\"\".concat(containerSelector, \" [data-type=\\\"cancel\\\"]\")).attr(\"data-percentage\", \"\".concat(cancel / total * 100, \"%\"));\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()(\"\".concat(containerSelector, \" .progress-value-cancel\")).text(cancel);\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()(\"\".concat(containerSelector, \" [data-type=\\\"total\\\"]\")).attr(\"data-percentage\", \"100%\");\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()(\"\".concat(containerSelector, \" .progress-value-total\")).text(total);\n\n  // Trigger the animation\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()(\"\".concat(containerSelector, \" [progress-bar]\")).each(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).find(\".progress-fill\").animate({\n      width: jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).attr(\"data-percentage\")\n    }, 2000);\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).find(\".progress-number-mark\").animate({\n      left: jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).attr(\"data-percentage\")\n    }, {\n      duration: 2000,\n      step: function step(now, fx) {\n        var data = Math.round(now);\n        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).find(\".percent\").html(data + \"%\");\n      }\n    });\n  });\n}\n\n//# sourceURL=webpack://bsidesignusingtailwindcss/./src/js/main.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "bsidesignusingtailwindcss:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 		__webpack_require__.p = "/build/js";
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
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
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
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbsidesignusingtailwindcss"] = self["webpackChunkbsidesignusingtailwindcss"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_require__("./src/js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;