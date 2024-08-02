import axios from 'axios';
import {
  DELETE_ANIMATION,
  FETCH_BACK_ANIMATIONS_LIST,
  SUBMIT_ANIMATION_FORM,
  showBackAnimationsList,
  redirectToAnimationsList,
  errorAnimationSubmit,
  FETCH_ANIMATION_DETAIL,
  showAnimationDetail,
  EDIT_ANIMATION,
  errorEditMessage,
  fetchBackAnimationsList,
} from '../action/backAnimations';
import config from '../config';

const backAnimationsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_BACK_ANIMATIONS_LIST:
      axios
        .get(`${config.baseUri}/api/v1/back/events`, {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          console.log(response.data);
          store.dispatch(showBackAnimationsList(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case DELETE_ANIMATION:
      axios
        .delete(`${config.baseUri}/api/v1/back/events/${action.animationId}`, {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          store.dispatch(fetchBackAnimationsList());
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case SUBMIT_ANIMATION_FORM:
      axios
        .post(
          `${config.baseUri}/api/v1/back/events`,
          {
            title: store.getState().backAnimations.title,
            content: store.getState().backAnimations.content,
            openedAt: store.getState().backAnimations.openedAt,
            closedAt: store.getState().backAnimations.closedAt,
            location: store.getState().backAnimations.location,
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
          store.dispatch(redirectToAnimationsList());
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(errorAnimationSubmit());
        });
      break;

    case FETCH_ANIMATION_DETAIL:
      axios
        .get(`${config.baseUri}/api/v1/back/events/${action.id}`, {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          console.log(response.data);
          store.dispatch(showAnimationDetail(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case EDIT_ANIMATION:
      axios
        .post(
          `${config.baseUri}/api/v1/back/events/${action.id}/edit`,
          {
            title: store.getState().backAnimations.title,
            content: store.getState().backAnimations.content,
            openedAt: store.getState().backAnimations.openedAt,
            closedAt: store.getState().backAnimations.closedAt,
            location: store.getState().backAnimations.location,
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
          store.dispatch(redirectToAnimationsList());
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

export default backAnimationsMiddleware;
