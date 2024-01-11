import React from 'react';
import PropTypes from "prop-types";
import PurchaseForm from "./PurchaseForm";

function Product(props) {
  let currentlyVisibleState="";
  if (!props.purchased) {
    currentlyVisibleState = <PurchaseForm id={props.id} onPurchase={props.onPurchase} />
  }
  return (
    <React.Fragment>
      <div className='card-container'>
        <div className='product-card'>
          <h3>{props.name}</h3>
          <p>{props.price}</p>
          <p>{props.quantity}</p>
          <p>{currentlyVisibleState}</p>
        </div>
      </div>
    </React.Fragment>
  );
}


Product.propTypes = {
  name: PropTypes.string.isRequired,
  purchased: PropTypes.bool,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
};

export default Product;

