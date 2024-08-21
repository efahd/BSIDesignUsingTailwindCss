
import { loadChart } from './chartLoader'; // The charts will be load asynchronously using chartLoader.js
import $ from 'jquery';
import '../../build/js/charts/animated-counter-progressbar';

//-- Function to fetch the chart data from API --
// Simulate API fetching with dummy data
function simulateFetch(url) {
    return new Promise((resolve, reject) => {
        try {
            // Simulate network delay
            setTimeout(() => {
                let data;
                switch (url) {
                    //Donut Chart for Work Order Management
                    case '/api/WorkOrder':
                        data = { data: [56, 55, 41, 17, 15] }
                        break;
                    case '/api/PMWorkOrder':
                        data = { data: [15, 25, 35, 45, 12] }
                        break;
                    case '/api/SCMWorkOrder':
                        data = { data: [25, 35, 45, 55, 19] }
                        break;
                    //Donut Chart for Aging Work Order Management
                    case '/api/LessThan30Days':
                        data = { data: [44, 21, 21] }
                        break;
                    case '/api/LessThan60Days':
                        data = { data: [13, 32, 65] }
                        break;
                    case '/api/LessThan90Days':
                        data = { data: [12, 53, 6] }
                        break;
                    case '/api/barData':
                        data = [
                            { seriesName: 'Energy', data: { April: 11.23, May: 54.23 } },
                            { seriesName: 'Water', data: { April: 56.63, May: 74.79 } }
                        ];
                        break;
                    //Line Chart for Key Performance Index (KPI) Customer Satisfaction Section
                    case '/api/kpiData':
                        data = [
                            { name: 'KPI 1 - Customer Satisfaction', value: 11.23 },
                            { name: 'KPI 2 - Customer Satisfaction', value: 86.43 },
                            { name: 'KPI 3 - Customer Satisfaction', value: 93.34 },
                            { name: 'KPI 4 - Customer Satisfaction', value: 68.75 },
                            { name: 'KPI 5 - Customer Satisfaction', value: 96.53 }
                        ];
                        break;
                    //Progress Bar for TaskWorkOrder, PMWorkOrder, SCMWorkOrder
                    case '/api/progressTaskWorkOrder':
                        data = {
                            open: 75,
                            closeComplete: 306,
                            cancel: 13,
                            total: 394,
                            percentage: 64.35
                        };
                        break;
                    case '/api/progressDataTaskPMWorkOrder':
                        data = {
                            open: 75,
                            closeComplete: 306,
                            cancel: 13,
                            total: 394,
                            percentage: 84.56
                        };
                        break;
                    case '/api/progressDataTaskSCMWorkOrder':
                        data = {
                            open: 11,
                            closeComplete: 11,
                            cancel: 0,
                            total: 11,
                            percentage: 100
                        };
                        break;
                    //Line Chart with Data Labels for Energy and Water Claim Summary
                    case '/api/energyUsageData':
                        data = {
                            series: [2, 2.5, 2.3, 2.8, 3.1, 2.2, 2.5, 3.0, 3.5],
                            categories: ['1 Oct', '3 Oct', '7 Oct', '10 Oct', '14 Oct', '20 Oct', '23 Oct', '27 Oct', '30 Oct']
                        };
                        break;
                    case '/api/waterUsageData':
                        data = {
                            series: [1.5, 2.0, 2.2, 2.5, 3.0, 2.8, 3.2, 3.4, 3.8],
                            categories: ['1 Oct', '3 Oct', '7 Oct', '10 Oct', '14 Oct', '20 Oct', '23 Oct', '27 Oct', '30 Oct']
                        };
                        break;

                    default:
                        data = [];
                }
                resolve(data);
            }, 10); // Simulate network delay
        } catch (error) {
            console.error(`Error fetching data from ${url}:`, error);
            reject(error); // Reject the promise if an error occurs
        }
    });
}

