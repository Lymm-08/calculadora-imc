# BMI Project - ETEC Albert Einstein

- System to calculate BMI using HTML, CSS, and JavaScript.
- Express backend to save results in a JSON file.

## 🚀 Demo

<p align="center">
  <img src="./public/gif-imc.gif" width="45%" />
</p>

## ✨ Features
- Two inputs: weight (kg) and height (m)
- Button to calculate BMI
- Button to save data in `data/records.json`
- Classification messages:
  - `Underweight` for BMI < 18.5
  - `Normal weight` for 18.5 <= BMI < 24.9
  - `Overweight` for 24.9 <= BMI < 29.9
  - `Obesity` for BMI >= 29

## 📁 Structure
- `app.js` - Express server
- `public/` - frontend files
- `data/records.json` - saved results

## ▶️ How to run

```bash
# install dependencies
npm install

# start the server
npm start
