import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from 'react-icons/fa';
import { toggleBurgerOpen } from '../../action/nav';

import LoginItem from './LoginItem';
import MenuItem from './MenuItem';

import logo from '../../assets/images/logo.png';
import './Navbar.scss';

const Navbar = () => {
  const dispatch = useDispatch();

  const isBurgerOpen = useSelector((state) => state.navbar.isBurgerOpen);
  const isUserLogged =
    useSelector((state) => state.user.logged) ||
    sessionStorage.getItem('userId');
  let isAdminLogged = false;
  if (sessionStorage.getItem('roles')) {
    isAdminLogged = sessionStorage.getItem('roles').includes('ROLE_ADMIN');
  }

  return (
    <nav className={`navbar ${isBurgerOpen ? 'navbar--opened' : ''}`}>
      <NavLink to="/">
        <figure className="navbar__logo">
          <img
            src={logo}
            alt="Logo du festival montrant un foodtruck avec une bannière La Tournée des Toqués"
          />
        </figure>
      </NavLink>

      <div className="navbar__menu-container">
        <ul className="navbar__menu">
          <MenuItem link="/" label="Accueil" />
          <MenuItem link="/foodtrucks" label="Foodtrucks" />
          <MenuItem link="/animations" label="Animations" />
          <MenuItem link="/infos" label="Infos pratiques" />
          <MenuItem link="/contact" label="Contact" />
        </ul>
        <ul className="social-links menu-list-item">
          <li className="social-item">
            <a href="#">
              <FaFacebook />
            </a>
          </li>
          <li className="social-item">
            <a href="#">
              <FaInstagram />
            </a>
          </li>
          <li className="social-item">
            <a href="#">
              <FaYoutube />
            </a>
          </li>
          <li className="social-item">
            <a href="#">
              <FaTiktok />
            </a>
          </li>
        </ul>
        {isUserLogged && !isAdminLogged ? (
          <LoginItem link="/mon-compte" label="Mon compte" />
        ) : (
          ''
        )}
        {isAdminLogged ? <LoginItem link="/admin" label="Espace orga" /> : ''}
        {!isUserLogged && !isAdminLogged ? (
          <LoginItem link="/login" label="Se connecter" />
        ) : (
          ''
        )}
      </div>

      <button
        type="button"
        className="navbar__burger"
        onClick={() => {
          const action = toggleBurgerOpen(!isBurgerOpen);
          dispatch(action);
        }}
      >
        <span className="navbar__burger__line" />
      </button>
    </nav>
  );
};

export default Navbar;
