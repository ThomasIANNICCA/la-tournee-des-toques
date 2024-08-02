import axios from 'axios';
import {
  FETCH_HOME_ANIMATIONS,
  showHomeAnimations,
  FETCH_ALL_ANIMATIONS,
  showAllAnimations,
} from '../action/animations';
import config from '../config';

const recipesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_HOME_ANIMATIONS:
      axios
        .get(`${config.baseUri}/api/v1/home`)
        .then((response) => {
          console.log(response.data);
          const actionToDispatch = showHomeAnimations(response.data.eventList);
          store.dispatch(actionToDispatch);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case FETCH_ALL_ANIMATIONS:
      axios
        .get(`${config.baseUri}/api/v1/events`)
        .then((response) => {
          const actionToDispatch = showAllAnimations(response.data);

          store.dispatch(actionToDispatch);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
  }
  next(action);
};

export default recipesMiddleware;
