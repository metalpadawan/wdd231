async function loadSpotlights() {
  try {
    const response = await fetch('data/members.json');
    const data = await response.json();

    // Filter for Gold (3) and Silver (2) members
    const spotlightCandidates = data.filter(member =>
      member.membership === 2 || member.membership === 3
    );

    // Shuffle and select up to 3 random members
    const selected = spotlightCandidates
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    const container = document.getElementById('spotlight-container');
    container.innerHTML = ''; // Clear existing

    selected.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('spotlight-card');

      const membershipLevel = member.membership === 3 ? 'Gold' : 'Silver';

      card.innerHTML = `
        <img src="images/${member.image}" alt="Logo of ${member.name}" loading="lazy">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank" rel="noopener noreferrer">Visit Website</a>
        <p class="membership-level">${membershipLevel} Member</p>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error('Failed to load spotlights:', error);
  }
}

loadSpotlights();
