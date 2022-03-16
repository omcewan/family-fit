async function signupFormHandler(event) {
  event.preventDefault();

  const first_name = document.querySelector('#firstname-signup').value.trim();
  const last_name = document.querySelector('#lastname-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#passwordd-signup').value.trim();
  const family = parseInt(document.querySelector('#familyId-signup').value.trim());

  if (first_name && last_name && email && password) {
    const response = await fetch('/api/members', {
      method: 'post',
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        password,
        family,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/dashboard')
      console.log('SUCCESS');
    } else {
      alert(response.statusText);
    }
  }
}

async function loginFormHandler(event) {
  event.preventDefault();

  console.log('orlando')

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
      document.location.replace('/dashboard')
      console.log('Your are logged in');
    } else {
      alert('Incorrect Password');
    }
  }
}

document
  .querySelector('.sign-up-form')
  .addEventListener('submit', signupFormHandler);
document
  .querySelector('.sign-in-form')
  .addEventListener('submit', loginFormHandler);
