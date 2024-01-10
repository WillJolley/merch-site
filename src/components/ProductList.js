import React from "react";
import Product from './Product';


function ProductList(props) {
  
  return (
    <>
      <hr />
      {props.productList.map((product) =>
        <Product
          name={product.name}
          quantity={product.quantity}
          id={product.id}
          key={product.id} />
      )}
    </>
  )

}

ProductList.propTypes = {
  productList: PropTypes.object,
  onPurchase: PropTypes.func
}


export default ProductList;