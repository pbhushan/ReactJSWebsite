import React, { Component } from "react";
//import dirtree from "node-dir-tree";
/* import dirtree from "directory-tree/lib/directory-tree";
/* import Divider from "../common/divider"; */
/* import ProductCollapse from "./productCollapse";
import { Route } from "react-router-dom";
import ProductItem from "./productItem"; */

class Product extends Component {
  state = {
    details: {}
  };

  constructor(props) {
    super();
    window.scrollTo(0, 0);
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        {/*  <Divider path={this.props.location.pathname} />
        <div className="row">
          <ProductCollapse products={this.state.details} />
          <Route path="/product/:itemname/:name" component={ProductItem} />
        </div> */}
      </React.Fragment>
    );
  }
}

export default Product;
