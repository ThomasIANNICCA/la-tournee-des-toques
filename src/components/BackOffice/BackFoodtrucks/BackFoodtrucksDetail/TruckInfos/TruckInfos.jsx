import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

const TruckInfos = ({
  status,
  name,
  location,
  picture,
  description,
  categories,
}) => {
  return (
    <div>
      <h2 className="admin-title">Truck</h2>
      <Form.Group className="mb-3" controlId="truckName">
        <Form.Label>Statut</Form.Label>
        <Form.Control placeholder={status} disabled />
      </Form.Group>
      <Form.Group className="mb-3" controlId="truckName">
        <Form.Label>Nom</Form.Label>
        <Form.Control placeholder={name} disabled />
      </Form.Group>
      <Form.Group className="mb-3" controlId="truckDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder={description}
          disabled
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="truckPicture">
        <Form.Label>Photo</Form.Label>
        <Form.Control placeholder={picture} disabled />
      </Form.Group>
      <Form.Group className="mb-3" controlId="truckLocation">
        <Form.Label>Emplacement</Form.Label>
        <Form.Control
          placeholder={
            status === 'pending' || status === 'draft'
              ? 'en attente de validation'
              : location
          }
          disabled
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="truckCategories">
        <Form.Label>Categories</Form.Label>
        {categories.map((category) => (
          <Form.Control
            key={category.id}
            placeholder={category.name}
            disabled
          />
        ))}
      </Form.Group>
    </div>
  );
};

TruckInfos.propTypes = {
  status: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.number.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TruckInfos;
