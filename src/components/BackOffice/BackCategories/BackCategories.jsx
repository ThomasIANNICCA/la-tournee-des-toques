import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoPencil, IoTrashBin } from 'react-icons/io5';
import { IoMdAdd } from 'react-icons/io';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchBackCategoriesList,
  deleteCategory,
} from '../../../action/backCategories';

function BackCategories() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);
  const roles = useSelector((state) => state.user.role);

  const [showModals, setShowModals] = useState({});

  const handleClose = (categoryId) => {
    setShowModals({ ...showModals, [categoryId]: false });
  };

  const handleShow = (categoryId) => {
    setShowModals({ ...showModals, [categoryId]: true });
  };

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else if (!roles.includes('ROLE_ADMIN')) {
      sessionStorage.removeItem('jwtToken');
      sessionStorage.removeItem('roles');
      navigate('/login');
    } else {
      dispatch(fetchBackCategoriesList());
    }
  }, [token, roles, dispatch, navigate]);

  if (!token || !roles.includes('ROLE_ADMIN')) {
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const CategoriesList = useSelector(
    (state) => state.backCategories.backCategoriesList
  );

  const handleDelete = (categoryId) => {
    dispatch(deleteCategory(categoryId));
  };

  return (
    <div className="admin-content pdg-lr">
      <h1 className="admin-title">Liste des catégories</h1>
      <div className="admin-add-button">
        <Link to="/admin/categories/add">
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {CategoriesList.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>
                <Link to={`/admin/categories/${category.id}/edit`}>
                  <Button variant="warning">
                    <IoPencil />
                  </Button>
                </Link>{' '}
                <Button
                  variant="danger"
                  onClick={() => handleShow(category.id)}
                >
                  <IoTrashBin />{' '}
                </Button>{' '}
                <Modal
                  show={showModals[category.id]}
                  onHide={() => handleClose(category.id)}
                  animation={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Suppression de la catégorie {category.name}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Cette action est irréversible. Êtes-vous sûr de vouloir
                    continuer ?
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => handleClose(category.id)}
                    >
                      Annuler
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(category.id)}
                    >
                      Supprimer
                    </Button>
                  </Modal.Footer>
                </Modal>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default BackCategories;
