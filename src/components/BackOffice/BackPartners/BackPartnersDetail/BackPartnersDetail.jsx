import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { fetchPartnerDetail } from '../../../../action/backPartners';

const BackPartnersDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);
  const roles = useSelector((state) => state.user.role);
  const partnerDetail = useSelector(
    (state) => state.backPartners.partnerDetail
  );

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else if (!roles.includes('ROLE_ADMIN')) {
      sessionStorage.removeItem('jwtToken');
      sessionStorage.removeItem('roles');
      navigate('/login');
    } else {
      dispatch(fetchPartnerDetail(id));
    }
  }, [id, token, roles, dispatch, navigate]);

  if (!token || !roles.includes('ROLE_ADMIN')) {
    return null;
  }

  return (
    <div className="admin-content pdg-lr">
      <h1 className="admin-title">Modification du partenaire</h1>
      <Form.Group className="mb-3" controlId="partnerName">
        <Form.Label>Nom *</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={partnerDetail.name}
          disabled
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="partnerPicture">
        <Form.Label>Logo *</Form.Label>
        <Form.Control
          type="text"
          name="picture"
          value={partnerDetail.logoName}
          disabled
        />
      </Form.Group>

      <Button
        variant="dark"
        type="button"
        onClick={() => navigate('/admin/partners')}
      >
        Retour
      </Button>
    </div>
  );
};

export default BackPartnersDetail;
