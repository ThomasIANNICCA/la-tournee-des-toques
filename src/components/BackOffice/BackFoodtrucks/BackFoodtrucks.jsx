import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { IoPencil } from 'react-icons/io5';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBackFoodtrucksList } from '../../../action/backFoodtrucks';

function BackFoodtrucks() {
  const dispatch = useDispatch();
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
      dispatch(fetchBackFoodtrucksList());
    }
  }, [token, roles, dispatch, navigate]);

  if (!token || !roles.includes('ROLE_ADMIN')) {
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const FoodtrucksList = useSelector(
    (state) => state.backFoodtrucks.backFoodtrucksList
  );

  return (
    <div className="admin-content pdg-lr">
      <h1 className="admin-title">Liste des Foodtrucks</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom du Foodtruck</th>
            <th>Statut</th>
            <th>Emplacement</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {FoodtrucksList.map((foodtruck) => (
            <tr key={foodtruck.id}>
              <td>{foodtruck.id}</td>
              <td>{foodtruck.name}</td>
              <td>{foodtruck.status}</td>
              <td>
                {foodtruck.status === 'pending' || foodtruck.status === 'draft'
                  ? 'en attente de validation'
                  : foodtruck.location}
              </td>
              <td>{foodtruck.presentation}</td>

              <td>
                <Link to={`/admin/foodtrucks/${foodtruck.id}`}>
                  <Button variant="warning">
                    <IoPencil />
                  </Button>{' '}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default BackFoodtrucks;
