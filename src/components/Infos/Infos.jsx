import React from 'react';
import Questions from './Questions/Questions';
import Dates from './Dates/Dates';
import './Infos.scss';

const Infos = () => {
  return (
    <div className="infos">
      <div className="infos-header pdg-lr">
        <h1 className="primary-title">Infos Pratiques</h1>
        <p className="infos-description">
          Préparez votre visite avec toutes les informations essentielles :
          dates, horaires, accès, et plus encore. Tout ce que vous devez savoir
          pour profiter pleinement de notre festival gourmand se trouve ici !
        </p>
      </div>

      <div className="infos-container">
        <Dates />
        <Questions />
      </div>
    </div>
  );
};

export default Infos;
