import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { IoHourglassOutline } from 'react-icons/io5';

const CreateFoodtruckStep = ({ stepNb, label }) => {
  const currentStep = useSelector((state) => state.createFoodtruck.step);
  return (
    <span
      className={
        currentStep > stepNb
          ? 'create-foodtruck-step create-foodtruck__step--active'
          : 'create-foodtruck-step'
      }
    >
      <p className="create-foodtruck-step__nb">{stepNb}</p>
      <p className="create-foodtruck-step__label">
        {label}
        {currentStep === stepNb ? (
          <span className="button__icon button__icon-right">
            <IoHourglassOutline />
          </span>
        ) : (
          ''
        )}
      </p>
    </span>
  );
};

CreateFoodtruckStep.propTypes = {
  stepNb: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default CreateFoodtruckStep;
