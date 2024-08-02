import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import FoodtrucksFilters from './FoodtrucksFilters/FoodtrucksFilters';
import { fetchAllFoodtrucksAndFilters } from '../../action/foodtrucks';
import './Foodtrucks.scss';
import Loader from '../App/Loader/Loader';

import FoodtrucksList from './FoodtrucksList/FoodtrucksList';

const Foodtrucks = () => {
  const foodtrucksFilters = useSelector(
    (state) => state.foodtrucks.foodtrucksFiltersList
  );
  const foodtrucksList = useSelector(
    (state) => state.foodtrucks.foodtrucksList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const action = fetchAllFoodtrucksAndFilters();
    dispatch(action);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="foodtrucks-section pdg-lr">
      <div className="foodtrucks-header">
        <h1 className="primary-title">Les foodtrucks</h1>
        <p className="foodtrucks-description">
          Découvrez les foodtrucks présents lors du festival et les délices que
          vous pourrez déguster. Des tags sont présents pour vous aider à allier
          gourmandise et régimes alimentaires spécifiques, n’hésitez pas à en
          abuser ;-)
        </p>
      </div>
      <FoodtrucksFilters filters={foodtrucksFilters} />

      <FoodtrucksList foodtrucks={foodtrucksList} />
    </div>
  );
};

export default Foodtrucks;
