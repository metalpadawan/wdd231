import { openModal } from './modal.js';

const gameContainer = document.querySelector("#game-cards");

// Filter controls
const genreSelect = document.querySelector("#genreFilter");
const yearSelect = document.querySelector("#yearFilter");
const platformSelect = document.querySelector("#platformFilter");
const sortSelect = document.querySelector("#sortAZ");

let allGames = [];

async function fetchGames() {
  try {
    const response = await fetch("data/games.json");
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    allGames = data.games;

    populateFilterOptions(allGames);
    applyFilters(); // Initial render
  } catch (error) {
    console.error("Error fetching games:", error);
    gameContainer.innerHTML = "<p>Failed to load games. Please try again later.</p>";
  }
}

function populateFilterOptions(games) {
  // Unique genres
  const genres = [...new Set(games.map(g => g.genre))].sort();

  // Unique years
  const years = [...new Set(games.map(g => g.year))].sort((a, b) => b - a);

  // Platforms: collect and split by comma
  const platformsSet = new Set();
  games.forEach(g => {
    g.platform.split(",").forEach(p => platformsSet.add(p.trim()));
  });
  const platforms = [...platformsSet].sort();

  // Populate genre filter
  genres.forEach(genre => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreSelect.appendChild(option);
  });

  // Populate year filter
  years.forEach(year => {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  });

  // Populate platform filter
  platforms.forEach(platform => {
    const option = document.createElement("option");
    option.value = platform;
    option.textContent = platform;
    platformSelect.appendChild(option);
  });
}

function applyFilters() {
  let filtered = [...allGames];

  const selectedGenre = genreSelect?.value || "all";
  const selectedYear = yearSelect?.value || "all";
  const selectedPlatform = platformSelect?.value || "all";
  const sortType = sortSelect?.value || "none";

  // Genre filter
  if (selectedGenre !== "all") {
    filtered = filtered.filter(game => game.genre === selectedGenre);
  }

  // Year filter
  if (selectedYear !== "all") {
    filtered = filtered.filter(game => String(game.year) === selectedYear);
  }

  // Platform filter (match any part of the comma-separated string)
  if (selectedPlatform !== "all") {
    filtered = filtered.filter(game =>
      game.platform.split(",").map(p => p.trim()).includes(selectedPlatform)
    );
  }

  // Sort A–Z by title
  if (sortType === "az") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  }

  displayGames(filtered);
}

function displayGames(games) {
  gameContainer.innerHTML = "";

  if (games.length === 0) {
    gameContainer.innerHTML = "<p>No games match the selected filters.</p>";
    return;
  }

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
        <button class="details-btn">View Details</button>
      </div>
    `;

    // Hook modal
    card.querySelector(".details-btn").addEventListener("click", () => {
      openModal(game);
    });

    gameContainer.appendChild(card);
  });
}

// Add filter listeners
genreSelect?.addEventListener("change", applyFilters);
yearSelect?.addEventListener("change", applyFilters);
platformSelect?.addEventListener("change", applyFilters);
sortSelect?.addEventListener("change", applyFilters);

// Init
fetchGames();
