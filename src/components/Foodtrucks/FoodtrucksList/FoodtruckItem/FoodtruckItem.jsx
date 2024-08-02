import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import config from '../../../../config';
import './FoodtruckItem.scss';

const FoodtruckItem = ({ id, name, category, pictureName = null }) => {
  // eslint-disable-next-line @typescript-eslint/no-shadow

  return (
    <div className="foodtrucks-item">
      <Link to={`/foodtrucks/${id}`} className="foodtrucks-item-link">
        <img
          className="foodtrucks-item-image"
          src={
            pictureName === '' || pictureName === null
              ? `/src/assets/images/truck/logo.png`
              : `/src/assets/images/truck/${pictureName}`
          }
          alt={`Foodtruck de ${name}`}
        />
        <div className="foodtrucks-item-content">
          <div className="foodtruck-item-banner">
            <h3 className="foodtrucks-item-title">{name}</h3>
            {category.map((categoryDetail) => (
              <p key={categoryDetail.id} className="category">
                {categoryDetail.name}
              </p>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

FoodtruckItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  // eslint-disable-next-line react/require-default-props
  pictureName: PropTypes.string,
};

export default FoodtruckItem;
