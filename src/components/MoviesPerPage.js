import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function MoviesPerPage() {
  return (
    <div>
    <Autocomplete
      disablePortal
      id="numbers"
      options={numbers}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movies per page" />}
    />
    </div>
  );
}

const numbers = [
  { label: '4 par page', value: 4 },
  { label: '8 par page', value: 8 },
  { label: '12 par page', value: 12 }
]