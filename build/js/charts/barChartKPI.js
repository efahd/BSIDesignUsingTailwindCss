import ApexCharts from "apexcharts";

export function renderBarChartKPI(elementId, kpiName, value) {
    console.log("KPI Value:", value); // This should now correctly log the numeric value

    const options = {
        chart: {
            type: 'bar',
            height: 150,
            width: '100%',
            toolbar: {
                show:false
            },
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '50%',
                dataLabels: {
                    position: 'center',
                }
            },
        },
        dataLabels: {
            enabled: true,
            // textAnchor: 'middle',
            style: {
                fontSize: '14px',
                colors: ['#fff'],
            },
            formatter: function (val) {
                return `${val.toFixed(2)}%`; // Ensure this is returning the value
            },
            offsetX: 0,
            offsetY: 0
        },
        series: [{
            name: kpiName, // Setting the KPI name for clarity
            data: [value] // Ensure this is an array of numbers
        }],
        xaxis: {
            categories: [''], //Left Blank due to UI design 
            max: 100,
            labels: {
                style: {
                    fontSize: '10px',
                }
            },
            title: {
                text: 'Percentage (%)',
                offsetY: 10,
                style: {
                    fontSize: '12px',
                    color: '#555'
                }
            },
            axisBorder: {
                show: true,
                color: '#ccc',
            },
            axisTicks: {
                show: true,
                color: '#ccc',
            },
        },
        yaxis: {
            labels: {
                show: false, // Hide labels since the design doesn't include them
            }
        },
        fill: {
            colors: ['#00E396'],
        },
        grid: {
            show: true,
            borderColor: '#eee',
            strokeDashArray: 4,
        },
        legend: {
            show: false
        },
        tooltip: {
            enabled: true,
            y: {
                formatter: function (val) {
                    return `${val.toFixed(2)}%`;
                }
            }
        },
    };

    const chart = new ApexCharts(document.querySelector(elementId), options);
    chart.render();
}