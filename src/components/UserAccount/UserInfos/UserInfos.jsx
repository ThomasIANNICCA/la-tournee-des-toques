/* eslint-disable no-nested-ternary */
import { useDispatch, useSelector } from 'react-redux';

import { changeFieldValue, checkPasswordValidity } from '../../../action/user';

import Field from '../../Field/Field';
import SaveUserBtn from './SaveUserBtn';
import EditUserBtn from './EditUserBtn';
import Loader from '../../App/Loader/Loader';
import SuccessMsg from '../../App/Messages/SuccessMsg';
import CancelBtn from './CancelBtn';
import PasswordRules from '../../Field/PasswordRules/PasswordRules';

const UserInfos = () => {
  const dispatch = useDispatch();

  const firstname = useSelector((state) => state.user.firstname);
  const lastname = useSelector((state) => state.user.lastname);
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);

  const isEditingInfos = useSelector((state) => state.user.editUserInfos);
  const isPendingSave = useSelector((state) => state.user.pendingSaveUserInfos);
  const savingStatus = useSelector((state) => state.user.saveUserInfosStatus);
  const newFirstname = useSelector((state) => state.user.newFirstname);
  const newLastname = useSelector((state) => state.user.newLastname);
  const newEmail = useSelector((state) => state.user.newEmail);
  const newPassword = useSelector((state) => state.user.newPassword);

  const lengthRegex = /.{12,}/;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const digitRegex = /[0-9]/;
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

  const isPasswordValid =
    lengthRegex.test(newPassword ?? password) &&
    uppercaseRegex.test(newPassword ?? password) &&
    lowercaseRegex.test(newPassword ?? password) &&
    digitRegex.test(newPassword ?? password) &&
    specialCharRegex.test(newPassword ?? password);

  return (
    <section className="account__personal-infos">
      <section className="account__personnal-infos__form">
        <section>
          {/* Field Firstname */}
          <Field
            /* filled by default with the firstname from database, but can be modified */
            value={newFirstname ?? firstname}
            type="text"
            name="newFirstname"
            placeholder="Prénom"
            onChange={(newValue, identifier) => {
              const action = changeFieldValue(newValue, identifier);
              dispatch(action);
            }}
            disabled={!isEditingInfos}
            required
            currentDigitsNb={
              newFirstname ? newFirstname.length : firstname.length
            }
            maxLength={50}
          />

          {/* Field lastname */}
          <Field
            /* filled by default with the lastname from database, but can be modified */
            value={newLastname ?? lastname}
            type="text"
            name="newLastname"
            placeholder="Nom"
            onChange={(newValue, identifier) => {
              const action = changeFieldValue(newValue, identifier);
              dispatch(action);
            }}
            disabled={!isEditingInfos}
            required
            currentDigitsNb={newLastname ? newLastname.length : lastname.length}
            maxLength={50}
          />
        </section>

        <section>
          {/* Field email */}
          <Field
            /* filled by default with the email from database, but can be modified */
            value={newEmail ?? email}
            type="email"
            name="newEmail"
            placeholder="Email"
            onChange={(newValue, identifier) => {
              const action = changeFieldValue(newValue, identifier);
              dispatch(action);
            }}
            disabled={!isEditingInfos}
            required
          />

          {/* Field password */}
          <Field
            /* filled by default with the password from database, but can be modified */
            value={newPassword ?? password}
            type="password"
            name="newPassword"
            placeholder="Mot de passe"
            onChange={(newValue, identifier) => {
              const action = changeFieldValue(newValue, identifier);
              dispatch(action);
              dispatch(checkPasswordValidity(isPasswordValid));
            }}
            disabled={!isEditingInfos}
            required
          />
          {isEditingInfos ? (
            <PasswordRules password={newPassword ?? password} />
          ) : (
            ''
          )}
        </section>
      </section>

      {/* Messages section */}
      {savingStatus === 'succeed' ? (
        <SuccessMsg msg="Vos modifications ont bien été enregistrées." />
      ) : savingStatus === 'failed' ? (
        <div className="msg-alert">
          Une erreur est survenue, veuillez réessayer.
        </div>
      ) : (
        ''
      )}

      {/* Submit section */}
      {!isEditingInfos && !isPendingSave ? (
        <EditUserBtn />
      ) : isEditingInfos && !isPendingSave ? (
        <div className="button__container">
          <CancelBtn />
          <SaveUserBtn isPasswordValid={isPasswordValid} />
        </div>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default UserInfos;
