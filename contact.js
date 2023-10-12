const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
	event.preventDefault();
	const name = form.querySelector('#name').value;
	const email = form.querySelector('#email').value;
	const message = form.querySelector('#message').value;
	console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
	form.reset();
	alert('Thank you for contacting me!');
});