    import React from 'react'
import LanguageDataContext from './LanguageData/LanguageData';
import HeaderData from './Header';
import FormDataInfo from './FormData';

export default function Layout() {

    const [lan, setlan] = React.useState('en');

  return (
    <LanguageDataContext.Provider value={{lan,setlan}}>
      <HeaderData/>
      <FormDataInfo/>
    </LanguageDataContext.Provider>
  )
}
