import React from 'react';
import PropTypes from 'prop-types';
import config from '../../../config';
import './FoodtruckHeader.scss';

const FoodtruckHeader = ({
  name,
  location,
  presentation,
  categories,
  pictureName = null,
}) => {
  return (
    <div className="foodtruck-header">
      <img
        className="foodtruck-image"
        src={
          pictureName === '' || pictureName === null
            ? `/src/assets/images/truck/logo.png`
            : `/src/assets/images/truck/${pictureName}`
        }
        alt={`Foodtruck de ${name}`}
      />
      <div className="foodtruck-content">
        <div className="foodtruck-title-container pdg-lr">
          <h1 className="primary-title">{name}</h1>
          <p className="foodtruck-location">{location}</p>
        </div>
        <p className="foodtruck-description pdg-lr">{presentation}</p>
        <div className="foodtruck-categories pdg-lr">
          {categories.map((category) => (
            <p key={`category-${category.id}`} className="category">
              {category.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

FoodtruckHeader.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.number.isRequired,
  presentation: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  // eslint-disable-next-line react/require-default-props
  pictureName: PropTypes.string,
};

export default FoodtruckHeader;
