const ctx = document.getElementById('myChart');

async function chartData() {
  const response = await fetch('/api/members/1');
  if (response.ok) {
    const memberData = response.json();
    return memberData;
  }
}

let workoutHours;

chartData().then((resData) => {
  let workouts = resData['logged_workouts'];
  workoutHours = workouts.map((element) => element.hours);
  console.log(workoutHours);
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
        data: workoutHours,
      },
    ],
  };

  const config = {
    type: 'line',
    data: data,
    options: {},
  };

  const myChart = new Chart(ctx, config);
});
