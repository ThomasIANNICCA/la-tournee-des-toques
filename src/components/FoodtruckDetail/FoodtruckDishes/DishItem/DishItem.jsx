import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { MdOutlineCancel } from 'react-icons/md';
import { GoTrash } from 'react-icons/go';

import EditDeleteButtons from '../../../Field/EditDeleteButtons/EditDeleteButtons';
import './DishItem.scss';
import {
  closeDeleteConfirmationMsg,
  openAddDishPopup,
  openDeleteConfirmationMsg,
  storeDraftDishInfosToEdit,
  submitDeleteDish,
} from '../../../../action/createDish';
import FailedMsg from '../../../App/Messages/FailedMsg';

import config from '../../../../config';

const DishItem = ({
  id,
  name,
  type,
  description,
  price,
  picture = null,
  tags,
  isEditable = false,
}) => {
  const dispatch = useDispatch();

  // manage the delete functionnality
  const dishIdToBeDeleted = useSelector(
    (state) => state.createDish.dishIdToBeDeleted
  );
  const isFailedDeleteDish = useSelector(
    (state) => state.createDish.isFailedDeleteDish
  );

  return (
    <div className="dish-item">
      <figure className="dish-item-image">
        <img
          src={
            picture === '' || picture === null
              ? `/src/assets/images/dish/dish.jpg`
              : `/src/assets/images/dish/${picture}`
          }
          alt={name}
        />
      </figure>
      <div className="dish-content">
        <h3 className="dish-content-title">{name}</h3>
        <div className="dish-content-tags">
          {tags.map((tag) => (
            <p key={tag.id} className="tag">
              {tag.name}
            </p>
          ))}
        </div>
        <p className="dish-content-description">{description}</p>
        <p className="dish-content-price">{price} €</p>

        {/* if the dish item is editable (in user account), edit/delete buttons are displayed */}
        {isEditable ? (
          <EditDeleteButtons
            onClickEdit={() => {
              dispatch(openAddDishPopup());

              // reformat tags keys names to fit SelectField requirements (value and label, instead of id and name)
              const formattedTags = tags.map((currentTag) => ({
                label: currentTag.name,
                value: currentTag.id,
              }));

              dispatch(
                storeDraftDishInfosToEdit(
                  id,
                  name,
                  type,
                  description,
                  price,
                  picture,
                  formattedTags
                )
              );
            }}
            onClickDelete={() => {
              dispatch(openDeleteConfirmationMsg(id));
            }}
          />
        ) : (
          ''
        )}
        {/* if the dish has been selected by the user to be deleted (click on the delete button), a confirmation message is displayed */}
        {id === dishIdToBeDeleted && !isFailedDeleteDish ? (
          <section className="confirm-delete-msg">
            <p>Confirmer la suppression ?</p>
            <div className="icon-buttons">
              <button
                type="button"
                className="icon-buttons__button icon-buttons__button-cancel"
                onClick={() => dispatch(closeDeleteConfirmationMsg())}
              >
                <MdOutlineCancel />
              </button>
              <button
                type="submit"
                className="icon-buttons__button icon-buttons__button-delete"
                onClick={() => {
                  dispatch(submitDeleteDish());
                }}
              >
                <GoTrash />
              </button>
            </div>
          </section>
        ) : (
          ''
        )}
        {/* if the delete failed, an error message is displayed */}
        {id === dishIdToBeDeleted && isFailedDeleteDish ? (
          <div>
            <br />
            <FailedMsg msg="Une erreur est survenue. Veuillez réessayer." />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

DishItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  // eslint-disable-next-line react/require-default-props
  picture: PropTypes.string,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  // eslint-disable-next-line react/require-default-props
  isEditable: PropTypes.bool,
};

export default DishItem;
