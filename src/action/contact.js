// action types
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const SUBMIT_CONTACT_FORM = 'SUBMIT_CONTACT_FORM';
export const SUBMIT_SUCCESSFULL = 'SUBMIT_SUCCESSFULL';
export const SUBMIT_ERROR = 'SUBMIT_ERROR';
export const CHANGE_SELECT_INPUT = 'CHANGE_SELECT_INPUT';

// action creators
export const changeInput = (fieldName, newValue) => ({
  type: CHANGE_INPUT,
  fieldName,
  newValue,
});

export const changeSelectInput = (selectedOption) => ({
  type: CHANGE_SELECT_INPUT,
  selectedOption,
});

export const submitContactForm = () => ({
  type: SUBMIT_CONTACT_FORM,
});

export const submitSuccesfull = () => ({
  type: SUBMIT_SUCCESSFULL,
});

export const submitError = () => ({
  type: SUBMIT_ERROR,
});
