import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoPencil, IoTrashBin } from 'react-icons/io5';
import { IoMdAdd } from 'react-icons/io';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import {
  fetchBackAnimationsList,
  deleteAnimation,
} from '../../../action/backAnimations';

function BackAnimations() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);
  const roles = useSelector((state) => state.user.role);

  const [showModals, setShowModals] = useState({});

  const handleClose = (animationId) => {
    setShowModals({ ...showModals, [animationId]: false });
  };

  const handleShow = (animationId) => {
    setShowModals({ ...showModals, [animationId]: true });
  };

  function formatDate(isoDate) {
    return format(new Date(isoDate), "dd/MM/yyyy - HH'h'mm");
  }
  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else if (!roles.includes('ROLE_ADMIN')) {
      sessionStorage.removeItem('jwtToken');
      sessionStorage.removeItem('roles');
      navigate('/login');
    } else {
      dispatch(fetchBackAnimationsList());
    }
  }, [token, roles, dispatch, navigate]);

  if (!token || !roles.includes('ROLE_ADMIN')) {
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const AnimationsList = useSelector(
    (state) => state.backAnimations.backAnimationsList
  );

  const handleDelete = (animationId) => {
    dispatch(deleteAnimation(animationId)).then(() => {
      handleClose(animationId);
      dispatch(fetchBackAnimationsList());
    });
  };

  return (
    <div className="admin-content pdg-lr">
      <h1 className="admin-title">Liste des animations</h1>
      <div className="admin-add-button">
        <Link to="/admin/animations/add">
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
            <th>Début</th>
            <th>Fin</th>
            <th>Emplacement</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {AnimationsList.map((animation) => (
            <tr key={animation.id}>
              <td>{animation.id}</td>
              <td>{animation.title}</td>
              <td>{formatDate(animation.openedAt)}</td>
              <td>{formatDate(animation.closedAt)}</td>
              <td>{animation.location}</td>
              <td>
                <Link to={`/admin/animations/${animation.id}/edit`}>
                  <Button variant="warning">
                    <IoPencil />
                  </Button>
                </Link>{' '}
                <Button
                  variant="danger"
                  onClick={() => handleShow(animation.id)}
                >
                  <IoTrashBin />{' '}
                </Button>{' '}
                <Modal
                  show={showModals[animation.id]}
                  onHide={() => handleClose(animation.id)}
                  animation={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Suppression de l'animation {animation.title}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Cette action est irréversible. Êtes-vous sûr de vouloir
                    continuer ?
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => handleClose(animation.id)}
                    >
                      Annuler
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(animation.id)}
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

export default BackAnimations;
