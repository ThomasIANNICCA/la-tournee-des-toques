import {
  CLOSE_FOODTRUCKS_FILTERS,
  TOGGLE_FOODTRUCKS_FILTERS,
  UPDATE_FOODTRUCKS_FILTERS,
  FETCH_ALL_FOODTRUCKS_AND_FILTERS,
  SHOW_FOODTRUCKS_FILTERS,
  SHOW_ALL_FOODTRUCKS,
  FETCH_FOODTRUCK_DETAIL,
  SHOW_FOODTRUCK_DETAIL,
  EMPTY_FOODTRUCK_DETAIL_FOR_NEXT_FETCH,
} from '../action/foodtrucks';

const initialState = {
  isFiltersOpen: false,
  foodtrucksFiltersList: [],
  categoryChecked: {
    9: true,
    4: true,
    5: true,
    6: true,
    7: true,
    2: true,
    1: true,
    8: true,
  },
  foodtrucksList: [],
  foodtruckDetail: {},
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CLOSE_FOODTRUCKS_FILTERS:
      return {
        ...state,
        isFiltersOpen: false,
      };

    case TOGGLE_FOODTRUCKS_FILTERS:
      return {
        ...state,
        isFiltersOpen: action.newValue,
      };

    case FETCH_ALL_FOODTRUCKS_AND_FILTERS:
      return {
        ...state,
      };

    case UPDATE_FOODTRUCKS_FILTERS:
      return {
        ...state,
        categoryChecked: {
          ...state.categoryChecked,
          [action.filterId]: action.categoryChecked,
        },
      };
    case SHOW_FOODTRUCKS_FILTERS:
      return {
        ...state,
        foodtrucksFiltersList: action.foodtrucksFiltersList,
      };

    case SHOW_ALL_FOODTRUCKS:
      return {
        ...state,
        foodtrucksList: action.foodtrucksList,
      };

    case EMPTY_FOODTRUCK_DETAIL_FOR_NEXT_FETCH:
      return {
        ...state,
        foodtruckDetail: {},
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

    default:
      return state;
  }
}

export default reducer;
