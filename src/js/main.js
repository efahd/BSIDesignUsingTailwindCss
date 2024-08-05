
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
    
    //-- RENDER THE HORIZONTAL LINE CHART DATA -- 
    
    
    //-- RENDER PROGRESS BAR SCRIPT --
    $("[progress-bar]").each(function() {
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
                {left: $(this).attr("data-percentage")},
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