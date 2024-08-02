import { useDispatch, useSelector } from 'react-redux';

import {
  changeInput,
  changeSelectInput,
  submitContactForm,
} from '../../../action/contact';

import Field from '../../Field/Field';
import SelectField from '../../Field/SelectField/SelectField';

import '../../Field/Field.scss';
import './Form.scss';

const Form = () => {
  const dispatch = useDispatch();

  const firstnameValue = useSelector((state) => state.contactForm.firstname);
  const nameValue = useSelector((state) => state.contactForm.name);
  const emailValue = useSelector((state) => state.contactForm.email);
  const messageValue = useSelector((state) => state.contactForm.message);
  const reasonValue = useSelector((state) => state.contactForm.reason);

  const validationMessage = useSelector(
    (state) => state.contactForm.validationMessage
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const action = submitContactForm();
    dispatch(action);
  };

  const handleInputChange = (field) => (value) => {
    dispatch(changeInput(field, value));
  };

  const changeSelectOption = (selectedOption) => {
    dispatch(changeSelectInput(selectedOption));
  };

  const options = [
    { id: 1, name: "J'ai une question sur l'évènement" },
    { id: 2, name: "J'ai un foodtruck et je souhaite participer" },
    { id: 3, name: 'Autres' },
  ];

  return (
    <div className="contact-form pdg-lr">
      <div className="contact-form-header">
        <h2 className="primary-title">A vous de jouer !</h2>
      </div>
      <div className="contact-form-content">
        <form onSubmit={handleSubmit}>
          <SelectField
            name="reason"
            value={reasonValue}
            label="Raison de la demande"
            placeholder="Sélectionnez une option"
            onChange={changeSelectOption}
            options={options}
            required
          />
          <div className="user-infos">
            <Field
              value={nameValue}
              name="name"
              type="text"
              placeholder="Nom"
              onChange={handleInputChange('name')}
              required
            />
            <Field
              value={firstnameValue}
              name="firstname"
              type="text"
              placeholder="Prénom"
              onChange={handleInputChange('firstname')}
              required
            />
            <Field
              value={emailValue}
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleInputChange('email')}
              required
            />
          </div>

          <Field
            value={messageValue}
            name="message"
            type="textarea"
            placeholder="Message"
            onChange={handleInputChange('message')}
            required
          />

          <button className="light-button" type="submit">
            Envoyer
          </button>
        </form>
        <p className="validation-message">{validationMessage}</p>
      </div>
    </div>
  );
};

export default Form;
