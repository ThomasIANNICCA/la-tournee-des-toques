import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { changeLocationInput } from '../../../../../action/backFoodtrucks';

const FormTruck = ({ name, picture, description, categories }) => {
  const dispatch = useDispatch();
  const location = useSelector(
    (state) => state.backFoodtrucks.newLocationForPendingFoodtruck
  );

  const handleInputChange = (event) => {
    const { value } = event.target;
    if (value === '' || !isNaN(value)) {
      dispatch(changeLocationInput(value));
    }
  };

  return (
    <div>
      <h2 className="admin-title">Truck</h2>
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
          placeholder="Saisir un emplacement"
          value={location}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="truckCategories">
        <Form.Label>Catégories</Form.Label>
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

FormTruck.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FormTruck;
