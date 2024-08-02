import axios from 'axios';
import {
  DELETE_PARTNER,
  FETCH_BACK_PARTNERS_LIST,
  FETCH_PARTNER_DETAIL,
  showBackPartnersList,
  showPartnerDetail,
  fetchBackPartnersList,
} from '../action/backPartners';
import config from '../config';

const backPartnersMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_BACK_PARTNERS_LIST:
      axios
        .get(`${config.baseUri}/api/v1/back/partners`, {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          store.dispatch(showBackPartnersList(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case DELETE_PARTNER:
      axios
        .delete(`${config.baseUri}/api/v1/back/partners/${action.partnerId}`, {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          store.dispatch(fetchBackPartnersList());
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case FETCH_PARTNER_DETAIL:
      axios
        .get(`${config.baseUri}/api/v1/back/partners/${action.id}`, {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          console.log(response.data);
          store.dispatch(showPartnerDetail(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      next(action);
  }
};

export default backPartnersMiddleware;
