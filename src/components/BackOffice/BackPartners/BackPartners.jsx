import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoPencil, IoTrashBin } from 'react-icons/io5';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchBackPartnersList,
  deletePartner,
} from '../../../action/backPartners';

function BackPartners() {
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
      dispatch(fetchBackPartnersList());
    }
  }, [token, roles, dispatch, navigate]);

  if (!token || !roles.includes('ROLE_ADMIN')) {
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showModals, setShowModals] = useState({});

  const handleClose = (partnerId) => {
    setShowModals({ ...showModals, [partnerId]: false });
  };

  const handleShow = (partnerId) => {
    setShowModals({ ...showModals, [partnerId]: true });
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const PartnersList = useSelector(
    (state) => state.backPartners.backPartnersList
  );

  const handleDelete = (partnerId) => {
    dispatch(deletePartner(partnerId)).then(() => {
      handleClose(partnerId);
      dispatch(fetchBackPartnersList());
    });
  };
  return (
    <div className="admin-content pdg-lr">
      <h1 className="admin-title">Liste des partenaires</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Logo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {PartnersList.map((partner) => (
            <tr key={partner.id}>
              <td>{partner.id}</td>
              <td>{partner.name}</td>
              <td>{partner.logoName}</td>
              <td>
                <Link to={`/admin/partners/${partner.id}`}>
                  <Button variant="warning">
                    <IoPencil />
                  </Button>{' '}
                </Link>
                <Button variant="danger" onClick={() => handleShow(partner.id)}>
                  <IoTrashBin />{' '}
                </Button>{' '}
                <Modal
                  show={showModals[partner.id]}
                  onHide={() => handleClose(partner.id)}
                  animation={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Suppression du partenaire {partner.name}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Cette action est irréversible. Êtes-vous sûr de vouloir
                    continuer ?
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => handleClose(partner.id)}
                    >
                      Annuler
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(partner.id)}
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

export default BackPartners;
