// Localization.js
import * as RNLocalize from 'react-native-localize';

const translations = {
  rus: require('./rus.json'),
  eng: require('./eng.json'),
  by: require('./by.json'),
};

const fallback = { languageTag: 'eng', isRTL: false };

const { languageTag } = RNLocalize.findBestAvailableLanguage(Object.keys(translations)) || fallback;

const translate = key => translations[languageTag][key] || key;

export { translate, languageTag };


