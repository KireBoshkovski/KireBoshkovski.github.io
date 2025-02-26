// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70, // Offset for fixed nav
          behavior: 'smooth',
        });
      }
    });
  });
  
  // Contact Form Submission (Placeholder)
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');
  
    if (name && email && message) {
      formMessage.style.color = 'green';
      formMessage.textContent = 'Thank you for your message!';
      this.reset(); // Clear the form
    } else {
      formMessage.style.color = 'red';
      formMessage.textContent = 'Please fill in all fields.';
    }
  });


  console.log("DA")