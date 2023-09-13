const toggleSwitch = document.querySelector('.toggle-container input[type="checkbox"]');
const toggleIcon = document.querySelector('.toggle-switch');

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleIcon.classList.remove('fa-sun');
    toggleIcon.classList.add('fa-moon');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleIcon.classList.remove('fa-moon');
    toggleIcon.classList.add('fa-sun');
  }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

const toggleButton = document.querySelector('.toggle-container input[type="checkbox"]');
toggleButton.addEventListener('change', switchTheme, false);