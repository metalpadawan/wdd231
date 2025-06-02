document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("timestamp").value = new Date().toISOString();

  // Enable modal opening
  document.querySelectorAll("a[href^='#modal-']").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const modalId = link.getAttribute("href").replace("#", "");
      document.getElementById(modalId).showModal();
    });
  });
});
