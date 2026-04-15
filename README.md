# Calculadora de IMC com Express

Este projeto calcula o IMC (Índice de Massa Corporal) e salva os resultados em um arquivo JSON usando um backend Express.

## O que o app faz
- Calcula o IMC a partir do peso (kg) e altura (m)
- Classifica o resultado em `Abaixo do peso`, `Peso normal`, `Sobrepeso` ou `Obesidade`
- Salva os dados em `data/records.json` quando o botão `Salvar no JSON` é clicado
- Evita registros duplicados no arquivo JSON

## Como usar
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor:
   ```bash
   npm start
   ```
3. Abra no navegador:
   ```
   http://localhost:3000
   ```
4. Preencha peso e altura
5. Clique em `Calcular IMC`
6. Clique em `Salvar no JSON`

> Atenção: o botão `Salvar no JSON` só funciona quando o app está rodando via servidor Express. Se você abrir `index.html` diretamente pelo arquivo (`file://`), o botão ficará desabilitado.

## Onde os dados são salvos
- Os registros são gravados em `data/records.json`
- O backend remove duplicatas antes de salvar

## Estrutura de arquivos
- `app.js` - servidor Express e endpoint `POST /save`
- `index.html` - interface do usuário
- `script.js` - lógica do IMC e envio dos dados
- `style.css` - estilo visual
- `data/records.json` - arquivo de dados gerado

## Observações
- Use `npm start` sempre antes de acessar o app
- A URL correta é `http://localhost:3000`
- O botão `Salvar no JSON` só funciona com o backend Express ativo


