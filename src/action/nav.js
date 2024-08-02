// action types
export const CLOSE_BURGER = 'CLOSE_BURGER';
export const TOGGLE_BURGER = 'TOGGLE_BURGER';

// action creators
export const closeBurger = () => ({
  type: CLOSE_BURGER,
});
export const toggleBurgerOpen = (newValue) => ({
  type: TOGGLE_BURGER,
  newValue,
});
