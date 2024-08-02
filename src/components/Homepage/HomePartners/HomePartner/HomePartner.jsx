import PropTypes from 'prop-types';
import config from '../../../../config';

function HomePartner({ name, logoName }) {
  return (
    <img
      src={`/src/assets/images/partners/${logoName}`}
      alt={`Logo de ${name}`}
    />
  );
}

HomePartner.propTypes = {
  name: PropTypes.string.isRequired,
  logoName: PropTypes.string.isRequired,
};

export default HomePartner;
