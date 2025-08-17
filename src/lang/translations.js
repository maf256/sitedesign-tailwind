function loadTranslations() {
  const lang = process.env.SELECTED_LANG || "no";

  try {
    return require(`../lang/${lang}.json`);
  } catch (error) {
    console.warn(
      `translation file for ${lang} not found, falling back to Norwegian`
    );
    return require(`../lang/no.json`);
  }
}

export const translations = loadTranslations();
export const getTranslation = (key) => {
  return key.split(".").reduce((obj, k) => obj?.[k], translations);
};