//-- Place the inputs for the charts in the code below for each charts respectively. --
// Data fetch from the database will placed in variable 'data' which will load into their own respective charts and their settings.
// [IMPORTANT] IN DEVELOPMENT MODE, IT IS REQUIRED TO RUN THE FOLLOWING COMMAND 'npx webpack'
document.addEventListener('DOMContentLoaded', async () => {
    // loadChart('line', '#chart1');    
    // loadChart('column', '#chart3');
    // loadChart('radial', '#chart5');

    //-- RENDER DONUT/PIE CHARTS FOR WORK ORDER MANAGEMENT -- 

    //Fetch and render donut charts individually
    const donutData1 = await simulateFetch('/api/WorkOrder');
    loadChart('donut', '#chart4a', {
        data: donutData1.data
    });

    const donutData2 = await simulateFetch('/api/PMWorkOrder');
    loadChart('donut', '#chart4b', {
        data: donutData2.data
    });

    const donutData3 = await simulateFetch('/api/SCMWorkOrder');
    loadChart('donut', '#chart4c', {
        data: donutData3.data
    });

    //-- RENDER CHARTS FOR SUMMARY AGING WORK ORDER MANAGEMENT -- 
    const LessThan30Days = await simulateFetch('/api/LessThan30Days');
    loadChart('donut', '#chart5a', {
        data: LessThan30Days.data
    });

    const LessThan60Days = await simulateFetch('/api/LessThan60Days');
    loadChart('donut', '#chart5b', {
        data: LessThan60Days.data,
    });

    const LessThan90Days = await simulateFetch('/api/LessThan90Days');
    loadChart('donut', '#chart5c', {
        data: LessThan90Days.data,
    });

    //-- RENDER BAR CHARTS FOR UTILITY MANAGEMENT --    

    // Load Energy Chart
    const barData1 = await simulateFetch('/api/barData');
    loadChart('bar', '#chart6a', {
        seriesName: barData1[0].seriesName,
        data: barData1[0].data
    });

    // Load Water Chart
    const barData2 = await simulateFetch('/api/barData');
    loadChart('bar', '#chart6b', {
        seriesName: barData2[1].seriesName,
        data: barData2[1].data
    });

    //--RENDER BAR CHARTS FOR KEY PERFORMANCE INDEX(KPI) --    

    // Load KPI Bar Chart
    const kpiData = await simulateFetch('/api/kpiData');
    kpiData.forEach((kpi, index) => {
        loadChart('barKPI', `#kpiBarChart${index + 1}`, {
            kpiName: kpi.name,
            value: kpi.value
        });
    });

    //-- RENDER PROGRESS BAR SCRIPT --    
    // Fetch and render the first set of progress bars (Work Order Management)
    const progressData1 = await simulateFetch('/api/progressTaskWorkOrder');
    updateProgressBar('.progress-bar-container-1', progressData1);

    // Fetch and render the second set of progress bars (PM Work Order)
    const progressData2 = await simulateFetch('/api/progressDataTaskPMWorkOrder');
    updateProgressBar('.progress-bar-container-2', progressData2);

    // Fetch and render the third set of progress bars (SCM Work Order)
    const progressData3 = await simulateFetch('/api/progressDataTaskSCMWorkOrder');
    updateProgressBar('.progress-bar-container-3', progressData3);


    //-- RENDER LINE CHART for Claim Summary Utility Management --
    // Fetch and render Energy Usage chart
    const energyData = await simulateFetch('/api/energyUsageData');
    console.log("Fetched Energy Data:", energyData);
    loadChart('energy', '#energyUsageChart', {
        series: energyData.series,
        categories: energyData.categories
    });

    // Fetch and render Water Usage chart
    const waterData = await simulateFetch('/api/waterUsageData');
    console.log("Fetched Water Data:", waterData);
    loadChart('water', '#waterUsageChart', {
        series: waterData.series,
        categories: waterData.categories
    });


});

//-- THIS IS A PROGRESS BAR CONFIGURATION TO LOAD THE PROGRESS BAR FOR WORK ORDER, PMWORK ORDER and SCM WORKORDER RESPECTIVELY --
//-- ONLY CHANGE THIS CODE IF THERE ARE CHANGES IN THE UI LAYOUT OR CALCULATIONS --
function updateProgressBar(containerSelector, progressData) {
    const { open, closeComplete, cancel, total } = progressData;
    console.log("Progress Bar Value:", progressData); // Check the log for progress Bar Value

    // Update the values for each progress bar
    $(`${containerSelector} [data-type="open"]`).attr("data-percentage", `${(open / total) * 100}%`);
    $(`${containerSelector} .progress-value-open`).text(open);

    $(`${containerSelector} [data-type="closeComplete"]`).attr("data-percentage", `${(closeComplete / total) * 100}%`);
    $(`${containerSelector} .progress-value-closeComplete`).text(closeComplete);

    $(`${containerSelector} [data-type="cancel"]`).attr("data-percentage", `${(cancel / total) * 100}%`);
    $(`${containerSelector} .progress-value-cancel`).text(cancel);

    $(`${containerSelector} [data-type="total"]`).attr("data-percentage", `100%`);
    $(`${containerSelector} .progress-value-total`).text(total);

    // Trigger the animation
    $(`${containerSelector} [progress-bar]`).each(function () {
        $(this)
            .find(".progress-fill")
            .animate(
                {
                    width: $(this).attr("data-percentage"),
                },
                2000
            );

        $(this)
            .find(".progress-number-mark")
            .animate(
                { left: $(this).attr("data-percentage") },
                {
                    duration: 2000,
                    step: function (now, fx) {
                        var data = Math.round(now);
                        $(this)
                            .find(".percent")
                            .html(data + "%");
                    },
                }
            );
    });
}