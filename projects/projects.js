class Project {
    constructor(title, description, technologies, image, link) {
      this.title = title;
      this.description = description;
      this.technologies = technologies;
      this.image = image;
      this.link = link;
    }
  
    // Method to get the project's details as an HTML string
    getDetails() {
      return `
        <div class="project">
          <h3>${this.title}</h3>
          <p>${this.description}</p>
          <ul>
            ${this.technologies.map((tech) => `<li>${tech}</li>`).join('')}
          </ul>
          <img src="${this.image}" alt="${this.title}" />
          <a href="${this.link}" target="_blank">View Project</a>
        </div>
      `;
    }
  }
  
  // Create some project instances
  const project1 = new Project(
    'Height Converter',
    'This Project demonstrats basic knowledge of JavaScript for operations.',
    ['HTML', 'CSS', 'JavaScript'],
    'height.jpg',
    'height.html'
  );
  
  const project2 = new Project(
    'Number Guessing Game',
    'This project demonstrates knowledge of functions and conditional statements.',
    ['HTML', 'CSS', 'JavaScript'],
    'guess.png',
    'guess.html'
  );
  
  const project3 = new Project(
    'Image Gallery',
    'A collection of pictures I\'ve currated.',
    ['HTML', 'CSS'],
    'https://via.placeholder.com/300x150',
    'gallery.html'
  ); 
  
  const project4 = new Project(
    'Where are you?',
    'This project shows where you are in the world.',
    ['HTML', 'CSS', 'JavaScript'],
    'https://via.placeholder.com/300x150',
    'geo.html'
  );

  const  project5 = new Project(
    'Random activity generator',
    'This prrroject will help you how when you are bored.',
    ['HTML', 'CSS', 'API\'s', 'JavaScript'],
    'https//via.placeholder.com/300x150',
    'randomAct.html'
  );
  
  // Use the object methods to display our projects
  const projectContainer = document.querySelector('.project-container');
  projectContainer.innerHTML = `
    ${project1.getDetails()}
    ${project2.getDetails()}
    ${project3.getDetails()}
    ${project4.getDetails()}
    ${project5.getDetails()}
  `;
  $(document).ready(function() {
    $("#modeSwitch").change(function() {
      if (this.checked) {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    });

    // Check if dark mode is enabled or disabled on page load
    if (localStorage.getItem("darkModeEnabled") === "true") {
      $("#modeSwitch").prop("checked", true);
      enableDarkMode();
    }
  });

  function enableDarkMode() {
    $("body").addClass("dark-mode");
    localStorage.setItem("darkModeEnabled", true);
  }

  function disableDarkMode() {
    $("body").removeClass("dark-mode");
    localStorage.setItem("darkModeEnabled", false);
  }