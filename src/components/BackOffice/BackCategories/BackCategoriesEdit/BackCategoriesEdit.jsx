import { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  changeCategoryInput,
  editCategory,
  fetchCategoryDetail,
  redirectToCategoriesList,
} from '../../../../action/backCategories';

const BackCategoriesEdit = () => {
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
      dispatch(fetchCategoryDetail(id));
    }
  }, [id, token, roles, dispatch, navigate]);

  if (!token || !roles.includes('ROLE_ADMIN')) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editCategory(id));
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    dispatch(changeCategoryInput(value));
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const name = useSelector((state) => state.backCategories.name);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const errorMessage = useSelector(
    (state) => state.backCategories.errorMessage
  );

  return (
    <div className="admin-content pdg-lr">
      <h1 className="admin-title">Modification de la catégorie</h1>
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
          Modifier la catégorie
        </Button>{' '}
        <Button
          variant="dark"
          type="button"
          onClick={() => dispatch(redirectToCategoriesList())}
        >
          Retour
        </Button>
      </Form>
      <p className="admin-error-message">{errorMessage}</p>
    </div>
  );
};

export default BackCategoriesEdit;
