// action types
export const CLOSE_FOODTRUCKS_FILTERS = 'CLOSE_FOODTRUCKS_FILTERS';
export const TOGGLE_FOODTRUCKS_FILTERS = 'TOGGLE_FOODTRUCKS_FILTERS';
export const UPDATE_FOODTRUCKS_FILTERS = 'UPDATE_FOODTRUCKS_FILTERS';
export const FETCH_ALL_FOODTRUCKS_AND_FILTERS =
  'FETCH_ALL_FOODTRUCKS_AND_FILTERS';
export const SHOW_FOODTRUCKS_FILTERS = 'SHOW_FOODTRUCKS_FILTERS';
export const SHOW_ALL_FOODTRUCKS = 'SHOW_ALL_FOODTRUCKS';
export const EMPTY_FOODTRUCK_DETAIL_FOR_NEXT_FETCH =
  'EMPTY_FOODTRUCK_DETAIL_FOR_NEXT_FETCH';
export const FETCH_FOODTRUCK_DETAIL = 'FETCH_FOODTRUCK_DETAIL';
export const SHOW_FOODTRUCK_DETAIL = 'SHOW_FOODTRUCK_DETAIL';

// action creators
export const closeFilters = () => ({
  type: CLOSE_FOODTRUCKS_FILTERS,
});
export const toggleFiltersOpen = (newValue) => ({
  type: TOGGLE_FOODTRUCKS_FILTERS,
  newValue,
});

export const updateFilterCategory = (filterId, categoryChecked) => ({
  type: UPDATE_FOODTRUCKS_FILTERS,
  filterId,
  categoryChecked,
});

export const fetchAllFoodtrucksAndFilters = () => ({
  type: FETCH_ALL_FOODTRUCKS_AND_FILTERS,
});

export const showFoodtrucksFilters = (foodtrucksFiltersList) => ({
  type: SHOW_FOODTRUCKS_FILTERS,
  foodtrucksFiltersList,
});

export const showAllFoodtrucks = (foodtrucksList) => ({
  type: SHOW_ALL_FOODTRUCKS,
  foodtrucksList,
});

export const emptyFoodtruckDetailForNextFetch = () => ({
  type: EMPTY_FOODTRUCK_DETAIL_FOR_NEXT_FETCH,
});

export const fetchFoodtruckDetail = (foodtruckId) => ({
  type: FETCH_FOODTRUCK_DETAIL,
  id: foodtruckId,
});

export const showFoodtruckDetail = (foodtruckDetail) => ({
  type: SHOW_FOODTRUCK_DETAIL,
  foodtruckDetail,
});
