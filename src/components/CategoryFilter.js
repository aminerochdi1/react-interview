import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByCategory } from '../redux/actions/moviesActions';

const CategoryFilter = () => {
  const categories = useSelector(state => state.movies.categories);
  const dispatch = useDispatch();

  const handleCategoryChange = (e) => {
    const selectedCategories = Array.from(e.target.selectedOptions, option => option.value);
    dispatch(filterByCategory(selectedCategories));
  };

  return (
    <select multiple onChange={handleCategoryChange}>
      {categories.map(category => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  );
};

export default CategoryFilter;
