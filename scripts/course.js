// course.js

document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-buttons button");
    const courseButtons = document.querySelectorAll(".cert-grid button");
  
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.textContent.toLowerCase();
  
        courseButtons.forEach((course) => {
          if (filter === "all") {
            course.style.display = "inline-block";
          } else if (course.classList.contains(filter)) {
            course.style.display = "inline-block";
          } else {
            course.style.display = "none";
          }
        });
      });
    });
  });
  