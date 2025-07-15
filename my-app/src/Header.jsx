import React from 'react'
import LanguageDataContext from './LanguageData/LanguageData'

export default function HeaderData() {

  const {lan, setlan } = React.useContext(LanguageDataContext);
  const handleLanguageChange = (e) => {
    setlan(e.target.value);
  };



  return (
    <div>
        <select onChange={handleLanguageChange}>
    <option value="en">English</option>
    <option value="hi">Hindi</option>
  </select>
    </div>
  )
}
