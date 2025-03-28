document.addEventListener("DOMContentLoaded", function () {
  const slideElements = document.querySelectorAll(".slide-in");

  function checkSlide() {
    slideElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      // When element is 90% within the viewport, add "visible" class
      if (rect.top < window.innerHeight * 0.9) {
        element.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkSlide);
  checkSlide(); // Check on page load in case some elements are already in view
});



document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function() {
      navLinks.classList.toggle("show");
  });
});





  document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
      link.addEventListener('click', function() {
        // Remove .active from all tabs
        tabLinks.forEach(item => item.classList.remove('active'));
        // Hide all tab contents
        tabContents.forEach(content => content.classList.remove('active'));

        // Activate the clicked tab
        this.classList.add('active');
        // Show the matching tab content
        const tabId = this.getAttribute('data-tab');
        const targetContent = document.getElementById(tabId);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      });
    });
  });
