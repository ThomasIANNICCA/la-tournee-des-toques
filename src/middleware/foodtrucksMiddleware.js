import axios from 'axios';
import {
  FETCH_ALL_FOODTRUCKS_AND_FILTERS,
  showFoodtrucksFilters,
  showAllFoodtrucks,
  FETCH_FOODTRUCK_DETAIL,
  showFoodtruckDetail,
} from '../action/foodtrucks';
import {
  FETCH_CATEGORIES_AND_TAGS_LISTS,
  showCategoriesAndTagsList,
} from '../action/createFoodtruck';
import config from '../config';

const foodtrucksMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ALL_FOODTRUCKS_AND_FILTERS:
      axios
        .get(`${config.baseUri}/api/v1/trucks`)
        .then((response) => {
          const foodtrucksFiltersAction = showFoodtrucksFilters(
            response.data.categoryList
          );
          store.dispatch(foodtrucksFiltersAction);

          const foodtrucksListAction = showAllFoodtrucks(
            response.data.truckList
          );
          store.dispatch(foodtrucksListAction);
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case FETCH_CATEGORIES_AND_TAGS_LISTS:
      axios
        .get(`${config.baseUri}/api/v1/tags-categories`)
        .then((response) => {
          store.dispatch(
            showCategoriesAndTagsList(
              response.data.categoryList,
              response.data.tagList
            )
          );
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case FETCH_FOODTRUCK_DETAIL:
      axios
        .get(`${config.baseUri}/api/v1/trucks/${action.id}`)
        .then((response) => {
          const foodtruckDetail = showFoodtruckDetail(response.data);
          store.dispatch(foodtruckDetail);
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    default:
  }
  next(action);
};

export default foodtrucksMiddleware;
