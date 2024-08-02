import PropTypes from 'prop-types';

import AnimationsElement from './AnimationsElement/AnimationsElement';

import './AnimationsList.scss';

const AnimationsList = ({ animations }) => {
  return (
    <div className="animations-list-container">
      {/* index is used to add the reversed class every two elements  */}
      {animations.map((animation, index) => (
        <AnimationsElement
          key={animation.id}
          {...animation}
          reversed={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

AnimationsList.propTypes = {
  // list of animations
  animations: PropTypes.arrayOf(
    PropTypes.shape({
      // id of the animation
      id: PropTypes.number.isRequired,
      // title of the animation
      title: PropTypes.string.isRequired,
      // description of the animation
      content: PropTypes.string.isRequired,
      // name.extension of the picture of the animation
      pictureName: PropTypes.string.isRequired,
      // start date and time of the animation
      openedAt: PropTypes.string.isRequired,
      // end date and time of the animation
      closedAt: PropTypes.string.isRequired,
      // location of the animation
      location: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AnimationsList;
