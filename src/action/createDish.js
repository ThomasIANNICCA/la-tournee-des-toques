// action types
export const FETCH_DRAFT_DISHES_INFOS = 'FETCH_DRAFT_DISHES_INFOS';
export const SHOW_DRAFT_DISHES_INFOS = 'SHOW_DRAFT_DISHES_INFOS';
export const OPEN_ADD_DISH_POPUP = 'OPEN_ADD_DISH_POPUP';
export const CLOSE_ADD_DISH_POPUP = 'CLOSE_ADD_DISH_POPUP';
export const CHANGE_DISH_FIELD = 'CHANGE_DISH_FIELD';
export const CHANGE_SELECTED_TAGS = 'CHANGE_SELECTED_TAGS';
export const UPLOAD_DISH_PICTURE = 'UPLOAD_DISH_PICTURE';
export const REMOVE_DISH_PICTURE = 'REMOVE_DISH_PICTURE';
export const SUBMIT_CREATE_DISH = 'SUBMIT_CREATE_DISH';
export const MANAGE_SUCCESSFUL_DISH_CREATION =
  'MANAGE_SUCCESSFUL_DISH_CREATION';
export const STORE_DRAFT_DISH_INFOS_TO_EDIT = 'STORE_DRAFT_DISH_INFOS_TO_EDIT';
export const SUBMIT_EDIT_DISH = 'SUBMIT_EDIT_DISH';
export const MANAGE_FAILED_SUBMIT_DISH = 'MANAGE_FAILED_SUBMIT_DISH';
export const OPEN_DELETE_CONFIRMATION_MSG = 'OPEN_DELETE_CONFIRMATION_MSG';
export const CLOSE_DELETE_CONFIRMATION_MSG = 'CLOSE_DELETE_CONFIRMATION_MSG';
export const SUBMIT_DELETE_DISH = 'SUBMIT_DELETE_DISH';
export const MANAGE_SUCCESSFUL_DISH_DELETE = 'MANAGE_SUCCESSFUL_DISH_DELETE';
export const MANAGE_FAILED_DISH_DELETE = 'MANAGE_FAILED_DISH_DELETE';
export const FORBID_HEAVY_DISH_PICTURE = 'FORBID_HEAVY_DISH_PICTURE';
export const FORBID_NOT_IMG_DISH_PICTURE = 'FORBID_NOT_IMG_DISH_PICTURE';

// action creators
export const fetchDraftDishesInfos = (foodtruckId) => ({
  type: FETCH_DRAFT_DISHES_INFOS,
  foodtruckId,
});

export const showDraftDishesInfos = (dishesData) => ({
  type: SHOW_DRAFT_DISHES_INFOS,
  dishesData,
});

export const openAddDishPopup = () => ({
  type: OPEN_ADD_DISH_POPUP,
});

export const closeAddDishPopup = () => ({
  type: CLOSE_ADD_DISH_POPUP,
});

export const changeDishField = (value, identifier) => ({
  type: CHANGE_DISH_FIELD,
  value,
  identifier,
});

export const changeSelectedTags = (selectedOptions, name) => ({
  type: CHANGE_SELECTED_TAGS,
  selectedOptions,
  name,
});

export const uploadDishPicture = (file, identifier) => ({
  type: UPLOAD_DISH_PICTURE,
  file,
  identifier,
});

export const removeDishPicture = () => ({
  type: REMOVE_DISH_PICTURE,
});

export const submitCreateDish = (formData) => ({
  type: SUBMIT_CREATE_DISH,
  formData,
});

export const manageSuccessfulDishCreation = (newDishId) => ({
  type: MANAGE_SUCCESSFUL_DISH_CREATION,
  newDishId,
});

export const storeDraftDishInfosToEdit = (
  dishId,
  dishName,
  dishType,
  dishDescription,
  dishPrice,
  dishPicture,
  dishTags
) => ({
  type: STORE_DRAFT_DISH_INFOS_TO_EDIT,
  dishId,
  dishName,
  dishType,
  dishDescription,
  dishPrice,
  dishPicture,
  dishTags,
});

export const submitEditDish = (formData) => ({
  type: SUBMIT_EDIT_DISH,
  formData,
});

export const manageFailedSubmitDish = () => ({
  type: MANAGE_FAILED_SUBMIT_DISH,
});

export const openDeleteConfirmationMsg = (dishId) => ({
  type: OPEN_DELETE_CONFIRMATION_MSG,
  dishId,
});

export const closeDeleteConfirmationMsg = () => ({
  type: CLOSE_DELETE_CONFIRMATION_MSG,
});

export const submitDeleteDish = () => ({
  type: SUBMIT_DELETE_DISH,
});

export const manageSuccessfulDishDelete = () => ({
  type: MANAGE_SUCCESSFUL_DISH_DELETE,
});

export const forbidHeavyDishPicture = () => ({
  type: FORBID_HEAVY_DISH_PICTURE,
});

export const manageFailedDishDelete = () => ({
  type: MANAGE_FAILED_DISH_DELETE,
});

export const forbidNotImgDishPicture = () => ({
  type: FORBID_NOT_IMG_DISH_PICTURE,
});
