import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { IoPencil } from 'react-icons/io5';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { fetchPendingFoodtrucks } from '../../../action/backFoodtrucks';

function BackHomepage() {
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
      dispatch(fetchPendingFoodtrucks());
    }
  }, [token, roles, dispatch, navigate]);

  if (!token || !roles.includes('ROLE_ADMIN')) {
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pendingFoodtrucks = useSelector(
    (state) => state.backFoodtrucks.pendingFoodtrucksList
  );

  return (
    <div className="admin-content pdg-lr">
      <h1 className="admin-title">Foodtrucks en attente de validation</h1>

      {pendingFoodtrucks.length === 0 ? (
        <p>Pas de demande de validation en cours</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingFoodtrucks.map((foodtruck) => (
              <tr key={foodtruck.id}>
                <td>{foodtruck.id}</td>
                <td>{foodtruck.name}</td>
                <td>{foodtruck.status}</td>
                <td>
                  <Link to={`/admin/validation/${foodtruck.id}`}>
                    <Button variant="warning">
                      <IoPencil />
                    </Button>{' '}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default BackHomepage;
