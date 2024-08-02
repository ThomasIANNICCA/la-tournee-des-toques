import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';
import { AiOutlineInfoCircle } from 'react-icons/ai';

import { fetchDraftDishesInfos } from '../../../action/createDish';

import Loader from '../../App/Loader/Loader';
import ListOfDishes from './ListOfDishes/ListOfDishes';
import {
  fetchDraftFoodtruckInfos,
  goBackToPreviousFoodtruckCreationStep,
  sendFoodtruckForPublication,
} from '../../../action/createFoodtruck';
import FoodtruckHeader from '../../FoodtruckDetail/FoodtruckHeader/FoodtruckHeader';
import FoodtruckChief from '../../FoodtruckDetail/FoodtruckChief/FoodtruckChief';
import FailedMsg from '../../App/Messages/FailedMsg';

const CreateFoodtruckStep3 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // when loading the component, navigate to the step 3 url
  useEffect(() => {
    navigate('/mon-compte/foodtruck/creer/etape3');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // get the failed status of the submit of this page, to display an error if relevant
  const isFailedSubmitStep3 = useSelector(
    (state) => state.createFoodtruck.isFailedSubmitStep3
  );

  const currentStep = useSelector((state) => state.createFoodtruck.step);

  // get the infos from the store
  const foodtruck = useSelector((state) => state.createFoodtruck);
  const dishes = useSelector((state) => state.createDish.draftDishes);

  // reformat tags keys names from SelectField requirements (value and label, instead of id and name)
  const formattedCategories = foodtruck.categories.map((currentTag) => ({
    name: currentTag.label,
    id: currentTag.value,
  }));

  // get the infos of the foodtruck and its dishes
  useEffect(() => {
    dispatch(fetchDraftFoodtruckInfos(foodtruck.id));
    dispatch(fetchDraftDishesInfos(foodtruck.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // get the loading status of the submit of this page, to display the loader into the "validation" button
  const isLoadingSubmitStep3 = useSelector(
    (state) => state.createFoodtruck.isLoadingSubmitStep3
  );

  // get the loading status of the fetches and return the loader if is loading
  const isLoadingFetchFoodtruckInfos = useSelector(
    (state) => state.createFoodtruck.isLoadingFetchFoodtruckInfos
  );
  const isLoadingFetchDishesInfos = useSelector(
    (state) => state.createFoodtruck.isLoadingFetchDishesInfos
  );
  if (isLoadingFetchFoodtruckInfos || isLoadingFetchDishesInfos) {
    return <Loader isFullPage />;
  }

  return (
    <section className="create-truck__form">
      <p className="msg-info create-truck__step1-succeed-msg">
        <span className="button__icon button__icon-left">
          <AiOutlineInfoCircle />
        </span>{' '}
        Le foodtruck &quot;{foodtruck.name}&quot; est maintenant créé avec tous
        les plats proposés à sa carte. Veuillez vérifier les informations
        ci-dessous et les envoyer pour validation aux organisateurs.
      </p>

      <FoodtruckHeader
        name={foodtruck.name}
        location={0}
        presentation={foodtruck.description}
        categories={formattedCategories}
        pictureName={foodtruck.picture}
      />

      <FoodtruckChief
        picture={foodtruck.chefPicture}
        name={foodtruck.chefName}
        description={foodtruck.chefDescription}
      />
      {dishes.length > 0 ? <ListOfDishes dishes={dishes} /> : ''}

      <section className="submit-section">
        <button
          type="button"
          className="cancel-button"
          onClick={() => {
            navigate('/mon-compte/foodtruck/creer/etape2');
            dispatch(goBackToPreviousFoodtruckCreationStep(currentStep));
          }}
        >
          <span className="button__icon button__icon-left">
            <GrLinkPrevious />
          </span>
          Modifier les plats
        </button>
        {isLoadingSubmitStep3 ? (
          <Loader />
        ) : (
          <button
            type="button"
            className="light-button"
            onClick={() => {
              const formPayload = new FormData();
              const jsonData = JSON.stringify({
                status: 'pending',
              });
              formPayload.append('data', jsonData);

              dispatch(sendFoodtruckForPublication(formPayload));
            }}
          >
            Envoyer pour publication aux organisateurs
            <span className="button__icon button__icon-right">
              <GrLinkNext />
            </span>
          </button>
        )}
      </section>

      {isFailedSubmitStep3 ? (
        <div>
          <br />
          <FailedMsg msg="Une erreur est survenue. Veuillez réessayer." />
        </div>
      ) : (
        ''
      )}
    </section>
  );
};

export default CreateFoodtruckStep3;
