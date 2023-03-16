import React from 'react';
// import { nanoid } from 'nanoid';
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"
import PropTypes from 'prop-types';
import { FilterInput, FilterLabel } from './FIlter.styled';

const Filter = ({ value, onChangeFilterValue }) => {
  return (
    <FilterLabel htmlFor="filter">
      Find contacts by name
      <FilterInput
        type="input"
        name="filter"
        value={value}
        onChange={onChangeFilterValue}
      />
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilterValue: PropTypes.func.isRequired,
};

export default Filter;
