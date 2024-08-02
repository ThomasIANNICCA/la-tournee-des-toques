import './HomeAnimation.scss';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import config from '../../../../config';

function HomeAnimation({ title, openedAt, pictureName }) {
  function formatDate(isoDate) {
    return format(new Date(isoDate), "dd/MM/yyyy - HH'h'mm");
  }
  return (
    <div className="animations-item">
      <img
        className="animations-item-image"
        src={`/src/assets/images/animations/${pictureName}`}
        alt={title}
      />
      <div className="animations-item-content">
        <h3 className="animations-item-title">{title}</h3>
        <p className="animations-item-date">{formatDate(openedAt)}</p>
      </div>
    </div>
  );
}

HomeAnimation.propTypes = {
  title: PropTypes.string.isRequired,
  openedAt: PropTypes.string.isRequired,
  pictureName: PropTypes.string.isRequired,
};
export default HomeAnimation;
