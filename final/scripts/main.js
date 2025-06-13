// main.js
import { loadGames, renderGames } from './modules/games.js';
import { openGameModal, initModal } from './modules/modal.js';
import { loadSubmittedGames } from './modules/form.js';

document.addEventListener('DOMContentLoaded', async () => {
  initModal();
  const container = document.querySelector('#gameList');

  // Load default + user-submitted games
  const defaultGames = await loadGames();
  const submittedGames = loadSubmittedGames();
  const allGames = [...defaultGames, ...submittedGames];

  renderGames(allGames, container);
});
