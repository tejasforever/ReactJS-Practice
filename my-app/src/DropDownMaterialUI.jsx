
// DropDownMaterialUI: Language selector using Material UI Select and React Context
// Demonstrates how to use MUI components and context for language selection
import * as React from 'react';
import LanguageDataContext from './LanguageData/LanguageData';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDownMaterialUI() {
  // Access language state and setter from context
  const { lan, setlan } = React.useContext(LanguageDataContext);

  // Handle language change from dropdown
  const handleLanguageChange = (event) => {
    setlan(event.target.value);
  };

  return (
    <div>
      {/* Language Selector using MUI */}
      <FormControl fullWidth margin="normal">
        <InputLabel id="language-select-label">Language</InputLabel>
        <Select
          labelId="language-select-label"
          id="language-select"
          value={lan}
          label="Language"
          onChange={handleLanguageChange}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="hi">हिन्दी</MenuItem>
          <MenuItem value="guj">ગુજરાતી</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
