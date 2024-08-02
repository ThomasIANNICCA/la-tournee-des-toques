import {
  FETCH_BACK_PARTNERS_LIST,
  SHOW_BACK_PARTNERS_LIST,
  DELETE_PARTNER,
  FETCH_PARTNER_DETAIL,
  SHOW_PARTNER_DETAIL,
} from '../action/backPartners';

const initialState = {
  backPartnersList: [],
  partnerDetail: [],
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_BACK_PARTNERS_LIST:
      return {
        ...state,
      };

    case SHOW_BACK_PARTNERS_LIST:
      return {
        ...state,
        backPartnersList: action.list,
      };

    case DELETE_PARTNER:
      return {
        ...state,
      };

    case FETCH_PARTNER_DETAIL:
      return {
        ...state,
      };

    case SHOW_PARTNER_DETAIL:
      return {
        ...state,
        partnerDetail: action.partnerDetail,
      };

    default:
      return state;
  }
}

export default reducer;
