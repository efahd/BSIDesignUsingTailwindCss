"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbsidesignusingtailwindcss"] = self["webpackChunkbsidesignusingtailwindcss"] || []).push([["build_js_charts_barChart_js"],{

/***/ "./build/js/charts/barChart.js":
/*!*************************************!*\
  !*** ./build/js/charts/barChart.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderBarChart: () => (/* binding */ renderBarChart)\n/* harmony export */ });\n/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apexcharts */ \"./node_modules/apexcharts/dist/apexcharts.common.js\");\n/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apexcharts__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction renderBarChart(elementId) {\n  var options = {\n    chart: {\n      type: 'bar',\n      height: 350\n    },\n    series: [{\n      name: 'Revenue',\n      data: [10, 15, 20, 25, 30, 35, 40, 45, 50]\n    }],\n    xaxis: {\n      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']\n    }\n  };\n  var chart = new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector(elementId), options);\n  chart.render();\n}\n\n//# sourceURL=webpack://bsidesignusingtailwindcss/./build/js/charts/barChart.js?");

/***/ })

}]);