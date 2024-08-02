/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import Select from 'react-select';

import './SelectField.scss';

const SelectField = ({
  value = [],
  onChange,
  label,
  placeholder = 'Sélectionnez...',
  options,
  isMulti = false,
  noOptionsMessage = 'Aucune valeur',
  isDisabled = false,
  isSearchable = false,
  maxMenuHeight = 200,
  openMenuOnClick = true,
  required = false,
}) => {
  const formattedOptions = options.map((option) => {
    return {
      value: option.id,
      label: option.name,
    };
  });
  return (
    <div className="select-field">
      <div className="select-field-label">{label}</div>
      <Select
        value={value}
        onChange={onChange}
        options={formattedOptions}
        placeholder={placeholder}
        isMulti={isMulti}
        noOptionsMessage={() => noOptionsMessage}
        isDisabled={isDisabled}
        isSearchable={isSearchable}
        maxMenuHeight={maxMenuHeight}
        openMenuOnClick={openMenuOnClick}
        required={required}
        className="select-field-input"
      />
    </div>
  );
};

SelectField.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
      })
    ),
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ]),
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  isMulti: PropTypes.bool,
  noOptionsMessage: PropTypes.string,
  isDisabled: PropTypes.bool,
  isSearchable: PropTypes.bool,
  maxMenuHeight: PropTypes.number,
  openMenuOnClick: PropTypes.bool,
  required: PropTypes.bool,
};

export default SelectField;
