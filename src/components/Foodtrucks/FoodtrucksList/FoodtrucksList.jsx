import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import FoodtruckItem from './FoodtruckItem/FoodtruckItem';
import './FoodtrucksList.scss';

const FoodtrucksList = ({ foodtrucks }) => {
  const categoryChecked = useSelector(
    (state) => state.foodtrucks.categoryChecked
  );
  const [filteredFoodtrucks, setFilteredFoodtrucks] = useState([]);

  useEffect(() => {
    // Filter foodtrucks according to selected categories
    const filtered = foodtrucks.filter((foodtruck) => {
      // Check if foodtruck.category has been defined before getting its id
      if (foodtruck.category && foodtruck.category.length > 0) {
        return foodtruck.category.some(
          (category) => categoryChecked[category.id]
        );
      }
      // If foodtruck.category is undefined or empty, return false for filtering
      return false;
    });
    setFilteredFoodtrucks(filtered);
  }, [foodtrucks, categoryChecked]);

  return (
    <div className="foodtrucks-list-container">
      {filteredFoodtrucks.map((foodtruck) => (
        <FoodtruckItem key={foodtruck.id} {...foodtruck} />
      ))}
    </div>
  );
};

FoodtrucksList.propTypes = {
  foodtrucks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      pictureName: PropTypes.string,
      status: PropTypes.string.isRequired,
      category: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired
  ).isRequired,
};

export default FoodtrucksList;
