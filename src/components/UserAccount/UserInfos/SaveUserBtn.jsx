import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { FaCheck } from 'react-icons/fa';

import { saveUserInfos } from '../../../action/user';

const SaveUserBtn = ({ isPasswordValid }) => {
  const isUnmodifiedFirstname =
    useSelector((state) => state.user.newFirstname) === null;
  const isUnmodifieldLastname =
    useSelector((state) => state.user.newLastname) === null;
  const isUnmodifieldEmail =
    useSelector((state) => state.user.newEmail) === null;
  const isUnmodifieldPassword =
    useSelector((state) => state.user.newPassword) === null;

  const isDisabled =
    !isPasswordValid ||
    (isUnmodifiedFirstname &&
      isUnmodifieldLastname &&
      isUnmodifieldEmail &&
      isUnmodifieldPassword);

  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className={
        isDisabled ? 'light-button light-button--disabled' : 'light-button'
      }
      onClick={() => dispatch(saveUserInfos())}
      disabled={isDisabled}
    >
      Sauvegarder mes modifications
      <span className="button__icon button__icon-right">
        <FaCheck />
      </span>
    </button>
  );
};

SaveUserBtn.propTypes = {
  isPasswordValid: PropTypes.bool.isRequired,
};

export default SaveUserBtn;
