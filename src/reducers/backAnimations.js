import {
  FETCH_BACK_ANIMATIONS_LIST,
  SHOW_BACK_ANIMATIONS_LIST,
  DELETE_ANIMATION,
  CHANGE_ANIMATION_INPUT,
  SUBMIT_ANIMATION_FORM,
  REDIRECT_TO_ANIMATIONS_LIST,
  ERROR_ANIMATION_SUBMIT,
  FETCH_ANIMATION_DETAIL,
  SHOW_ANIMATION_DETAIL,
  EDIT_ANIMATION,
  ERROR_EDIT_MESSAGE,
} from '../action/backAnimations';

const initialState = {
  backAnimationsList: [],
  title: '',
  openedAt: '',
  closedAt: '',
  location: '',
  content: '',
  picture: 'assets/images/events.jpg',
  errorMessage: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_BACK_ANIMATIONS_LIST:
      return {
        ...state,
      };

    case SHOW_BACK_ANIMATIONS_LIST:
      return {
        ...state,
        backAnimationsList: action.list,
      };

    case DELETE_ANIMATION:
      return {
        ...state,
      };

    case CHANGE_ANIMATION_INPUT:
      return {
        ...state,
        [action.fieldName]: action.newValue,
      };

    case SUBMIT_ANIMATION_FORM:
      return {
        ...state,
        title: '',
      };

    case REDIRECT_TO_ANIMATIONS_LIST:
      window.location.href = '/admin/animations';
      return {
        ...state,
        title: '',
      };
    case ERROR_ANIMATION_SUBMIT:
      return {
        ...state,
        errorMessage:
          "Erreur lors de la création de l'animation. Veuillez vérifier que le champ n'est pas vide ou que l'animation n'existe pas déjà.",
      };

    case FETCH_ANIMATION_DETAIL:
      return {
        ...state,
      };

    case SHOW_ANIMATION_DETAIL:
      return {
        ...state,
        title: action.newValue.title,
        content: action.newValue.content,
        openedAt: action.newValue.openedAt,
        closedAt: action.newValue.closedAt,
        location: action.newValue.location,
        picture: action.newValue.pictureName,
      };

    case EDIT_ANIMATION:
      return {
        ...state,
        title: '',
      };

    case ERROR_EDIT_MESSAGE:
      return {
        ...state,
        errorMessage:
          "Erreur lors de la modification de la catégorie. Veuillez vérifier que le champ n'est pas vide ou que la catégorie n'existe pas déjà.",
      };

    default:
      return state;
  }
}

export default reducer;
