async function signupFormHandler(event) {
  event.preventDefault();

  const first_name = document.querySelector('#firstname-signup').value.trim();
  const last_name = document.querySelector('#lastname-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#passwordd-signup').value.trim();
  const family_id = document.querySelector('#familyId-signup').value.trim();

  if (first_name && last_name && email && password) {
    const response = await fetch('/api/members', {
      method: 'post',
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        password,
        family_id,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    const memberData = await response.json();

    if (response.ok) {
      localStorage.clear();
      localStorage.setItem(
        'memberID',
        JSON.stringify([`${memberData.id}`, `${memberData.family_id}`])
      );
      document.location.replace('/dashboard');
    } else {
      alert(
        'Please make sure to fill the form out complete and if you wish to add a Family please choose a number from 1 - 5!'
      );
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

    const memberData = await response.json();

    if (response.ok) {
      localStorage.clear();
      localStorage.setItem(
        'memberID',
        JSON.stringify([
          `${memberData.member.id}`,
          `${memberData.member.family_id}`,
        ])
      );
      document.location.replace(`/dashboard`);
      console.log('Your are logged in');
    } else {
      alert(
        'Please make sure the email and password are correct! Otherwise please use the sign up option!'
      );
    }
  }
}

document
  .querySelector('.sign-up-form')
  .addEventListener('submit', signupFormHandler);
document
  .querySelector('.sign-in-form')
  .addEventListener('submit', loginFormHandler);
