import {
  FETCH_DRAFT_DISHES_INFOS,
  SHOW_DRAFT_DISHES_INFOS,
} from '../action/createDish';
import {
  CHANGE_FOODTRUCK_FIELD,
  EMPTY_CREATE_FOODTRUCK_INFOS,
  FETCH_DRAFT_FOODTRUCK_INFOS,
  MANAGE_SUCCESSFUL_FOODTRUCK_CREATION,
  SHOW_CATEGORIES_AND_TAGS_LIST,
  SHOW_DRAFT_FOODTRUCK_INFOS,
  SUBMIT_CREATE_FOODTRUCK,
  CHANGE_SELECTED_CATEGORIES,
  UPLOAD_FOODTRUCK_PICTURE,
  UPLOAD_CHEF_PICTURE,
  GO_BACK_TO_PREVIOUS_FOODTRUCK_CREATION_STEP,
  MANAGE_SUCCESSFUL_DISHES_CREATION_STEP,
  MANAGE_SUCCESSFUL_FOODTRUCK_SENDING_FOR_VALIDATION,
  SEND_FOODTRUCK_FOR_PUBLICATION,
  SUBMIT_ALL_DISHES_CREATION_STEP,
  GO_TO_CREATE_FOODTRUCK_STEP4,
  SUBMIT_EDIT_FOODTRUCK,
  MANAGE_SUCCESSFUL_FOODTRUCK_EDIT,
  FORBID_HEAVY_PICTURE,
  FORBID_HEAVY_CHEF_PICTURE,
  MANAGE_FAILED_SUBMIT_FOODTRUCK,
  MANAGE_FAILED_FOODTRUCK_SENDING_FOR_PUBLICATION,
  OPEN_FOODTRUCK_DELETE_CONFIRMATION_MSG,
  CLOSE_FOODTRUCK_DELETE_CONFIRMATION_MSG,
  SUBMIT_DELETE_FOODTRUCK,
  MANAGE_SUCCESSFUL_FOODTRUCK_DELETE,
  MANAGE_FAILED_FOODTRUCK_DELETE,
  REMOVE_FOODTRUCK_PICTURE,
  REMOVE_CHEF_PICTURE,
  FORBID_NOT_IMG_PICTURE,
  FORBID_NOT_IMG_CHEF_PICTURE,
} from '../action/createFoodtruck';
import { HANDLE_LOGOUT } from '../action/user';

