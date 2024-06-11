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

//Javascript codes below for dashboard3.html
var sidebar = document.getElementById('sidebar');

function sidebarToggle() {
    if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
    } else {
        sidebar.style.display = "none";
    }
}

var profileDropdown = document.getElementById('ProfileDropDown');

function profileToggle() {
    if (profileDropdown.style.display === "none") {
        profileDropdown.style.display = "block";
    } else {
        profileDropdown.style.display = "none";
    }
}


/**
 * ### Modals ###
 */

function toggleModal(action, elem_trigger)
{
    elem_trigger.addEventListener('click', function () {
        if (action == 'add') {
            let modal_id = this.dataset.modal;
            document.getElementById(`${modal_id}`).classList.add('modal-is-open');
        } else {
            // Automaticlly get the opned modal ID
            let modal_id = elem_trigger.closest('.modal-wrapper').getAttribute('id');
            document.getElementById(`${modal_id}`).classList.remove('modal-is-open');
        }
    });
}


// Check if there is modals on the page
if (document.querySelector('.modal-wrapper'))
{
    // Open the modal
    document.querySelectorAll('.modal-trigger').forEach(btn => {
        toggleModal('add', btn);
    });
    
    // close the modal
    document.querySelectorAll('.close-modal').forEach(btn => {
        toggleModal('remove', btn);
    });
}
