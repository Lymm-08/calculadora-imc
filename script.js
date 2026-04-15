const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateBtn = document.getElementById('calculateBtn');
const saveBtn = document.getElementById('saveBtn');
const bmiValue = document.getElementById('bmiValue');
const categoryMessage = document.getElementById('categoryMessage');
const resultCard = document.getElementById('resultCard');
const statusMessage = document.getElementById('statusMessage');

let lastCalculation = null;

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

  exibirMensagem('IMC calculado. O botão Salvar não funcionará no GitHub Pages.');
});

saveBtn.addEventListener('click', () => {
  if (!lastCalculation) {
    exibirMensagem('Calcule o IMC antes de salvar.', 'error');
    return;
  }

  // Funcionalidade de salvar removida ou desabilitada
});
