import {
  CANCEL_EDIT_USER_INFOS,
  CHANGE_FIELD_VALUE,
  CHECK_PASSWORD_VALIDITY,
  DISPLAY_SAVE_USER_INFOS_STATUS,
  EDIT_USER_INFOS,
  HANDLE_FAILED_LOGIN,
  HANDLE_LOGOUT,
  HANDLE_SUCCESSFUL_LOGIN,
  SAVE_USER_INFOS,
  SHOW_USER_INFOS,
  STORE_NEW_INFOS,
  SUBMIT_LOGIN,
  TOGGLE_PASSWORD_VISIBILITY,
  REDIRECT_TO_ADMIN,
  HANDLE_LOGOUT_BACK,
  FETCH_USER_INFOS,
  SEND_NEW_PASSWORD,
  MANAGE_SUCCESSFUL_NEW_PASSWORD,
  MANAGE_FAILED_NEW_PASSWORD,
  MANAGE_EMAIL_NOT_FOUND,
  CLEAN_AUTH_STATUS,
} from '../action/user';

const initialState = {
  isPasswordVisible: false,
  pendingLogin: false,
  logged: false,
  loginError: '',
  pendingUserInfos: false,
  userId: '',
  email: '',
  password: '',
  firstname: '',
  lastname: '',
  role: JSON.parse(sessionStorage.getItem('roles')) || [],
  token: sessionStorage.getItem('jwtToken') || '',
  userFoodtrucks: [],
  editUserInfos: false,
  pendingSaveUserInfos: false,
  saveUserInfosStatus: '',
  newFirstname: null,
  newLastname: null,
  newEmail: null,
  newPassword: null,
  isNewPasswordValid: true,
  isPendingSendNewPassword: false,
  isSuccessfulNewPassword: false,
  isFailedNewPassword: false,
  isEmailNotFound: false,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_PASSWORD_VISIBILITY:
      return {
        ...state,
        isPasswordVisible: !state.isPasswordVisible,
      };

    case CHANGE_FIELD_VALUE:
      return {
        ...state,
        [action.identifier]: action.value,
      };

    case SUBMIT_LOGIN:
      return {
        ...state,
        pendingLogin: true,
        loginError: '',
        pendingUserInfos: true,
      };

    case HANDLE_SUCCESSFUL_LOGIN:
      return {
        ...state,
        pendingLogin: false,
        token: action.token,
        logged: true,
        loginError: '',
      };

    case REDIRECT_TO_ADMIN:
      window.location.href = '/admin';
      break;

    case FETCH_USER_INFOS:
      return {
        ...state,
        userFoodtrucks: [],
        pendingUserInfos: true,
      };

    case SHOW_USER_INFOS:
      sessionStorage.setItem('roles', JSON.stringify(action.data.roles));
      return {
        ...state,
        isPasswordVisible: false,
        userId: action.data.id,
        email: action.data.email,
        // password: action.password,
        firstname: action.data.firstname,
        lastname: action.data.lastname,
        role: action.data.roles,
        userFoodtrucks: action.data.trucks,
        editUserInfos: false,
        pendingUserInfos: false,
        newFirstname: null,
        newLastname: null,
        newEmail: null,
        newPassword: null,
      };

    case HANDLE_FAILED_LOGIN:
      return {
        ...state,
        pendingLogin: false,
        logged: false,
        loginError: action.errorStatus,
      };

    case HANDLE_LOGOUT:
      sessionStorage.removeItem('jwtToken');
      sessionStorage.removeItem('roles');
      sessionStorage.removeItem('userId');

      return {
        ...state,
        isPasswordVisible: false,
        pendingLogin: false,
        logged: false,
        loginError: '',
        pendingUserInfos: false,
        userId: '',
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        role: '',
        token: '',
        userFoodtrucks: [],
        editUserInfos: false,
        pendingSaveUserInfos: false,
        saveUserInfosStatus: '',
        newFirstname: null,
        newLastname: null,
        newEmail: null,
        newPassword: null,
        isNewPasswordValid: true,
        isPendingSendNewPassword: false,
        isSuccessfulNewPassword: false,
        isFailedNewPassword: false,
        isEmailNotFound: false,
      };

    case HANDLE_LOGOUT_BACK:
      sessionStorage.removeItem('jwtToken');
      sessionStorage.removeItem('roles');
      sessionStorage.removeItem('userId');
      window.location.href = '/';

      return {
        ...state,
        isPasswordVisible: false,
        pendingLogin: false,
        logged: false,
        loginError: '',
        pendingUserInfos: false,
        userId: '',
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        role: '',
        token: '',
        userFoodtrucks: [],
        editUserInfos: false,
        pendingSaveUserInfos: false,
        saveUserInfosStatus: '',
        newFirstname: null,
        newLastname: null,
        newEmail: null,
        newPassword: null,
        isNewPasswordValid: true,
        isPendingSendNewPassword: false,
        isSuccessfulNewPassword: false,
        isFailedNewPassword: false,
        isEmailNotFound: false,
      };

    case EDIT_USER_INFOS:
      return {
        ...state,
        editUserInfos: true,
        saveUserInfosStatus: '',
      };

    case SAVE_USER_INFOS:
      return {
        ...state,
        editUserInfos: false,
        pendingSaveUserInfos: true,
        saveUserInfosStatus: 'pending',
        isNewPasswordValid: true,
      };

    case CANCEL_EDIT_USER_INFOS:
      return {
        ...state,
        isPasswordVisible: false,
        editUserInfos: false,
        newFirstname: null,
        newLastname: null,
        newEmail: null,
        newPassword: null,
        isNewPasswordValid: true,
      };

    case DISPLAY_SAVE_USER_INFOS_STATUS:
      return {
        ...state,
        pendingSaveUserInfos: false,
        saveUserInfosStatus: 'succeed',
      };

    case CHECK_PASSWORD_VALIDITY:
      return {
        ...state,
        isNewPasswordValid: false,
      };

    case STORE_NEW_INFOS:
      return {
        ...state,
        email: state.newEmail ?? state.email,
        password: state.newPassword ?? state.password,
        firstname: state.newFirstname ?? state.firstname,
        lastname: state.newLastname ?? state.lastname,
      };

    case SEND_NEW_PASSWORD:
      return {
        ...state,
        isPendingSendNewPassword: true,
        isSuccessfulNewPassword: false,
        isFailedNewPassword: false,
        isEmailNotFound: false,
      };

    case MANAGE_SUCCESSFUL_NEW_PASSWORD:
      return {
        ...state,
        isPendingSendNewPassword: false,
        isSuccessfulNewPassword: true,
        isFailedNewPassword: false,
        isEmailNotFound: false,
      };

    case MANAGE_FAILED_NEW_PASSWORD:
      return {
        ...state,
        isPendingSendNewPassword: false,
        isSuccessfulNewPassword: false,
        isFailedNewPassword: true,
        isEmailNotFound: false,
      };

    case MANAGE_EMAIL_NOT_FOUND:
      return {
        ...state,
        isPendingSendNewPassword: false,
        isSuccessfulNewPassword: false,
        isFailedNewPassword: false,
        isEmailNotFound: true,
      };

    case CLEAN_AUTH_STATUS:
      return {
        isPasswordVisible: false,
        pendingLogin: false,
        loginError: '',
        pendingUserInfos: false,
        editUserInfos: false,
        pendingSaveUserInfos: false,
        saveUserInfosStatus: '',
        newFirstname: null,
        newLastname: null,
        newEmail: null,
        newPassword: null,
        isNewPasswordValid: true,
        isPendingSendNewPassword: false,
        isSuccessfulNewPassword: false,
        isFailedNewPassword: false,
        isEmailNotFound: false,
      };

    default:
      return state;
  }
}

export default reducer;
