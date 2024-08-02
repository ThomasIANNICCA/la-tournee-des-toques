// action types
export const FETCH_BACK_USERS_LIST = 'FETCH_BACK_USERS_LIST';
export const SHOW_BACK_USERS_LIST = 'SHOW_BACK_USERS_LIST';
export const FETCH_BACK_USERS_DETAIL = 'FETCH_BACK_USERS_DETAIL';
export const SHOW_BACK_USERS_DETAIL = 'SHOW_BACK_USERS_DETAIL';
export const DELETE_BACK_USER = 'DELETE_BACK_USER';
export const ADD_BACK_USER = 'ADD_BACK_USER';
export const CHANGE_USER_INPUT = 'CHANGE_USER_INPUT';
export const TOGGLE_ADMIN_ROLE = 'TOGGLE_ADMIN_ROLE';
export const ADD_USER_SUBMIT = 'ADD_USER_SUBMIT';
export const ERROR_SUBMIT = 'ERROR_SUBMIT';
export const REDIRECT_TO_USERS_LIST = 'REDIRECT_TO_USERS_LIST';

// action creators
export const fetchBackUsersList = () => ({
  type: FETCH_BACK_USERS_LIST,
});

export const showBackUsersList = (backUsersList) => ({
  type: SHOW_BACK_USERS_LIST,
  list: backUsersList,
});

export const fetchBackUsersDetail = (id) => ({
  type: FETCH_BACK_USERS_DETAIL,
  id,
});

export const showBackUsersDetail = (backUsersDetail) => ({
  type: SHOW_BACK_USERS_DETAIL,
  detail: backUsersDetail,
});

export const DeleteBackUser = (userId) => ({
  type: DELETE_BACK_USER,
  userId,
});

export const addBackUser = () => ({
  type: ADD_BACK_USER,
});

export const changeUserInput = (fieldName, newValue) => ({
  type: CHANGE_USER_INPUT,
  fieldName,
  newValue,
});

export const toggleAdminRole = () => ({
  type: TOGGLE_ADMIN_ROLE,
});

export const addUserSubmit = () => ({
  type: ADD_USER_SUBMIT,
});

export const errorSubmit = () => ({
  type: ERROR_SUBMIT,
});

export const redirectToUsersList = () => ({
  type: REDIRECT_TO_USERS_LIST,
});
