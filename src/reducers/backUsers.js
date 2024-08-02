import {
  ADD_USER_SUBMIT,
  CHANGE_USER_INPUT,
  DELETE_BACK_USER,
  ERROR_SUBMIT,
  FETCH_BACK_USERS_DETAIL,
  FETCH_BACK_USERS_LIST,
  REDIRECT_TO_USERS_LIST,
  SHOW_BACK_USERS_DETAIL,
  SHOW_BACK_USERS_LIST,
  TOGGLE_ADMIN_ROLE,
} from '../action/backUsers';

const initialState = {
  backUsersList: [],
  backUsersDetail: [],
  lastname: '',
  firstname: '',
  email: '',
  password: '',
  roles: ['ROLE_USER'],
  errorMessage: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_BACK_USERS_LIST:
      return {
        ...state,
      };

    case SHOW_BACK_USERS_LIST:
      return {
        ...state,
        backUsersList: action.list,
      };

    case FETCH_BACK_USERS_DETAIL:
      return {
        ...state,
      };

    case SHOW_BACK_USERS_DETAIL:
      return {
        ...state,
        backUsersDetail: action.detail,
      };

    case DELETE_BACK_USER:
      return {
        ...state,
      };

    case CHANGE_USER_INPUT:
      return {
        ...state,
        [action.fieldName]: action.newValue,
      };

    case TOGGLE_ADMIN_ROLE:
      return {
        ...state,
        roles: state.roles.includes('ROLE_ADMIN')
          ? state.roles.filter((role) => role !== 'ROLE_ADMIN')
          : [...state.roles, 'ROLE_ADMIN'],
      };

    case ADD_USER_SUBMIT:
      return {
        ...state,
      };

    case ERROR_SUBMIT:
      return {
        ...state,
        errorMessage:
          "Echec lors de la création de l'utilisateur. Vérifiez que tous les champs sont remplis et que l'adresse mail n'est pas déja utilisée.",
      };

    case REDIRECT_TO_USERS_LIST:
      window.location.href = '/admin/users';
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default reducer;
