import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Field from '../Field/Field';

import './Login.scss';
import Loader from '../App/Loader/Loader';
import FailedMsg from '../App/Messages/FailedMsg';

const LoginForm = ({ email = '', password = '', changeField, handleLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  const pendingLoading = useSelector((state) => state.user.pendingLogin);
  const loginError = useSelector((state) => state.user.loginError);

  return (
    <div className="login-form">
      <section>
        <form className="login-form-element" onSubmit={handleSubmit}>
          <Field
            name="email"
            type="email"
            placeholder="Adresse email"
            onChange={changeField}
            value={email}
            required
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={changeField}
            value={password}
            required
          />
          <div className="login-form__submit-section">
            <div className="login-form__msg">
              {loginError ? (
                <FailedMsg msg="L'email ou le mot de passe est invalide." />
              ) : (
                ''
              )}
            </div>
            {pendingLoading ? (
              <div className="loader-btn">
                <Loader />
              </div>
            ) : (
              <button type="submit" className="login-form-button light-button">
                Se connecter
              </button>
            )}
          </div>
        </form>
        <div className="forgotten-password">
          <Link to="/mdp-oublie">Mot de passe oublié ?</Link>
        </div>
      </section>
    </div>
  );
};

LoginForm.propTypes = {
  // eslint-disable-next-line react/require-default-props
  email: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  password: PropTypes.string,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default LoginForm;
