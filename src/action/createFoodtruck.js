// action types
export const FETCH_CATEGORIES_AND_TAGS_LISTS =
  'FETCH_CATEGORIES_AND_TAGS_LISTS';
export const SHOW_CATEGORIES_AND_TAGS_LIST = 'SHOW_CATEGORIES_AND_TAGS_LIST';
export const CHANGE_FOODTRUCK_FIELD = 'CHANGE_FOODTRUCK_FIELD';

export const CHANGE_SELECTED_CATEGORIES = 'CHANGE_SELECTED_CATEGORIES';
export const UPLOAD_FOODTRUCK_PICTURE = 'UPLOAD_FOODTRUCK_PICTURE';
export const REMOVE_FOODTRUCK_PICTURE = 'REMOVE_FOODTRUCK_PICTURE';
export const UPLOAD_CHEF_PICTURE = 'UPLOAD_CHEF_PICTURE';
export const REMOVE_CHEF_PICTURE = 'REMOVE_CHEF_PICTURE';

export const SUBMIT_CREATE_FOODTRUCK = 'SUBMIT_CREATE_FOODTRUCK';
export const MANAGE_SUCCESSFUL_FOODTRUCK_CREATION =
  'MANAGE_SUCCESSFUL_FOODTRUCK_CREATION';
export const SUBMIT_EDIT_FOODTRUCK = 'SUBMIT_EDIT_FOODTRUCK';
export const MANAGE_SUCCESSFUL_FOODTRUCK_EDIT =
  'MANAGE_SUCCESSFUL_FOODTRUCK_EDIT';
export const MANAGE_FAILED_SUBMIT_FOODTRUCK = 'MANAGE_FAILED_SUBMIT_FOODTRUCK';
export const FETCH_DRAFT_FOODTRUCK_INFOS = 'FETCH_DRAFT_FOODTRUCK_INFOS';
export const SHOW_DRAFT_FOODTRUCK_INFOS = 'SHOW_DRAFT_FOODTRUCK_INFOS';
export const EMPTY_CREATE_FOODTRUCK_INFOS = 'EMPTY_CREATE_FOODTRUCK_INFOS';
export const GO_BACK_TO_PREVIOUS_FOODTRUCK_CREATION_STEP =
  'GO_BACK_TO_PREVIOUS_FOODTRUCK_CREATION_STEP';
export const SUBMIT_ALL_DISHES_CREATION_STEP =
  'SUBMIT_ALL_DISHES_CREATION_STEP';
export const MANAGE_SUCCESSFUL_DISHES_CREATION_STEP =
  'MANAGE_SUCCESSFUL_DISHES_CREATION_STEP';
export const SEND_FOODTRUCK_FOR_PUBLICATION = 'SEND_FOODTRUCK_FOR_PUBLICATION';
export const MANAGE_SUCCESSFUL_FOODTRUCK_SENDING_FOR_VALIDATION =
  'MANAGE_SUCCESSFUL_FOODTRUCK_SENDING_FOR_VALIDATION';
export const MANAGE_FAILED_FOODTRUCK_SENDING_FOR_PUBLICATION =
  'MANAGE_FAILED_FOODTRUCK_SENDING_FOR_PUBLICATION';
export const GO_TO_CREATE_FOODTRUCK_STEP4 = 'GO_TO_CREATE_FOODTRUCK_STEP4';
export const FORBID_HEAVY_PICTURE = 'FORBID_HEAVY_PICTURE';
export const FORBID_HEAVY_CHEF_PICTURE = 'FORBID_HEAVY_CHEF_PICTURE';
export const FORBID_NOT_IMG_PICTURE = 'FORBID_NOT_IMG_PICTURE';
export const FORBID_NOT_IMG_CHEF_PICTURE = 'FORBID_NOT_IMG_CHEF_PICTURE';

export const OPEN_FOODTRUCK_DELETE_CONFIRMATION_MSG =
  'OPEN_FOODTRUCK_DELETE_CONFIRMATION_MSG';
export const CLOSE_FOODTRUCK_DELETE_CONFIRMATION_MSG =
  'CLOSE_FOODTRUCK_DELETE_CONFIRMATION_MSG';
export const SUBMIT_DELETE_FOODTRUCK = 'SUBMIT_DELETE_FOODTRUCK';
export const MANAGE_SUCCESSFUL_FOODTRUCK_DELETE =
  'MANAGE_SUCCESSFUL_FOODTRUCK_DELETE';
export const MANAGE_FAILED_FOODTRUCK_DELETE = 'MANAGE_FAILED_FOODTRUCK_DELETE';

// action creators
export const fetchCategoriesAndTagsList = () => ({
  type: FETCH_CATEGORIES_AND_TAGS_LISTS,
});

