"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbsidesignusingtailwindcss"] = self["webpackChunkbsidesignusingtailwindcss"] || []).push([["build_js_charts_barChartKPI_js"],{

/***/ "./build/js/charts/barChartKPI.js":
/*!****************************************!*\
  !*** ./build/js/charts/barChartKPI.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderBarChartKPI: () => (/* binding */ renderBarChartKPI)\n/* harmony export */ });\n/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apexcharts */ \"./node_modules/apexcharts/dist/apexcharts.common.js\");\n/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apexcharts__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction renderBarChartKPI(elementId, kpiName, value) {\n  console.log(\"KPI Value:\", value); // This should now correctly log the numeric value\n\n  var options = {\n    chart: {\n      type: 'bar',\n      height: 150,\n      width: '100%',\n      toolbar: {\n        show: false\n      }\n    },\n    plotOptions: {\n      bar: {\n        horizontal: true,\n        barHeight: '50%',\n        dataLabels: {\n          position: 'center'\n        }\n      }\n    },\n    dataLabels: {\n      enabled: true,\n      // textAnchor: 'middle',\n      style: {\n        fontSize: '14px',\n        colors: ['#fff']\n      },\n      formatter: function formatter(val) {\n        return \"\".concat(val.toFixed(2), \"%\"); // Ensure this is returning the value\n      },\n      offsetX: 0,\n      offsetY: 0\n    },\n    series: [{\n      name: kpiName,\n      // Setting the KPI name for clarity\n      data: [value] // Ensure this is an array of numbers\n    }],\n    xaxis: {\n      categories: [''],\n      //Left Blank due to UI design \n      max: 100,\n      labels: {\n        style: {\n          fontSize: '10px'\n        }\n      },\n      title: {\n        text: 'Percentage (%)',\n        offsetY: 10,\n        style: {\n          fontSize: '12px',\n          color: '#555'\n        }\n      },\n      axisBorder: {\n        show: true,\n        color: '#ccc'\n      },\n      axisTicks: {\n        show: true,\n        color: '#ccc'\n      }\n    },\n    yaxis: {\n      labels: {\n        show: false // Hide labels since the design doesn't include them\n      }\n    },\n    fill: {\n      colors: ['#00E396']\n    },\n    grid: {\n      show: true,\n      borderColor: '#eee',\n      strokeDashArray: 4\n    },\n    legend: {\n      show: false\n    },\n    tooltip: {\n      enabled: true,\n      y: {\n        formatter: function formatter(val) {\n          return \"\".concat(val.toFixed(2), \"%\");\n        }\n      }\n    }\n  };\n  var chart = new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector(elementId), options);\n  chart.render();\n}\n\n//# sourceURL=webpack://bsidesignusingtailwindcss/./build/js/charts/barChartKPI.js?");

/***/ })

}]);