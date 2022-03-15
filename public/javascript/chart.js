const ctx = document.getElementById('myChart');

async function chartData() {
  const response = await fetch('/api/members/2');
  if (response.ok) {
    const memberData = await response.json();
    const workout = await memberData['logged_workouts'];
    console.log(workout);
    const workoutHours = await workout.map((element) => element.minutes);
    const labels = await workout.map((element) =>
      element.createdAt.substring(0, 10)
    );

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
  }
}

chartData();
