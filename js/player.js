const queryString = new URLSearchParams(window.location.search);
const playerId = queryString.get('player');
const loadingText = document.getElementById('loading-text');
const errorMessage = document.getElementById('error-message');
const playerTitle = document.getElementById('player-name');
const playerCountry = document.getElementById('player-country');
const playerDescription = document.getElementById('player-description');
const playerTitles = document.getElementById('player-titles');
const playerImage = document.getElementById('player-image');
const playerCard = document.getElementById('player-card');

if (!playerId) {
  showError('Jogador não especificado na URL.');
} else {
  fetchPlayer(playerId);
}

async function fetchPlayer(id) {
  try {
    const response = await fetch(`/api/players/${encodeURIComponent(id)}`);
    if (!response.ok) {
      throw new Error('Jogador não encontrado na API.');
    }
    const player = await response.json();
    renderPlayer(player);
  } catch (error) {
    showError(error.message);
  }
}

function renderPlayer(player) {
  loadingText.classList.add('d-none');
  playerCard.classList.remove('d-none');
  playerTitle.textContent = player.name;
  playerCountry.textContent = player.country;
  playerDescription.textContent = player.description;
  playerImage.src = player.profileImage;
  playerImage.alt = player.name;
  playerTitles.innerHTML = player.titles
    .map((title) => `<li class="list-group-item">${title}</li>`)
    .join('');
}

function showError(message) {
  loadingText.classList.add('d-none');
  errorMessage.textContent = message;
  errorMessage.classList.remove('d-none');
}
