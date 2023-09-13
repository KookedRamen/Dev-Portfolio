// Get the form element
const form = document.querySelector('form');

// Listen for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from actually submitting

  // Get all the selected values
  const navigation = document.querySelector('[name="navigation"]').value;
  const visualAppeal = document.querySelector('[name="visual-appeal"]').value;
  const responsiveness = document.querySelector('[name="responsiveness"]').value;
  const loadingSpeed = document.querySelector('[name="loading-speed"]').value;
  const skillsHighlight = document.querySelector('[name="skills-highlight"]').value;
  const technicalIssues = document.querySelector('[name="technical-issues"]').value;
  const satisfaction = document.querySelector('[name="satisfaction"]').value;
  const source = Array.from(document.querySelectorAll('[name="source"]:checked')).map(input => input.value);
  const comments = document.querySelector('[name="comments"]').value;

  // Store the selected values in an array
  const feedbackArray = [navigation, visualAppeal, responsiveness, loadingSpeed, skillsHighlight, technicalIssues, satisfaction, source.join(', '), comments];

  // Convert the array to text
  const feedbackText = feedbackArray.join('\n');

  // Display the text at the bottom of the page
  const feedbackDisplay = document.querySelector('#feedback-display');
  feedbackDisplay.textContent = feedbackText;
});
