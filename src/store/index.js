import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from '../reducers';
import authMiddleware from '../middleware/authMiddleware';
import animationsMiddleware from '../middleware/animationsMiddleware';
import partnersMiddleware from '../middleware/partnersMiddleware';
import foodtrucksMiddleware from '../middleware/foodtrucksMiddleware';
import contactMiddleware from '../middleware/contactMiddleware';
import createFoodtruckMiddleware from '../middleware/createFoodtruckMiddleware';
import createDishMiddleware from '../middleware/createDishMiddleware';
import backFoodtrucksMiddleware from '../middleware/backFoodtrucksMiddleware';
import backCategoriesMiddleware from '../middleware/backCategoriesMiddleware';
import backTagsMiddleware from '../middleware/backTagsMiddleware';
import backPartnersMiddleware from '../middleware/backPartnersMiddleware';
import backUsersMiddleware from '../middleware/backUsersMiddleware';
import backAnimationsMiddleware from '../middleware/backAnimationsMiddleware';

// build the enhancer with all middleware and the redux devTools
const enhancerWithMiddlewares = applyMiddleware(
  authMiddleware,
  animationsMiddleware,
  partnersMiddleware,
  foodtrucksMiddleware,
  contactMiddleware,
  createFoodtruckMiddleware,
  createDishMiddleware,
  backFoodtrucksMiddleware,
  backCategoriesMiddleware,
  backTagsMiddleware,
  backPartnersMiddleware,
  backUsersMiddleware,
  backAnimationsMiddleware

  // other middleware
);

const superEnhancer = composeWithDevTools(enhancerWithMiddlewares);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  superEnhancer
);

export default store;
