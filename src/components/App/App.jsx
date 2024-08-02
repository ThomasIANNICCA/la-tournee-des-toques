import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';

import './App.scss';

import Homepage from '../Homepage/Homepage';
import Foodtrucks from '../Foodtrucks/Foodtrucks';
import Animations from '../Animations/Animations';
import Login from '../Login/Login';
import Infos from '../Infos/Infos';
import Contact from '../Contact/Contact';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import UserAccount from '../UserAccount/UserAccount';
import ForgottenPwd from '../Login/ForgottenPwd';
import FoodtruckDetail from '../FoodtruckDetail/FoodtruckDetail';
import CreateFoodtruck from '../UserAccount/CreateFoodtruck/CreateFoodtruck';
import MentionsLegales from '../MentionsLegales/MentionsLegales';
import Error404 from '../Error404/Error404';

import BackHomepage from '../BackOffice/BackHomepage/BackHomepage';
import BackNavbar from '../BackOffice/BackNavbar/BackNavbar';
import BackUser from '../BackOffice/BackUsers/BackUsers';
import BackValidation from '../BackOffice/BackValidation/BackValidation';
import BackFoodtrucks from '../BackOffice/BackFoodtrucks/BackFoodtrucks';
import BackCategories from '../BackOffice/BackCategories/BackCategories';
import BackTags from '../BackOffice/BackTags/BackTags';
import BackAnimations from '../BackOffice/BackAnimations/BackAnimations';
import BackPartners from '../BackOffice/BackPartners/BackPartners';
import BackValidationEdit from '../BackOffice/BackValidation/BackValidationEdit/BackValidationEdit';
import BackUsersDelete from '../BackOffice/BackUsers/BackUserDelete/BackUsersDelete';
import BackUsersAdd from '../BackOffice/BackUsers/BackUsersAdd/BackUsersAdd';
import BackCategoriesAdd from '../BackOffice/BackCategories/BackCategoriesAdd/BackCategoriesAdd';
import BackCategoriesEdit from '../BackOffice/BackCategories/BackCategoriesEdit/BackCategoriesEdit';
import BackTagsAdd from '../BackOffice/BackTags/BackTagsAdd/BackTagsAdd';
import BackTagsEdit from '../BackOffice/BackTags/BackTagsEdit/BackTagsEdit';
import BackFoodtrucksDetail from '../BackOffice/BackFoodtrucks/BackFoodtrucksDetail/BackFoodtrucksDetail';
import BackAnimationsAdd from '../BackOffice/BackAnimations/BackAnimationsAdd/BackAnimationsAdd';
import BackAnimationsEdit from '../BackOffice/BackAnimations/BackAnimationsEdit/BackAnimationsEdit';
import BackPartnersDetail from '../BackOffice/BackPartners/BackPartnersDetail/BackPartnersDetail';

