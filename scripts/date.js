// date.js

document.addEventListener("DOMContentLoaded", () => {
    // Set current year
    const currentYear = document.getElementById("currentyear");
    currentYear.textContent = new Date().getFullYear();
  
    // Set last modified date
    const lastModified = document.getElementById("lastModified");
    lastModified.textContent = `Last Updated: ${document.lastModified}`;
  });
  