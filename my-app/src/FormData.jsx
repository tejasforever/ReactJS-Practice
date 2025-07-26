
// FormDataInfo: Form with multilingual labels using React Context
// Demonstrates how to use context for language selection and dynamic label rendering
import React from 'react';
import LanguageDataContext from './LanguageData/LanguageData';

export default function FormDataInfo() {
  // Access current language from context
  const { lan } = React.useContext(LanguageDataContext);

  // Multilingual label definitions
  const LanguageText = {
    en: {
      firstname: "First Name",
      lastname: "Last Name"
    },
    hi: {
      firstname: "पहला नाम",
      lastname: "अंतिम नाम"
    },
    guj: {
      firstname: "પ્રથમ નામ",
      lastname: "છેલ્લું નામ"
    }
  };

  // Log for debugging (can be removed in production)
  // console.log(LanguageText);

  return (
    <div>
      <form>
        {/* Label for first name in selected language */}
        <label>{LanguageText[lan].firstname}</label>
        <input type="text" name="firstname" />
        <br/>
        {/* Label for last name in selected language */}
        <label>{LanguageText[lan].lastname}</label>
        <input type="text" name="lastname" />
        <input type='submit' value="submit" />
      </form>
    </div>
  );
}
