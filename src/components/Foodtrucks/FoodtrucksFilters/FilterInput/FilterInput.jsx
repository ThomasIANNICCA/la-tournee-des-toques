import React from 'react';
import PropTypes from 'prop-types';

const FilterInput = ({ id, name, checked, onChange }) => {
  return (
    <div className="input-container">
      <input
        type="checkbox"
        name="category"
        value={id}
        id={`category-${id}`}
        checked={checked} // Utilisation de checked pour contrôler l'état du checkbox
        onChange={onChange} // Appel de la fonction onChange lorsqu'il y a un changement
      />
      <label htmlFor={`category-${id}`}>{name}</label>
    </div>
  );
};

FilterInput.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterInput;
