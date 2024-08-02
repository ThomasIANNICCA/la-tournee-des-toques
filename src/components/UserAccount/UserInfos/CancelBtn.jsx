import { useDispatch } from 'react-redux';

import { MdOutlineCancel } from 'react-icons/md';

import { cancelEditUserInfos } from '../../../action/user';

const CancelBtn = () => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="cancel-button"
      onClick={() => {
        dispatch(cancelEditUserInfos());
      }}
    >
      Annuler mes modifications
      <span className="button__icon button__icon-right">
        <MdOutlineCancel />
      </span>
    </button>
  );
};

export default CancelBtn;
