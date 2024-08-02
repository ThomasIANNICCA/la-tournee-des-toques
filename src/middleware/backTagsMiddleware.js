import axios from 'axios';
import {
  DELETE_TAG,
  FETCH_BACK_TAGS_LIST,
  SUBMIT_TAG_FORM,
  showBackTagsList,
  redirectToTagsList,
  errorTagSubmit,
  FETCH_TAG_DETAIL,
  showTagDetail,
  EDIT_TAG,
  errorEditMessage,
  fetchBackTagsList,
} from '../action/backTags';
import config from '../config';

const backTagsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_BACK_TAGS_LIST:
      axios
        .get(`${config.baseUri}/api/v1/back/tags`, {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          console.log(response);
          store.dispatch(showBackTagsList(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case DELETE_TAG:
      axios
        .delete(`${config.baseUri}/api/v1/back/tags/${action.tagId}`, {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          store.dispatch(fetchBackTagsList());
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case SUBMIT_TAG_FORM:
      axios
        .post(
          `${config.baseUri}/api/v1/back/tags`,
          {
            name: store.getState().backTags.name,
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
          store.dispatch(redirectToTagsList());
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(errorTagSubmit());
        });
      break;

    case FETCH_TAG_DETAIL:
      axios
        .get(`${config.baseUri}/api/v1/back/tags/${action.id}`, {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          console.log(response.data);
          store.dispatch(showTagDetail(response.data.name));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case EDIT_TAG:
      axios
        .put(
          `${config.baseUri}/api/v1/back/tags/${action.id}`,
          {
            name: store.getState().backTags.name,
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
          store.dispatch(redirectToTagsList());
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

export default backTagsMiddleware;
