import { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  changeTagInput,
  editTag,
  fetchTagDetail,
  redirectToTagsList,
} from '../../../../action/backTags';

const BackTagsEdit = () => {
  const { id } = useParams();
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
    } else {
      dispatch(fetchTagDetail(id));
    }
  }, [id, token, roles, dispatch, navigate]);

  if (!token || !roles.includes('ROLE_ADMIN')) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTag(id));
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
      <h1 className="admin-title">Modification du tag</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="userLastname">
          <Form.Label>Nom *</Form.Label>
          <Form.Control
            type="text"
            name="lastname"
            value={name}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Modifier le tag
        </Button>{' '}
        <Button
          variant="dark"
          type="button"
          onClick={() => dispatch(redirectToTagsList())}
        >
          Retour
        </Button>
      </Form>
      <p className="admin-error-message">{errorMessage}</p>
    </div>
  );
};

export default BackTagsEdit;
