import {
  CHANGE_LOCATION_INPUT,
  FETCH_BACK_FOODTRUCKS_LIST,
  FETCH_PENDING_FOODTRUCKS,
  FETCH_PENDING_FOODTRUCK_DETAIL,
  REFUSE_FOODTRUCK,
  SHOW_BACK_FOODTRUCKS_LIST,
  SHOW_PENDING_FOODTRUCKS,
  SHOW_PENDING_FOODTRUCK_DETAIL,
  VALIDATE_FOODTRUCK,
  VALIDATE_FOODTRUCK_SUCCESS,
  REFUSE_FOODTRUCK_SUCCESS,
  RESET_REFUSAL_SUCCESS,
  RESET_VALIDATION_SUCCESS,
} from '../action/backFoodtrucks';
import {
  FETCH_FOODTRUCK_DETAIL,
  SHOW_FOODTRUCK_DETAIL,
} from '../action/foodtrucks';

const initialState = {
  pendingFoodtrucksList: [],
  backFoodtrucksList: [],
  pendingFoodtruckDetail: [],
  newLocationForPendingFoodtruck: '',
  foodtruckDetail: [],
  validationSuccess: false,
  refusalSuccess: false,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_PENDING_FOODTRUCKS:
      return {
        ...state,
      };

    case SHOW_PENDING_FOODTRUCKS:
      return {
        ...state,
        pendingFoodtrucksList: action.list,
      };

    case FETCH_BACK_FOODTRUCKS_LIST:
      return {
        ...state,
      };

    case SHOW_BACK_FOODTRUCKS_LIST:
      return {
        ...state,
        backFoodtrucksList: action.list,
      };

    case FETCH_PENDING_FOODTRUCK_DETAIL:
      return {
        ...state,
      };

    case SHOW_PENDING_FOODTRUCK_DETAIL:
      return {
        ...state,
        pendingFoodtruckDetail: action.foodtruckDetail,
      };

    case VALIDATE_FOODTRUCK:
      return {
        ...state,
      };

    case REFUSE_FOODTRUCK:
      return {
        ...state,
      };

    case VALIDATE_FOODTRUCK_SUCCESS:
      return {
        ...state,
        validationSuccess: true,
      };

    case REFUSE_FOODTRUCK_SUCCESS:
      return {
        ...state,
        refusalSuccess: true,
      };

    case RESET_VALIDATION_SUCCESS:
      return {
        ...state,
        validationSuccess: false,
        newLocationForPendingFoodtruck: '',
      };

    case RESET_REFUSAL_SUCCESS:
      return {
        ...state,
        refusalSuccess: false,
        newLocationForPendingFoodtruck: '',
      };

    case FETCH_FOODTRUCK_DETAIL:
      return {
        ...state,
      };

    case SHOW_FOODTRUCK_DETAIL:
      return {
        ...state,
        foodtruckDetail: action.foodtruckDetail,
      };

    case CHANGE_LOCATION_INPUT:
      return {
        ...state,
        newLocationForPendingFoodtruck: action.newValue,
      };
    default:
      return state;
  }
}

export default reducer;
