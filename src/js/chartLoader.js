export async function loadChart(chartType, elementId, config) {
    try {
        switch (chartType) {
            // case 'line':
            //     const { renderLineChart } = await import('../../build/js/charts/lineChart.js');
            //     renderLineChart(elementId);
            //     break;
            // case 'bar':
            //     const { renderBarChart } = await import('../../build/js/charts/barChart.js');
            //     renderBarChart(elementId);
            //     break;
            // case 'column':
            //     const { renderColumnChart } = await import('../../build/js/charts/columnChart.js');
            //     renderColumnChart(elementId);
            //     break;
            case 'donut':
                const { renderPieChart } = await import('../../build/js/charts/donutChart.js');
                renderPieChart(elementId, config.data);
                break;
            // case 'radial':
            //     const { renderRadialChart } = await import('../../build/js/charts/radialChart.js');
            //     renderRadialChart(elementId);
            //     break;
            default:
                console.error('unknown chart type: ', chartType);
        }
    } catch (error) {
        console.error(`Failed to load ${chartType} chart in element ${elementId}:`, error);    
    }
}