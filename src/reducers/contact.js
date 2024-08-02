import {
  CHANGE_INPUT,
  SUBMIT_CONTACT_FORM,
  SUBMIT_SUCCESSFULL,
  SUBMIT_ERROR,
  CHANGE_SELECT_INPUT,
} from '../action/contact';

const initialState = {
  name: '',
  firstname: '',
  email: '',
  message: '',
  reason: [],
  isMessageReceived: false,
  validationMessage: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        [action.fieldName]: action.newValue,
      };

    case CHANGE_SELECT_INPUT:
      return {
        ...state,
        reason: action.selectedOption,
      };

    case SUBMIT_CONTACT_FORM:
      return {
        ...state,
      };

    case SUBMIT_SUCCESSFULL:
      return {
        ...state,
        name: '',
        firstname: '',
        email: '',
        message: '',
        reason: [],
        isMessageReceived: true,
        validationMessage: 'Message envoyé avec succès !',
      };

    case SUBMIT_ERROR:
      return {
        ...state,
        validationMessage:
          "Erreur lors de l'envoi du message. Veuillez vérifier que tous les champs sont complétés et valides.",
      };

    default:
      return state;
  }
}

export default reducer;
