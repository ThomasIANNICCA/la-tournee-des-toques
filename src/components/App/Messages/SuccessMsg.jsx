import PropTypes from 'prop-types';

import { FaRegCheckCircle } from 'react-icons/fa';

import './Messages.scss';

const SuccessMsg = ({ msg }) => {
  return (
    <div className="msg">
      <div className="msg__container msg-success">
        <span className="msg__icon">
          <FaRegCheckCircle />
        </span>
        <span className="msg__content">{msg}</span>
      </div>
    </div>
  );
};

SuccessMsg.propTypes = {
  // text displayed in the message
  msg: PropTypes.string.isRequired,
};

export default SuccessMsg;
