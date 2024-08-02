import { useDispatch, useSelector } from 'react-redux';

import { MdOutlineCancel } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';

import {
  changeDishField,
  changeSelectedTags,
  closeAddDishPopup,
  forbidHeavyDishPicture,
  forbidNotImgDishPicture,
  removeDishPicture,
  submitCreateDish,
  submitEditDish,
  uploadDishPicture,
} from '../../../../action/createDish';
import FileUploadField from '../../../Field/FileUploadField/FileUploadField';
import Loader from '../../../App/Loader/Loader';
import Field from '../../../Field/Field';
import SelectField from '../../../Field/SelectField/SelectField';
import NumberField from '../../../Field/NumberField/NumberField';

import './CreateDish.scss';
import FailedMsg from '../../../App/Messages/FailedMsg';

const CreateDish = () => {
  const dispatch = useDispatch();

  const isLoadingAddDish = useSelector(
    (state) => state.createDish.isLoadingAddDish
  );

  // get the failed submit dish status
  const isFailedSubmitDish = useSelector(
    (state) => state.createDish.isFailedSubmitDish
  );

  const truckId = useSelector((state) => state.createFoodtruck.id);
  const newDish = useSelector((state) => state.createDish);
  const floatDishPrice = parseFloat(newDish.newDishPrice, 10);
  // list of tags displayed as options
  const tagsList = useSelector((state) => state.createFoodtruck.tagsList);

  return (
    <form
      className="create-dish__form"
      method="post"
      onSubmit={(e) => {
        e.preventDefault();

        let selectedTags = [];
        if (newDish.newDishTags) {
          selectedTags = newDish.newDishTags.map((currentTag) => {
            return currentTag.value;
          });
        }

        const formPayload = new FormData();
        const jsonData = JSON.stringify({
          truck: truckId,
          name: newDish.newDishName,
          description: newDish.newDishDescription,
          price: floatDishPrice,
          type: newDish.newDishType,
          tag: selectedTags,
        });

        formPayload.append('data', jsonData);
        formPayload.append('pictureFile', newDish.newDishPictureFile);

        if (newDish.newDishId === null) {
          // case of creation of a new dish
          dispatch(submitCreateDish(formPayload));
        } else {
          // case of edit of an existing dish
          dispatch(submitEditDish(formPayload));
        }
      }}
    >
      <div className="create-truck__container">
        <h3>Ajouter un plat</h3>

        <p>
          <em>*Champ requis</em>
        </p>

        {/* Dish name field */}
        <Field
          name="newDishName"
          type="text"
          placeholder="Nom du plat*"
          onChange={(newValue, identifier) => {
            const action = changeDishField(newValue, identifier);
            dispatch(action);
          }}
          value={newDish.newDishName}
          required
          currentDigitsNb={newDish.newDishName.length}
          maxLength={100}
          isFilledByDefault
        />

        {/* Dish type field */}
        <Field
          name="newDishType"
          type="text"
          placeholder="Type de plat*"
          onChange={(newValue, identifier) => {
            const action = changeDishField(newValue, identifier);
            dispatch(action);
          }}
          value={newDish.newDishType}
          required
          currentDigitsNb={newDish.newDishType.length}
          maxLength={50}
          isFilledByDefault
        />
        <p className="field-note">
          Note : les plats seront regroupés par type sur la page de votre
          foodtruck. Veillez à bien utiliser exactement le même intitulé pour
          les plats à regrouper dans un même type.
        </p>

        {/* Dish description text area field */}
        <Field
          name="newDishDescription"
          type="textarea"
          placeholder="Description*"
          onChange={(newValue, identifier) => {
            const action = changeDishField(newValue, identifier);
            dispatch(action);
          }}
          value={newDish.newDishDescription}
          required
          currentDigitsNb={newDish.newDishDescription.length}
          maxLength={255}
          isFilledByDefault
        />

        {/* Dish tags select field */}
        <SelectField
          value={newDish.newDishTags}
          onChange={(evt) => {
            dispatch(changeSelectedTags(evt, 'newDishTags'));
          }}
          label="Tags*"
          placeholder="Sélectionnez..."
          options={tagsList}
          isMulti
          noOptionsMessage="Aucun autre tag"
          isSearchable
          maxMenuHeight={200}
          openMenuOnClick
          required
        />

        {/* Dish price field */}
        <NumberField
          name="newDishPrice"
          placeholder="Prix*"
          onChange={(newValue, identifier) => {
            dispatch(changeDishField(newValue, identifier));
          }}
          value={floatDishPrice}
          required
          isFilledByDefault
        />

        {/* Dish file upload field */}
        <div className="field field--has-content">
          {newDish.newDishPicture === '' ? (
            ''
          ) : (
            <p className="field__current-picture">
              Photo actuelle : {newDish.newDishPicture ?? 'Aucune photo'}
            </p>
          )}
          <FileUploadField
            name="newDishPictureFile"
            label={
              newDish.newDishPicture === '' ? 'Photo' : 'Modifier la photo'
            }
            onChange={(e) => {
              if (e.target.files[0].type.startsWith('image/') === false) {
                dispatch(forbidNotImgDishPicture());
              } else if (e.target.files[0].size > 2000000) {
                dispatch(forbidHeavyDishPicture());
              } else {
                dispatch(uploadDishPicture(e.target.files[0], e.target.name));
              }
            }}
            onClickRemove={(e) => {
              // empty the value of the field (displayed to user)
              const fileInput = e.currentTarget
                .closest('.file-upload-field')
                .querySelector('.field-input');
              fileInput.value = '';

              // empty the object file to be sent to server
              dispatch(removeDishPicture());
            }}
          />
        </div>
        {/* Message in case file is too heavy */}
        {newDish.isDishPictureTooHeavy === true ? (
          <p className="msg-alert">
            La taille de l&apos;image est trop importante. Veuillez choisir une
            autre image.
          </p>
        ) : (
          ''
        )}
        {newDish.isNotImgDishPictureFile === true ? (
          <p className="msg-alert">
            Le fichier doit être de type image. Veuillez choisir une autre
            image.
          </p>
        ) : (
          ''
        )}
      </div>

      {/* Buttons of submit section */}
      <section className="submit-section">
        <button
          type="button"
          className="cancel-button"
          onClick={() => dispatch(closeAddDishPopup())}
        >
          <span className="button__icon button__icon-left">
            <MdOutlineCancel />
          </span>
          Annuler
        </button>
        {isLoadingAddDish ? (
          <Loader />
        ) : (
          <button
            type="submit"
            className={
              newDish.newDishName === '' ||
              newDish.newDishType === '' ||
              newDish.newDishDescription === '' ||
              newDish.isDishPictureTooHeavy ||
              newDish.newDishPrice.length === 0 ||
              newDish.newDishTags.length === 0
                ? 'light-button light-button--disabled'
                : 'light-button'
            }
            disabled={
              newDish.newDishName === '' ||
              newDish.newDishType === '' ||
              newDish.newDishDescription === '' ||
              newDish.isDishPictureTooHeavy ||
              newDish.newDishPrice.length === 0 ||
              newDish.newDishTags.length === 0
            }
          >
            {!newDish.newDishId
              ? 'Ajouter le plat'
              : 'Sauvegarder les modifications'}
            <span className="button__icon button__icon-right">
              <FaCheck />
            </span>
          </button>
        )}
      </section>

      {isFailedSubmitDish ? (
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

export default CreateDish;
