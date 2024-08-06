
import { loadChart } from './chartLoader'; // The charts will be load asynchronously using chartLoader.js
import $ from 'jquery';
import '../../build/js/charts/animated-counter-progressbar';

//-- Place the inputs for the charts in the code below for each charts respectively. --
// Data fetch from the database will placed in variable 'data' which will load into their own respective charts and their settings.
// [IMPORTANT] KEEP IN MIND ANY EDITS MADE IN THIS PAGE SHOULD BE COMPILED AFTER USING COMMAND 'npx webpack'
document.addEventListener('DOMContentLoaded', () => {
    // loadChart('line', '#chart1');
    // loadChart('bar', '#chart2');
    // loadChart('column', '#chart3');
    // loadChart('radial', '#chart5');

    //-- RENDER THE DONUT/PIE CHART DATA --
    loadChart('donut','#chart4a', {
        data: [44, 55, 41, 17, 15]
    });
    loadChart('donut', '#chart4b', {
        data: [15, 25, 35, 45, 12],
    });
    loadChart('donut','#chart4c', {
        data: [25, 35, 45, 55, 19],
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