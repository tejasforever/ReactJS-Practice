    import React from 'react'
import LanguageDataContext from './LanguageData/LanguageData';
import HeaderData from './Header';
import FormDataInfo from './FormData';
import DropDownMaterialUI from './DropDownMaterialUI';

export default function Layout() {

    const [lan, setlan] = React.useState('en');

  return (
    <LanguageDataContext.Provider value={{lan,setlan}}>
      <HeaderData/>
      <DropDownMaterialUI />
      <FormDataInfo/>
    </LanguageDataContext.Provider>
  )
}
