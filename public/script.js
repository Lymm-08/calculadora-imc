const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateBtn = document.getElementById('calculateBtn');
const saveBtn = document.getElementById('saveBtn');
const bmiValue = document.getElementById('bmiValue');
const categoryMessage = document.getElementById('categoryMessage');
const resultCard = document.getElementById('resultCard');
const statusMessage = document.getElementById('statusMessage');

let lastCalculation = null;
const isFileProtocol = window.location.protocol === 'file:';
const apiBase = window.location.origin;

if (isFileProtocol) {
  statusMessage.textContent = 'Abra o app via servidor: execute npm start e acesse http://localhost:3000';
  statusMessage.style.color = '#d9480f';
  saveBtn.disabled = true;
}

function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function classificarIMC(imc) {
  if (imc < 18.5) {
    return 'Abaixo do peso';
  }
  if (imc < 24.9) {
    return 'Peso normal';
  }
  if (imc < 29.9) {
    return 'Sobrepeso';
  }
  return 'Obesidade';
}

function exibirMensagem(texto, tipo = 'info') {
  statusMessage.textContent = texto;
  statusMessage.style.color = tipo === 'error' ? '#d9480f' : '#2c8f57';
}

calculateBtn.addEventListener('click', () => {
  const weight = Number(weightInput.value);
  const height = Number(heightInput.value);

  if (!weight || !height) {
    exibirMensagem('Informe peso e altura válidos.', 'error');
    return;
  }

  const imc = calcularIMC(weight, height);
  const category = classificarIMC(imc);

  bmiValue.textContent = imc.toFixed(2);
  categoryMessage.textContent = category;
  resultCard.hidden = false;
  saveBtn.disabled = false;
  lastCalculation = { weight, height, bmi: imc.toFixed(2), category };

  exibirMensagem('IMC calculado. Agora você pode salvar os dados no JSON.');
});

saveBtn.addEventListener('click', async () => {
  if (!lastCalculation) {
    exibirMensagem('Calcule o IMC antes de salvar.', 'error');
    return;
  }

  try {
    const response = await fetch(`${apiBase}/save`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lastCalculation)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Erro ao salvar.');
    }

    exibirMensagem('Dados salvos com sucesso!');
    saveBtn.disabled = true;
  } catch (error) {
    exibirMensagem(error.message, 'error');
  }
});
