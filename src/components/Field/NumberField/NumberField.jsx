import PropTypes from 'prop-types';

import { BiEuro } from 'react-icons/bi';

import '../Field.scss';
import './NumberField.scss';

const NumberField = ({
  value = 0,
  name,
  placeholder,
  onChange,
  disabled = false,
  required = false,
  isFilledByDefault = false,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;

  // calculate a corrected value in case the value is null (to avoid error due to calculation of length on a null variable)
  const correctedValue = value ?? 0;

  return (
    <div
      className={
        correctedValue.length > 0
          ? 'field field--has-content number-field'
          : 'field number-field'
      }
    >
      <input
        value={value}
        onChange={handleChange}
        id={inputId}
        type="number"
        className={
          disabled ? 'field-input field-input--disabled' : 'field-input'
        }
        placeholder={placeholder}
        name={name}
        disabled={disabled}
        required={required}
      />

      <label
        htmlFor={inputId}
        className={
          !isFilledByDefault && value === 0
            ? 'field-label'
            : 'field-label field-label--filled'
        }
      >
        {placeholder}
      </label>

      <span className="field-icon">
        <BiEuro />
      </span>
    </div>
  );
};

NumberField.propTypes = {
  // eslint-disable-next-line react/require-default-props
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  disabled: PropTypes.bool,
  required: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/require-default-props
  isFilledByDefault: PropTypes.bool,
};
export default NumberField;
