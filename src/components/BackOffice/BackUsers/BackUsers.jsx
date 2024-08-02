import { React, useEffect } from 'react';
import { IoMdAdd } from 'react-icons/io';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { IoPencil } from 'react-icons/io5';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBackUsersList } from '../../../action/backUsers';

function BackUsers() {
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
      dispatch(fetchBackUsersList());
    }
  }, [token, roles, dispatch, navigate]);

  if (!token || !roles.includes('ROLE_ADMIN')) {
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const UsersList = useSelector((state) => state.backUsers.backUsersList);

  return (
    <div className="admin-content pdg-lr">
      <h1 className="admin-title">Liste des utilisateurs</h1>
      <div className="admin-add-button">
        <Link to="/admin/users/add">
          <Button variant="success">
            Ajouter <IoMdAdd />
          </Button>
        </Link>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Rôle</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {UsersList.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {user.firstname} {user.lastname}
              </td>
              <td>{user.email}</td>
              <td>{user.roles}</td>

              <td>
                <Link to={`/admin/users/${user.id}`}>
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

export default BackUsers;
