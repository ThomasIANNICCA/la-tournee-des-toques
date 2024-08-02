// action types
export const FETCH_BACK_PARTNERS_LIST = 'FETCH_BACK_PARTNERS_LIST';
export const SHOW_BACK_PARTNERS_LIST = 'SHOW_BACK_PARTNERS_LIST';
export const DELETE_PARTNER = 'DELETE_PARTNER';
export const FETCH_PARTNER_DETAIL = 'FETCH_PARTNER_DETAIL';
export const SHOW_PARTNER_DETAIL = 'SHOW_PARTNER_DETAIL';

// action creators
export const fetchBackPartnersList = () => ({
  type: FETCH_BACK_PARTNERS_LIST,
});

export const showBackPartnersList = (backPartnersList) => ({
  type: SHOW_BACK_PARTNERS_LIST,
  list: backPartnersList,
});

export const deletePartner = (partnerId) => ({
  type: DELETE_PARTNER,
  partnerId,
});

export const fetchPartnerDetail = (id) => ({
  type: FETCH_PARTNER_DETAIL,
  id,
});

export const showPartnerDetail = (partnerDetail) => ({
  type: SHOW_PARTNER_DETAIL,
  partnerDetail,
});
