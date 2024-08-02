import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormTruck from './FormTruck/FormTruck';
import FormChef from './FormChef/FormChef';
import FormDishes from './FormDishes/FormDishes';
import {
  fetchPendingFoodtruckDetail,
  validateFoodtruck,
  refuseFoodtruck,
  VALIDATE_FOODTRUCK_SUCCESS,
  REFUSE_FOODTRUCK_SUCCESS,
  resetValidationSuccess,
  resetRefusalSuccess,
} from '../../../../action/backFoodtrucks';
import Loader from '../../../App/Loader/Loader';

const BackValidationEdit = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);
  const roles = useSelector((state) => state.user.role);
  const validationSuccess = useSelector(
    (state) => state.backFoodtrucks.validationSuccess
  );
  const refusalSuccess = useSelector(
    (state) => state.backFoodtrucks.refusalSuccess
  );

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else if (!roles.includes('ROLE_ADMIN')) {
      sessionStorage.removeItem('jwtToken');
      sessionStorage.removeItem('roles');
      navigate('/login');
    } else {
      dispatch(fetchPendingFoodtruckDetail(id));
    }
  }, [id, token, roles, dispatch, navigate]);

  useEffect(() => {
    if (validationSuccess || refusalSuccess) {
      navigate('/admin/validation');
      dispatch(resetValidationSuccess());
      dispatch(resetRefusalSuccess());
    }
  }, [validationSuccess, refusalSuccess, navigate, dispatch]);

  if (!token || !roles.includes('ROLE_ADMIN')) {
    return null;
  }

  const foodtruckDetail = useSelector(
    (state) => state.backFoodtrucks.pendingFoodtruckDetail
  );

  const newLocation = useSelector(
    (state) => state.backFoodtrucks.newLocationForPendingFoodtruck
  );

  if (
    !foodtruckDetail ||
    !foodtruckDetail.name ||
    !foodtruckDetail.pictureName ||
    !foodtruckDetail.presentation ||
    !foodtruckDetail.location ||
    !foodtruckDetail.category ||
    !foodtruckDetail.chefPictureName ||
    !foodtruckDetail.chef_name ||
    !foodtruckDetail.chef_description ||
    !foodtruckDetail.dish
  ) {
    return <Loader isFullPage />;
  }

  return (
    <div className="admin-content pdg-lr">
      <h1 className="admin-title">Demande de validation pour le truck {id}</h1>
      <Form>
        <FormTruck
          name={foodtruckDetail.name}
          picture={foodtruckDetail.pictureName}
          description={foodtruckDetail.presentation}
          categories={foodtruckDetail.category}
        />
        <FormChef
          name={foodtruckDetail.chef_name}
          description={foodtruckDetail.chef_description}
          picture={foodtruckDetail.chefPictureName}
        />
        <FormDishes dishes={foodtruckDetail.dish} />
        <Button
          variant="primary"
          type="button"
          onClick={() => {
            dispatch(validateFoodtruck(id, newLocation));
          }}
        >
          Valider
        </Button>{' '}
        <Button
          variant="danger"
          type="button"
          onClick={() => {
            dispatch(refuseFoodtruck(id));
          }}
        >
          Refuser
        </Button>{' '}
        <Button
          variant="dark"
          type="button"
          onClick={() => navigate('/admin/validation')}
        >
          Retour
        </Button>
      </Form>
    </div>
  );
};

export default BackValidationEdit;
