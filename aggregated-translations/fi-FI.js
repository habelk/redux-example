import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/fi';

addLocaleData(localeData);

const messages = {
  "Terra.ajax.error": "This content failed to load.n9KZ Pi~"
};
const areTranslationsLoaded = true;
const locale = 'fi-FI';
export {
  areTranslationsLoaded,
  locale,
  messages
};