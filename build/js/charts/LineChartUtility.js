import ApexCharts from 'apexcharts';

//Charts configuration for Energy Usage in Utility management Claim Summary
export function renderEnergyUsageChart(elementId, config) {

    console.log("Rendering Energy Usage Chart with data:", config.series, " and dates:", config.categories);

    const options = {
        chart: {
            type: 'line',
            height: 350,
            toolbar: {
                show: false
            }
        },
        series: [{
            name: 'Energy',
            data: config.series
        }],
        xaxis: {
            categories: config.categories
        },
        markers: {
            size: 5,
            colors: ['#D4AF37'],
            strokeColors: ['#D4AF37'],
            strokeWidth: 3,
            hover: {
                size: 7
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (value) {
                return `RM ${value}`;
            },
            background: {
                enabled: true,
                foreColor: '#000',
                padding: 5,
                borderRadius: 2,
                borderWidth: 1,
                borderColor: '#000'
            }
        },
        colors: ['#D4AF37'],
        stroke: {
            curve: 'smooth',
            width: 3
        },
        grid: {
            borderColor: '#e7e7e7'
        },
        yaxis: {
            labels: {
                formatter: function (val) {
                    return val + 'kWh';
                }
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right'
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return `RM ${val}`;
                }
            }
        }
    };

    const chart = new ApexCharts(document.querySelector(elementId), options);
    chart.render();
}

//Charts configuration for Water Usage in Utility management Claim Summary
export function renderWaterUsageChart(elementId, config) {
    console.log("Rendering Water Usage Chart with data:", config.series, " and dates:", config.categories);

    const options = {
        chart: {
            type: 'line',
            height: 350,
            toolbar: {
                show: false
            }
        },
        series: [{
            name: 'Water',
            data: config.series
        }],
        xaxis: {
            categories: config.categories
        },
        markers: {
            size: 5,
            colors: ['#008FFB'],
            strokeColors: ['#008FFB'],
            strokeWidth: 3,
            hover: {
                size: 7
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (value) {
                return `RM ${value}`;
            },
            background: {
                enabled: true,
                foreColor: '#000',
                padding: 5,
                borderRadius: 2,
                borderWidth: 1,
                borderColor: '#000'
            }
        },
        colors: ['#008FFB'],
        stroke: {
            curve: 'smooth',
            width: 3
        },
        grid: {
            borderColor: '#e7e7e7'
        },
        yaxis: {
            labels: {
                formatter: function (val) {
                    return val + 'L';
                }
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right'
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return `RM ${val}`;
                }
            }
        }
    };

    const chart = new ApexCharts(document.querySelector(elementId), options);
    chart.render();
}
