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

document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");

  searchForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
    const query = searchInput.value.toLowerCase().trim();
    if (!query) {
      alert("Please enter a search term.");
      return;
    }

    // Search for matching text
    const elements = document.querySelectorAll("body *:not(script):not(style):not(meta):not(link):not(input):not(button)");
    let firstMatch = null;

    elements.forEach((el) => {
      // Skip elements that are not visible or have no text content
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0 || !el.textContent.trim()) return;

      // Check if the element's text includes the query
      if (el.textContent.toLowerCase().includes(query)) {
        if (!firstMatch) {
          firstMatch = el; // Save the first match
        }
      }
    });

    if (firstMatch) {
      // Scroll to the first match
      firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      alert(`No results found for: "${query}"`);
    }
  });
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

document.addEventListener("DOMContentLoaded", function () {
  const calendarHeader = document.querySelector(".calendar-header h3");
  const calendarDates = document.querySelector(".calendar-dates");

  // Set the month to April 2025
  const month = "April";
  const year = 2025;

  // Update the calendar header
  calendarHeader.textContent = `${month} ${year}`;

  // Generate dates for April 2025
  const daysInApril = 30;
  const firstDay = new Date(`${month} 1, ${year}`).getDay(); // Get the first day of the month (0 = Sunday, 1 = Monday, etc.)

  // Clear existing dates
  calendarDates.innerHTML = "";

  // Add empty boxes for days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    const emptyBox = document.createElement("div");
    emptyBox.classList.add("day-box", "prev-month-day");
    calendarDates.appendChild(emptyBox);
  }

  // Add days for April
  for (let day = 1; day <= daysInApril; day++) {
    const dayBox = document.createElement("div");
    dayBox.classList.add("day-box");
    dayBox.innerHTML = `<span class="date-num">${day}</span>`;
    calendarDates.appendChild(dayBox);
  }
});
