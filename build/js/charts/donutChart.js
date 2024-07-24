import ApexCharts from 'apexcharts';

export function renderPieChart(elementId, data) {
    var options = {
        // series: [44, 55, 41, 17, 15], 
        series: data,
        chart: {
            type: 'donut',
        },        
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        name: {
                            show:true,
                        },
                        value: {
                            show:true,
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
