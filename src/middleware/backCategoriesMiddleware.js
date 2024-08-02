import axios from 'axios';
import {
  DELETE_CATEGORY,
  FETCH_BACK_CATEGORIES_LIST,
  SUBMIT_CATEGORY_FORM,
  showBackCategoriesList,
  redirectToCategoriesList,
  errorCategorySubmit,
  FETCH_CATEGORY_DETAIL,
  showCategoryDetail,
  EDIT_CATEGORY,
  errorEditMessage,
  fetchBackCategoriesList,
} from '../action/backCategories';
import config from '../config';

const backCategoriesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_BACK_CATEGORIES_LIST:
      axios
        .get(`${config.baseUri}/api/v1/back/categories`, {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          store.dispatch(showBackCategoriesList(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case DELETE_CATEGORY:
      axios
        .delete(
          `${config.baseUri}/api/v1/back/categories/${action.categoryId}`,
          {
            headers: {
              Authorization: `Bearer ${store.getState().user.token}`,
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          store.dispatch(fetchBackCategoriesList());
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    case SUBMIT_CATEGORY_FORM:
      axios
        .post(
          `${config.baseUri}/api/v1/back/categories`,
          {
            name: store.getState().backCategories.name,
          },
          {
            headers: {
              Authorization: `Bearer ${store.getState().user.token}`,
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          console.log(response);
          store.dispatch(redirectToCategoriesList());
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(errorCategorySubmit());
        });
      break;

    case FETCH_CATEGORY_DETAIL:
      axios
        .get(`${config.baseUri}/api/v1/back/categories/${action.id}`, {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          console.log(response.data);
          store.dispatch(showCategoryDetail(response.data.name));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case EDIT_CATEGORY:
      axios
        .put(
          `${config.baseUri}/api/v1/back/categories/${action.id}`,
          {
            name: store.getState().backCategories.name,
          },
          {
            headers: {
              Authorization: `Bearer ${store.getState().user.token}`,
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          console.log(response);
          store.dispatch(redirectToCategoriesList());
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(errorEditMessage());
        });
      break;
    default:
      next(action);
  }
};

export default backCategoriesMiddleware;
