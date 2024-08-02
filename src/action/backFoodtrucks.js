// action types
export const FETCH_PENDING_FOODTRUCKS = 'FETCH_PENDING_FOODTRUCKS';
export const SHOW_PENDING_FOODTRUCKS = 'SHOW_PENDING_FOODTRUCKS';
export const FETCH_BACK_FOODTRUCKS_LIST = 'FETCH_BACK_FOODTRUCKS_LIST';
export const SHOW_BACK_FOODTRUCKS_LIST = 'SHOW_BACK_FOODTRUCKS_LIST';
export const FETCH_PENDING_FOODTRUCK_DETAIL = 'FETCH_PENDING_FOODTRUCK_DETAIL';
export const SHOW_PENDING_FOODTRUCK_DETAIL = 'SHOW_PENDING_FOODTRUCK_DETAIL';
export const VALIDATE_FOODTRUCK = 'VALIDATE_FOODTRUCK';
export const VALIDATE_FOODTRUCK_SUCCESS = 'VALIDATE_FOODTRUCK_SUCCESS';
export const REFUSE_FOODTRUCK_SUCCESS = 'REFUSE_FOODTRUCK_SUCCESS';
export const REFUSE_FOODTRUCK = 'REFUSE_FOODTRUCK';
export const FETCH_FOODTRUCK_DETAIL = 'FETCH_FOODTRUCK_DETAIL';
export const SHOW_FOODTRUCK_DETAIL = 'SHOW_FOODTRUCK_DETAIL';
export const CHANGE_LOCATION_INPUT = 'CHANGE_LOCATION_INPUT';
export const RESET_REFUSAL_SUCCESS = 'RESET_REFUSAL_SUCCESS';
export const RESET_VALIDATION_SUCCESS = 'RESET_VALIDATION_SUCCESS';

export const fetchPendingFoodtrucks = () => ({
  type: FETCH_PENDING_FOODTRUCKS,
});

export const showPendingFoodtrucks = (pendingFoodtrucksList) => ({
  type: SHOW_PENDING_FOODTRUCKS,
  list: pendingFoodtrucksList,
});

export const fetchBackFoodtrucksList = () => ({
  type: FETCH_BACK_FOODTRUCKS_LIST,
});

export const showBackFoodtrucksList = (backFoodtrucksList) => ({
  type: SHOW_BACK_FOODTRUCKS_LIST,
  list: backFoodtrucksList,
});

export const fetchPendingFoodtruckDetail = (foodtruckId) => ({
  type: FETCH_PENDING_FOODTRUCK_DETAIL,
  id: foodtruckId,
});

export const showPendingFoodtruckDetail = (foodtruckDetail) => ({
  type: SHOW_PENDING_FOODTRUCK_DETAIL,
  foodtruckDetail,
});

export const validateFoodtruck = (id, location) => ({
  type: VALIDATE_FOODTRUCK,
  id,
  location,
});

export const refuseFoodtruck = (id) => ({
  type: REFUSE_FOODTRUCK,
  id,
});

export const validateFoodtruckSuccess = () => ({
  type: VALIDATE_FOODTRUCK_SUCCESS,
});

export const refuseFoodtruckSuccess = () => ({
  type: REFUSE_FOODTRUCK_SUCCESS,
});

export const resetValidationSuccess = () => ({
  type: RESET_VALIDATION_SUCCESS,
});

export const resetRefusalSuccess = () => ({
  type: RESET_REFUSAL_SUCCESS,
});

export const fetchFoodtruckDetail = (id) => ({
  type: FETCH_FOODTRUCK_DETAIL,
  id,
});

export const showFoodtruckDetail = (foodtruckDetail) => ({
  type: SHOW_FOODTRUCK_DETAIL,
  foodtruckDetail,
});

export const changeLocationInput = (newValue) => ({
  type: CHANGE_LOCATION_INPUT,
  newValue: newValue === '' ? '' : parseInt(newValue, 10),
});
