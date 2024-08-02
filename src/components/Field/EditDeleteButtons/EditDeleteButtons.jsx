import PropTypes from 'prop-types';

import { FiEdit3 } from 'react-icons/fi';
import { GoTrash } from 'react-icons/go';

import './EditDeleteButtons.scss';

const EditDeleteButtons = ({ onClickEdit, onClickDelete }) => {
  return (
    <div className="edit-delete">
      <div className="icon-buttons">
        <button
          type="button"
          className="icon-buttons__button icon-buttons__button-edit"
          onClick={onClickEdit}
        >
          <FiEdit3 />
        </button>
        <button
          type="button"
          className="icon-buttons__button icon-buttons__button-delete"
          onClick={onClickDelete}
        >
          <GoTrash />
        </button>
      </div>
    </div>
  );
};

EditDeleteButtons.propTypes = {
  // handler triggered when click on the edit button
  onClickEdit: PropTypes.func.isRequired,
  // handler triggered when click on the delete button
  onClickDelete: PropTypes.func.isRequired,
};

export default EditDeleteButtons;
