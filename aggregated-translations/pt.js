import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/pt';

addLocaleData(localeData);

const messages = {
  "Terra.ajax.error": "Falha ao carregar conteúdo."
};
const areTranslationsLoaded = true;
const locale = 'pt';
export {
  areTranslationsLoaded,
  locale,
  messages
};