const initialState = {
  id: null,
  name: '',
  description: '',
  status: '',
  pictureFile: {},
  picture: '',
  isPictureTooHeavy: false,
  isPictureNotImg: false,
  chefName: '',
  chefDescription: '',
  chefPictureFile: {},
  chefPicture: '',
  isChefPictureTooHeavy: false,
  isChefPictureNotImg: false,
  categories: [],
  categoriesList: [],
  tagsList: [],
  step: 1,
  isLoadingFetchFoodtruckInfos: false,
  isLoadingFetchDishesInfos: false,
  isLoadingSubmitStep1: false,
  isLoadingSubmitStep2: false,
  isLoadingSubmitStep3: false,
  isFailedSubmitStep1: false,
  isFailedSubmitStep2: false,
  isFailedSubmitStep3: false,
  foodtruckIdToBeDeleted: null,
  isLoadingDeleteFoodtruck: false,
  isFailedDeleteFoodtruck: false,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SHOW_CATEGORIES_AND_TAGS_LIST:
      return {
        ...state,
        categoriesList: action.categoriesList,
        tagsList: action.tagsList,
      };

    case FETCH_DRAFT_FOODTRUCK_INFOS:
      return {
        ...state,
        isLoadingFetchFoodtruckInfos: true,
      };

    case SHOW_DRAFT_FOODTRUCK_INFOS:
      return {
        ...state,
        id: action.foodtruckInfos.id,
        name: action.foodtruckInfos.name,
        description: action.foodtruckInfos.description,
        status: action.foodtruckInfos.status,
        picture: action.foodtruckInfos.picture,
        chefName: action.foodtruckInfos.chefName,
        chefDescription: action.foodtruckInfos.chefDescription,
        chefPicture: action.foodtruckInfos.chefPicture,
        categories: action.foodtruckInfos.categories,
        isLoadingFetchFoodtruckInfos: false,
      };

    case FETCH_DRAFT_DISHES_INFOS:
      return {
        ...state,
        isLoadingFetchDishesInfos: true,
      };

    case SHOW_DRAFT_DISHES_INFOS:
      return {
        ...state,
        isLoadingFetchDishesInfos: false,
      };

    case CHANGE_FOODTRUCK_FIELD:
      return {
        ...state,
        [action.identifier]: action.value,
      };

    case CHANGE_SELECTED_CATEGORIES:
      return {
        ...state,
        [action.name]: action.selectedOptions,
      };

    case UPLOAD_FOODTRUCK_PICTURE:
      return {
        ...state,
        [action.identifier]: action.file,
        isPictureTooHeavy: false,
        isPictureNotImg: false,
      };

    case REMOVE_FOODTRUCK_PICTURE:
      return {
        ...state,
        pictureFile: {},
        isPictureTooHeavy: false,
        isPictureNotImg: false,
      };

    case UPLOAD_CHEF_PICTURE:
      return {
        ...state,
        [action.identifier]: action.file,
        isChefPictureTooHeavy: false,
        isChefPictureNotImg: false,
      };

    case REMOVE_CHEF_PICTURE:
      return {
        ...state,
        chefPictureFile: {},
        isChefPictureTooHeavy: false,
        isChefPictureNotImg: false,
      };

    case SUBMIT_CREATE_FOODTRUCK:
      return {
        ...state,
        isLoadingSubmitStep1: true,
        isFailedSubmitStep1: false,
      };

    case MANAGE_SUCCESSFUL_FOODTRUCK_CREATION:
      return {
        ...state,
        step: 2,
        isLoadingSubmitStep1: false,
        id: action.newFoodtruckId,
        isFailedSubmitStep1: false,
      };

    case SUBMIT_EDIT_FOODTRUCK:
      return {
        ...state,
        isLoadingSubmitStep1: true,
        isFailedSubmitStep1: false,
      };

    case MANAGE_SUCCESSFUL_FOODTRUCK_EDIT:
      return {
        ...state,
        step: 2,
        isLoadingSubmitStep1: false,
        isFailedSubmitStep1: false,
      };

    case MANAGE_FAILED_SUBMIT_FOODTRUCK:
      return {
        ...state,
        isLoadingSubmitStep1: false,
        isFailedSubmitStep1: true,
      };

    case EMPTY_CREATE_FOODTRUCK_INFOS:
      return {
        ...state,
        id: null,
        name: '',
        description: '',
        status: '',
        pictureFile: {},
        picture: '',
        isPictureTooHeavy: false,
        isPictureNotImg: false,
        chefName: '',
        chefDescription: '',
        chefPictureFile: {},
        chefPicture: '',
        isChefPictureTooHeavy: false,
        isChefPictureNotImg: false,
        categories: [],
        categoriesList: [],
        tagsList: [],
        step: 1,
        isLoadingFetchFoodtruckInfos: false,
        isLoadingFetchDishesInfos: false,
        isLoadingSubmitStep1: false,
        isLoadingSubmitStep2: false,
        isLoadingSubmitStep3: false,
        isFailedSubmitStep1: false,
        isFailedSubmitStep2: false,
        isFailedSubmitStep3: false,
        foodtruckIdToBeDeleted: null,
        isLoadingDeleteFoodtruck: false,
        isFailedDeleteFoodtruck: false,
      };

    case GO_BACK_TO_PREVIOUS_FOODTRUCK_CREATION_STEP:
      return {
        ...state,
        step: action.previousStep,
      };

    case SUBMIT_ALL_DISHES_CREATION_STEP:
      return {
        ...state,
        isLoadingSubmitStep2: true,
        isFailedSubmitStep3: false,
      };

    case MANAGE_SUCCESSFUL_DISHES_CREATION_STEP:
      return {
        ...state,
        step: 3,
        isLoadingSubmitStep2: false,
      };

    case SEND_FOODTRUCK_FOR_PUBLICATION:
      return {
        ...state,
        isLoadingSubmitStep3: true,
        isFailedSubmitStep3: false,
      };

    case MANAGE_SUCCESSFUL_FOODTRUCK_SENDING_FOR_VALIDATION:
      return {
        ...state,
        step: 4,
        isLoadingSubmitStep3: false,
        isFailedSubmitStep3: false,
      };

    case MANAGE_FAILED_FOODTRUCK_SENDING_FOR_PUBLICATION:
      return {
        ...state,
        isLoadingSubmitStep3: false,
        isFailedSubmitStep3: true,
      };

    case GO_TO_CREATE_FOODTRUCK_STEP4:
      return {
        ...state,
        step: 4,
      };

    case FORBID_HEAVY_PICTURE:
      return {
        ...state,
        pictureFile: {},
        isPictureNotImg: false,
        isPictureTooHeavy: true,
      };

    case FORBID_HEAVY_CHEF_PICTURE:
      return {
        ...state,
        chefPictureFile: {},
        isChefPictureNotImg: false,

        isChefPictureTooHeavy: true,
      };

    case FORBID_NOT_IMG_PICTURE:
      return {
        ...state,
        pictureFile: {},
        isPictureNotImg: true,
        isPictureTooHeavy: false,
      };

    case FORBID_NOT_IMG_CHEF_PICTURE:
      return {
        ...state,
        chefPictureFile: {},
        isChefPictureNotImg: true,
        isChefPictureTooHeavy: false,
      };

    case HANDLE_LOGOUT:
      return {
        ...state,
        id: null,
        name: '',
        description: '',
        status: '',
        pictureFile: {},
        picture: '',
        isPictureTooHeavy: false,
        isPictureNotImg: false,
        chefName: '',
        chefDescription: '',
        chefPictureFile: {},
        chefPicture: '',
        isChefPictureTooHeavy: false,
        isChefPictureNotImg: false,
        categories: [],
        categoriesList: [],
        tagsList: [],
        step: 1,
        isLoadingFetchFoodtruckInfos: false,
        isLoadingFetchDishesInfos: false,
        isLoadingSubmitStep1: false,
        isLoadingSubmitStep2: false,
        isLoadingSubmitStep3: false,
        isFailedSubmitStep1: false,
        isFailedSubmitStep2: false,
        isFailedSubmitStep3: false,
        foodtruckIdToBeDeleted: null,
        isLoadingDeleteFoodtruck: false,
        isFailedDeleteFoodtruck: false,
      };

    case OPEN_FOODTRUCK_DELETE_CONFIRMATION_MSG:
      return {
        ...state,
        foodtruckIdToBeDeleted: action.foodtruckId,
        isFailedDeleteFoodtruck: false,
      };

    case CLOSE_FOODTRUCK_DELETE_CONFIRMATION_MSG:
      return {
        ...state,
        foodtruckIdToBeDeleted: null,
        isFailedDeleteFoodtruck: false,
      };

    case SUBMIT_DELETE_FOODTRUCK:
      return {
        ...state,
        isLoadingDeleteFoodtruck: true,
        isFailedDeleteFoodtruck: false,
      };

    case MANAGE_SUCCESSFUL_FOODTRUCK_DELETE:
      return {
        ...state,
        foodtruckIdToBeDeleted: null,
        isLoadingDeleteFoodtruck: false,
        isFailedDeleteFoodtruck: false,
      };

    case MANAGE_FAILED_FOODTRUCK_DELETE:
      return {
        ...state,
        isLoadingDeleteFoodtruck: false,
        isFailedDeleteFoodtruck: true,
      };

    default:
      return state;
  }
}

export default reducer;
