//import ApexCharts from 'apexcharts';
import ApexCharts from 'apexcharts';

export function renderPieChart(elementId, data) {

    // Calculate the total value
  const totalValue = data.reduce((acc, val) => acc + val, 0);

  // Function to format the total value as a percentage
  const formatTotalValue = (total) => {
    return '${(total / 100).toFixed(2)}%';
  };

    var options = {
        series: data,
        chart: {
            type: 'donut',
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '65%',
                    background: 'transparent',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontsize: '22px',
                            fontweight: 300
                        },
                        value: {
                            show: true
                        },
                        total: {
                            show: true,
                            showAlways: true,
                            label: formatTotalValue(totalValue),
                            fontWeight: 300,
                            fontSize: '22px'
                        }
                    }
                }
            }

        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    var chart = new ApexCharts(document.querySelector(elementId), options);
    chart.render();
}
