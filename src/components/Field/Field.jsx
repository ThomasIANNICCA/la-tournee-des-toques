import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { MdOutlineAlternateEmail } from 'react-icons/md';
import { TbEye, TbEyeClosed } from 'react-icons/tb';

import { togglePasswordVisibility } from '../../action/user';

import './Field.scss';

const Field = ({
  value = '',
  type = 'text',
  name,
  placeholder,
  onChange,
  disabled = false,
  required = false,
  currentDigitsNb = 0,
  maxLength = null,
  isFilledByDefault = false,
}) => {
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const isPasswordVisible = useSelector(
    (state) => state.user.isPasswordVisible
  );

  const inputId = `field-${name}`;

  return (
    <div className="field">
      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={handleChange}
          id={inputId}
          className={
            disabled
              ? 'field-input textarea field-input--disabled'
              : 'field-input textarea'
          }
          placeholder={placeholder}
          name={name}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
        />
      ) : (
        <input
          value={value}
          onChange={handleChange}
          id={inputId}
          type={
            type === 'password' && isPasswordVisible === true ? 'text' : type
          }
          inputMode={type === 'email' ? 'email' : 'text'}
          className={
            disabled ? 'field-input field-input--disabled' : 'field-input'
          }
          placeholder={placeholder}
          name={name}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
        />
      )}
      <label
        htmlFor={inputId}
        className={
          !isFilledByDefault && value === ''
            ? 'field-label'
            : 'field-label field-label--filled'
        }
      >
        {placeholder}
      </label>
      {/* displays the current number of digits entered vs. max requirement */}
      {maxLength && !disabled ? (
        <p className="field-note">
          {currentDigitsNb} / {maxLength} caractères
        </p>
      ) : (
        ''
      )}
      {/* show button eye for password inputs, or span with icon for other input types */}
      {type === 'password' && disabled === false ? (
        <button
          type="button"
          className="field-icon"
          onClick={(e) => {
            e.preventDefault();
            dispatch(togglePasswordVisibility());
          }}
        >
          {isPasswordVisible === false ? <TbEye /> : ''}
          {isPasswordVisible === true ? <TbEyeClosed /> : ''}
        </button>
      ) : (
        ''
      )}
      {type === 'email' && disabled === false ? (
        <span className="field-icon">
          <MdOutlineAlternateEmail />
        </span>
      ) : (
        ''
      )}
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  disabled: PropTypes.bool,
  required: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/require-default-props
  currentDigitsNb: PropTypes.number,
  // eslint-disable-next-line react/require-default-props
  maxLength: PropTypes.number,
  // eslint-disable-next-line react/require-default-props
  isFilledByDefault: PropTypes.bool,
};
export default Field;
