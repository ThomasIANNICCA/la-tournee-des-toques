// action types
export const FETCH_BACK_CATEGORIES_LIST = 'FETCH_BACK_CATEGORIES_LIST';
export const SHOW_BACK_CATEGORIES_LIST = 'SHOW_BACK_CATEGORIES_LIST';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const CHANGE_CATEGORY_INPUT = 'CHANGE_CATEGORY_INPUT';
export const SUBMIT_CATEGORY_FORM = 'SUBMIT_CATEGORY_FORM';
export const REDIRECT_TO_CATEGORIES_LIST = 'REDIRECT_TO_CATEGORIES_LIST';
export const ERROR_CATEGORY_SUBMIT = 'ERROR_CATEGORY_SUBMIT';
export const FETCH_CATEGORY_DETAIL = 'FETCH_CATEGORY_DETAIL';
export const SHOW_CATEGORY_DETAIL = 'SHOW_CATEGORY_DETAIL';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';
export const ERROR_EDIT_MESSAGE = 'ERROR_EDIT_MESSAGE';

// action creators
export const fetchBackCategoriesList = () => ({
  type: FETCH_BACK_CATEGORIES_LIST,
});

export const showBackCategoriesList = (backCategoriesList) => ({
  type: SHOW_BACK_CATEGORIES_LIST,
  list: backCategoriesList,
});

export const deleteCategory = (categoryId) => ({
  type: DELETE_CATEGORY,
  categoryId,
});

export const changeCategoryInput = (newValue) => ({
  type: CHANGE_CATEGORY_INPUT,
  newValue,
});

export const submitCategoryForm = () => ({
  type: SUBMIT_CATEGORY_FORM,
});

export const redirectToCategoriesList = () => ({
  type: REDIRECT_TO_CATEGORIES_LIST,
});

export const errorCategorySubmit = () => ({
  type: ERROR_CATEGORY_SUBMIT,
});

export const fetchCategoryDetail = (id) => ({
  type: FETCH_CATEGORY_DETAIL,
  id,
});

export const showCategoryDetail = (categoryName) => ({
  type: SHOW_CATEGORY_DETAIL,
  newValue: categoryName,
});

export const editCategory = (id) => ({
  type: EDIT_CATEGORY,
  id,
});

export const errorEditMessage = () => ({
  type: ERROR_EDIT_MESSAGE,
});
