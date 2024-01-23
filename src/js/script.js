// Nav toggle.
var navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener('click', function (event) {
  document.body.classList.toggle('is-navigation-expanded');
  navToggle.classList.toggle('is-active');
  if (navToggle.classList.contains('is-active')) {
    navToggle.setAttribute('aria-expanded', 'true');
  } else {
    navToggle.setAttribute('aria-expanded', 'false');
  }
  event.preventDefault();
});

// Menu item links.
var menuItemLinks = document.querySelectorAll('.menu-item__link');
menuItemLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    document.body.classList.toggle('is-navigation-expanded');
    navToggle.classList.toggle('is-active');
  });
});

// Fading slideshow.
window.addEventListener("DOMContentLoaded", (e) => {
  document.querySelectorAll(".fading-slideshow > li").forEach((current) => {
    current.addEventListener("animationend", (e) => {
      e.target.parentNode.appendChild(e.target);
    });
  });
});

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
