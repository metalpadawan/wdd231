// scripts/games.js
const gameContainer = document.querySelector("#game-cards");

async function fetchGames() {
  try {
    const response = await fetch("data/games.json");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    displayGames(data.games);
  } catch (error) {
    console.error("Error fetching games:", error);
    gameContainer.innerHTML = "<p>Failed to load games. Please try again later.</p>";
  }
}

function displayGames(games) {
  gameContainer.innerHTML = ""; // Clear if any

  games.forEach((game) => {
    const card = document.createElement("div");
    card.classList.add("game-card");

    card.innerHTML = `
      <img src="${game.image}" alt="${game.title} Screenshot" loading="lazy" />
      <div class="game-info">
        <h3>${game.title}</h3>
        <p><strong>Genre:</strong> ${game.genre}</p>
        <p><strong>Platform:</strong> ${game.platform}</p>
        <p><strong>Developer:</strong> ${game.developer}</p>
        <button class="details-btn" data-id="${game.id}">View Details</button>
      </div>
    `;

    gameContainer.appendChild(card);
  });

  // Optional: Hook up modal.js here to activate buttons
}

fetchGames();
