import React from 'react'; 
import ProductList from "./ProductList";
//import ProductDetail from "./ProductDetail;"
import NewProductForm from './NewProductForm';
import CartList from './CartList';

class ProductControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      mainProductList: [],
      cart: [],
      selectedProduct: null
    };
  }


  handleClick = () => {
    if (this.state.selectedProduct != null) {
      this.setState({
        formVisible: false,
        selectedProduct: null
      });
    } else {
      this.setState(prevState => ({
        formVisible: !prevState.formVisible
      }));
    }
  }

  handleProductCreation = (newProduct) => {
    const newMainProductList = this.state.mainProductList.concat(newProduct);
    this.setState({
      mainProductList: newMainProductList,
      formVisible: false
    });
  }

  handlePurchasingProduct = (id) => {
    const toBuy = this.state.mainProductList.filter(prod => prod.id === id)[0]; //{ quant: 6}
    let updatedQuant;
    let newCart = [];
    toBuy.purchased = true;
    if (toBuy.quantity > 1) {
      updatedQuant = toBuy.quantity - 1; // 5
      newCart = this.state.cart.concat(toBuy);
    }
    else {
      updatedQuant = "Out of Stock"
    }
    const updatedProd = { ...toBuy, quantity: updatedQuant }; // {quantity: 5}
    const newList = this.state.mainProductList
      .filter(prod => prod.id !== toBuy.id)
      .concat(updatedProd);
    
    this.setState({
      mainProductList: newList,
      cart: newCart
    });

  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisible) {
      currentlyVisibleState = <NewProductForm onNewProductCreation={this.handleProductCreation} />;
      buttonText = "Return to Merch Zone";
    } else {
      currentlyVisibleState = (
        <>
          <ProductList productList={this.state.mainProductList} onPurchase={this.handlePurchasingProduct} />
          <CartList cart={this.state.cart}/>
        </>
      );
      buttonText = "Add Product";
    }
    //else if (this.state.cartVisible){

   // }
    return ( 
      <>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}
  
export default ProductControl;