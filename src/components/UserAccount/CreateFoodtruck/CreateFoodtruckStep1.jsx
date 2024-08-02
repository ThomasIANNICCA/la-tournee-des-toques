import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';

import {
  changeFoodtruckField,
  changeSelectedCategories,
  fetchCategoriesAndTagsList,
  fetchDraftFoodtruckInfos,
  forbidHeavyChefPicture,
  forbidHeavyPicture,
  forbidNotImgChefPicture,
  forbidNotImgPicture,
  removeChefPicture,
  removeFoodtruckPicture,
  submitCreateFoodtruck,
  submitEditFoodtruck,
  uploadChefPicture,
  uploadFoodtruckPicture,
} from '../../../action/createFoodtruck';

import Field from '../../Field/Field';
import SelectField from '../../Field/SelectField/SelectField';
import FileUploadField from '../../Field/FileUploadField/FileUploadField';
import Loader from '../../App/Loader/Loader';

import '../../Field/Field.scss';
import FailedMsg from '../../App/Messages/FailedMsg';

const CreateFoodtruckStep1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // get the categories and tags list into the store
  useEffect(() => {
    dispatch(fetchCategoriesAndTagsList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // get foodtruck infos to send them to the backend
  const userId = useSelector((state) => state.user.userId);
  const foodtruck = useSelector((state) => state.createFoodtruck);

  // get the infos of the foodtruck, if already created. Otherwise empty the state (to manage the case when clicking on the "add new truck" button)
  useEffect(() => {
    if (foodtruck.id !== null) {
      dispatch(fetchDraftFoodtruckInfos(foodtruck.id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // get the loading status of the submit of this page, to display the loader into the "validation" button
  const isLoadingSubmitStep1 = useSelector(
    (state) => state.createFoodtruck.isLoadingSubmitStep1
  );

  // get the failed status of the submit of this page, to display an error if relevant
  const isFailedSubmitStep1 = useSelector(
    (state) => state.createFoodtruck.isFailedSubmitStep1
  );

  // get the loading status of the fetch and return the loader if is loading
  const isLoadingFetchFoodtruckInfos = useSelector(
    (state) => state.createFoodtruck.isLoadingFetchFoodtruckInfos
  );
  if (isLoadingFetchFoodtruckInfos) {
    return <Loader isFullPage />;
  }

  return (
    <form
      className="create-truck__form"
      method="post"
      onSubmit={(e) => {
        e.preventDefault();

        let selectedCategories = [];
        if (foodtruck.categories) {
          selectedCategories = foodtruck.categories.map((currentCategory) => {
            return currentCategory.value;
          });
        }

        const formPayload = new FormData();
        const jsonData = JSON.stringify({
          user: userId,
          name: foodtruck.name,
          presentation: foodtruck.description,
          location: 1,
          status: 'draft',
          chef_name: foodtruck.chefName,
          chef_description: foodtruck.chefDescription,
          category: selectedCategories,
        });

        formPayload.append('data', jsonData);
        formPayload.append('pictureFile', foodtruck.pictureFile);
        formPayload.append('chefPictureFile', foodtruck.chefPictureFile);

        // dispatch create or edit action
        if (foodtruck.id !== null) {
          dispatch(submitEditFoodtruck(formPayload));
        } else {
          dispatch(submitCreateFoodtruck(formPayload));
        }
      }}
    >
      <p>
        <em>*Champ requis</em>
      </p>

      <h3>Le foodtruck</h3>

      <section className="create-truck__container">
        {/* Field Name of the foodtruck */}
        <Field
          name="name"
          type="text"
          placeholder="Nom du foodtruck*"
          onChange={(newValue, identifier) => {
            const action = changeFoodtruckField(newValue, identifier);
            dispatch(action);
          }}
          value={foodtruck.name}
          required
          currentDigitsNb={foodtruck.name.length}
          maxLength={100}
          isFilledByDefault
        />

        {/* Field Description of the foodtruck */}
        <Field
          name="description"
          type="textarea"
          placeholder="Description du foodtruck*"
          onChange={(newValue, identifier) => {
            const action = changeFoodtruckField(newValue, identifier);
            dispatch(action);
          }}
          value={foodtruck.description}
          required={false}
          currentDigitsNb={foodtruck.description.length}
          maxLength={255}
          isFilledByDefault
        />

        {/* Select Field of the categories of the foddtruck */}
        <SelectField
          value={foodtruck.categories}
          onChange={(evt) => {
            dispatch(changeSelectedCategories(evt, 'categories'));
          }}
          label="Catégorie(s)*"
          placeholder="Sélectionnez..."
          options={foodtruck.categoriesList}
          isMulti
          noOptionsMessage="Aucune autre catégorie"
          isSearchable
          maxMenuHeight={200}
          openMenuOnClick
          required
        />

        {/* File upload field of the photo of the foodtruck, displayed differently if edit or create case */}
        {foodtruck.picture === '' ? (
          ''
        ) : (
          <p className="field__current-picture">
            Photo actuelle : {foodtruck.picture ?? 'Aucune photo'}
          </p>
        )}
        <FileUploadField
          name="pictureFile"
          label={
            foodtruck.picture === ''
              ? 'Photo du foodtruck'
              : 'Modifier la photo du foodtruck'
          }
          onChange={(e) => {
            if (e.target.files[0].type.startsWith('image/') === false) {
              dispatch(forbidNotImgPicture());
            } else if (e.target.files[0].size > 2000000) {
              dispatch(forbidHeavyPicture());
            } else {
              dispatch(
                uploadFoodtruckPicture(e.target.files[0], e.target.name)
              );
            }
          }}
          onClickRemove={(e) => {
            // empty the value of the field (displayed to user)
            const fileInput = e.currentTarget
              .closest('.file-upload-field')
              .querySelector('.field-input');
            fileInput.value = '';

            // empty the object file to be sent to server
            dispatch(removeFoodtruckPicture());
          }}
        />
        {foodtruck.isPictureTooHeavy === true ? (
          <p className="msg-alert">
            La taille de l&apos;image est trop importante. Veuillez choisir une
            autre image.
          </p>
        ) : (
          ''
        )}
        {foodtruck.isPictureNotImg === true ? (
          <p className="msg-alert">
            Le fichier doit être de type image. Veuillez choisir une autre
            image.
          </p>
        ) : (
          ''
        )}
      </section>

      <h3>Le chef Toqué</h3>

      {/* Field Name of the chef */}
      <section className="create-truck__container">
        <Field
          name="chefName"
          type="text"
          placeholder="Nom du chef*"
          onChange={(newValue, identifier) => {
            const action = changeFoodtruckField(newValue, identifier);
            dispatch(action);
          }}
          value={foodtruck.chefName}
          required
          currentDigitsNb={foodtruck.chefName.length}
          maxLength={100}
          isFilledByDefault
        />

        {/* Field Description of the chef */}
        <Field
          name="chefDescription"
          type="textarea"
          placeholder="Un petit mot sur le chef*"
          onChange={(newValue, identifier) => {
            const action = changeFoodtruckField(newValue, identifier);
            dispatch(action);
          }}
          value={foodtruck.chefDescription}
          required
          currentDigitsNb={foodtruck.chefDescription.length}
          maxLength={255}
          isFilledByDefault
        />

        {/* File upload field of the picture of the chef, displayed differently if edit or create case */}
        {foodtruck.chefPicture === '' ? (
          ''
        ) : (
          <p className="field__current-picture">
            Photo actuelle : {foodtruck.chefPicture ?? 'Aucune photo'}
          </p>
        )}
        <FileUploadField
          name="chefPictureFile"
          label={
            foodtruck.picture === ''
              ? 'Photo du chef'
              : 'Modifier la photo du chef'
          }
          onChange={(e) => {
            if (e.target.files[0].type.startsWith('image/') === false) {
              dispatch(forbidNotImgChefPicture());
            } else if (e.target.files[0].size > 2000000) {
              dispatch(forbidHeavyChefPicture());
            } else {
              dispatch(uploadChefPicture(e.target.files[0], e.target.name));
            }
          }}
          onClickRemove={(e) => {
            // empty the value of the field (displayed to user)
            const fileInput = e.currentTarget
              .closest('.file-upload-field')
              .querySelector('.field-input');
            fileInput.value = '';

            // empty the object file to be sent to server
            dispatch(removeChefPicture());
          }}
        />
        {foodtruck.isChefPictureTooHeavy === true ? (
          <p className="msg-alert">
            La taille de l&apos;image est trop importante. Veuillez choisir une
            autre image.
          </p>
        ) : (
          ''
        )}
        {foodtruck.isChefPictureNotImg === true ? (
          <p className="msg-alert">
            Le fichier doit être de type image. Veuillez choisir une autre
            image.
          </p>
        ) : (
          ''
        )}
      </section>

      {/* Submit section with buttons */}
      <section className="submit-section">
        <button
          type="button"
          className="cancel-button"
          onClick={() => navigate('/mon-compte')}
        >
          <span className="button__icon button__icon-left">
            <GrLinkPrevious />
          </span>
          Annuler
        </button>
        {isLoadingSubmitStep1 ? (
          <Loader />
        ) : (
          <button
            type="submit"
            className={
              foodtruck.name === '' ||
              foodtruck.description === '' ||
              foodtruck.chefName === '' ||
              foodtruck.chefDescription === '' ||
              foodtruck.categories.length === 0 ||
              foodtruck.isPictureTooHeavy ||
              foodtruck.isChefPictureTooHeavy
                ? 'light-button light-button--disabled'
                : 'light-button'
            }
            disabled={
              foodtruck.name === '' ||
              foodtruck.description === '' ||
              foodtruck.chefName === '' ||
              foodtruck.chefDescription === '' ||
              foodtruck.categories.length === 0 ||
              foodtruck.isPictureTooHeavy ||
              foodtruck.isChefPictureTooHeavy
            }
          >
            Suivant
            <span className="button__icon button__icon-right">
              <GrLinkNext />
            </span>
          </button>
        )}
      </section>

      {isFailedSubmitStep1 ? (
        <div>
          <br />
          <FailedMsg msg="Une erreur est survenue. Veuillez réessayer." />
        </div>
      ) : (
        ''
      )}
    </form>
  );
};

export default CreateFoodtruckStep1;
