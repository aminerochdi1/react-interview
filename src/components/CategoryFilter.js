import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByCategory } from '../redux/actions/moviesActions';
// [MaterialUI]
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const CategoryFilter = () => {
  const categories = useSelector(state => state.movies.categories);
  const dispatch = useDispatch();

  // const handleCategoryChange = (e) => {
  //   const selectedCategories = Array.from(e.target.selectedOptions, option => option.value);
  //   dispatch(filterByCategory(selectedCategories));
  // };

  const handleCategoryChange = (newValue) => {
    dispatch(filterByCategory(newValue));
  };

  return (


    <Stack spacing={2} sx={{ minWidth: '50%' ,margin: '40px' }}>

<Autocomplete
        multiple
        id="size-small-filled-multi"
        size="small"
        options={categories}
        onChange={(event, newValue) => handleCategoryChange(newValue)} // Pass newValue directly
        getOptionLabel={(option) => option} // Assume `option` is a string
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              key={index}
              variant="outlined"
              label={option}
              size="small"
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            label="Choose Categories"
            placeholder="Favorites"
          />
        )}
      />
    </Stack>



  );
};

export default CategoryFilter;
