import PropTypes from 'prop-types';

import PasswordRuleLi from './PasswordRuleLi';

import './PasswordRules.scss';

const PasswordRules = ({ password }) => {
  const lengthRegex = /.{12,}/;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const digitRegex = /[0-9]/;
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

  return (
    <div className="password-rules">
      <div>Le mot de passe doit contenir :</div>
      <ul>
        <PasswordRuleLi
          regex={lowercaseRegex}
          password={password}
          label="Au moins une lettre minuscule"
        />
        <PasswordRuleLi
          regex={uppercaseRegex}
          password={password}
          label="Au moins une lettre majuscule"
        />
        <PasswordRuleLi
          regex={digitRegex}
          password={password}
          label="Au moins un chiffre"
        />
        <PasswordRuleLi
          regex={specialCharRegex}
          password={password}
          label="Au moins un caractère spécial (., !, €, ?, #...)"
        />
        <PasswordRuleLi
          regex={lengthRegex}
          password={password}
          label="Au moins 12 caractères"
        />
      </ul>
    </div>
  );
};

PasswordRules.propTypes = {
  password: PropTypes.string.isRequired,
};

export default PasswordRules;
