/**
* Template Name: WeBuild
* Template URL: https://bootstrapmade.com/free-bootstrap-coming-soon-template-countdwon/
* Updated: Mar 17 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/



// JavaScript to handle active class toggle
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-item .nav-link");

  // Function to remove 'active' from all links and add to the clicked one
  function activateLink(event) {
    navLinks.forEach(nav => nav.classList.remove("active")); // Remove active from all links
    event.target.classList.add("active"); // Add active to the clicked link
  }

  // Attach click event to each nav link
  navLinks.forEach(link => {
    link.addEventListener("click", activateLink);
  });
});
