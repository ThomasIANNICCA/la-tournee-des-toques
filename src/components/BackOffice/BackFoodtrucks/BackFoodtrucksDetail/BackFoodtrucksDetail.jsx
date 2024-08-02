import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TruckInfos from './TruckInfos/TruckInfos';
import TruckChef from './TruckChef/TruckChef';
import TruckDishes from './TruckDishes/TruckDishes';
import { fetchFoodtruckDetail } from '../../../../action/backFoodtrucks';
import Loader from '../../../App/Loader/Loader';

const BackFoodtrucksDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);
  const roles = useSelector((state) => state.user.role);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else if (!roles.includes('ROLE_ADMIN')) {
      sessionStorage.removeItem('jwtToken');
      sessionStorage.removeItem('roles');
      navigate('/login');
    } else {
      dispatch(fetchFoodtruckDetail(id));
    }
  }, [id, token, roles, dispatch, navigate]);

  if (!token || !roles.includes('ROLE_ADMIN')) {
    return null;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const foodtruckDetail = useSelector(
    (state) => state.backFoodtrucks.foodtruckDetail
  );

  if (
    !foodtruckDetail ||
    !foodtruckDetail.status ||
    !foodtruckDetail.name ||
    !foodtruckDetail.pictureName ||
    !foodtruckDetail.location ||
    !foodtruckDetail.presentation ||
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
      <h1 className="admin-title">Informations du foodtruck {id}</h1>
      <Form>
        <TruckInfos
          status={foodtruckDetail.status}
          name={foodtruckDetail.name}
          picture={foodtruckDetail.pictureName}
          description={foodtruckDetail.presentation}
          location={foodtruckDetail.location}
          categories={foodtruckDetail.category}
        />
        <TruckChef
          name={foodtruckDetail.chef_name}
          description={foodtruckDetail.chef_description}
          picture={foodtruckDetail.chefPictureName}
        />
        <TruckDishes dishes={foodtruckDetail.dish} />

        <Button
          variant="dark"
          type="button"
          onClick={() => navigate('/admin/foodtrucks')}
        >
          Retour
        </Button>
      </Form>
    </div>
  );
};

export default BackFoodtrucksDetail;
