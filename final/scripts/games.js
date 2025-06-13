// scripts/games.js
import { openModal } from './modal.js';

const gameGrid = document.querySelector('#gameGrid');

// Example local game data
const games = [
  {
    id: 1,
    title: 'Voidwalker',
    image: 'images/voidwalker.webp',
    genre: 'Sci-Fi Adventure',
    description: 'Explore derelict ships and uncover mysteries in deep space.',
    developer: 'LunaSoft',
    year: 2023
  },
  {
    id: 2,
    title: 'PixelQuest',
    image: 'images/pixelquest.webp',
    genre: 'Retro Platformer',
    description: 'A throwback to the 8-bit era with tight controls and pixel art.',
    developer: 'RetroByte',
    year: 2024
  }
  // Add more games as needed
];

function createGameCard(game) {
  const card = document.createElement('div');
  card.classList.add('game-card');
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `View details for ${game.title}`);

  card.innerHTML = `
    <img src="${game.image}" alt="${game.title} Cover Art" loading="lazy">
    <h3>${game.title}</h3>
    <p>${game.genre}</p>
  `;

  card.addEventListener('click', () => openModal(game));
  card.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') openModal(game);
  });

  return card;
}

function renderGames() {
  games.forEach(game => {
    const card = createGameCard(game);
    gameGrid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderGames);
