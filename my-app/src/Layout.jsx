
// Layout: Provides language context and renders language selection and form components
// Demonstrates use of React Context Provider and component composition
import React from 'react';
import LanguageDataContext from './LanguageData/LanguageData';
import HeaderData from './Header';
import FormDataInfo from './FormData';
import DropDownMaterialUI from './DropDownMaterialUI';

export default function Layout() {
  // State for current language
  const [lan, setlan] = React.useState('en');

  // Provide language context to child components
  return (
    <LanguageDataContext.Provider value={{ lan, setlan }}>
      {/* Material UI dropdown for language selection */}
      <DropDownMaterialUI />
      {/* Native select for language selection */}
      <HeaderData />
      {/* Form with multilingual labels */}
      <FormDataInfo />
    </LanguageDataContext.Provider>
  );
}
