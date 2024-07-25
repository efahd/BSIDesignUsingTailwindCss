// import { data } from 'autoprefixer';
import { loadChart } from './chartLoader';

document.addEventListener('DOMContentLoaded', () => {
    // loadChart('line', '#chart1');
    // loadChart('bar', '#chart2');
    // loadChart('column', '#chart3');
    loadChart('donut','#chart4a', {
        data: [44, 55, 41, 17, 15]
    });
    loadChart('donut', '#chart4b', {
        data: [15, 25, 35, 45, 12],
    });
    loadChart('donut','#chart4c', {
        data: [25, 35, 45, 55, 19],
    });
    // loadChart('radial', '#chart5');
});