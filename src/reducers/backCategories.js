import {
  FETCH_BACK_CATEGORIES_LIST,
  SHOW_BACK_CATEGORIES_LIST,
  DELETE_CATEGORY,
  CHANGE_CATEGORY_INPUT,
  SUBMIT_CATEGORY_FORM,
  REDIRECT_TO_CATEGORIES_LIST,
  ERROR_CATEGORY_SUBMIT,
  FETCH_CATEGORY_DETAIL,
  SHOW_CATEGORY_DETAIL,
  EDIT_CATEGORY,
  ERROR_EDIT_MESSAGE,
} from '../action/backCategories';

const initialState = {
  backCategoriesList: [],
  name: '',
  errorMessage: '',
  categoryDetail: [],
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_BACK_CATEGORIES_LIST:
      return {
        ...state,
      };

    case SHOW_BACK_CATEGORIES_LIST:
      return {
        ...state,
        backCategoriesList: action.list,
      };

    case DELETE_CATEGORY:
      return {
        ...state,
        backCategoriesList: state.backCategoriesList.filter(
          (category) => category.id !== action.categoryId
        ),
      };

    case CHANGE_CATEGORY_INPUT:
      return {
        ...state,
        name: action.newValue,
      };

    case SUBMIT_CATEGORY_FORM:
      return {
        ...state,
        name: '',
      };

    case REDIRECT_TO_CATEGORIES_LIST:
      window.location.href = '/admin/categories';
      return {
        ...state,
        name: '',
      };
    case ERROR_CATEGORY_SUBMIT:
      return {
        ...state,
        errorMessage:
          "Erreur lors de la création de la catégorie. Veuillez vérifier que le champ n'est pas vide ou que la catégorie n'existe pas déjà.",
      };

    case FETCH_CATEGORY_DETAIL:
      return {
        ...state,
      };

    case SHOW_CATEGORY_DETAIL:
      return {
        ...state,
        name: action.newValue,
      };

    case EDIT_CATEGORY:
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
