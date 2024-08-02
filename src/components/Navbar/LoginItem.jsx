import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { LuUserCircle } from 'react-icons/lu';

import { closeBurger } from '../../action/nav';

const LoginItem = ({ link, label }) => {
  const dispatch = useDispatch();

  return (
    <div className="menu-list-item menu__login-item">
      <NavLink
        to={link}
        className={({ isActive }) =>
          isActive ? 'menu-link menu-link--selected' : 'menu-link'
        }
      >
        <button
          type="button"
          className="login-icon"
          onClick={() => {
            const action = closeBurger();
            dispatch(action);
          }}
        >
          <LuUserCircle />
        </button>
        <div className="login-text">{label}</div>
      </NavLink>
    </div>
  );
};

LoginItem.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default LoginItem;
