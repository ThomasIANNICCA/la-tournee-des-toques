import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

const FormDishes = ({ dishes }) => {
  const dishesByType = dishes.reduce((acc, dish) => {
    if (!acc[dish.type]) {
      acc[dish.type] = [];
    }
    acc[dish.type].push(dish);
    return acc;
  }, {});

  return (
    <div>
      <h2 className="admin-title">Carte</h2>
      {Object.entries(dishesByType).map(([type, typeDishes]) => (
        <div key={type}>
          <h3 className="admin-title">{type}</h3>
          {typeDishes.map((dish) => (
            <div key={dish.id}>
              <h4 className="admin-title">{dish.name}</h4>
              <Form.Group className="mb-3" controlId="dishPicture">
                <Form.Label>Photo</Form.Label>
                <Form.Control placeholder={dish.pictureName} disabled />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId={`dishDescription-${dish.id}`}
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder={dish.description}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="dishPrice">
                <Form.Label>Prix</Form.Label>
                <Form.Control placeholder={`${dish.price}€`} disabled />
              </Form.Group>

              <Form.Group className="mb-3" controlId="dishTags">
                <Form.Label>Tags</Form.Label>
                {dish.tag.map((currentTag) => (
                  <Form.Control
                    key={currentTag.id}
                    placeholder={currentTag.name}
                    disabled
                  />
                ))}
              </Form.Group>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

FormDishes.propTypes = {
  dishes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      pictureName: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      tag: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default FormDishes;
