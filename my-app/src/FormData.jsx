import React from 'react' 
import LanguageDataContext from './LanguageData/LanguageData'

export default function FormDataInfo() {

const { lan } = React.useContext(LanguageDataContext);
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
}

console.log(LanguageText);

  return (
    <div>
      <form>
        <label>{LanguageText[lan].firstname}</label>
        <input type="text" name="firstname" />
        <br/>
        <label>{LanguageText[lan].lastname}</label>
        <input type="text" name="lastname" />

        <input type='submit' value="submit" />
      </form>
    </div>
  )
}
