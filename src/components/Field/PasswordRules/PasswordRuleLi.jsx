import PropTypes from 'prop-types';

import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const PasswordRuleLi = ({ regex, password, label }) => {
  return (
    <li
      className={
        regex.test(password) ? 'password-rule--succeed' : 'password-rule--fail'
      }
    >
      {regex.test(password) ? <FaCheckCircle /> : <FaExclamationCircle />}
      {label}
    </li>
  );
};

PasswordRuleLi.propTypes = {
  regex: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default PasswordRuleLi;
