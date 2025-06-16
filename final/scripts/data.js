// scripts/gallery.js
import { openModal } from './modal.js';

export function displayGames(games) {
  const gallery = document.getElementById('game-gallery');
  gallery.innerHTML = '';

  games.forEach(game => {
    const card = document.createElement('div');
    card.classList.add('game-card');

    card.innerHTML = `
      <img src="${game.image}" alt="${game.title}" loading="lazy" />
      <h3>${game.title}</h3>
      <p><strong>Genre:</strong> ${game.genre}</p>
      <p><strong>Platform:</strong> ${game.platform}</p>
      <p><strong>Release:</strong> ${game.release}</p>
      <button class="info-btn" data-id="${game.id}">Details</button>
    `;

    gallery.appendChild(card);
  });

  // Add modal listeners
  document.querySelectorAll('.info-btn').forEach(button => {
    button.addEventListener('click', () => {
      const gameId = button.getAttribute('data-id');
      const game = games.find(g => g.id === gameId);
      if (game) openModal(game);
    });
  });
}

export function setupFilterButtons(games) {
  const buttons = document.querySelectorAll('#filters button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const genre = button.getAttribute('data-genre');
      const filtered = genre === 'all' ? games : games.filter(g => g.genre === genre);
      displayGames(filtered);
    });
  });
}
