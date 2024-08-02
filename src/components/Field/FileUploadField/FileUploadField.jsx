import PropTypes from 'prop-types';
import { GrFormClose } from 'react-icons/gr';

import './FileUploadField.scss';

const FileUploadField = ({
  name,
  label,
  required = false,
  onChange,
  onClickRemove,
}) => {
  return (
    <div className="file-upload-field">
      <label htmlFor={name} className="field-label">
        {label}
      </label>
      <input
        name={name}
        type="file"
        className="field-input"
        required={required}
        onChange={onChange}
      />
      <span
        role="button"
        className="file-remove-btn"
        onClick={onClickRemove}
        onKeyPress={onClickRemove}
        tabIndex="-1"
      >
        <GrFormClose />
      </span>
      <p className="field-note">Taille maximale autorisée : 2Mo</p>
    </div>
  );
};

FileUploadField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired,
};

export default FileUploadField;
