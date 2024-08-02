import axios from 'axios';
import { FETCH_PARTNERS, showPartners } from '../action/partners';
import config from '../config';

const partnersMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PARTNERS:
      axios
        .get(`${config.baseUri}/api/v1/home`)
        .then((response) => {
          const actionToDispatch = showPartners(response.data.partnerList);
          store.dispatch(actionToDispatch);
        })
        .catch((error) => {
          // ici le traitement à appliquer quand la réponse arrive et qu'il y eu// une erreur (4xx ou 5xx)console.log('catch/error', error);
          console.log(error);
        });
      break;
    default:
  }
  next(action);
};

export default partnersMiddleware;
