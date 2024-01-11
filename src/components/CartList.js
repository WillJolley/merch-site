import React from 'react';
import Product from './Product';
import PropTypes from 'prop-types';

function CartList(props) {
  return (
    <>
      <hr />
      <h1>Cart</h1>
      {props.cart.map((product) =>
        <Product
          name={product.name}
          id={product.id}
          key={product.id}
        />
      )}
    </>
  );
  
  }
  
  CartList.propTypes = {
    cartList: PropTypes.object
  }
  
  
  export default CartList;
  