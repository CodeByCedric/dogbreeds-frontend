import { createI18n } from 'vue-i18n';
import en from './translations/en.json';
import nl from './translations/nl.json';

// TODO: subdivide messages (in the json files)
const i18n = createI18n({
  locale: 'en',
  messages: {
    en: en,
    nl: nl,
  },
});

export default i18n;
