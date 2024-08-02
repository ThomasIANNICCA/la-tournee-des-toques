import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoPencil, IoTrashBin } from 'react-icons/io5';
import { IoMdAdd } from 'react-icons/io';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBackTagsList, deleteTag } from '../../../action/backTags';

function BackTags() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);
  const roles = useSelector((state) => state.user.role);

  const [showModals, setShowModals] = useState({});

  const handleClose = (tagId) => {
    setShowModals({ ...showModals, [tagId]: false });
  };

  const handleShow = (tagId) => {
    setShowModals({ ...showModals, [tagId]: true });
  };

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else if (!roles.includes('ROLE_ADMIN')) {
      sessionStorage.removeItem('jwtToken');
      sessionStorage.removeItem('roles');
      navigate('/login');
    } else {
      dispatch(fetchBackTagsList());
    }
  }, [token, roles, dispatch, navigate]);

  if (!token || !roles.includes('ROLE_ADMIN')) {
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const TagsList = useSelector((state) => state.backTags.backTagsList);

  const handleDelete = (tagId) => {
    dispatch(deleteTag(tagId));
  };

  return (
    <div className="admin-content pdg-lr">
      <h1 className="admin-title">Liste des tags</h1>
      <div className="admin-add-button">
        <Link to="/admin/tags/add">
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
          {TagsList.map((tag) => (
            <tr key={tag.id}>
              <td>{tag.id}</td>
              <td>{tag.name}</td>
              <td>
                <Link to={`/admin/tags/${tag.id}/edit`}>
                  <Button variant="warning">
                    <IoPencil />
                  </Button>
                </Link>{' '}
                <Button variant="danger" onClick={() => handleShow(tag.id)}>
                  <IoTrashBin />{' '}
                </Button>{' '}
                <Modal
                  show={showModals[tag.id]}
                  onHide={() => handleClose(tag.id)}
                  animation={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Suppression du tag {tag.name}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Cette action est irréversible. Êtes-vous sûr de vouloir
                    continuer ?
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => handleClose(tag.id)}
                    >
                      Annuler
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(tag.id)}
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

export default BackTags;
