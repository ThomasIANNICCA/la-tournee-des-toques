import { Link } from 'react-router-dom';

import './Footer.scss';
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTiktok,
  FaHeart,
} from 'react-icons/fa';
import logo from '../../assets/images/logo.png';

function Footer() {
  return (
    <footer className="footer-section">
      <figure className="footer-image">
        <img src={logo} alt="Logo de la tournée des Toqués" />
      </figure>
      <div className="footer-content">
        <ul className="footer-links">
          <li className="footer-item">
            <Link to="/foodtrucks">Les foodtrucks</Link>
          </li>
          <li className="footer-item">
            <Link to="/animations">Les animations</Link>
          </li>
          <li className="footer-item">
            <Link to="/infos">Infos pratiques</Link>
          </li>
          <li className="footer-item">
            <Link to="/contact">Nous contacter</Link>
          </li>
          <li className="footer-item">
            <Link to="/mentions-legales">Mentions légales</Link>
          </li>
        </ul>
        <ul className="social-links">
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

        <div className="footer-mention">
          <p>
            Créé par TruckDeOuf avec Houblon et Passion <FaHeart />
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
