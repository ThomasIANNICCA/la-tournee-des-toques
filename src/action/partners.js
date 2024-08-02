// action types
export const FETCH_PARTNERS = 'FETCH_PARTNERS';
export const SHOW_PARTNERS = 'SHOW_PARTNERS';

// action creators
export const fetchPartners = () => ({
  type: FETCH_PARTNERS,
});

export const showPartners = (partnersList) => ({
  type: SHOW_PARTNERS,
  list: partnersList,
});
