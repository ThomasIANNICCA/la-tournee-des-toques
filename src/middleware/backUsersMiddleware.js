import axios from 'axios';
import {
  ADD_USER_SUBMIT,
  DELETE_BACK_USER,
  FETCH_BACK_USERS_DETAIL,
  FETCH_BACK_USERS_LIST,
  showBackUsersDetail,
  showBackUsersList,
  errorSubmit,
  redirectToUsersList,
} from '../action/backUsers';
import config from '../config';

const backUsersMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_BACK_USERS_LIST:
      axios
        .get(`${config.baseUri}/api/v1/back/users`, {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          console.log(response.data);
          store.dispatch(showBackUsersList(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case FETCH_BACK_USERS_DETAIL:
      axios
        .get(`${config.baseUri}/api/v1/back/users/${action.id}`, {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          console.log(response.data);
          store.dispatch(showBackUsersDetail(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case DELETE_BACK_USER:
      axios
        .delete(`${config.baseUri}/api/v1/back/users/${action.userId}`, {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case ADD_USER_SUBMIT:
      axios
        .post(
          `${config.baseUri}/api/v1/back/users`,
          {
            email: store.getState().backUsers.email,
            roles: store.getState().backUsers.roles,
            firstname: store.getState().backUsers.firstname,
            lastname: store.getState().backUsers.lastname,
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
          store.dispatch(redirectToUsersList());
        })
        .catch((error) => {
          store.dispatch(errorSubmit());
          console.log(error);
        });
      break;

    default:
  }
  next(action);
};

export default backUsersMiddleware;
