
// HeaderData: Language selector using a native HTML select and React Context
// Demonstrates how to use context for language selection in a simple dropdown
import * as React from 'react';
import LanguageDataContext from './LanguageData/LanguageData';

export default function HeaderData() {
  // Access language state and setter from context
  const { lan, setlan } = React.useContext(LanguageDataContext);

  // Handle language change from dropdown
  const handleLanguageChange = (event) => {
    setlan(event.target.value);
  };

  return (
    <div>
      {/* Native select for language selection */}
      <select onChange={handleLanguageChange} value={lan}>
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
        <option value="guj">ગુજરાતી</option>
      </select>
    </div>
  );
}
