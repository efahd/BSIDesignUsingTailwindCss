"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbsidesignusingtailwindcss"] = self["webpackChunkbsidesignusingtailwindcss"] || []).push([["build_js_charts_radialChart_js"],{

/***/ "./build/js/charts/radialChart.js":
/*!****************************************!*\
  !*** ./build/js/charts/radialChart.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderRadialChart: () => (/* binding */ renderRadialChart)\n/* harmony export */ });\n/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apexcharts */ \"./node_modules/apexcharts/dist/apexcharts.common.js\");\n/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apexcharts__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction renderRadialChart(elementId) {\n  var options = {\n    series: [76, 67, 61, 90],\n    chart: {\n      height: 390,\n      type: 'radialBar'\n    },\n    plotOptions: {\n      radialBar: {\n        offsetY: 0,\n        startAngle: 0,\n        endAngle: 270,\n        hollow: {\n          margin: 5,\n          size: '30%',\n          background: 'transparent',\n          image: undefined\n        },\n        dataLabels: {\n          name: {\n            show: false\n          },\n          value: {\n            show: false\n          }\n        },\n        barLabels: {\n          enabled: true,\n          useSeriesColors: true,\n          offsetX: -8,\n          fontSize: '16px',\n          formatter: function formatter(seriesName, opts) {\n            return seriesName + \":  \" + opts.w.globals.series[opts.seriesIndex];\n          }\n        }\n      }\n    },\n    colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],\n    labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],\n    responsive: [{\n      breakpoint: 480,\n      options: {\n        legend: {\n          show: false\n        }\n      }\n    }]\n  };\n  var chart = new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector(elementId), options);\n  chart.render();\n}\n\n//# sourceURL=webpack://bsidesignusingtailwindcss/./build/js/charts/radialChart.js?");

/***/ })

}]);