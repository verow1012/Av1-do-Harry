// URL da API pública do Wikipedia usada para buscar artigos sobre tênis de mesa.
const apiUrl = 'https://pt.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=tênis%20de%20mesa&utf8=&origin=*';

// Elementos HTML que vamos usar para mostrar estado, erro e cards.
const loadingElement = document.getElementById('loading');
const loadingText = document.getElementById('loading-text');
const errorMessage = document.getElementById('error-message');
const cardsContainer = document.getElementById('cards-container');

// Mostrar indicador de carregamento enquanto a API responde.
function showLoading() {
  loadingElement.classList.remove('d-none');
  loadingText.textContent = 'Carregando dados da API pública...';
  errorMessage.classList.add('d-none');
}

// Esconder o indicador quando o carregamento terminar.
function hideLoading() {
  loadingElement.classList.add('d-none');
  loadingText.textContent = '';
}

// Mostrar uma mensagem de erro quando a requisição falhar.
function showError(text) {
  errorMessage.textContent = text;
  errorMessage.classList.remove('d-none');
}

// Limpar o texto vindo do snippet HTML para deixar a descrição mais legível.
function cleanText(html) {
  const temp = document.createElement('div');
  temp.innerHTML = html;
  return temp.textContent || temp.innerText || '';
}

// Criar um card Bootstrap para cada artigo retornado pela API.
function createArticleCard(result) {
  const column = document.createElement('div');
  column.className = 'col-12 col-md-6 col-lg-4';

  const card = document.createElement('div');
  card.className = 'card article-card h-100';

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body d-flex flex-column';

  const title = document.createElement('h3');
  title.className = 'card-title h5';
  title.textContent = result.title;

  const description = document.createElement('p');
  description.className = 'card-text text-secondary mb-4';
  description.textContent = cleanText(result.snippet) + '...';

  const button = document.createElement('a');
  button.className = 'btn btn-primary mt-auto';
  button.textContent = 'Ver detalhes';
  button.href = `detalhes.html?pageid=${result.pageid}&title=${encodeURIComponent(result.title)}`;

  cardBody.append(title, description, button);
  card.appendChild(cardBody);
  column.appendChild(card);

  return column;
}

// Buscar artigos da API e exibir os cards na tela.
async function fetchArticles() {
  showLoading();

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('A requisição falhou com o código ' + response.status);
    }

    const data = await response.json();
    const results = data.query && data.query.search ? data.query.search : [];

    if (results.length === 0) {
      showError('Não foi possível encontrar artigos sobre tênis de mesa na API.');
      return;
    }

    results.slice(0, 9).forEach((item) => {
      const card = createArticleCard(item);
      cardsContainer.appendChild(card);
    });
  } catch (error) {
    console.error(error);
    showError('Erro ao carregar os dados. Verifique a conexão ou tente novamente.');
  } finally {
    hideLoading();
  }
}

window.addEventListener('DOMContentLoaded', fetchArticles);
