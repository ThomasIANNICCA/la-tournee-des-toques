import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoMdLogOut, IoMdAddCircleOutline } from 'react-icons/io';

import { fetchUserInfos, handleLogout } from '../../action/user';
import { emptyCreateFoodtruckInfos } from '../../action/createFoodtruck';

import Loader from '../App/Loader/Loader';
import UserInfos from './UserInfos/UserInfos';
import UserFoodtruckCard from './UserFoodtruckCard/UserFoodtruckCard';

import './UserAccount.scss';

const UserAccount = () => {
  const dispatch = useDispatch();

  const userId =
    useSelector((state) => state.user.userId) ||
    sessionStorage.getItem('userId');
  useEffect(() => {
    if (userId) {
      dispatch(fetchUserInfos(userId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userFoodtrucks = useSelector((state) => state.user.userFoodtrucks);
  const firstname = useSelector((state) => state.user.firstname);
  const pendingUserInfos = useSelector((state) => state.user.pendingUserInfos);

  if (pendingUserInfos) {
    return <Loader isFullPage />;
  }

  return (
    <section className="account pdg-lr">
      <h2 className="primary-title">Mon compte</h2>
      <div className="account__container">
        {/* Welcome/logout section */}
        <section className="account__table-container">
          <p className="account__welcome">
            Bienvenue sur votre espace trucker, {firstname} !
          </p>
          <button
            type="button"
            className="light-button"
            onClick={() => {
              dispatch(handleLogout());
            }}
          >
            Me déconnecter
            <span className="button__icon button__icon-right">
              <IoMdLogOut />
            </span>
          </button>
        </section>

        {/* User info section */}
        <section className="account__table-container">
          <h3>Mes informations</h3>
          <UserInfos />
        </section>

        {/* User foodtrucks section */}
        <section
          className={
            userFoodtrucks.length > 1
              ? 'account__table-container'
              : 'account__table-container single-content'
          }
        >
          <h3>Mes foodtrucks</h3>
          <div className="foodtrucks-list-container">
            {!userFoodtrucks ? (
              <Loader />
            ) : (
              userFoodtrucks.map((currentFoodtruck) => {
                return (
                  <UserFoodtruckCard
                    key={currentFoodtruck.id}
                    {...currentFoodtruck}
                  />
                );
              })
            )}
          </div>

          {/* Button Add a foodtruck */}
          <button type="button" className="light-button">
            <Link
              to="/mon-compte/foodtruck/creer/etape1"
              onClick={() => dispatch(emptyCreateFoodtruckInfos())}
            >
              Ajouter un foodtruck
              <span className="button__icon button__icon-right">
                <IoMdAddCircleOutline />
              </span>
            </Link>
          </button>
        </section>
      </div>
    </section>
  );
};

export default UserAccount;
