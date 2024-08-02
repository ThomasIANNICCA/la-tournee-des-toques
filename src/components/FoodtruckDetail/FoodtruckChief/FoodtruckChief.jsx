import PropTypes from 'prop-types';

import config from '../../../config';

import './FoodtruckChief.scss';

const FoodtruckChief = ({ picture = null, name, description }) => {
  return (
    <div className="chief pdg-lr">
      <figure className="chief-image">
        <img
          src={
            picture === '' || picture === null
              ? `/src/assets/images/chef/chef.jpg`
              : `/src/assets/images/chef/${picture}`
          }
          alt="Le chef"
        />
      </figure>
      <h2 className="chief-title primary-title">Le Toqué</h2>
      <h3 className="chief-name">{name}</h3>
      <p className="chief-description pdg-lr">{description}</p>
    </div>
  );
};

FoodtruckChief.propTypes = {
  // eslint-disable-next-line react/require-default-props
  picture: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default FoodtruckChief;
