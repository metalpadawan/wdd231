document.querySelector('#gameForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const game = {
    title: document.querySelector('#title').value.trim(),
    developer: document.querySelector('#developer').value.trim(),
    releaseDate: document.querySelector('#releaseDate').value,
    platforms: document.querySelector('#platforms').value.trim(),
    genre: document.querySelector('#genre').value.trim(),
    description: document.querySelector('#description').value.trim(),
    imageURL: document.querySelector('#imageURL').value.trim(),
    submittedAt: new Date().toISOString()
  };

  // Store the latest submission for thankyou.html
  localStorage.setItem('submittedGame', JSON.stringify(game));

  // Append to the list of all submitted games
  const games = JSON.parse(localStorage.getItem('submittedGames')) || [];
  games.push(game);
  localStorage.setItem('submittedGames', JSON.stringify(games));

  // Redirect to thank you page
  window.location.href = 'thankyou.html';
});
