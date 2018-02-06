import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/ar';

addLocaleData(localeData);

const messages = {
  "Terra.ajax.error": "This content failed to load."
};
const areTranslationsLoaded = true;
const locale = 'ar';
export {
  areTranslationsLoaded,
  locale,
  messages
};