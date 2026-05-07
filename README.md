# Projeto AV1 - Tênis de Mesa (Ping Pong)

## Descrição do projeto

Este projeto é uma aplicação web simples feita por um aluno iniciante do segundo ano do ensino médio. Ele demonstra o consumo de dados de uma API pública relacionada a esportes, exibindo artigos sobre tênis de mesa usando HTML5, CSS3, Bootstrap, JavaScript puro, Fetch API, Async/Await e JSON.

O projeto tem duas páginas:

- `index.html` - página de listagem com cards dinâmicos
- `detalhes.html` - página de detalhes que mostra mais informações sobre um artigo específico

## Estrutura de pastas obrigatória

```text
av1-dwb-nome-sobrenome-2bimestre/
  index.html
  detalhes.html
  css/
    style.css
  js/
    script.js
    detalhes.js
  README.md
```

## Como funciona

1. `index.html` faz uma requisição para a API pública do Wikipedia usando `fetch` e `async/await`.
2. O projeto pesquisa artigos relacionados a "table tennis player" e mostra os resultados como cards.
3. O conteúdo é transformado de JSON para elementos HTML e exibido dinamicamente no DOM.
4. Ao clicar em "Ver detalhes", o usuário é levado para `detalhes.html` com o `pageid` e o `title` na URL.
5. `detalhes.js` usa `URLSearchParams` para ler os parâmetros da URL, faz uma segunda requisição à API e exibe o texto do artigo.
6. Ambas as páginas mostram um indicador de carregamento e mensagens de erro se a requisição falhar.

## O que foi usado

- HTML5
- CSS3
- Bootstrap 5
- JavaScript puro
- Fetch API
- Async/Await
- JSON
- Git
- GitHub

## Como rodar o projeto

### Opção recomendada: servidor local

É melhor usar um servidor local para evitar problemas de CORS e abrir os arquivos em um navegador.

Se você usa o Visual Studio Code, instale a extensão **Live Server** e clique em **Go Live**.

Se preferir usar linha de comando:

- Windows (PowerShell):
  ```powershell
  cd "c:\Users\lucas_veronezi\Desktop\HARRY CAVALEIRO MEDIEVAL\av1-dwb-nome-sobrenome-2bimestre"
  python -m http.server 5500
  ```

Depois abra no navegador:

```
http://127.0.0.1:5500/index.html
```

### Opção alternativa: abrir direto no navegador

Também é possível abrir `index.html` no navegador, mas a versão com servidor local é mais confiável para o `fetch`.

## Como subir no GitHub

1. Abra o terminal na pasta `av1-dwb-nome-sobrenome-2bimestre`.
2. Inicialize um repositório Git:
   ```bash
   git init
   git add .
   git commit -m "Primeiro commit: projeto AV1 de tênis de mesa"
   ```
3. Crie um repositório no GitHub com o mesmo nome.
4. Conecte o repositório local ao GitHub:
   ```bash
   git remote add origin https://github.com/seu-usuario/av1-dwb-nome-sobrenome-2bimestre.git
   git branch -M main
   git push -u origin main
   ```

Se usar o GitHub Desktop, adicione os arquivos, escreva uma mensagem de commit e envie para o GitHub.

## O que falar para o professor na apresentação

- Este projeto usa **API pública** do Wikipedia para buscar artigos sobre tênis de mesa.
- A página inicial consome dados usando **fetch** e **async/await**.
- Os resultados aparecem dinamicamente no DOM com cards bonitos e responsivos.
- O projeto usa **Bootstrap** para o layout e responsividade.
- A página de detalhes lê os parâmetros da URL com **URLSearchParams**.
- Mostrei tratamento de erros e um feedback visual de carregamento.
- O código está dividido em arquivos separados para organizar HTML, CSS e JavaScript.

## Explicação das partes importantes

### `index.html`
- Contém a estrutura da lista de artigos.
- Usa `script type="module"` para importar `js/script.js`.
- Inclui um spinner para mostrar que os dados estão carregando.

### `detalhes.html`
- Recebe o `pageid` e o `title` via parâmetros na URL.
- Mostra o artigo escolhido usando a segunda requisição à API.

### `js/script.js`
- `fetchArticles()` faz a requisição à API do Wikipedia.
- `await fetch(apiUrl)` usa `async/await` para aguardar a resposta.
- `response.json()` converte a resposta em JSON.
- `createArticleCard()` cria os cards dinamicamente no DOM.
- `button.href` usa `encodeURIComponent` para passar o título com segurança na URL.

### `js/detalhes.js`
- `new URLSearchParams(window.location.search)` lê os parâmetros da URL.
- `getQueryParam('pageid')` pega o ID do artigo escolhido.
- `fetch(apiDetailUrl)` usa a API novamente para buscar o texto completo do artigo.
- O resultado aparece em `detailCard` depois do carregamento.

## Sugestões de melhorias futuras

- Adicionar um campo de busca para pesquisar outros artigos de tênis de mesa.
- Mostrar imagens dos artigos usando outra propriedade da API.
- Criar uma lista de atletas famosos com estatísticas reais.
- Adicionar um tema escuro para melhorar o visual.
- Salvar artigos favoritos no `localStorage` do navegador.

## Observações finais

O projeto foi feito pensando em código simples e fácil de entender. Ele cumpre todos os requisitos de consumo de API pública, layout responsivo com Bootstrap, feedback de carregamento, tratamento de erros e navegação entre páginas.
