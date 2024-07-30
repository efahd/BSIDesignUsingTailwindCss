//import ApexCharts from 'apexcharts';
import ApexCharts from 'apexcharts';

export function renderPieChart(elementId, data) {

    var options = {
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
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
