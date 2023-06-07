const { translate } = require('@vitalets/google-translate-api');

async function translateText(inputText, targetLang) {
  try {
    const res = await translate(inputText, { to: targetLang });
    console.log(`Translated text (${targetLang}):`, res.text);
  } catch (error) {
    console.error('Translation error:', error);
  }
}

// Get input and target languages from user input
const inputText = process.argv[2];
const targetLang = process.argv[3];

translateText(inputText, targetLang);
