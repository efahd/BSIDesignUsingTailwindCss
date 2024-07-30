"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbsidesignusingtailwindcss"] = self["webpackChunkbsidesignusingtailwindcss"] || []).push([["build_js_charts_donutChart_js"],{

/***/ "./build/js/charts/donutChart.js":
/*!***************************************!*\
  !*** ./build/js/charts/donutChart.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderPieChart: () => (/* binding */ renderPieChart)\n/* harmony export */ });\n/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apexcharts */ \"./node_modules/apexcharts/dist/apexcharts.common.js\");\n/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apexcharts__WEBPACK_IMPORTED_MODULE_0__);\n//import ApexCharts from 'apexcharts';\n\nfunction renderPieChart(elementId, data) {\n  var options = {\n    dataLabels: {\n      enabled: false\n    },\n    legend: {\n      show: false\n    },\n    series: data,\n    chart: {\n      type: 'donut'\n    },\n    plotOptions: {\n      pie: {\n        donut: {\n          size: '65%',\n          background: 'transparent',\n          labels: {\n            show: true,\n            name: {\n              show: true,\n              fontsize: '22px',\n              fontweight: 300\n            },\n            value: {\n              show: true\n            },\n            total: {\n              show: true,\n              showAlways: true,\n              fontWeight: 300,\n              fontSize: '22px'\n            }\n          }\n        }\n      }\n    },\n    responsive: [{\n      breakpoint: 480,\n      options: {\n        chart: {\n          width: 200\n        },\n        legend: {\n          position: 'bottom'\n        }\n      }\n    }]\n  };\n  var chart = new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector(elementId), options);\n  chart.render();\n}\n\n//# sourceURL=webpack://bsidesignusingtailwindcss/./build/js/charts/donutChart.js?");

/***/ })

}]);