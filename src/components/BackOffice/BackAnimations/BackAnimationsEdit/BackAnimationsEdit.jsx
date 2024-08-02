import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeAnimationInput,
  editAnimation,
  fetchAnimationDetail,
} from '../../../../action/backAnimations';

const BackAnimationsEdit = () => {
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
      dispatch(fetchAnimationDetail(id));
    }
  }, [id, token, roles, dispatch, navigate]);

  if (!token || !roles.includes('ROLE_ADMIN')) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editAnimation(id));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch(changeAnimationInput(name, value));
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const title = useSelector((state) => state.backAnimations.title);
  const openedAt = useSelector((state) => state.backAnimations.openedAt);
  const closedAt = useSelector((state) => state.backAnimations.closedAt);
  const content = useSelector((state) => state.backAnimations.content);
  const location = useSelector((state) => state.backAnimations.location);
  const picture = useSelector((state) => state.backAnimations.picture);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const errorMessage = useSelector(
    (state) => state.backAnimations.errorMessage
  );

  return (
    <div className="admin-content pdg-lr">
      <h1 className="admin-title">Informations sur {title}</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Titre de l'évènement *</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={title}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="openedAt">
          <Form.Label>Heure de début *</Form.Label>
          <Form.Control
            type="text"
            name="openedAt"
            value={openedAt}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="closedAt">
          <Form.Label>Heure de fin *</Form.Label>
          <Form.Control
            type="text"
            name="closedAt"
            value={closedAt}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="location">
          <Form.Label>Emplacement *</Form.Label>
          <Form.Control
            type="text"
            name="location"
            value={location}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="content">
          <Form.Label>Description *</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            name="content"
            value={content}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="picture">
          <Form.Label>Photo *</Form.Label>
          <Form.Control
            type="text"
            name="picture"
            value={picture}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Modifier l'animation
        </Button>{' '}
        <Button
          variant="dark"
          type="button"
          onClick={() => navigate('/admin/animations')}
        >
          Retour
        </Button>
      </Form>
      <p className="admin-error-message">{errorMessage}</p>
    </div>
  );
};

export default BackAnimationsEdit;
