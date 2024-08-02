import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

const TruckChef = ({ name, description, picture }) => {
  return (
    <div>
      <h2 className="admin-title">Chef</h2>
      <Form.Group className="mb-3" controlId="chefName">
        <Form.Label>Nom</Form.Label>
        <Form.Control placeholder={name} disabled />
      </Form.Group>
      <Form.Group className="mb-3" controlId="chefPicture">
        <Form.Label>Photo</Form.Label>
        <Form.Control placeholder={picture} disabled />
      </Form.Group>
      <Form.Group className="mb-3" controlId="chefDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder={description}
          disabled
        />
      </Form.Group>
    </div>
  );
};

TruckChef.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};
export default TruckChef;
