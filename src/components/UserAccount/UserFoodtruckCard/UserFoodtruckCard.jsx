import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FaLink } from 'react-icons/fa';
import { GoTrash } from 'react-icons/go';
import { MdOutlineCancel } from 'react-icons/md';

import {
  closeFoodtruckDeleteConfirmationMsg,
  emptyCreateFoodtruckInfos,
  fetchDraftFoodtruckInfos,
  openFoodtruckDeleteConfirmationMsg,
  submitDeleteFoodtruck,
} from '../../../action/createFoodtruck';

import config from '../../../config';

import './UserFoodtruckCard.scss';
import FailedMsg from '../../App/Messages/FailedMsg';

const UserFoodtruckCard = ({
  id,
  name,
  location,
  status,
  pictureName = null,
}) => {
  const dispatch = useDispatch();

  let displayedStatus;
  let classNameStatus;
  switch (status) {
    case 'draft':
      displayedStatus = 'En cours de création';
      classNameStatus = 'user-foodtruck__status user-foodtruck__status--draft';
      break;
    case 'pending':
      displayedStatus = 'En attente de validation';
      classNameStatus =
        'user-foodtruck__status user-foodtruck__status--pending';
      break;
    case 'validated':
      displayedStatus = 'Publié';
      classNameStatus =
        'user-foodtruck__status user-foodtruck__status--validated';
      break;
    case 'refused':
      displayedStatus = 'Publication refusée - A corriger';
      classNameStatus =
        'user-foodtruck__status user-foodtruck__status--refused';
      break;
    default:
      displayedStatus = '';
  }

  // get variable from the state to manage the delete of the foodtruck
  const foodtruckIdToBeDeleted = useSelector(
    (state) => state.createFoodtruck.foodtruckIdToBeDeleted
  );
  const isFailedDeleteFoodtruck = useSelector(
    (state) => state.createFoodtruck.isFailedDeleteFoodtruck
  );

  return (
    <div className="user-foodtruck">
      {status === 'draft' || status === 'pending' || status === 'refused' ? (
        /* For trucks with draft/refused statuses, link to the edit page step 1 */
        /* For trucks with pending status, link to the success page */
        <Link
          to={`/mon-compte/foodtruck/creer/${
            status === 'pending' ? 'succes' : 'etape1'
          }`}
          className="user-foodtruck__link"
          onClick={() => {
            dispatch(emptyCreateFoodtruckInfos());
            dispatch(fetchDraftFoodtruckInfos(id));
          }}
        >
          <img
            className="user-foodtruck__image"
            src={
              pictureName === '' || pictureName === null
                ? `/src/assets/images/truck/logo.png`
                : `/src/assets/images/truck/${pictureName}`
            }
            alt={`Foodtruck de ${name}`}
          />
          <div className="user-foodtruck__content">
            <div className="foodtruck-item__banner">
              <h3 className="user-foodtruck__title">{name}</h3>
            </div>
          </div>
          <div className={classNameStatus}>{displayedStatus}</div>
        </Link>
      ) : (
        /* For validated trucks, link to the visitor foodtruck page. Physical location of the foodtruck is displayed, as well as mention 'Voir la page publique' */
        <Link to={`/foodtrucks/${id}`} className="user-foodtruck__link">
          <img
            className="user-foodtruck__image"
            src={
              pictureName === '' || pictureName === null
                ? `/src/assets/images/truck/logo.png`
                : `/src/assets/images/truck/${pictureName}`
            }
            alt={`Foodtruck de ${name}`}
          />
          <div className="user-foodtruck__content">
            <div className="foodtruck-item__banner">
              <h3 className="user-foodtruck__title">{name}</h3>
              <div className="user-foodtruck__location">{location}</div>
              <div className="user-foodtruck__public-link">
                <span className="button__icon button__icon-left">
                  <FaLink />
                </span>
                Page publique du foodtruck
              </div>
            </div>
          </div>
          <div className={classNameStatus}>{displayedStatus}</div>
        </Link>
      )}

      {/* Delete of the foodtruck */}
      <div>
        {/* if the foodtruck has been selected by the user to be deleted (click on the delete button), a confirmation message is displayed */}
        {id === foodtruckIdToBeDeleted && !isFailedDeleteFoodtruck ? (
          <section className="confirm-delete-msg">
            <p>Confirmer la suppression ?</p>

            <div>
              <button
                type="button"
                className="icon-buttons__button icon-buttons__button-cancel"
                onClick={() => dispatch(closeFoodtruckDeleteConfirmationMsg())}
              >
                <MdOutlineCancel />
              </button>
              <button
                type="submit"
                className="icon-buttons__button icon-buttons__button-delete"
                onClick={() => {
                  const formPayload = new FormData();
                  const jsonData = JSON.stringify({
                    status: 'deleted',
                  });
                  formPayload.append('data', jsonData);
                  dispatch(submitDeleteFoodtruck(formPayload));
                }}
              >
                <GoTrash />
              </button>
            </div>
          </section>
        ) : (
          <button
            type="button"
            className="user-foodtruck__delete"
            onClick={() => dispatch(openFoodtruckDeleteConfirmationMsg(id))}
          >
            Supprimer le foodtruck
            <span className="button__icon">
              <GoTrash />
            </span>
          </button>
        )}
      </div>

      {/* if the delete of a foodtruck failed, an error message is displayed */}
      {id === foodtruckIdToBeDeleted && isFailedDeleteFoodtruck ? (
        <div className="user-foodtruck__delete-failed">
          <FailedMsg msg="Une erreur est survenue lors de la suppression. Veuillez réessayer." />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

UserFoodtruckCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  location: PropTypes.number.isRequired,
  // eslint-disable-next-line react/require-default-props
  pictureName: PropTypes.string,
};

export default UserFoodtruckCard;
