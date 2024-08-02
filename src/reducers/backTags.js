import {
  FETCH_BACK_TAGS_LIST,
  SHOW_BACK_TAGS_LIST,
  DELETE_TAG,
  CHANGE_TAG_INPUT,
  SUBMIT_TAG_FORM,
  REDIRECT_TO_TAGS_LIST,
  ERROR_TAG_SUBMIT,
  FETCH_TAG_DETAIL,
  SHOW_TAG_DETAIL,
  EDIT_TAG,
  ERROR_EDIT_MESSAGE,
} from '../action/backTags';

const initialState = {
  backTagsList: [],
  name: '',
  errorMessage: '',
  tagDetail: [],
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_BACK_TAGS_LIST:
      return {
        ...state,
      };

    case SHOW_BACK_TAGS_LIST:
      return {
        ...state,
        backTagsList: action.list,
      };

    case DELETE_TAG:
      return {
        ...state,
        backTagsList: state.backTagsList.filter(
          (tag) => tag.id !== action.tagId
        ),
      };

    case CHANGE_TAG_INPUT:
      return {
        ...state,
        name: action.newValue,
      };

    case SUBMIT_TAG_FORM:
      return {
        ...state,
        name: '',
      };

    case REDIRECT_TO_TAGS_LIST:
      window.location.href = '/admin/tags';
      return {
        ...state,
        name: '',
      };
    case ERROR_TAG_SUBMIT:
      return {
        ...state,
        errorMessage:
          "Erreur lors de la création de la catégorie. Veuillez vérifier que le champ n'est pas vide ou que la catégorie n'existe pas déjà.",
      };

    case FETCH_TAG_DETAIL:
      return {
        ...state,
      };

    case SHOW_TAG_DETAIL:
      return {
        ...state,
        name: action.newValue,
      };

    case EDIT_TAG:
      return {
        ...state,
        name: '',
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
