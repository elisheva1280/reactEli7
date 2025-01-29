import React from 'react';
import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import EN from '../local/translation/EN.json' ;
import HE from '../local/translation1/HE.json' ;


// the translations
const resources = {
    en: {
      translation: EN
    },
    he:{
      translation: HE
    }
  
  };
  const translate=(language)=>{
    i18n.changeLanguage(language)
  }

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
    
  });

export default i18n;
