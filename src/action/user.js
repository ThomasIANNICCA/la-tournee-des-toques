// action types
export const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const HANDLE_SUCCESSFUL_LOGIN = 'HANDLE_SUCCESSFUL_LOGIN';
export const REDIRECT_TO_ADMIN = 'REDIRECT_TO_ADMIN';
export const TOGGLE_PASSWORD_VISIBILITY = 'TOGGLE_PASSWORD_VISIBILITY';
export const FETCH_USER_INFOS = 'FETCH_USER_INFOS';
export const SHOW_USER_FOODTRUCKS = 'SHOW_USER_FOODTRUCKS';
export const SHOW_USER_INFOS = 'SHOW_USER_INFOS';
export const HANDLE_FAILED_LOGIN = 'HANDLE_FAILED_LOGIN';
export const HANDLE_LOGOUT = 'HANDLE_LOGOUT';
export const HANDLE_LOGOUT_BACK = 'HANDLE_LOGOUT_BACK';
export const EDIT_USER_INFOS = 'EDIT_USER_INFOS';
export const SAVE_USER_INFOS = 'SAVE_USER_INFOS';
export const CANCEL_EDIT_USER_INFOS = 'CANCEL_EDIT_USER_INFOS';
export const DISPLAY_SAVE_USER_INFOS_STATUS = 'DISPLAY_SAVE_USER_INFOS_STATUS';
export const CHECK_PASSWORD_VALIDITY = 'CHECK_PASSWORD_VALIDITY';
export const STORE_NEW_INFOS = 'STORE_NEW_INFOS';
export const SEND_NEW_PASSWORD = 'SEND_NEW_PASSWORD';
export const MANAGE_SUCCESSFUL_NEW_PASSWORD = 'MANAGE_SUCCESSFUL_NEW_PASSWORD';
export const MANAGE_FAILED_NEW_PASSWORD = 'MANAGE_FAILED_NEW_PASSWORD';
export const MANAGE_EMAIL_NOT_FOUND = 'MANAGE_EMAIL_NOT_FOUND';
export const CLEAN_AUTH_STATUS = 'CLEAN_AUTH_STATUS';

// action creators
export const changeFieldValue = (value, identifier) => ({
  type: CHANGE_FIELD_VALUE,
  value,
  identifier,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const handleSuccessfulLogin = (token) => ({
  type: HANDLE_SUCCESSFUL_LOGIN,
  token,
});

export const redirectToAdmin = () => ({
  type: REDIRECT_TO_ADMIN,
});

export const togglePasswordVisibility = () => ({
  type: TOGGLE_PASSWORD_VISIBILITY,
});

export const fetchUserInfos = (userId) => ({
  type: FETCH_USER_INFOS,
  userId,
});

export const showUserFoodtrucks = (listOfFoodtrucks) => ({
  type: SHOW_USER_FOODTRUCKS,
  listOfFoodtrucks,
});

export const showUserInfos = (data) => ({
  type: SHOW_USER_INFOS,
  data,
});

export const handleFailedLogin = (errorStatus) => ({
  type: HANDLE_FAILED_LOGIN,
  errorStatus,
});

export const handleLogout = () => ({
  type: HANDLE_LOGOUT,
});

export const handleLogoutBack = () => ({
  type: HANDLE_LOGOUT_BACK,
});

export const editUserInfos = () => ({
  type: EDIT_USER_INFOS,
});

export const saveUserInfos = () => ({
  type: SAVE_USER_INFOS,
});

export const cancelEditUserInfos = () => ({
  type: CANCEL_EDIT_USER_INFOS,
});

export const displaySaveUserInfosStatus = () => ({
  type: DISPLAY_SAVE_USER_INFOS_STATUS,
});

export const checkPasswordValidity = () => ({
  type: CHECK_PASSWORD_VALIDITY,
});

export const storeNewInfos = () => ({
  type: STORE_NEW_INFOS,
});

export const sendNewPassword = () => ({
  type: SEND_NEW_PASSWORD,
});

export const manageSuccessfulNewPassword = () => ({
  type: MANAGE_SUCCESSFUL_NEW_PASSWORD,
});

export const manageFailedNewPassword = () => ({
  type: MANAGE_FAILED_NEW_PASSWORD,
});

export const manageEmailNotFound = () => ({
  type: MANAGE_EMAIL_NOT_FOUND,
});

export const cleanAuthStatus = () => ({
  type: CLEAN_AUTH_STATUS,
});
