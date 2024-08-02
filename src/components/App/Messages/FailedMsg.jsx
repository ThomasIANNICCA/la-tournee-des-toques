import PropTypes from 'prop-types';

import { IoWarningOutline } from 'react-icons/io5';

import './Messages.scss';

const FailedMsg = ({ msg }) => {
  return (
    <div className="msg">
      <div className="msg__container msg-failed">
        <span className="msg__icon">
          <IoWarningOutline />
        </span>
        <span className="msg__content">{msg}</span>
      </div>
    </div>
  );
};

FailedMsg.propTypes = {
  // text displayed in the message
  msg: PropTypes.string.isRequired,
};

export default FailedMsg;
