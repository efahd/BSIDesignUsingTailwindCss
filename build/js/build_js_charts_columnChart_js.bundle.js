"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbsidesignusingtailwindcss"] = self["webpackChunkbsidesignusingtailwindcss"] || []).push([["build_js_charts_columnChart_js"],{

/***/ "./build/js/charts/columnChart.js":
/*!****************************************!*\
  !*** ./build/js/charts/columnChart.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderColumnChart: () => (/* binding */ renderColumnChart)\n/* harmony export */ });\n/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apexcharts */ \"./node_modules/apexcharts/dist/apexcharts.common.js\");\n/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apexcharts__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction renderColumnChart(elementId) {\n  var options = {\n    series: [{\n      name: 'Net Profit',\n      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]\n    }, {\n      name: 'Revenue',\n      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]\n    }, {\n      name: 'Free Cash Flow',\n      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]\n    }],\n    chart: {\n      type: 'bar',\n      height: 350\n    },\n    plotOptions: {\n      bar: {\n        horizontal: false,\n        columnWidth: '55%',\n        endingShape: 'rounded'\n      }\n    },\n    dataLabels: {\n      enabled: false\n    },\n    stroke: {\n      show: true,\n      width: 2,\n      colors: ['transparent']\n    },\n    xaxis: {\n      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']\n    },\n    yaxis: {\n      title: {\n        text: '$ (thousands)'\n      }\n    },\n    fill: {\n      opacity: 1\n    },\n    tooltip: {\n      y: {\n        formatter: function formatter(val) {\n          return \"$ \" + val + \" thousands\";\n        }\n      }\n    }\n  };\n  var chart = new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector(elementId), options);\n  chart.render();\n}\n\n//# sourceURL=webpack://bsidesignusingtailwindcss/./build/js/charts/columnChart.js?");

/***/ })

}]);