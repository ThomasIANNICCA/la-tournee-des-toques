import axios from 'axios';
import {
  FETCH_CATEGORIES_AND_TAGS_LISTS,
  FETCH_DRAFT_FOODTRUCK_INFOS,
  SEND_FOODTRUCK_FOR_PUBLICATION,
  SUBMIT_CREATE_FOODTRUCK,
  SUBMIT_DELETE_FOODTRUCK,
  SUBMIT_EDIT_FOODTRUCK,
  goToCreateFoodtruckStep4,
  manageFailedFoodtruckDelete,
  manageFailedFoodtruckSendingForPublication,
  manageFailedSubmitFoodtruck,
  manageSuccessfulFoodtruckCreation,
  manageSuccessfulFoodtruckDelete,
  manageSuccessfulFoodtruckEdit,
  manageSuccessfulFoodtruckSendingForValidation,
  showCategoriesAndTagsList,
  showDraftFoodtruckInfos,
} from '../action/createFoodtruck';
import { fetchUserInfos } from '../action/user';
import config from '../config';

const createFoodtruckMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_AND_TAGS_LISTS:
      axios.get(`${config.baseUri}/api/v1/tags-categories`).then((response) => {
        store.dispatch(
          showCategoriesAndTagsList(
            response.data.categoryList,
            response.data.tagList
          )
        );
      });
      break;

    case FETCH_DRAFT_FOODTRUCK_INFOS:
      axios
        .get(`${config.baseUri}/api/v1/trucks/${action.foodtruckId}`)
        .then((response) => {
          // if the truck is at 'pending' status, then the user is directly redirected to step 4 (success). Otherwise, the user is redirected to step 1 (creation/modification of the truck)
          if (response.data.status === 'pending') {
            store.dispatch(goToCreateFoodtruckStep4());
          } else {
            // categories format is updated to fit the SelectField component props names expected by "Seact Select"
            const formattedCategories = response.data.category.map(
              (currentCategory) => ({
                label: currentCategory.name,
                value: currentCategory.id,
              })
            );
            const formattedResponseData = {
              id: response.data.id,
              name: response.data.name,
              description: response.data.presentation,
              status: response.data.status,
              picture: response.data.pictureName,
              chefName: response.data.chef_name,
              chefDescription: response.data.chef_description,
              chefPicture: response.data.chefPictureName,
              categories: formattedCategories,
            };

            store.dispatch(showDraftFoodtruckInfos(formattedResponseData));
          }
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case SUBMIT_CREATE_FOODTRUCK:
      axios
        .post(
          `${config.baseUri}/api/v1/user/${store.getState().user.userId}/add`,
          action.formData,
          {
            headers: {
              Authorization: `Bearer ${store.getState().user.token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then((response) => {
          store.dispatch(manageSuccessfulFoodtruckCreation(response.data.id));
        })
        .catch(() => {
          store.dispatch(manageFailedSubmitFoodtruck());
        });
      break;

    case SUBMIT_EDIT_FOODTRUCK:
      axios
        .post(
          `${config.baseUri}/api/v1/user/${
            store.getState().user.userId
          }/truck/${store.getState().createFoodtruck.id}/edit`,
          action.formData,
          {
            headers: {
              Authorization: `Bearer ${store.getState().user.token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then((response) => {
          store.dispatch(manageSuccessfulFoodtruckEdit(response.data.id));
        })
        .catch(() => {
          store.dispatch(manageFailedSubmitFoodtruck());
        });
      break;

    case SUBMIT_DELETE_FOODTRUCK:
      axios
        .post(
          `${config.baseUri}/api/v1/user/${
            store.getState().user.userId
          }/truck/${
            store.getState().createFoodtruck.foodtruckIdToBeDeleted
          }/edit`,
          action.formData,
          {
            headers: {
              Authorization: `Bearer ${store.getState().user.token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then(() => {
          store.dispatch(manageSuccessfulFoodtruckDelete());
          store.dispatch(fetchUserInfos(store.getState().user.userId));
        })
        .catch(() => {
          store.dispatch(manageFailedFoodtruckDelete());
        });
      break;

    case SEND_FOODTRUCK_FOR_PUBLICATION:
      axios
        .post(
          `${config.baseUri}/api/v1/user/${
            store.getState().user.userId
          }/truck/${store.getState().createFoodtruck.id}/edit`,
          action.formData,
          {
            headers: {
              Authorization: `Bearer ${store.getState().user.token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then(() => {
          store.dispatch(manageSuccessfulFoodtruckSendingForValidation());
        })
        .catch(() => {
          store.dispatch(manageFailedFoodtruckSendingForPublication());
        });

      break;

    default:
  }
  next(action);
};

export default createFoodtruckMiddleware;
