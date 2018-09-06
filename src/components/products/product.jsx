import React, { Component } from "react";

import Divider from "../common/divider";
import ProductCollapse from "./productCollapse";
import ProductItem from "./productItem";
import {
  getImageRawPath,
  getProductsData
} from "../../services/fakeContentService";

class Product extends Component {
  state = {
    products: {},
    selectedItem: {},
    imagebaseUrl: ""
  };

  constructor(props) {
    super();
    window.scrollTo(0, 0);
  }

  componentWillMount() {
    this.getAsyncProductsData();
  }

  getAsyncProductsData = () => {
    getImageRawPath().then(response => {
      this.setState({ imagebaseUrl: response.data.rawPath });
    });

    getProductsData().then(response => {
      this.setState({
        products: response.data.children
      });
    });
  };

  getSelectedItems = items => {
    this.setState({ selectedItem: items });
  };

  render() {
    const { selectedItem, imagebaseUrl } = this.state;
    const currentPath =
      selectedItem && selectedItem.path
        ? selectedItem.path.replace("assets/suscom_products", "Product")
        : "/product";
    return (
      <React.Fragment>
        <Divider path={currentPath} />
        <div className="row">
          <ProductCollapse
            onItemSeleted={this.getSelectedItems}
            products={this.state.products}
          />
          <ProductItem
            imagebaseUrl={imagebaseUrl}
            selectedProducts={selectedItem}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Product;
