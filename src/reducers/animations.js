import {
  FETCH_HOME_ANIMATIONS,
  SHOW_HOME_ANIMATIONS,
  FETCH_ALL_ANIMATIONS,
  SHOW_ALL_ANIMATIONS,
} from '../action/animations';

const initialState = {
  homeList: [],
  allList: [],
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_HOME_ANIMATIONS:
      return {
        ...state,
      };
    case SHOW_HOME_ANIMATIONS:
      return {
        ...state,
        homeList: action.list,
      };
    case FETCH_ALL_ANIMATIONS:
      return {
        ...state,
      };
    case SHOW_ALL_ANIMATIONS:
      return {
        ...state,
        allList: action.list,
      };
    default:
      return state;
  }
}

export default reducer;
