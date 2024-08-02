import { useSelector } from 'react-redux';

import CreateFoodtruckWorkflow from './CreateFoodtruckWorkflow/CreateFoodtruckWorkflow';

import CreateFoodtruckStep1 from './CreateFoodtruckStep1';
import CreateFoodtruckStep2 from './CreateFoodtruckStep2';
import CreateFoodtruckStep3 from './CreateFoodtruckStep3';

import './CreateFoodtruck.scss';
import CreateFoodtruckStep4 from './CreatFoodtruckStep4';

const CreateFoodtruck = () => {
  const currentStep = useSelector((state) => state.createFoodtruck.step);

  return (
    <section className="create-truck pdg-lr">
      <h2 className="primary-title first-line">Ajouter</h2>
      <h2 className="primary-title">un foodtruck</h2>

      <CreateFoodtruckWorkflow />

      {currentStep === 1 ? <CreateFoodtruckStep1 /> : ''}
      {currentStep === 2 ? <CreateFoodtruckStep2 /> : ''}
      {currentStep === 3 ? <CreateFoodtruckStep3 /> : ''}
      {currentStep === 4 ? <CreateFoodtruckStep4 /> : ''}
    </section>
  );
};

export default CreateFoodtruck;
