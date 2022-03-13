const { post } = require('../../controllers/home-routes');

async function signupFormHandler(event) {
  event.preventDefault();

  const firstName = document.querySelector('#firstname-signup').value.trim();
  const lastName = document.querySelector('#lastname-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#passwordd-signup').value.trim();
  const family = document.querySelector('@familyId-signup').value.trim();

  if (firstName && lastName && email && password) {
    const response = await fetch('/api/members', {
      method: 'post',
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        family,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      console.log('SUCCESS');
    } else {
      alert(response.statusText);
    }
  }
}

async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#passwordd-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/members/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      console.log('Your are logged in');
    } else {
      alert('Incorrect Password');
    }
  }
}

document.querySelector('id').addEventListener('submit', signupFormHandler);
