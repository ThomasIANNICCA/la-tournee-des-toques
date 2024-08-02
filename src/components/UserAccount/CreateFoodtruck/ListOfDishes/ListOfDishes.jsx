import PropTypes from 'prop-types';

import DishItem from '../../../FoodtruckDetail/FoodtruckDishes/DishItem/DishItem';

const ListOfDishes = ({ dishes, isEditable = false }) => {
  // Group dishes by their 'type' using the reduce function
  const groupedDishes = dishes.reduce((accumulator, dish) => {
    // If the 'type' doesn't exist in the accumulator, create an empty array for it
    if (!accumulator[dish.type]) {
      accumulator[dish.type] = [];
    }
    // Push the current dish into the array corresponding to its 'type'
    accumulator[dish.type].push(dish);
    return accumulator;
  }, {});

  return (
    <div className="dishes">
      <div className="dishes-container pdg-lr">
        {/* For each type of dishes */}
        {Object.keys(groupedDishes).map((type) => (
          <div key={type}>
            <h3 className="dishes-list-title">{type}</h3>
            <div className="dishes-list-items">
              {/* Show each dish within the current type */}
              {groupedDishes[type].map((dish) => (
                <DishItem
                  key={dish.id}
                  id={dish.id}
                  name={dish.name}
                  type={type}
                  description={dish.description}
                  price={dish.price}
                  picture={dish.pictureName}
                  tags={dish.tag}
                  isEditable={isEditable}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ListOfDishes.propTypes = {
  dishes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      picture: PropTypes.string,
      type: PropTypes.string.isRequired,
      tag: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  // eslint-disable-next-line react/require-default-props
  isEditable: PropTypes.bool,
};

export default ListOfDishes;
