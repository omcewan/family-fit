// Chart library from My Chart
const chart =require('chart.js');
const myChart = new chart.Chart(ctx, {});

// importing and regestering all controllers for My Chart
import chart from 'chart.js/auto';

// importing helper functions
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';

const mixedChart = new Chart(ctx, {
  data: {
    datasets: [{
      type: 'radar',
      label: "${''}'s Progress Chart",
      data: [],
    
    }, {
      type: 'pie',
      label: 'Total Family Work-out Chart',
      data: []
    }]

  }
})
