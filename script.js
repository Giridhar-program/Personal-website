
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector(".nav");

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));
});

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            alert('✅ Your message has been sent successfully!\nThank you for reaching out to me.');
            
            contactForm.reset(); 
        });
    }
});


document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    document.querySelectorAll(".error-message").forEach(function(element) {
        element.textContent = "";
    });

    let isValid = true;
    let formStatus = document.getElementById("formStatus");

    let name = document.getElementById("name");
    if (!name.value.match(/^[A-Za-z ]+$/)) {
        document.getElementById("nameError").textContent = "Please enter a valid name (letters and spaces only).";
        isValid = false;
    }

    let email = document.getElementById("email");
    if (!email.value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    let rating = document.getElementById("rating");
    if (rating.value < 1 || rating.value > 5) {
        document.getElementById("ratingError").textContent = "Please provide a rating between 1 and 5.";
        isValid = false;
    }

    let message = document.getElementById("message");
    if (message.value.length < 20) {
        document.getElementById("messageError").textContent = "Your message must be at least 20 characters long.";
        isValid = false;
    }

    if (isValid) {
        formStatus.textContent = "Thank you for your feedback!";
        formStatus.style.color = "green";
        document.getElementById("feedbackForm").reset();
    } else {
        formStatus.textContent = "Please correct the errors and try again.";
        formStatus.style.color = "red";
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project');
  
    projectCards.forEach(card => {
      card.addEventListener('click', function() {
        const techName = this.querySelector('h3').textContent;
        alert(`You clicked on the ${techName} project!`);
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const portfolioSection = document.querySelector('#portfolio');
        data.projects.forEach(project => {
          const projectHTML = `
            <div class="project">
              <h3>${project.name}</h3>
              <div class="project-content">
                <img src="${project.image}" alt="${project.name}" class="tech-icon">
                <p>${project.description}</p>
              </div>
            </div>
          `;
          portfolioSection.innerHTML += projectHTML;
        });
      })
      .catch(error => console.log('Error loading JSON:', error));
  });
