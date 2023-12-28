class ProjectObj {
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
  
  // Assign the Project class to the window object
  window.ProjectObj = ProjectObj;
  