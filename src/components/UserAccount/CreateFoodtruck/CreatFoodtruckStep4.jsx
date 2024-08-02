import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AiOutlineInfoCircle } from 'react-icons/ai';
import { LuUserCircle } from 'react-icons/lu';

import Loader from '../../App/Loader/Loader';

const CreateFoodtruckStep4 = () => {
  const navigate = useNavigate();

  // when loading the component, navigate to the step 4 url
  useEffect(() => {
    navigate('/mon-compte/foodtruck/creer/succes');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // get the infos from the store
  const foodtruckName = useSelector((state) => state.createFoodtruck.name);

  // get the loading status of the step and return the loader if is loading (pending step 3 to be complete)
  const isLoadingSubmitStep4 = useSelector(
    (state) => state.createFoodtruck.isLoadingSubmitStep4
  );
  if (isLoadingSubmitStep4) {
    return <Loader isFullPage />;
  }

  return (
    <section className="create-truck__form">
      <p className="msg-info create-truck__step1-succeed-msg">
        <span className="button__icon button__icon-left">
          <AiOutlineInfoCircle />
        </span>{' '}
        Le foodtruck {foodtruckName} a bien été créé et envoyé pour validation
        aux organisateurs.
      </p>
      <p className="msg-info create-truck__step1-succeed-msg">
        <span className="button__icon button__icon-left">
          <AiOutlineInfoCircle />
        </span>{' '}
        Vous recevrez un mail lorsque votre foodtruck sera publié ou que des
        modifications seront à y apporter.
      </p>

      <button
        type="button"
        className="light-button"
        onClick={() => navigate('/mon-compte')}
      >
        Retour à mon compte
        <span className="button__icon button__icon-right">
          <LuUserCircle />
        </span>
      </button>
    </section>
  );
};

export default CreateFoodtruckStep4;
