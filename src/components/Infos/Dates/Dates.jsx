import './Dates.scss';
import { TfiAlarmClock } from 'react-icons/tfi';
import mapImage from '../../../assets/images/infos/map.png';

const Dates = () => {
  return (
    <div className="infos-dates">
      <h2 className="secondary-title infos-dates-title">Dates et horaires</h2>
      <div className="infos-dates-content pdg-lr">
        <div className="infos-dates-item">
          <h3 className="secondary-title">Mardi 9 juillet</h3>
          <ul className="hours">
            <li>
              Ouverture <TfiAlarmClock /> : 12 h
            </li>
            <li>
              Fermeture <TfiAlarmClock /> : 00 h
            </li>
          </ul>
        </div>
        <div className="infos-dates-item">
          <h3 className="secondary-title">Mercredi 10 juillet</h3>
          <ul className="hours">
            <li>
              Ouverture <TfiAlarmClock /> : 12 h
            </li>
            <li>
              Fermeture <TfiAlarmClock /> : 00 h
            </li>
          </ul>
        </div>
        <div className="infos-dates-item">
          <h3 className="secondary-title">Jeudi 11 juillet</h3>
          <ul className="hours">
            <li>
              Ouverture <TfiAlarmClock /> : 12 h
            </li>
            <li>
              Fermeture <TfiAlarmClock /> : 01 h
            </li>
          </ul>
        </div>
        <div className="infos-dates-item">
          <h3 className="secondary-title">Vendredi 12 juillet</h3>
          <ul className="hours">
            <li>
              Ouverture <TfiAlarmClock /> : 12 h
            </li>
            <li>
              Fermeture <TfiAlarmClock /> : 02 h
            </li>
          </ul>
        </div>
      </div>
      <div className="address pdg-lr">
        <h2 className="secondary-title">Lieu</h2>
        <p className="address-description">
          Le festival se déroulera dans le parc de l'apéro, 33444 Chill City.
        </p>
        <figure className="address-image">
          <img src={mapImage} alt="Lieu de l'évènement" />
        </figure>
      </div>
    </div>
  );
};
export default Dates;
