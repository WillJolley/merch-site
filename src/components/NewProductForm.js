import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

function NewProductForm(props) {
  function handleNewProductFormSubmission(event) {
    event.preventDefault();
    props.onNewProductCreation({
      name: event.target.name.value,
      quantity: event.target.quantity.value,
      purchased: false,
      id: uuidv4()
    });
  }

  return (
    <form onSubmit={handleNewProductFormSubmission}>
      <label htmlFor="name">Product Name</label>
      <input
        type='text'
        name='name'
        placeholder='Product Name'
        id="name" />
      <label htmlFor="price">$Price$</label>
      <input 
        type='number'
        name='price'
        placeholder='Price'
        id="price" />
      <label htmlFor="quantity">Quantity</label>
      <input
        type='number'
        name='quantity'
        placeholder='Quantity'
        id="quantity" />
      <button type='submit'>Add</button>
    </form>
  );
}

NewProductForm.propTypes = {
  onProductCreation: PropTypes.func.isRequired
};

export default NewProductForm;
