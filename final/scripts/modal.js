// scripts/modal.js

const modal = document.getElementById('modal');
const modalDetails = document.getElementById('modal-details');
const closeButton = modal.querySelector('.close-button');

export function openModal(game) {
  modalDetails.innerHTML = `
    <h2>${game.title}</h2>
    <img src="${game.image}" alt="${game.title} Cover Art">
    <p><strong>Genre:</strong> ${game.genre}</p>
    <p><strong>Developer:</strong> ${game.developer}</p>
    <p><strong>Release Year:</strong> ${game.year}</p>
    <p>${game.description}</p>
  `;

  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  closeButton.focus();
}

export function closeModal() {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

// Event Listeners
closeButton.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
