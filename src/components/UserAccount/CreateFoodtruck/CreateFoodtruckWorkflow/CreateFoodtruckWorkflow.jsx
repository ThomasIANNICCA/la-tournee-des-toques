import CreateFoodtruckStep from './CreateFoodtruckStep';

import './CreateFoodtruckWorkflow.scss';

const CreateFoodtruckWorkflow = () => {
  return (
    <section className="create-foodtruck-worflow">
      <section>
        <CreateFoodtruckStep stepNb={1} label="Création du foodtruck" />
        <CreateFoodtruckStep stepNb={2} label="Ajout des plats" />
        <CreateFoodtruckStep stepNb={3} label="Envoi pour validation" />
      </section>
    </section>
  );
};

export default CreateFoodtruckWorkflow;
