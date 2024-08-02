// action types
export const FETCH_BACK_TAGS_LIST = 'FETCH_BACK_TAGS_LIST';
export const SHOW_BACK_TAGS_LIST = 'SHOW_BACK_TAGS_LIST';
export const DELETE_TAG = 'DELETE_TAG';
export const CHANGE_TAG_INPUT = 'CHANGE_TAG_INPUT';
export const SUBMIT_TAG_FORM = 'SUBMIT_TAG_FORM';
export const REDIRECT_TO_TAGS_LIST = 'REDIRECT_TO_TAGS_LIST';
export const ERROR_TAG_SUBMIT = 'ERROR_TAG_SUBMIT';
export const FETCH_TAG_DETAIL = 'FETCH_TAG_DETAIL';
export const SHOW_TAG_DETAIL = 'SHOW_TAG_DETAIL';
export const EDIT_TAG = 'EDIT_TAG';
export const ERROR_EDIT_MESSAGE = 'ERROR_EDIT_MESSAGE';

// action creators
export const fetchBackTagsList = () => ({
  type: FETCH_BACK_TAGS_LIST,
});

export const showBackTagsList = (backTagsList) => ({
  type: SHOW_BACK_TAGS_LIST,
  list: backTagsList,
});

export const deleteTag = (tagId) => ({
  type: DELETE_TAG,
  tagId,
});

export const changeTagInput = (newValue) => ({
  type: CHANGE_TAG_INPUT,
  newValue,
});

export const submitTagForm = () => ({
  type: SUBMIT_TAG_FORM,
});

export const redirectToTagsList = () => ({
  type: REDIRECT_TO_TAGS_LIST,
});

export const errorTagSubmit = () => ({
  type: ERROR_TAG_SUBMIT,
});

export const fetchTagDetail = (id) => ({
  type: FETCH_TAG_DETAIL,
  id,
});

export const showTagDetail = (tagName) => ({
  type: SHOW_TAG_DETAIL,
  newValue: tagName,
});

export const editTag = (id) => ({
  type: EDIT_TAG,
  id,
});

export const errorEditMessage = () => ({
  type: ERROR_EDIT_MESSAGE,
});
