import React from 'react';
import PropTypes from "prop-types";

function Product(props) {
  return (
    <React.Fragment>
      <div className='card-container'>
        <div className='product-card'>
          <h3>{props.name}</h3>
          <p>{props.price}</p>
          <p>{props.quantity}</p>
          <PurchaseForm id={props.id} />
        </div>
      </div>
    </React.Fragment>
  );
}


Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
};

export default Product;

