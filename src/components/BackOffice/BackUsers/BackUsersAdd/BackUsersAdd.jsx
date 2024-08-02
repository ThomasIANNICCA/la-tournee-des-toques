/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
  changeUserInput,
  toggleAdminRole,
  addUserSubmit,
} from '../../../../action/backUsers';

const BackUsersAdd = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const roles = useSelector((state) => state.user.role);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else if (!roles.includes('ROLE_ADMIN')) {
      sessionStorage.removeItem('jwtToken');
      sessionStorage.removeItem('roles');
      navigate('/login');
    }
  }, [token, roles, dispatch, navigate]);

  if (!token || !roles.includes('ROLE_ADMIN')) {
    return null;
  }

  const firstname = useSelector((state) => state.backUsers.firstname);
  const lastname = useSelector((state) => state.backUsers.lastname);
  const email = useSelector((state) => state.backUsers.email);
  const password = useSelector((state) => state.backUsers.password);
  const role = useSelector((state) => state.backUsers.roles);
  const errorMessage = useSelector((state) => state.backUsers.errorMessage);

  const handleInputChange = (field) => (event) => {
    const { value } = event.target;
    dispatch(changeUserInput(field, value));
  };

  const handleRoleChange = () => {
    dispatch(toggleAdminRole());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUserSubmit());
  };

  return (
    <div className="admin-content pdg-lr">
      <h1 className="admin-title">Nouvel utilisateur</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="userLastname">
          <Form.Label>Nom *</Form.Label>
          <Form.Control
            type="text"
            name="lastname"
            value={lastname}
            onChange={handleInputChange('lastname')}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="userFirstname">
          <Form.Label>Prénom *</Form.Label>
          <Form.Control
            type="text"
            name="firstname"
            value={firstname}
            onChange={handleInputChange('firstname')}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="userEmail">
          <Form.Label>Adresse email *</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange('email')}
            required
          />
        </Form.Group>
        <Form.Check
          inline
          label="Rôle USER"
          name="userRole"
          type="checkbox"
          checked
          disabled
        />
        <Form.Check
          inline
          label="Rôle ADMIN"
          name="adminRole"
          type="checkbox"
          checked={role.includes('ROLE_ADMIN')}
          onChange={handleRoleChange}
        />
        <Button type="submit" variant="primary">
          Ajouter l'utilisateur
        </Button>{' '}
        <Button
          variant="dark"
          type="button"
          onClick={() => navigate('/admin/users')}
        >
          Retour
        </Button>
      </Form>
      <p className="admin-error-message">{errorMessage}</p>
    </div>
  );
};

export default BackUsersAdd;
