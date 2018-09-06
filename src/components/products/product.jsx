import React, { Component } from "react";

import Divider from "../common/divider";
import ProductCollapse from "./productCollapse";
import ProductItem from "./productItem";

class Product extends Component {
  state = {
    selectedItem: {}
  };

  constructor(props) {
    super();
    window.scrollTo(0, 0);
  }

  getSelectedItems = items => {
    this.setState({ selectedItem: items });
  };

  render() {
    const { imageBaseUrl, products, mainProducts } = this.props;
    const { selectedItem } = this.state;

    const currentPath =
      selectedItem && selectedItem.path
        ? selectedItem.path.replace("../assets/suscom_products", "/product")
        : "/product";
    return (
      <React.Fragment>
        <Divider path={currentPath} />
        <div className="row">
          <ProductCollapse
            onItemSeleted={this.getSelectedItems}
            products={products}
          />
          <ProductItem
            mainProducts={mainProducts}
            imagebaseUrl={imageBaseUrl}
            selectedProducts={selectedItem}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Product;
