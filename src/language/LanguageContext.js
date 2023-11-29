// LanguageContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translate, languageTag } from '../language/Localization';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(languageTag);

  useEffect(() => {
    // Load the selected language from persistent storage
    // For simplicity, we use the initial languageTag value from Localization.js
  }, []);

  const changeLanguage = newLanguage => {
    setSelectedLanguage(newLanguage);
    // Persist the selected language (e.g., using AsyncStorage)
  };

  return (
    <LanguageContext.Provider value={{ selectedLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
