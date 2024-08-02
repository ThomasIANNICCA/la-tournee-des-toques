import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { IoAddCircle } from 'react-icons/io5';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';
import { AiOutlineInfoCircle } from 'react-icons/ai';

import {
  goBackToPreviousFoodtruckCreationStep,
  manageSuccessfulDishesCreationStep,
  submitAllDishesCreationStep,
} from '../../../action/createFoodtruck';
import {
  fetchDraftDishesInfos,
  openAddDishPopup,
} from '../../../action/createDish';

import CreateDish from './CreateDish/CreateDish';
import Loader from '../../App/Loader/Loader';
import ListOfDishes from './ListOfDishes/ListOfDishes';

const CreateFoodtruckStep2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // when loading the component, navigate to the step 2 url
  useEffect(() => {
    navigate(`/mon-compte/foodtruck/creer/etape2`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentStep = useSelector((state) => state.createFoodtruck.step);

  // get the infos from the store
  const isOpenAddDish = useSelector((state) => state.createDish.isOpenAddDish);
  const foodtruckName = useSelector((state) => state.createFoodtruck.name);
  const draftDishes = useSelector((state) => state.createDish.draftDishes);

  // get the infos of the dishes of the foodtruck, if already created
  const foodtruckId = useSelector((state) => state.createFoodtruck.id);
  useEffect(() => {
    if (foodtruckId !== null) {
      dispatch(fetchDraftDishesInfos(foodtruckId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // get the loading status of the submit of this page, to display the loader into the "validation" button
  const isLoadingSubmitStep2 = useSelector(
    (state) => state.createFoodtruck.isLoadingSubmitStep2
  );

  // get the loading status of the fetch and return the loader if is loading
  const isLoadingFetchDishesInfos = useSelector(
    (state) => state.createFoodtruck.isLoadingFetchDishesInfos
  );
  if (isLoadingFetchDishesInfos || !foodtruckName) {
    return <Loader isFullPage />;
  }

  return (
    <section className="create-truck__form">
      <div className="msg-info create-truck__step1-succeed-msg">
        <span className="button__icon button__icon-left">
          <AiOutlineInfoCircle />
        </span>{' '}
        <p>
          &quot;{foodtruckName}&quot; est bien créé dans vos foodtrucks.
          <br />
          Maintenant, place aux plats !
        </p>
      </div>

      {/* show preview of dishes if some already added to the truck and if the "Add dish" popup is not open */}
      {draftDishes.length > 0 && !isOpenAddDish ? (
        <ListOfDishes dishes={draftDishes} isEditable />
      ) : (
        ''
      )}

      {/* depending on the isOpenAddDish state, show 
        - component CreateDish 
        - OR button "Add a dish" and buttons of Submit section */}
      {isOpenAddDish ? (
        <CreateDish />
      ) : (
        <div className="create-truck__container">
          {/* button "Add a dish" */}
          <button
            type="button"
            className="light-button create-truck__add-dish-button"
            onClick={() => dispatch(openAddDishPopup())}
          >
            Ajouter un plat
            <span className="button__icon button__icon-right">
              <IoAddCircle />
            </span>
          </button>

          {/* display message if no dish added in the truck */}
          {draftDishes.length === 0 ? (
            <p className="msg-alert align-center">
              Vous devez ajouter au moins un plat à votre carte.
            </p>
          ) : (
            ''
          )}

          {/* buttons of Submit section */}
          <section className="submit-section">
            <button
              type="button"
              className="cancel-button"
              onClick={() => {
                navigate('/mon-compte/foodtruck/creer/etape1');
                dispatch(goBackToPreviousFoodtruckCreationStep(currentStep));
              }}
            >
              <span className="button__icon button__icon-left">
                <GrLinkPrevious />
              </span>
              Modifier le foodtruck
            </button>
            {isLoadingSubmitStep2 ? (
              <Loader />
            ) : (
              <button
                type="button"
                className={
                  draftDishes.length > 0
                    ? 'light-button'
                    : 'light-button light-button--disabled'
                }
                onClick={() => {
                  dispatch(submitAllDishesCreationStep());
                  dispatch(manageSuccessfulDishesCreationStep());
                }}
                disabled={draftDishes.length === 0}
              >
                Suivant
                <span className="button__icon button__icon-right">
                  <GrLinkNext />
                </span>
              </button>
            )}
          </section>
        </div>
      )}
    </section>
  );
};

export default CreateFoodtruckStep2;
