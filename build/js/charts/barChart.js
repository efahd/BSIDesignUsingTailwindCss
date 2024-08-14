import ApexCharts from 'apexcharts';

export function renderBarChart(elementId, config) {
    const seriesData = Object.values(config.data);
    const categories = Object.keys(config.data);

    console.log("Utility Category:" + categories + "Value:" +  seriesData); // This should now correctly log the numeric value
    
    const options = {
        chart: {
            type: 'bar',
            height: 150,
        },
        plotOptions: {
            bar: {
                horizontal: true,
                dataLabels: {
                    position: 'top',
                },
            },
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return "RM " + val;
            },
            offsetX: -6,
            style: {
                fontSize: '12px',
                colors: ['#000']
            }
        },
        stroke: {
            show: true,
            width: 1,
            colors: ['#fff']
        },
        series: [{
            name: config.seriesName,
            data: seriesData
        }],
        xaxis: {
            categories: categories,
            title: {
                text: 'kWh/Usage'
            }
        },
        yaxis: {
            title: {
                text: undefined
            }
        },
        fill: {
            opacity: 1
        },
        colors: config.seriesName === 'Energy' ? ['#fbbf24'] : ['#1d4ed8'],
        legend: {
            position: 'top',
            horizontalAlign: 'center'
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "RM " + val;
                }
            }
        }
    };

    const chart = new ApexCharts(document.querySelector(elementId), options);
    chart.render();
}
