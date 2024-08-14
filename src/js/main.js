
import { loadChart } from './chartLoader'; // The charts will be load asynchronously using chartLoader.js
// import $ from 'jquery';
import '../../build/js/charts/animated-counter-progressbar';

//-- Function to fetch the chart data from API --
// Simulate API fetching with dummy data
function simulateFetch(url) {
    return new Promise((resolve) => {
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
                    data = { data: [44,21,21] }
                    break;
                case '/api/LessThan60Days':
                    data = { data: [13,32,65] }
                    break;
                case '/api/LessThan90Days' :
                    data = { data: [12,53,6] }
                    break;                
                case '/api/barData':
                    data = [
                        { seriesName: 'Energy', data: { April: 11.23, May: 54.23 } },
                        { seriesName: 'Water', data: { April: 56.63, May: 74.79 } }
                    ];
                    break;
                case '/api/kpiData':
                    data = [
                        { name: 'KPI 1 - Customer Satisfaction', value: 11.23 },
                        { name: 'KPI 2 - Customer Satisfaction', value: 86.43 },
                        { name: 'KPI 3 - Customer Satisfaction', value: 93.34 },
                        { name: 'KPI 4 - Customer Satisfaction', value: 68.75 },
                        { name: 'KPI 5 - Customer Satisfaction', value: 96.53 }
                    ];
                    break;
                case '/api/progressData':
                    data = {
                        open: 50,
                        closeComplete: 45,
                        cancel: 20,
                        total: 90
                    };
                    break;
                default:
                    data = [];
            }
            resolve(data);
        }, 1000); // Simulate 1-second network delay
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
    loadChart('donut','#chart4a', {
        data: donutData1.data
    });

    const donutData2 = await simulateFetch('/api/PMWorkOrder');
    loadChart('donut', '#chart4b', {
        data: donutData2.data
    });

    const donutData3 = await simulateFetch('/api/SCMWorkOrder');
    loadChart('donut','#chart4c', {
        data: donutData3.data
    });    

    //-- RENDER CHARTS FOR SUMMARY AGING WORK ORDER MANAGEMENT -- 
    const LessThan30Days = await simulateFetch('/api/LessThan30Days');
    loadChart('donut','#chart5a', {
        data: LessThan30Days.data
    });

    const LessThan60Days = await simulateFetch('/api/LessThan60Days');
    loadChart('donut', '#chart5b', {
        data: LessThan60Days.data,
    });

    const LessThan90Days = await simulateFetch('/api/LessThan90Days');
    loadChart('donut','#chart5c', {
        data: LessThan90Days.data,
    });  

    //-- RENDER BAR CHARTS FOR UTILITY MANAGEMENT --
    // Load Dummy Values(Should be replaced with real-data)
    const dummyData = {
        energy: {
            April: 11.23,
            May: 54.23
        },
        water : {
            April: 56.63,
            May: 74.79
        }
    };

    // Load Energy Chart
    loadChart('bar', '#chart6a', {
        seriesName: 'Energy',
        data: dummyData.energy
    });
    // Load Water Chart
    loadChart('bar', '#chart6b', {
        seriesName: 'Water',
        data: dummyData.water
    });

    //--RENDER BAR CHARTS FOR KEY PERFORMANCE INDEX(KPI) --
    // Load Dummy Values(Should be replaced with real-data)
    const kpiData = [
        { name: 'KPI 1 - Customer Satisfaction', value: 22.23 },
        { name: 'KPI 2 - Customer Satisfaction', value: 86.43 },
        { name: 'KPI 3 - Customer Satisfaction', value: 93.34 },
        { name: 'KPI 4 - Customer Satisfaction', value: 68.75 },
        { name: 'KPI 5 - Customer Satisfaction', value: 96.53 }
    ];

    // Load KPI Bar Chart
    kpiData.forEach((kpi, index) => {
        loadChart('barKPI',`#kpiBarChart${index + 1}`, {
            kpiName: kpi.name,
            value: kpi.value
        });
    });

    

    
    //-- RENDER PROGRESS BAR SCRIPT --

    //The value for progress-bar will be fetch through this variables, in case using a live dynamic data from database, edit the code below to fetch the value from other souce
    const progressValues = {
        open: 50,
        closeComplete: 45,
        cancel: 20,
        total: 90
    }

    // Update the progress bar elements with dynamic values
    for (const type in progressValues) {
        const progressValue = progressValues[type];
        
        $(`[data-type="${type}"]`).attr("data-percentage", `${progressValue}%`);
        $(`.progress-value-${type}`).text(`${progressValue}%`);
    }

    $("[progress-bar]").each(function() {
        const progressValue = $(this).attr("data-percentage");

        $(this)
            .find(".progress-fill")
            .animate(
                {
                    width: progressValue,
                },
                2000
            );
        
        $(this)
            .find(".progress-number-mark")
            .animate(
                {left: progressValue},
                {
                    duration: 2000,
                    step: function (now, fx) {
                        var data = Math.round(now);
                        $(this)
                            .find(".percent")
                            .html(data + '%');
                    },
                }
            );
    });
    
});