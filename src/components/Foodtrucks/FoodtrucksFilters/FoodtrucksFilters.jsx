import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowDown } from 'react-icons/io';
import FilterInput from './FilterInput/FilterInput';
import {
  toggleFiltersOpen,
  updateFilterCategory,
} from '../../../action/foodtrucks';

import './FoodtrucksFilters.scss';

const FoodtrucksFilters = ({ filters }) => {
  const isFiltersOpen = useSelector((state) => state.foodtrucks.isFiltersOpen);
  const categoryChecked = useSelector(
    (state) => state.foodtrucks.categoryChecked
  ); // Récupération de categoryChecked depuis le state Redux
  const dispatch = useDispatch();

  return (
    <div className="foodtrucks-filters">
      <button
        type="button"
        className="light-button filters-button"
        onClick={() => {
          const action = toggleFiltersOpen(!isFiltersOpen);
          dispatch(action);
        }}
      >
        Filtres <IoIosArrowDown />
      </button>

      {isFiltersOpen && (
        <div className="filters-container">
          {filters.map((filter) => (
            <FilterInput
              key={filter.id}
              id={filter.id}
              name={filter.name}
              checked={categoryChecked[filter.id]} // Utilisation de categoryChecked pour contrôler l'état du checkbox
              onChange={() => {
                // Lorsqu'il y a un changement, déclencher l'action pour mettre à jour categoryChecked
                dispatch(
                  updateFilterCategory(filter.id, !categoryChecked[filter.id])
                );
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

FoodtrucksFilters.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FoodtrucksFilters;
