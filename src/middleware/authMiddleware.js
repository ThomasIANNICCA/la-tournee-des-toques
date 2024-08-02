import axios from 'axios';

import {
  FETCH_USER_INFOS,
  SAVE_USER_INFOS,
  SUBMIT_LOGIN,
  displaySaveUserInfosStatus,
  fetchUserInfos,
  handleFailedLogin,
  handleSuccessfulLogin,
  showUserInfos,
  storeNewInfos,
  submitLogin,
  redirectToAdmin,
  SEND_NEW_PASSWORD,
  manageSuccessfulNewPassword,
  manageFailedNewPassword,
  manageEmailNotFound,
} from '../action/user';
import config from '../config';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios
        .post(`${config.baseUri}/api/login_check`, {
          username: store.getState().user.email,
          password: store.getState().user.password,
        })
        .then((response) => {
          const { token } = response.data;
          console.log(response.data);
          sessionStorage.setItem('jwtToken', token);
          store.dispatch(handleSuccessfulLogin(response.data.token));
          store.dispatch(fetchUserInfos(response.data.userId));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(handleFailedLogin(error.response.status));
        });
      break;

    case FETCH_USER_INFOS:
      axios
        .get(`${config.baseUri}/api/v1/user/${action.userId}`, {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        })
        .then((response) => {
          console.log(response);
          const userRoles = response.data.roles;
          sessionStorage.setItem('roles', JSON.stringify(userRoles));
          sessionStorage.setItem('userId', action.userId);
          if (userRoles.includes('ROLE_ADMIN')) {
            store.dispatch(redirectToAdmin());
          } else {
            store.dispatch(showUserInfos(response.data));
          }
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case SAVE_USER_INFOS:
      axios
        .put(
          `${config.baseUri}/api/v1/user/${store.getState().user.userId}`,
          {
            email: `${
              store.getState().user.newEmail ?? store.getState().user.email
            }`,
            password: `${
              store.getState().user.newPassword ??
              store.getState().user.password
            }`,
            firstname: `${
              store.getState().user.newFirstname ??
              store.getState().user.firstname
            }`,
            lastname: `${
              store.getState().user.newLastname ??
              store.getState().user.lastname
            }`,
          },
          {
            headers: {
              Authorization: `Bearer ${store.getState().user.token}`,
              'Content-Type': 'application/json',
            },
          }
        )
        .then(() => {
          // store the new email and password
          store.dispatch(storeNewInfos());

          if (store.getState().user.newEmail) {
            // if the email has been modified, new login_check to get the new token and fetch all user's data
            store.dispatch(submitLogin());
          } else {
            // else, only get user's new data
            store.dispatch(fetchUserInfos(store.getState().user.userId));
          }
        })
        .then(() => {
          store.dispatch(displaySaveUserInfosStatus());
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case SEND_NEW_PASSWORD:
      axios
        .post(`${config.baseUri}/api/v1/lost-password`, {
          email: `${store.getState().user.email}`,
        })
        .then((response) => {
          console.log(response);
          store.dispatch(manageSuccessfulNewPassword());
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 404) {
            store.dispatch(manageEmailNotFound());
          } else {
            store.dispatch(manageFailedNewPassword());
          }
        });
      break;

    default:
  }

  next(action);
};

export default authMiddleware;
