import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
  DeleteBackUser,
  fetchBackUsersDetail,
} from '../../../../action/backUsers';
import Loader from '../../../App/Loader/Loader';

const BackUsersDelete = () => {
  const { id } = useParams();
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
      dispatch(fetchBackUsersDetail(id));
    }
  }, [id, token, roles, dispatch, navigate]);

  if (!token || !roles.includes('ROLE_ADMIN')) {
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const userDetail = useSelector((state) => state.backUsers.backUsersDetail);

  if (
    !userDetail ||
    !userDetail.lastname ||
    !userDetail.firstname ||
    !userDetail.email ||
    !userDetail.roles
  ) {
    return <Loader isFullPage />;
  }

  return (
    <div className="admin-content pdg-lr">
      <h1 className="admin-title">Information de l'utilisateur</h1>
      <Form>
        <Form.Group className="mb-3" controlId="userLastname">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type="text"
            name="lastname"
            value={userDetail.lastname}
            disabled
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="userFirstname">
          <Form.Label>Prénom</Form.Label>
          <Form.Control
            type="text"
            name="firstname"
            value={userDetail.firstname}
            disabled
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="userEmail">
          <Form.Label>Adresse email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={userDetail.email}
            disabled
          />
        </Form.Group>
        <Form.Check
          inline
          label="Rôle USER"
          name="userRole"
          type="checkbox"
          checked={userDetail.roles.includes('ROLE_USER')}
          disabled
        />
        <Form.Check
          inline
          label="Rôle ADMIN"
          name="adminRole"
          type="checkbox"
          checked={userDetail.roles.includes('ROLE_ADMIN')}
          disabled
        />
        <Button variant="danger" onClick={handleShow}>
          Supprimer l'utilisateur
        </Button>{' '}
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Supprimer l'utilisateur</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Cette action est irréversible. Êtes-vous sûr de vouloir continuer ?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Annuler
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                dispatch(DeleteBackUser(id));
                navigate('/admin/users');
              }}
            >
              Supprimer
            </Button>
          </Modal.Footer>
        </Modal>
        <Button
          variant="dark"
          type="button"
          onClick={() => navigate('/admin/users')}
        >
          Retour
        </Button>
      </Form>
    </div>
  );
};
export default BackUsersDelete;
