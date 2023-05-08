const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})


async function loginFormHandler(event) {
	event.preventDefault();
  
	const email = document.querySelector('#email-login').value.trim();
	const password = document.querySelector('#password-login').value.trim();
  
	if (email && password) {
	  const response = await fetch('/api/users/login', {
		method: 'post',
		body: JSON.stringify({
		  email,
		  password
		}),
		headers: { 'Content-Type': 'application/json' }
	  });
  
	  if (response.ok) {
		document.location.replace('/main/');
	  } else {
		alert(response.statusText);
	  }
	}
  }
  
  async function signupFormHandler(event) {
	event.preventDefault();
  
	const username = document.querySelector('#signup-username').value.trim();
	const email = document.querySelector('#signup-email').value.trim();
	const password = document.querySelector('#signup-password').value.trim();
  
	if (username && email && password) {
	  const response = await fetch('/api/users', {
		method: 'post',
		body: JSON.stringify({
		  username,
		  email,
		  password
		}),
		headers: { 'Content-Type': 'application/json' }
	  });
  
	  if (response.ok) {
		document.location.replace('/main/');
	  } else {
		alert(response.statusText);
	  }
	}
  }
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);