const loadingText = document.getElementById('loading-text');
const errorMessage = document.getElementById('error-message');
const playerList = document.getElementById('player-list');

async function loadPlayers() {
  try {
    const response = await fetch('/api/players');
    if (!response.ok) {
      throw new Error('Falha ao carregar a API de jogadores.');
    }
    const players = await response.json();
    renderPlayers(players);
  } catch (error) {
    showError(error.message);
  }
}

function renderPlayers(players) {
  if (!players || players.length === 0) {
    showError('Nenhum jogador encontrado na API.');
    return;
  }

  loadingText.classList.add('d-none');
  playerList.innerHTML = players
    .map(
      (player) => `
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card player-card h-100">
            <div class="card-body text-center d-flex flex-column">
              <img src="${player.cardImage}" alt="${player.name}" class="player-img mb-3 mx-auto" />
              <h3 class="card-title h5">${player.rank}. ${player.name}</h3>
              <p class="card-text mb-3">${player.country}</p>
              <p class="text-muted small mb-4">${player.summary}</p>
              <a class="btn btn-primary mt-auto" href="player.html?player=${player.id}" target="_blank" rel="noopener noreferrer">Ver perfil</a>
            </div>
          </div>
        </div>`
    )
    .join('');
}

function showError(message) {
  loadingText.classList.add('d-none');
  errorMessage.textContent = message;
  errorMessage.classList.remove('d-none');
}

loadPlayers();
