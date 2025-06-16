export function renderGames(games, container) {
  container.innerHTML = "";

  games.forEach((game) => {
    const card = document.createElement("div");
    card.classList.add("game-card");
    card.innerHTML = `
      <img src="${game.imageURL}" alt="${game.title} Screenshot" loading="lazy">
      <h3>${game.title}</h3>
      <p><strong>Genre:</strong> ${game.genre}</p>
      <p><strong>Platforms:</strong> ${game.platforms}</p>
      <p><strong>Release:</strong> ${game.releaseDate}</p>
    `;
    container.appendChild(card);
  });
}
