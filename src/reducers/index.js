import { combineReducers } from 'redux';

import navbarReducer from './navbar';
import userReducer from './user';
import animationsReducer from './animations';
import partnersReducer from './partners';
import foodtrucksReducer from './foodtrucks';
import createFoodtruck from './create-foodtruck';
import createDish from './create-dish';
import contactReducer from './contact';
import backFoodtrucksReducer from './backFoodtrucks';
import backCategoriesReducer from './backCategories';
import backTagsReducer from './backTags';
import backPartnersReducer from './backPartners';
import backUsersReducer from './backUsers';
import backAnimationsReducer from './backAnimations';

const rootReducer = combineReducers({
  navbar: navbarReducer,
  animations: animationsReducer,
  partners: partnersReducer,
  user: userReducer,
  foodtrucks: foodtrucksReducer,
  createFoodtruck,
  createDish,
  contactForm: contactReducer,
  backFoodtrucks: backFoodtrucksReducer,
  backCategories: backCategoriesReducer,
  backTags: backTagsReducer,
  backPartners: backPartnersReducer,
  backUsers: backUsersReducer,
  backAnimations: backAnimationsReducer,
});

export default rootReducer;
