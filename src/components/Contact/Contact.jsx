import Team from './Team/Team';
import Form from './Form/Form';

import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-header pdg-lr">
        <h1 className="primary-title">Contact</h1>
        <p className="contact-header-description">
          Vous avez des questions sur notre festival de foodtrucks ou souhaitez
          proposer votre candidature pour y participer ? Notre équipe est là
          pour vous aider ! Que vous soyez un visiteur curieux ou un foodtruck
          enthousiaste, n&apos;hésitez pas à nous contacter. Nous avons hâte de
          vous lire et de partager avec vous l&apos;enthousiasme de notre
          événement gourmand !
        </p>
      </div>
      <Team />
      <Form />
    </div>
  );
};

export default Contact;
