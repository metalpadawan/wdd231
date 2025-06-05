const gridContainer = document.querySelector('.grid-container');
const sidebar = document.createElement('div');
sidebar.classList.add('sidebar');
document.querySelector('main').prepend(sidebar);

// Fetch and display location cards
async function displayDiscoverItems() {
  try {
    const response = await fetch('data/discover.json');
    if (!response.ok) throw new Error('Failed to fetch discover data');
    const data = await response.json();

    data.forEach((item, index) => {
      const card = document.createElement('section');
      card.classList.add('discover-card');
      card.style.gridArea = `card${index + 1}`;

      card.innerHTML = `
        <h2>${item.name}</h2>
        <figure>
          <img src="${item.photo}" alt="Photo of ${item.name}" width="300" height="200" loading="lazy" />
        </figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <p><strong>Cost:</strong> ${item.cost}</p>
        <button>Learn More</button>
      `;

      gridContainer.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading discover data:', error);
    gridContainer.innerHTML = '<p>Unable to load location data at this time.</p>';
  }
}

// Display visit message using localStorage
function displayVisitMessage() {
  const now = Date.now();
  const lastVisit = localStorage.getItem('lastVisit');
  let message = '';

  if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
  } else {
    const msDiff = now - parseInt(lastVisit);
    const daysDiff = Math.floor(msDiff / (1000 * 60 * 60 * 24));
    if (daysDiff < 1) {
      message = "Back so soon! Awesome!";
    } else if (daysDiff === 1) {
      message = "You last visited 1 day ago.";
    } else {
      message = `You last visited ${daysDiff} days ago.`;
    }
  }

  sidebar.textContent = message;
  localStorage.setItem('lastVisit', now);
}

displayDiscoverItems();
displayVisitMessage();
