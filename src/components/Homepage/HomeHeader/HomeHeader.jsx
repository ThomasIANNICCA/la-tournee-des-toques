import './HomeHeader.scss';
import { Link } from 'react-router-dom';

function HomeHeader() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">
          La Tournée <span>des Toqués</span>
        </h1>
        <div className="header-content">
          <p className="header-description">
            Du 9 au 12 juillet 2024
            <br />
            Parc de l&apos;apéro
            <br />
            Chill city
          </p>

          <Link to="/infos" className="light-button">
            Infos pratiques
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
