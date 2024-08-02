import {
  CHANGE_DISH_FIELD,
  CHANGE_SELECTED_TAGS,
  CLOSE_ADD_DISH_POPUP,
  CLOSE_DELETE_CONFIRMATION_MSG,
  FORBID_HEAVY_DISH_PICTURE,
  FORBID_NOT_IMG_DISH_PICTURE,
  MANAGE_FAILED_DISH_DELETE,
  MANAGE_FAILED_SUBMIT_DISH,
  MANAGE_SUCCESSFUL_DISH_CREATION,
  MANAGE_SUCCESSFUL_DISH_DELETE,
  OPEN_ADD_DISH_POPUP,
  OPEN_DELETE_CONFIRMATION_MSG,
  REMOVE_DISH_PICTURE,
  SHOW_DRAFT_DISHES_INFOS,
  STORE_DRAFT_DISH_INFOS_TO_EDIT,
  SUBMIT_CREATE_DISH,
  SUBMIT_DELETE_DISH,
  SUBMIT_EDIT_DISH,
  UPLOAD_DISH_PICTURE,
} from '../action/createDish';
import { HANDLE_LOGOUT } from '../action/user';

const initialState = {
  draftDishes: [],
  isOpenAddDish: false,
  isLoadingAddDish: false,
  newDishId: null,
  newDishName: '',
  newDishType: '',
  newDishDescription: '',
  newDishPicture: '',
  newDishPictureFile: {},
  isDishPictureTooHeavy: false,
  isNotImgDishPictureFile: false,
  newDishPrice: 0.0,
  newDishTags: [],
  dishIdToBeDeleted: null,
  isLoadingDeleteDish: false,
  isFailedSubmitDish: false,
  isFailedDeleteDish: false,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case OPEN_ADD_DISH_POPUP:
      return {
        ...state,
        isOpenAddDish: true,
      };

    case CLOSE_ADD_DISH_POPUP:
      return {
        ...state,
        isOpenAddDish: false,
        isLoadingAddDish: false,
        newDishId: null,
        newDishName: '',
        newDishType: '',
        newDishDescription: '',
        newDishPicture: '',
        isDishPictureTooHeavy: false,
        isNotImgDishPictureFile: false,
        newDishPrice: 0.0,
        newDishTags: [],
        dishIdToBeDeleted: null,
        isLoadingDeleteDish: false,
        isFailedSubmitDish: false,
        isFailedDeleteDish: false,
      };

    case SHOW_DRAFT_DISHES_INFOS:
      return {
        ...state,
        draftDishes: action.dishesData,
      };

    case CHANGE_DISH_FIELD:
      return {
        ...state,
        [action.identifier]: action.value,
      };

    case CHANGE_SELECTED_TAGS:
      return {
        ...state,
        [action.name]: action.selectedOptions,
      };

    case UPLOAD_DISH_PICTURE:
      return {
        ...state,
        [action.identifier]: action.file,
        isDishPictureTooHeavy: false,
        isNotImgDishPictureFile: false,
      };

    case REMOVE_DISH_PICTURE:
      return {
        ...state,
        newDishPictureFile: {},
        isDishPictureTooHeavy: false,
        isNotImgDishPictureFile: false,
      };

    case SUBMIT_CREATE_DISH:
      return {
        ...state,
        isLoadingAddDish: true,
        isFailedSubmitDish: false,
        isFailedDeleteDish: false,
      };

    case MANAGE_SUCCESSFUL_DISH_CREATION:
      return {
        ...state,
        isOpenAddDish: false,
        isLoadingAddDish: false,
        newDishId: null,
        newDishName: '',
        newDishType: '',
        newDishDescription: '',
        newDishPicture: '',
        isDishPictureTooHeavy: false,
        isNotImgDishPictureFile: false,
        newDishPrice: 0.0,
        newDishTags: [],
        dishIdToBeDeleted: null,
        isLoadingDeleteDish: false,
        isFailedSubmitDish: false,
        isFailedDeleteDish: false,
      };

    case STORE_DRAFT_DISH_INFOS_TO_EDIT:
      return {
        ...state,
        newDishId: action.dishId,
        newDishName: action.dishName,
        newDishType: action.dishType,
        newDishDescription: action.dishDescription,
        newDishPicture: action.dishPicture,
        newDishPrice: action.dishPrice,
        newDishTags: action.dishTags,
      };

    case SUBMIT_EDIT_DISH:
      return {
        ...state,
        isLoadingAddDish: true,
        isFailedSubmitDish: false,
        isFailedDeleteDish: false,
      };

    case OPEN_DELETE_CONFIRMATION_MSG:
      return {
        ...state,
        dishIdToBeDeleted: action.dishId,
        isFailedDeleteDish: false,
      };

    case CLOSE_DELETE_CONFIRMATION_MSG:
      return {
        ...state,
        dishIdToBeDeleted: null,
        isFailedDeleteDish: false,
      };

    case SUBMIT_DELETE_DISH:
      return {
        ...state,
        isLoadingDeleteDish: true,
        isFailedSubmitDish: false,
        isFailedDeleteDish: false,
      };

    case MANAGE_SUCCESSFUL_DISH_DELETE:
      return {
        ...state,
        dishIdToBeDeleted: null,
        isLoadingDeleteDish: false,
        isFailedSubmitDish: false,
        isFailedDeleteDish: false,
      };

    case FORBID_HEAVY_DISH_PICTURE:
      return {
        ...state,
        isDishPictureTooHeavy: true,
        isNotImgDishPictureFile: false,
      };

    case HANDLE_LOGOUT:
      return {
        ...state,
        draftDishes: [],
        isOpenAddDish: false,
        isLoadingAddDish: false,
        newDishId: null,
        newDishName: '',
        newDishType: '',
        newDishDescription: '',
        newDishPicture: '',
        newDishPictureFile: {},
        isDishPictureTooHeavy: false,
        isNotImgDishPictureFile: false,
        newDishPrice: 0.0,
        newDishTags: [],
        dishIdToBeDeleted: null,
        isLoadingDeleteDish: false,
        isFailedSubmitDish: false,
        isFailedDeleteDish: false,
      };

    case MANAGE_FAILED_SUBMIT_DISH:
      return {
        ...state,
        isLoadingAddDish: false,
        isLoadingDeleteDish: false,
        isFailedSubmitDish: true,
        isFailedDeleteDish: false,
      };

    case MANAGE_FAILED_DISH_DELETE:
      return {
        ...state,
        isLoadingDeleteDish: false,
        isFailedDeleteDish: true,
      };

    case FORBID_NOT_IMG_DISH_PICTURE:
      return {
        ...state,
        newDishPictureFile: {},
        isNotImgDishPictureFile: true,
        isDishPictureTooHeavy: false,
      };

    default:
      return state;
  }
}

export default reducer;
