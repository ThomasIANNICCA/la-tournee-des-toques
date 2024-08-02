import { FETCH_PARTNERS, SHOW_PARTNERS } from '../action/partners';

const initialState = {
  list: [],
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_PARTNERS:
      return {
        ...state,
      };
    case SHOW_PARTNERS:
      return {
        ...state,
        list: action.list,
      };

    default:
      return state;
  }
}

export default reducer;
