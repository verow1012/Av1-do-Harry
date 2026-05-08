// Elementos HTML usados na página de detalhes.
const detailLoading = document.getElementById('loading');
const detailLoadingText = document.getElementById('loading-text');
const detailError = document.getElementById('error-message');
const detailCard = document.getElementById('detail-card');
const detailTitle = document.getElementById('detail-title');
const detailExtract = document.getElementById('detail-extract');
const detailSource = document.getElementById('detail-source');

function showLoadingDetail() {
  // Exibir o indicador de carregamento e esconder os dados antigos.
  detailLoading.classList.remove('d-none');
  detailLoadingText.textContent = 'Buscando detalhes do artigo...';
  detailError.classList.add('d-none');
  detailCard.classList.add('d-none');
}

function hideLoadingDetail() {
  // Esconder o indicador depois que a API responder.
  detailLoading.classList.add('d-none');
  detailLoadingText.textContent = '';
}

function showErrorDetail(text) {
  // Mostrar mensagem de erro para o usuário.
  detailError.textContent = text;
  detailError.classList.remove('d-none');
}

function getQueryParam(name) {
  // Ler o parâmetro da URL, como pageid e title.
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

async function fetchDetail() {
  showLoadingDetail();

  const pageId = getQueryParam('pageid');
  const pageTitle = getQueryParam('title') || 'Artigo de tênis de mesa';

  if (!pageId) {
    showErrorDetail('Nenhum artigo selecionado. Volte para a página inicial e escolha um item.');
    hideLoadingDetail();
    return;
  }

  const apiDetailUrl = `https://pt.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro&explaintext=true&pageids=${pageId}&utf8=&origin=*`;

  try {
    const response = await fetch(apiDetailUrl);
    if (!response.ok) {
      throw new Error('A requisição de detalhe falhou: ' + response.status);
    }

    const data = await response.json();
    const pageData = data.query && data.query.pages ? data.query.pages[pageId] : null;

    if (!pageData || !pageData.extract) {
      showErrorDetail('Não foi possível encontrar o conteúdo do artigo selecionado.');
      return;
    }

    detailTitle.textContent = pageTitle;
    detailExtract.textContent = pageData.extract;
    detailSource.innerHTML = `Fonte: <a href="https://pt.wikipedia.org/?curid=${pageId}" target="_blank" rel="noopener noreferrer">Wikipedia</a>`;
    detailCard.classList.remove('d-none');
  } catch (error) {
    console.error(error);
    showErrorDetail('Erro ao buscar o detalhe. Tente recarregar a página.');
  } finally {
    hideLoadingDetail();
  }
}

window.addEventListener('DOMContentLoaded', fetchDetail);
