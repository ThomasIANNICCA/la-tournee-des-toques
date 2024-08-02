import PropTypes from 'prop-types';

import './Loader.scss';

const Loader = ({ isFullPage = false }) => {
  return (
    <section className={isFullPage ? 'loader loader--full-page' : 'loader'}>
      <div className="loader__content" />
    </section>
  );
};

Loader.propTypes = {
  // isFullpage indicates if the loader must take the entire page
  // eslint-disable-next-line react/require-default-props
  isFullPage: PropTypes.bool,
};

export default Loader;
