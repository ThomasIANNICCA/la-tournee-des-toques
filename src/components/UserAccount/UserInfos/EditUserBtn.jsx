import { useDispatch } from 'react-redux';
import { FiEdit3 } from 'react-icons/fi';

import { editUserInfos } from '../../../action/user';

const EditUserBtn = () => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="light-button"
      onClick={() => dispatch(editUserInfos())}
    >
      Modifier mes informations
      <span className="button__icon button__icon-right">
        <FiEdit3 />
      </span>
    </button>
  );
};

export default EditUserBtn;
