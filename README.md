# Projeto AV1 - Tênis de Mesa (Ping Pong)

## Descrição do projeto

Este projeto agora é uma aplicação web que usa uma API local para fornecer os dados dos 10 melhores jogadores históricos de tênis de mesa.

## Arquivos principais

- `index.html` - página inicial que carrega a lista de atletas diretamente da API local.
- `player.html` - página de perfil do atleta que carrega os dados do atleta pela API local.
- `api/players.json` - dados da API com todos os atletas e seus títulos.
- `server.js` - servidor Node.js que expõe a API e serve o site.
- `js/app.js` - comportamento da lista de atletas.
- `js/player.js` - comportamento da página de perfil.
- `css/style.css` - estilos do site.

## Como rodar o projeto

### Instalar dependências

Abra o terminal na pasta do projeto e rode:

```powershell
npm install
```

### Iniciar servidor local

```powershell
npm start
```

### Abrir no navegador

Depois acesse:

```
http://localhost:3000
```

## Como funciona

1. `server.js` serve os arquivos estáticos e a API.
2. `index.html` faz `fetch('/api/players')` para obter a lista de atletas.
3. `player.html` faz `fetch('/api/players/:id')` para obter os detalhes do atleta selecionado.

## Observação

Este projeto agora é uma aplicação web suportada por uma API local. Para funcionar corretamente, rode o servidor com `npm start`.
