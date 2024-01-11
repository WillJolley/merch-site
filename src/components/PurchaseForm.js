import React from 'react';


function PurchaseForm(props) {
  function handlePurchaseButtonClick(event) {
    event.preventDefault()
    props.onPurchase(props.id);
  }
  return (
    <React.Fragment>
      <form onSubmit={handlePurchaseButtonClick}>
        <button type="submit">Buy</button>
      </form>
    </React.Fragment>
  )
}

export default PurchaseForm;
