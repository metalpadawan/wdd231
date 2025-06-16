const container = document.querySelector('#submittedGamesContainer');
const games = JSON.parse(localStorage.getItem('submittedGames')) || [];

games.forEach(game => {
  const card = document.createElement('div');
  card.classList.add('game-card');

  card.innerHTML = `
    <img src="${game.imageURL}" alt="Cover of ${game.title}" loading="lazy" />
    <h3>${game.title}</h3>
    <p><strong>Developer:</strong> ${game.developer}</p>
    <p><strong>Genre:</strong> ${game.genre}</p>
    <p><strong>Platforms:</strong> ${game.platforms}</p>
    <p><strong>Released:</strong> ${game.releaseDate}</p>
    <p>${game.description}</p>
  `;

  container.appendChild(card);
});
