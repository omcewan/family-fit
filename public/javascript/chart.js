// Chart library from My Chart
// const chart = require('chart.js');
const ctx = document.getElementById('myChart');
const labels = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Test Graph',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [5, 10, 15, 20, 25, 30, 35],
    },
  ],
};

const config = {
  type: 'line',
  data: data,
  options: {},
};

const myChart = new Chart(ctx, config);