function App() {
  // automatic scroll to the top of the page when landing on a new url
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location]);

  // booleans to know if the user (trucker) or the admin is connected, to display loginitem and to route correctly
  const isUserLogged = !!(
    useSelector((state) => state.user.userId) ||
    sessionStorage.getItem('userId')
  );
  let isAdminLogged = false;
  if (sessionStorage.getItem('roles')) {
    isAdminLogged = sessionStorage.getItem('roles').includes('ROLE_ADMIN');
  }

  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className={`App ${isAdminRoute ? 'admin' : ''}`}>
      {isAdminRoute ? <BackNavbar /> : <Navbar />}
      <main>
        <Routes>
          <Route
            key="home-route"
            path="/"
            element={
              <div>
                <Homepage />
              </div>
            }
          />
          <Route
            key="foodtrucks-route"
            path="/foodtrucks"
            element={
              <div>
                <Foodtrucks />
              </div>
            }
          />
          <Route
            key="foodtruck-detail-route"
            path="/foodtrucks/:id"
            element={
              <div>
                <FoodtruckDetail />
              </div>
            }
          />
          <Route
            key="events-route"
            path="/animations"
            element={
              <div>
                <Animations />
              </div>
            }
          />
          <Route
            key="infos-route"
            path="/infos"
            element={
              <div>
                <Infos />
              </div>
            }
          />
          <Route
            key="contact-route"
            path="/contact"
            element={
              <div>
                <Contact />
              </div>
            }
          />
          <Route
            key="mentions-legales-route"
            path="/mentions-legales"
            element={<MentionsLegales />}
          />
          <Route key="login-route" path="/login" element={<Login />} />
          <Route
            key="forgotten-pwd-route"
            path="/mdp-oublie"
            element={<ForgottenPwd />}
          />

          {/* Routes My-account */}
          <Route
            key="user-account-route"
            path="/mon-compte"
            element={
              isUserLogged || isAdminLogged ? <UserAccount /> : <Login />
            }
          />
          <Route
            key="user-edit-truck-route"
            path="/mon-compte/foodtruck/creer/etape1"
            element={isUserLogged ? <CreateFoodtruck /> : <Login />}
          />
          <Route
            key="user-edit-dishes-route"
            path="/mon-compte/foodtruck/creer/etape2"
            element={isUserLogged ? <CreateFoodtruck /> : <Login />}
          />
          <Route key="error-404-route" path="*" element={<Error404 />} />
          <Route
            key="user-edit-send-for-validation-route"
            path="/mon-compte/foodtruck/creer/etape3"
            element={isUserLogged ? <CreateFoodtruck /> : <Login />}
          />
          <Route
            key="user-edit-success-route"
            path="/mon-compte/foodtruck/creer/succes"
            element={isUserLogged ? <CreateFoodtruck /> : <Login />}
          />

          {/* ------------------- BACK OFFICE---------------------------- */}
          <Route
            key="back-office-homepage-route"
            path="/admin"
            element={<BackHomepage />}
          />

          <Route
            key="back-office-users-route"
            path="/admin/users"
            element={<BackUser />}
          />

          <Route
            key="back-office-users-delete-route"
            path="/admin/users/:id"
            element={<BackUsersDelete />}
          />

          <Route
            key="back-office-users-add-route"
            path="/admin/users/add"
            element={<BackUsersAdd />}
          />

          <Route
            key="back-office-validation-route"
            path="/admin/validation"
            element={<BackValidation />}
          />

          <Route
            key="back-office-validation-detail-route"
            path="/admin/validation/:id"
            element={<BackValidationEdit />}
          />

          <Route
            key="back-office-foodtrucks-route"
            path="/admin/foodtrucks"
            element={<BackFoodtrucks />}
          />

          <Route
            key="back-office-foodtrucks-route"
            path="/admin/foodtrucks/:id"
            element={<BackFoodtrucksDetail />}
          />
          <Route
            key="back-office-categories-route"
            path="/admin/categories"
            element={<BackCategories />}
          />
          <Route
            key="back-office-categories-add-route"
            path="/admin/categories/add"
            element={<BackCategoriesAdd />}
          />

          <Route
            key="back-office-categories-edit-route"
            path="/admin/categories/:id/edit"
            element={<BackCategoriesEdit />}
          />

          <Route
            key="back-office-tags-route"
            path="/admin/tags"
            element={<BackTags />}
          />

          <Route
            key="back-office-tags-add-route"
            path="/admin/tags/add"
            element={<BackTagsAdd />}
          />

          <Route
            key="back-office-tags-edit-route"
            path="/admin/tags/:id/edit"
            element={<BackTagsEdit />}
          />
          <Route
            key="back-office-animations-route"
            path="/admin/animations"
            element={<BackAnimations />}
          />

          <Route
            key="back-office-animations-add-route"
            path="/admin/animations/add"
            element={<BackAnimationsAdd />}
          />
          <Route
            key="back-office-animations-edit-route"
            path="/admin/animations/:id/edit"
            element={<BackAnimationsEdit />}
          />

          <Route
            key="back-office-partners-route"
            path="/admin/partners"
            element={<BackPartners />}
          />

          <Route
            key="back-office-partners-detail-route"
            path="/admin/partners/:id"
            element={<BackPartnersDetail />}
          />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
