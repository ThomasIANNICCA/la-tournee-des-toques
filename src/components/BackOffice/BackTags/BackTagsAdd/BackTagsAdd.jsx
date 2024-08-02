import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTagInput, submitTagForm } from '../../../../action/backTags';

const BackTagsAdd = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitTagForm());
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    dispatch(changeTagInput(value));
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const name = useSelector((state) => state.backTags.name);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const errorMessage = useSelector((state) => state.backTags.errorMessage);

  return (
    <div className="admin-content pdg-lr">
      <h1 className="admin-title">Nouveau tag</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="tagName">
          <Form.Label>Nom *</Form.Label>
          <Form.Control
            type="text"
            name="tagName"
            value={name}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Ajouter le tag
        </Button>{' '}
        <Button
          variant="dark"
          type="button"
          onClick={() => navigate('/admin/tags')}
        >
          Retour
        </Button>
      </Form>
      <p className="admin-error-message">{errorMessage}</p>
    </div>
  );
};

export default BackTagsAdd;
