const modal = document.getElementById('modal');
const closeButton = modal.querySelector('.close-btn');

// Get modal content elements
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const modalGenre = document.getElementById('modalGenre');
const modalPlatform = document.getElementById('modalPlatform');
const modalDeveloper = document.getElementById('modalDeveloper');
const modalWebsite = document.getElementById('modalWebsite');
const modalYear = document.getElementById('modalYear');
const modalTrailer = document.getElementById('modalTrailer');
const modalTrailerContainer = document.getElementById('modalTrailerContainer');

export function openModal(game) {
  modalTitle.textContent = game.title;
  modalImage.src = game.image;
  modalImage.alt = `${game.title} Cover Art`;
  modalDescription.textContent = game.description;
  modalGenre.textContent = game.genre;
  modalPlatform.textContent = game.platform;
  modalDeveloper.textContent = game.developer;
  modalWebsite.href = game.website;
  modalWebsite.textContent = "Official Website";
  modalYear.textContent = game.year;

  if (game.trailer) {
    modalTrailer.src = game.trailer; // must be a full embed URL
    modalTrailerContainer.style.display = 'block';
  } else {
    modalTrailer.src = '';
    modalTrailerContainer.style.display = 'none';
  }

  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  closeButton.focus();
}

export function closeModal() {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  modalTrailer.src = ''; // Stop video playback
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
