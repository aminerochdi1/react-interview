import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const numbers = [
  { label: '4 par page', value: 4 },
  { label: '8 par page', value: 8 },
  { label: '12 par page', value: 12 }
];

export default function MoviesPerPage({ onMoviesPerPageChange }) {
  const [selectedValue, setSelectedValue] = useState(numbers[0].value);

  const handleChange = (event, newValue) => {
    if (newValue) {
      setSelectedValue(newValue.value);
      if (onMoviesPerPageChange) {
        onMoviesPerPageChange(newValue.value);
      }
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Autocomplete
        disablePortal
        id="numbers"
        options={numbers}
        getOptionLabel={(option) => option.label}
        value={numbers.find(num => num.value === selectedValue)}
        onChange={handleChange}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movies per page" />}
      />
    </div>
  );
}
