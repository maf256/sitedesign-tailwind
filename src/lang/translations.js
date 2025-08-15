function loadTranslations() {
  const lang = process.env.SELECTED_LANG || "en";

  try {
    return require(`./${lang}.json`);
  } catch (error) {
    console.warn(`translation file for ${lang} not found, falling back to en`);
    return require(`./en.json`);
  }
}

export const translations = loadTranslations();
export const getTranslation = (key) => {
  return key.split(".").reduce((obj, k) => obj?.[k], translations);
};