export const showCategoriesAndTagsList = (categoriesList, tagsList) => ({
  type: SHOW_CATEGORIES_AND_TAGS_LIST,
  categoriesList,
  tagsList,
});

export const changeFoodtruckField = (value, identifier) => ({
  type: CHANGE_FOODTRUCK_FIELD,
  value,
  identifier,
});

export const changeSelectedCategories = (selectedOptions, name) => ({
  type: CHANGE_SELECTED_CATEGORIES,
  selectedOptions,
  name,
});

export const uploadFoodtruckPicture = (file, identifier) => ({
  type: UPLOAD_FOODTRUCK_PICTURE,
  file,
  identifier,
});

export const removeFoodtruckPicture = () => ({
  type: REMOVE_FOODTRUCK_PICTURE,
});

export const uploadChefPicture = (file, identifier) => ({
  type: UPLOAD_CHEF_PICTURE,
  file,
  identifier,
});

export const removeChefPicture = () => ({
  type: REMOVE_CHEF_PICTURE,
});

export const submitCreateFoodtruck = (formData) => ({
  type: SUBMIT_CREATE_FOODTRUCK,
  formData,
});

export const manageSuccessfulFoodtruckCreation = (newFoodtruckId) => ({
  type: MANAGE_SUCCESSFUL_FOODTRUCK_CREATION,
  newFoodtruckId,
});

export const submitEditFoodtruck = (formData) => ({
  type: SUBMIT_EDIT_FOODTRUCK,
  formData,
});

export const manageSuccessfulFoodtruckEdit = () => ({
  type: MANAGE_SUCCESSFUL_FOODTRUCK_EDIT,
});

export const fetchDraftFoodtruckInfos = (foodtruckId) => ({
  type: FETCH_DRAFT_FOODTRUCK_INFOS,
  foodtruckId,
});

export const showDraftFoodtruckInfos = (foodtruckInfos) => ({
  type: SHOW_DRAFT_FOODTRUCK_INFOS,
  foodtruckInfos,
});

export const emptyCreateFoodtruckInfos = () => ({
  type: EMPTY_CREATE_FOODTRUCK_INFOS,
});

export const goBackToPreviousFoodtruckCreationStep = (currentStep) => ({
  type: GO_BACK_TO_PREVIOUS_FOODTRUCK_CREATION_STEP,
  previousStep: currentStep - 1,
});

export const submitAllDishesCreationStep = () => ({
  type: SUBMIT_ALL_DISHES_CREATION_STEP,
});

export const manageSuccessfulDishesCreationStep = () => ({
  type: MANAGE_SUCCESSFUL_DISHES_CREATION_STEP,
});

export const sendFoodtruckForPublication = (formData) => ({
  type: SEND_FOODTRUCK_FOR_PUBLICATION,
  formData,
});

export const manageSuccessfulFoodtruckSendingForValidation = () => ({
  type: MANAGE_SUCCESSFUL_FOODTRUCK_SENDING_FOR_VALIDATION,
});

export const manageFailedFoodtruckSendingForPublication = () => ({
  type: MANAGE_FAILED_FOODTRUCK_SENDING_FOR_PUBLICATION,
});

export const goToCreateFoodtruckStep4 = () => ({
  type: GO_TO_CREATE_FOODTRUCK_STEP4,
});

export const forbidHeavyPicture = () => ({
  type: FORBID_HEAVY_PICTURE,
});

export const forbidHeavyChefPicture = () => ({
  type: FORBID_HEAVY_CHEF_PICTURE,
});

export const manageFailedSubmitFoodtruck = () => ({
  type: MANAGE_FAILED_SUBMIT_FOODTRUCK,
});

export const openFoodtruckDeleteConfirmationMsg = (foodtruckId) => ({
  type: OPEN_FOODTRUCK_DELETE_CONFIRMATION_MSG,
  foodtruckId,
});

export const closeFoodtruckDeleteConfirmationMsg = () => ({
  type: CLOSE_FOODTRUCK_DELETE_CONFIRMATION_MSG,
});

export const submitDeleteFoodtruck = (formData) => ({
  type: SUBMIT_DELETE_FOODTRUCK,
  formData,
});

export const manageSuccessfulFoodtruckDelete = () => ({
  type: MANAGE_SUCCESSFUL_FOODTRUCK_DELETE,
});

export const manageFailedFoodtruckDelete = () => ({
  type: MANAGE_FAILED_FOODTRUCK_DELETE,
});

export const forbidNotImgPicture = () => ({
  type: FORBID_NOT_IMG_PICTURE,
});

export const forbidNotImgChefPicture = () => ({
  type: FORBID_NOT_IMG_CHEF_PICTURE,
});
