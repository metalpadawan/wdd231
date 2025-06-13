// scripts/thankyou.js

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("submittedGame");
  const game = JSON.parse(localStorage.getItem("submittedGame"));

  if (game) {
    container.innerHTML = `
      <div class="game-card polaroid">
        <img src="${game.imageURL}" alt="${game.title} Screenshot" loading="lazy" />
        <h3>${game.title}</h3>
        <p><strong>Developer:</strong> ${game.developer}</p>
        <p><strong>Release Date:</strong> ${game.releaseDate}</p>
        <p><strong>Platforms:</strong> ${game.platforms}</p>
        <p><strong>Genre:</strong> ${game.genre}</p>
        <p>${game.description}</p>
      </div>
    `;
  } else {
    container.innerHTML = `<p>No submitted game found.</p>`;
  }
});
