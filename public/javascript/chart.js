const ctx = document.getElementById('myChart');
const ctx1 = document.getElementById('familyChart');

async function myChartData() {
  const response = await fetch('/api/members/1');
  if (response.ok) {
    const memberData = await response.json();
    const workout = await memberData['logged_workouts'];
    // console.log(workout);
    const workoutHours = await workout.map((element) => element.minutes);
    const labels = await workout.map((element) =>
      element.createdAt.substring(0, 10)
    );

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Minuetes Logged',
          // fill: true,
          borderDash: [5, 5],
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
  }
}

async function familyChart() {
  const response = await fetch('/api/families/1');
  if (response.ok) {
    const familyData = await response.json();
    const members = await familyData['members'];
    const labels = await members.map((element) => element.first_name);
    const memberHours = await members.map((element) => {
      return element.logged_workouts
        .map((element) => element.minutes)
        .reduce((pre, cur) => pre + cur);
    });
    console.log(memberHours);

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Minuetes Logged',
          // fill: true,
          // borderDash: [5, 5],
          backgroundColor: 'rgb(20, 0, 100)',
          borderColor: 'rgb(20, 0, 100)',
          data: memberHours,
        },
      ],
    };

    const config = {
      type: 'bar',
      data: data,
      options: {},
    };

    const myChart = new Chart(ctx1, config);
  }
}

myChartData();
familyChart();
