// scripts/date.js
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.querySelector('#currentYear');
  const lastModSpan = document.querySelector('#lastModified');

  if (yearSpan) {
    const year = new Date().getFullYear();
    yearSpan.textContent = year;
  }

  if (lastModSpan) {
    lastModSpan.textContent = document.lastModified;
  }
});
