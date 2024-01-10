import React from 'react'; 
import ProductList from "./ProductList";

class ProductControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      mainProductList: [],
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

  handleChangingSelectedProduct = (id) => {
    const selectedProduct = this.state.mainProductList.filter(product => product.id === id)[0];
    this.setState({selectedProduct: selectedProduct});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedProduct != null) {
      currentlyVisibleState = <ProductDetail product = {this.state.selectedProduct} />;
      buttonText = "Return to Merch Zone";
    } else if (this.state.formVisible) {
      currentlyVisibleState = <NewProductForm onNewProductCreation={this.handleProductCreation} />;
      buttonText = "Return to Merch Zone";
    } else {
      currentlyVisibleState = <ProductList productList={this.state.mainProductList} onProductSelection={this.handleChangingSelectedProduct} />;
    }
    return ( 
      <>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}
  
export default TicketControl;