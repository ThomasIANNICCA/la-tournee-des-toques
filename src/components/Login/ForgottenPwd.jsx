import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';

import { changeFieldValue, sendNewPassword } from '../../action/user';

import Field from '../Field/Field';
import Loader from '../App/Loader/Loader';
import FailedMsg from '../App/Messages/FailedMsg';
import SuccessMsg from '../App/Messages/SuccessMsg';

const ForgottenPwd = () => {
  const dispatch = useDispatch();

  const isPendingSendNewPassword = useSelector(
    (state) => state.user.isPendingSendNewPassword
  );
  const isSuccessfulNewPassword = useSelector(
    (state) => state.user.isSuccessfulNewPassword
  );
  const isFailedNewPassword = useSelector(
    (state) => state.user.isFailedNewPassword
  );
  const isEmailNotFound = useSelector((state) => state.user.isEmailNotFound);

  // controlled field
  const email = useSelector((state) => state.user.email);

  return (
    <section className="login__page pdg-lr">
      <h2 className="primary-title first-line">Mot de passe</h2>
      <h2 className="primary-title">oublié</h2>

      <p>
        Un nouveau mot de passe va vous être envoyé sur votre boite mail. Vous
        pourrez ensuite vous connecter et le modifier depuis votre compte.
      </p>

      <form
        className="login-form-element"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(sendNewPassword());
        }}
      >
        {/* Email field */}
        <Field
          name="email"
          type="email"
          placeholder="Adresse email"
          onChange={(newValue, identifier) => {
            const action = changeFieldValue(newValue, identifier);
            dispatch(action);
          }}
          value={email}
          required
        />

        {/* Error messages */}
        {isEmailNotFound ? <FailedMsg msg="Adresse email inconnue." /> : ''}
        {isFailedNewPassword ? (
          <FailedMsg msg="Une erreur est survenue. Veuillez réessayer." />
        ) : (
          ''
        )}
        {isSuccessfulNewPassword ? (
          <SuccessMsg msg="Un nouveau mot de passe a été envoyé sur votre adresse mail." />
        ) : (
          ''
        )}

        {/* Submit section */}
        <section className="submit-section">
          {isPendingSendNewPassword ? (
            <div className="loader-btn">
              <Loader />
            </div>
          ) : (
            <div>
              <Link to="/login">
                <button type="button" className="cancel-button">
                  <span className="button__icon button__icon-left">
                    <GrLinkPrevious />
                  </span>
                  Revenir à l&apos;authentification
                </button>
              </Link>
              {!isSuccessfulNewPassword ? (
                <button
                  type="submit"
                  className={
                    isSuccessfulNewPassword
                      ? 'login-form-button light-button light-button--disabled'
                      : 'login-form-button light-button'
                  }
                  disabled={isSuccessfulNewPassword}
                >
                  Envoyer un nouveau mot de passe
                  <span className="button__icon button__icon-right">
                    <GrLinkNext />
                  </span>
                </button>
              ) : (
                ''
              )}
            </div>
          )}
        </section>
      </form>
    </section>
  );
};

export default ForgottenPwd;
