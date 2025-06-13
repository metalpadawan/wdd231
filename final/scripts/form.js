// scripts/form.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("gameForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const gameData = {
      title: form.title.value.trim(),
      developer: form.developer.value.trim(),
      releaseDate: form.releaseDate.value,
      platforms: form.platforms.value.trim(),
      genre: form.genre.value.trim(),
      description: form.description.value.trim(),
      imageURL: form.imageURL.value.trim()
    };

    // Store in localStorage for thankyou.html to retrieve
    localStorage.setItem("submittedGame", JSON.stringify(gameData));

    // Redirect to thank you page
    window.location.href = "thankyou.html";
  });
});
