// action types
export const FETCH_BACK_ANIMATIONS_LIST = 'FETCH_BACK_ANIMATIONS_LIST';
export const SHOW_BACK_ANIMATIONS_LIST = 'SHOW_BACK_ANIMATIONS_LIST';
export const DELETE_ANIMATION = 'DELETE_ANIMATION';
export const CHANGE_ANIMATION_INPUT = 'CHANGE_ANIMATION_INPUT';
export const SUBMIT_ANIMATION_FORM = 'SUBMIT_ANIMATION_FORM';
export const REDIRECT_TO_ANIMATIONS_LIST = 'REDIRECT_TO_ANIMATIONS_LIST';
export const ERROR_ANIMATION_SUBMIT = 'ERROR_ANIMATION_SUBMIT';
export const FETCH_ANIMATION_DETAIL = 'FETCH_ANIMATION_DETAIL';
export const SHOW_ANIMATION_DETAIL = 'SHOW_ANIMATION_DETAIL';
export const EDIT_ANIMATION = 'EDIT_ANIMATION';
export const ERROR_EDIT_MESSAGE = 'ERROR_EDIT_MESSAGE';

// action creators
export const fetchBackAnimationsList = () => ({
  type: FETCH_BACK_ANIMATIONS_LIST,
});

export const showBackAnimationsList = (backAnimationsList) => ({
  type: SHOW_BACK_ANIMATIONS_LIST,
  list: backAnimationsList,
});

export const deleteAnimation = (animationId) => ({
  type: DELETE_ANIMATION,
  animationId,
});

export const changeAnimationInput = (fieldName, newValue) => ({
  type: CHANGE_ANIMATION_INPUT,
  fieldName,
  newValue,
});

export const submitAnimationForm = () => ({
  type: SUBMIT_ANIMATION_FORM,
});

export const redirectToAnimationsList = () => ({
  type: REDIRECT_TO_ANIMATIONS_LIST,
});

export const errorAnimationSubmit = () => ({
  type: ERROR_ANIMATION_SUBMIT,
});

export const fetchAnimationDetail = (id) => ({
  type: FETCH_ANIMATION_DETAIL,
  id,
});

export const showAnimationDetail = (animationDetail) => ({
  type: SHOW_ANIMATION_DETAIL,
  newValue: animationDetail,
});

export const editAnimation = (id) => ({
  type: EDIT_ANIMATION,
  id,
});

export const errorEditMessage = () => ({
  type: ERROR_EDIT_MESSAGE,
});
