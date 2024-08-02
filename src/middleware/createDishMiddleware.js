import axios from 'axios';

import {
  FETCH_DRAFT_DISHES_INFOS,
  SUBMIT_CREATE_DISH,
  SUBMIT_DELETE_DISH,
  SUBMIT_EDIT_DISH,
  fetchDraftDishesInfos,
  manageFailedDishDelete,
  manageFailedSubmitDish,
  manageSuccessfulDishCreation,
  manageSuccessfulDishDelete,
  showDraftDishesInfos,
} from '../action/createDish';
import config from '../config';

const createDishMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_DRAFT_DISHES_INFOS:
      axios
        .get(`${config.baseUri}/api/v1/trucks/${action.foodtruckId}`)
        .then((response) => {
          store.dispatch(showDraftDishesInfos(response.data.dish));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case SUBMIT_CREATE_DISH:
      axios
        .post(
          `${config.baseUri}/api/v1/user/${
            store.getState().user.userId
          }/truck/${store.getState().createFoodtruck.id}`,
          action.formData,
          {
            headers: {
              Authorization: `Bearer ${store.getState().user.token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then((response) => {
          store.dispatch(manageSuccessfulDishCreation(response.data.id));
          store.dispatch(
            fetchDraftDishesInfos(store.getState().createFoodtruck.id)
          );
        })
        .catch(() => {
          store.dispatch(manageFailedSubmitDish());
        });
      break;

    case SUBMIT_EDIT_DISH:
      axios
        .post(
          `${config.baseUri}/api/v1/user/${store.getState().user.userId}/dish/${
            store.getState().createDish.newDishId
          }/edit`,
          action.formData,
          {
            headers: {
              Authorization: `Bearer ${store.getState().user.token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then((response) => {
          store.dispatch(manageSuccessfulDishCreation(response.data.id));
          store.dispatch(
            fetchDraftDishesInfos(store.getState().createFoodtruck.id)
          );
        })
        .catch(() => {
          store.dispatch(manageFailedSubmitDish());
        });
      break;

    case SUBMIT_DELETE_DISH:
      axios
        .delete(
          `${config.baseUri}/api/v1/user/${store.getState().user.userId}/dish/${
            store.getState().createDish.dishIdToBeDeleted
          }`,
          {
            headers: {
              Authorization: `Bearer ${store.getState().user.token}`,
            },
          }
        )
        .then(() => {
          store.dispatch(manageSuccessfulDishDelete());
          store.dispatch(
            fetchDraftDishesInfos(store.getState().createFoodtruck.id)
          );
        })
        .catch(() => {
          store.dispatch(manageFailedDishDelete());
        });
      break;

    default:
  }
  next(action);
};

export default createDishMiddleware;
