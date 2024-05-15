// Call this function after the DOM is fully loaded or when you need to render the chart
document.addEventListener("DOMContentLoaded", function() {
    renderStackedBarChart();
    renderRadialBarChart();
});

function renderRadialBarChart() {
    var options = {
        series: [9, 1, 3],
        chart: {
        height: 390,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: '30%',
            background: 'transparent',
            image: undefined,
          },
          dataLabels: {
            total: {
                show:true,
                label: 'Total',
                color: '#607d8b',
                fontSize: '14px',
                formatter: function (w) {
                    return w.globals.seriesTotals.reduce((a,b,c) => {
                      return a + b + c
                    }, 0) / w.globals.series.length
                  },
            }
          },
          barLabels: {
            enabled: true,
            useSeriesColors: true,
            margin: 8,
            fontSize: '14px',
            formatter: function(seriesName, opts) {
              return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
            },
          },
        }
      },
      colors: ['#64dd17', '#ff3d00', '#9e9e9e'],
      labels: ['Achieved', 'Failed', 'N/A'],
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
              show: false
          }
        }
      }]
      };

      var chart = new ApexCharts(document.querySelector("#KPIChart"), options);
      chart.render();
}

function renderStackedBarChart() {
    var options = {
        series: [{
            name: 'Achieved',
            data: [90]
        }, {
            name: 'Failed',
            data: [1]
        }, {
            name: 'N/A',
            data: [0]
        }],
        chart: {
            type: 'bar',
            height: 200,
            stacked: true,
            stackType: '100%'
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
            dataLabels: {
                enabled: true,
                hideOverflowingLabels: true,
            },
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        xaxis: {
            categories: [2008],
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + "K"
                }
            }
        },
        fill: {
            opacity: 1
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'left',
            offsetX: 40
        }
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
}

