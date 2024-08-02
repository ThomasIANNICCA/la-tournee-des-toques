import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  emptyFoodtruckDetailForNextFetch,
  fetchFoodtruckDetail,
} from '../../action/foodtrucks';

import FoodtruckHeader from './FoodtruckHeader/FoodtruckHeader';
import FoodtruckChief from './FoodtruckChief/FoodtruckChief';
import FoodtruckDishes from './FoodtruckDishes/FoodtruckDishes';
import Loader from '../App/Loader/Loader';
import Error404 from '../Error404/Error404';

import './FoodtruckDetail.scss';

const FoodtruckDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const foodtruckDetail = useSelector(
    (state) => state.foodtrucks.foodtruckDetail
  );

  useEffect(() => {
    dispatch(emptyFoodtruckDetailForNextFetch());
    dispatch(fetchFoodtruckDetail(id));
  }, [dispatch, id]);

  if (
    !foodtruckDetail ||
    !foodtruckDetail.name ||
    !foodtruckDetail.location ||
    !foodtruckDetail.presentation ||
    !foodtruckDetail.category ||
    !foodtruckDetail.chef_name ||
    !foodtruckDetail.chef_description ||
    !foodtruckDetail.dish
  ) {
    return <Loader isFullPage />;
  }

  if (foodtruckDetail.status !== 'validated') {
    return <Error404 />;
  }

  return (
    <div className="foodtruck-section">
      <FoodtruckHeader
        name={foodtruckDetail.name}
        location={foodtruckDetail.location}
        presentation={foodtruckDetail.presentation}
        categories={foodtruckDetail.category}
        pictureName={foodtruckDetail.pictureName}
      />
      <FoodtruckChief
        picture={foodtruckDetail.chefPictureName}
        name={foodtruckDetail.chef_name}
        description={foodtruckDetail.chef_description}
      />
      <FoodtruckDishes dishes={foodtruckDetail.dish} />
    </div>
  );
};

export default FoodtruckDetail;
