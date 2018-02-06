import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/es';

addLocaleData(localeData);

const messages = {
  "Terra.ajax.error": "Error al cargar el contenido."
};
const areTranslationsLoaded = true;
const locale = 'es';
export {
  areTranslationsLoaded,
  locale,
  messages
};