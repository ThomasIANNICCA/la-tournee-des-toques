// action types
export const FETCH_HOME_ANIMATIONS = 'FETCH_HOME_ANIMATIONS';
export const SHOW_HOME_ANIMATIONS = 'SHOW_HOME_ANIMATIONS';
export const FETCH_ALL_ANIMATIONS = 'FETCH_ALL_ANIMATIONS';
export const SHOW_ALL_ANIMATIONS = 'SHOW_ALL_ANIMATIONS';

// action creators
export const fetchHomeAnimations = () => ({
  type: FETCH_HOME_ANIMATIONS,
});

export const showHomeAnimations = (homeAnimationsList) => ({
  type: SHOW_HOME_ANIMATIONS,
  list: homeAnimationsList,
});

export const fetchAllAnimations = () => ({
  type: FETCH_ALL_ANIMATIONS,
});

export const showAllAnimations = (allAnimationsList) => ({
  type: SHOW_ALL_ANIMATIONS,
  list: allAnimationsList,
});
