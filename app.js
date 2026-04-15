const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data', 'records.json');

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.post('/save', async (req, res) => {
  const { weight, height, bmi, category } = req.body;

  if (!weight || !height || !bmi || !category) {
    return res.status(400).json({ error: 'Dados incompletos para salvar.' });
  }

  const record = {
    timestamp: new Date().toISOString(),
    weight: Number(weight),
    height: Number(height),
    bmi: Number(bmi),
    category
  };

  try {
    await fs.mkdir(path.join(__dirname, 'data'), { recursive: true });
    let currentData = [];

    try {
      const fileContent = await fs.readFile(DATA_FILE, 'utf8');
      currentData = JSON.parse(fileContent || '[]');
    } catch (err) {
      if (err.code !== 'ENOENT') {
        throw err;
      }
    }

    const seenKeys = new Set();
    const uniqueData = [];

    const recordKey = (item) => `${item.weight}-${item.height}-${item.bmi}-${item.category}`;

    for (const item of currentData) {
      const key = recordKey(item);
      if (!seenKeys.has(key)) {
        seenKeys.add(key);
        uniqueData.push(item);
      }
    }

    currentData = uniqueData;
    const newKey = recordKey(record);
    const duplicate = currentData.some((item) => recordKey(item) === newKey);

    if (!duplicate) {
      currentData.push(record);
    }

    await fs.writeFile(DATA_FILE, JSON.stringify(currentData, null, 2), 'utf8');

    res.json({ success: true, record, duplicate });
  } catch (error) {
    console.error('Erro ao salvar dados:', error);
    res.status(500).json({ error: 'Falha ao salvar os dados.' });
  }
});

app.get('/records', async (req, res) => {
  try {
    const fileContent = await fs.readFile(DATA_FILE, 'utf8');
    res.json(JSON.parse(fileContent || '[]'));
  } catch (err) {
    if (err.code === 'ENOENT') {
      return res.json([]);
    }
    res.status(500).json({ error: 'Falha ao ler o arquivo de dados.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
