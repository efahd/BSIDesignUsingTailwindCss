//-- The code below for placing the charts configuration paths and loads the charts functions -- 
export async function loadChart(chartType, elementId, config) {
    try {
        switch (chartType) {
            case 'bar':
                const { renderBarChart } = await import('../../build/js/charts/barChart.js');
                renderBarChart(elementId, config);
                break;
            case 'barKPI':
                const { renderBarChartKPI } = await import('../../build/js/charts/barChartKPI.js');
                renderBarChartKPI(elementId, config.kpiName, config.value);
                break;
            
            case 'donut':
                const { renderPieChart } = await import('../../build/js/charts/donutChart.js');
                renderPieChart(elementId, config.data);
                break;      
            case 'energy':
                const { renderEnergyUsageChart } = await import('../../build/js/charts/LineChartUtility.js');
                renderEnergyUsageChart(elementId, config);
                break;
            case 'water':
                const { renderWaterUsageChart } = await import('../../build/js/charts/LineChartUtility.js');
                renderWaterUsageChart(elementId, config);
                break;
            default:
                console.error('unknown chart type: ', chartType);
        }
    } catch (error) {
        //Catch any missing or misconfigured charts
        console.error(`Failed to load ${chartType} chart in element ${elementId}:`, error);
    }
}