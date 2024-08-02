import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import truckImage from '../../assets/images/error404/truck.png';

import './Error404.scss';

const Error404 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/404');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="error404">
      <div className="error404-content">
        <h1 className="primary-title">Erreur 404</h1>
        <div className="background-truck">
          <img src={truckImage} alt="Foodtruck" className="foodtruck" />
        </div>
        <div className="message">Oups, on dirait que nous sommes perdus !</div>
        <div className="buttons">
          <Link to="/" className="light-button">
            Revenir à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
