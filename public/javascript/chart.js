const ctx = document.getElementById('myChart');
const ctx1 = document.getElementById('familyChart');
let memberID = JSON.parse(localStorage.getItem('memberID'));

async function myChartData() {
  const response = await fetch(`/api/members/${memberID[0]}`);
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
      type: 'bar',
      data: data,
      options: {},
    };

    const myChart = new Chart(ctx, config);
  }
}

async function familyChart() {
  const response = await fetch(`/api/families/${memberID[1]}`);
  if (response.ok) {
    const familyData = await response.json();
    const members = await familyData['members'];
    const labels = await members.map((element) => element.first_name);
    const memberHours = await members.map((element) => {
      return element.logged_workouts
        .map((element) => element.minutes)
        .reduce((pre, cur) => {
          return pre + cur;
        }, 0);
    });

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

async function logWorkout(event) {
  event.preventDefault();

  const minutes = document.querySelector('#minutes').value.trim();
  const workout = document
    .querySelector('#exerciseFormControlSelect')
    .value.trim();
  const member_id = memberID[0];
  let workout_id;
  switch (workout) {
    case 'Tredmill':
      workout_id = 1;
      break;
    case 'Weight Lifting':
      workout_id = 2;
      break;
    case 'Eliptical':
      workout_id = 3;
      break;
    case 'Abs':
      workout_id = 4;
      break;
    case 'Cycling':
      workout_id = 5;
      break;
  }

  const response = await fetch('/api/loggedworkouts', {
    method: 'post',
    body: JSON.stringify({
      workout_id,
      member_id,
      minutes,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    window.location.reload();
  }
}

document.querySelector('#logworkout').addEventListener('submit', logWorkout);

myChartData();
familyChart();
