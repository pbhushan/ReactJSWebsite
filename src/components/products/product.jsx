import React, { Component } from "react";
import ProductCollapse from "./productCollapse";
import axios from "axios";
class Product extends Component {
  state = {
    products: {}
  };

  constructor(props) {
    super();
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    axios
      .get(
        "https://raw.githubusercontent.com/pbhushan/ReactJSWebsite/master/data/products/products.json"
      )
      .then(response => {
        this.setState({
          products: response.data.children
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <ProductCollapse products={this.state.products} />
        </div>
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
