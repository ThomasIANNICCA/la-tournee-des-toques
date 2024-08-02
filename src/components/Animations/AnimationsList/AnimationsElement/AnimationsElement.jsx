import { format } from 'date-fns';
import PropTypes from 'prop-types';

import config from '../../../../config';

import './AnimationsElement.scss';

const AnimationsElement = ({
  title,
  pictureName,
  content,
  openedAt,
  closedAt,
  location,
  reversed,
}) => {
  function formatDate(isoDate) {
    return format(new Date(isoDate), "dd/MM/yyyy - HH'h'mm");
  }
  return (
    <div className={`animations-element ${reversed ? 'reversed' : ''}`}>
      <div className="animations-element-image">
        <img
          src={`/src/assets/images/animations/${pictureName}`}
          alt={`Animation ${title}`}
        />
      </div>
      <div className="animations-element-content">
        <h2 className="animations-element-title">{title}</h2>
        <div className="animations-element-hours">
          <p>Ouverture : {formatDate(openedAt)}</p>
          <p>Fermeture : {formatDate(closedAt)}</p>
        </div>
        <div className="animations-element-location">Lieu : {location}</div>
        <div className="animations-element-description">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

AnimationsElement.propTypes = {
  // title of the animation
  title: PropTypes.string.isRequired,
  // description of the animation
  content: PropTypes.string.isRequired,
  // name and extension of the picture of the animation
  pictureName: PropTypes.string.isRequired,
  // start date and time of the animation
  openedAt: PropTypes.string.isRequired,
  // end date and time of the animation
  closedAt: PropTypes.string.isRequired,
  // location of the animation
  location: PropTypes.string.isRequired,
  // boolean to display the picture and the infos from right to left or reverse
  // eslint-disable-next-line react/require-default-props
  reversed: PropTypes.bool,
};

export default AnimationsElement;
