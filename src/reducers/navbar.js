import { CLOSE_BURGER, TOGGLE_BURGER } from '../action/nav';

const initialState = {
  isBurgerOpen: false,
  emailLoginInput: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CLOSE_BURGER:
      return {
        ...state,
        isBurgerOpen: false,
      };

    case TOGGLE_BURGER:
      return {
        ...state,
        isBurgerOpen: action.newValue,
      };

    default:
      return state;
  }
}

export default reducer;
