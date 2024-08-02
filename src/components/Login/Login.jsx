import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import LoginForm from './LoginForm';
import {
  changeFieldValue,
  cleanAuthStatus,
  submitLogin,
} from '../../action/user';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailValue = useSelector((state) => state.user.email);
  const passwordValue = useSelector((state) => state.user.password);

  useEffect(() => {
    dispatch(cleanAuthStatus());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="login__page pdg-lr">
      <h2 className="primary-title">Se connecter</h2>
      <LoginForm
        email={emailValue}
        password={passwordValue}
        changeField={(newValue, identifier) => {
          const action = changeFieldValue(newValue, identifier);
          dispatch(action);
        }}
        handleLogin={() => {
          dispatch(submitLogin());
          navigate('/mon-compte');
        }}
      />
    </section>
  );
};

export default Login;
