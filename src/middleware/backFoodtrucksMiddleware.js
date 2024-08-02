import axios from 'axios';
import {
  FETCH_BACK_FOODTRUCKS_LIST,
  FETCH_PENDING_FOODTRUCKS,
  showPendingFoodtrucks,
  showBackFoodtrucksList,
  showPendingFoodtruckDetail,
  FETCH_PENDING_FOODTRUCK_DETAIL,
  VALIDATE_FOODTRUCK,
  REFUSE_FOODTRUCK,
  validateFoodtruckSuccess,
  refuseFoodtruckSuccess,
} from '../action/backFoodtrucks';
import {
  FETCH_FOODTRUCK_DETAIL,
  showFoodtruckDetail,
} from '../action/foodtrucks';
import config from '../config';

const backfoodtrucksMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PENDING_FOODTRUCKS:
      axios
        .get(`${config.baseUri}/api/v1/back/home`, {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          console.log(response.data);
          store.dispatch(showPendingFoodtrucks(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case FETCH_BACK_FOODTRUCKS_LIST:
      axios
        .get(`${config.baseUri}/api/v1/back/trucks`, {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          console.log(response.data);
          store.dispatch(showBackFoodtrucksList(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case FETCH_PENDING_FOODTRUCK_DETAIL:
      axios
        .get(`${config.baseUri}/api/v1/back/trucks/${action.id}`, {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          console.log(response.data);
          store.dispatch(showPendingFoodtruckDetail(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case VALIDATE_FOODTRUCK:
      axios
        .put(
          `${config.baseUri}/api/v1/back/trucks/${action.id}`,
          {
            status: 'validated',
            location:
              store.getState().backFoodtrucks.newLocationForPendingFoodtruck,
          },
          {
            headers: {
              Authorization: `Bearer ${store.getState().user.token}`,
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          store.dispatch(validateFoodtruckSuccess());
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case REFUSE_FOODTRUCK:
      axios
        .put(
          `${config.baseUri}/api/v1/back/trucks/${action.id}`,
          {
            status: 'refused',
          },
          {
            headers: {
              Authorization: `Bearer ${store.getState().user.token}`,
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          store.dispatch(refuseFoodtruckSuccess());
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case FETCH_FOODTRUCK_DETAIL:
      axios
        .get(`${config.baseUri}/api/v1/back/trucks/${action.id}`, {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          console.log(response.data);
          store.dispatch(showFoodtruckDetail(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    default:
      next(action);
  }
};

export default backfoodtrucksMiddleware;
