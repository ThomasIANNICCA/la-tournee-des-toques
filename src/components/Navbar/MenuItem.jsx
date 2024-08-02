import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { closeBurger } from '../../action/nav';

const MenuItem = ({ link, label }) => {
  const dispatch = useDispatch();

  return (
    <li className="menu-list-item">
      <NavLink
        to={link}
        className={({ isActive }) =>
          isActive ? 'menu-link menu-link--selected' : 'menu-link'
        }
        onClick={() => {
          const action = closeBurger();
          dispatch(action);
        }}
      >
        {label}
      </NavLink>
    </li>
  );
};

MenuItem.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default MenuItem;
