import axios from 'axios';
import {
  SUBMIT_CONTACT_FORM,
  submitSuccesfull,
  submitError,
} from '../action/contact';
import config from '../config';

const contactMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_CONTACT_FORM:
      axios
        .post(`${config.baseUri}/api/v1/contact`, {
          firstname: store.getState().contactForm.firstname,
          name: store.getState().contactForm.name,
          email: store.getState().contactForm.email,
          message: store.getState().contactForm.message,
          reason: store.getState().contactForm.reason.label,
        })
        .then((response) => {
          console.log(response);
          store.dispatch(submitSuccesfull());
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(submitError());
          console.log(store.getState().contactForm.firstname);
          console.log(store.getState().contactForm.name);
          console.log(store.getState().contactForm.email);
          console.log(store.getState().contactForm.message);
          console.log(
            'type of reason:',
            typeof store.getState().contactForm.reason.label
          );
        });
      break;

    default:
  }

  next(action);
};

export default contactMiddleware;
