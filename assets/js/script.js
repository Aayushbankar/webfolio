// Hamburger menu toggle for all devices
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
  
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  });
  