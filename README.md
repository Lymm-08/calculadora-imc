# Projeto IMC - ETEC Albert Einstein

## Requisitos
- Sistema para calcular IMC usando HTML, CSS e JavaScript.
- Backend em Express para salvar os resultados em arquivo JSON.

## Como usar
1. Instalar dependências: `npm install`
2. Iniciar o servidor: `npm start`
3. Acessar: `http://localhost:3000`

## Funcionalidades
- Dois inputs: peso (kg) e altura (m)
- Botão para calcular o IMC
- Botão para salvar dados em `data/records.json`
- Mensagens de classificação:
  - `Abaixo do peso` para IMC < 18.5
  - `Peso normal` para 18.5 <= IMC < 24.9
  - `Sobrepeso` para 24.9 <= IMC < 29.9
  - `Obesidade` para IMC >= 29

## Estrutura
- `app.js` - servidor Express
- `public/` - arquivos frontend
- `data/records.json` - resultados salvos


