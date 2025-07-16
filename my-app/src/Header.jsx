import * as React from 'react';
import LanguageDataContext from './LanguageData/LanguageData';
export default function HeaderData() {

  const { lan, setlan } = React.useContext(LanguageDataContext);

  const handleLanguageChange = (event) => {
    setlan(event.target.value);
  };

  return (
 <div>
      <select onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
        <option value="guj">ગુજરાતી</option>
      </select>
    </div>
  )
}
