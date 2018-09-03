import React, { Component } from "react";
import Divider from "../common/divider";
import ProductCollapse from "./productCollapse";
import { Route } from "react-router-dom";
import ProductItem from "./productItem";

class Product extends Component {
  state = {
    details: {
      title: "detail Title",
      items: [
        {
          id: 1,
          name: "ItemName1",
          navs: [
            { id: "11", name: "nav 11" },
            { id: "12", name: "nav 12" },
            { id: "13", name: "nav 13" }
          ]
        },
        {
          id: 2,
          name: "ItemName2",
          navs: [
            { id: "21", name: "nav 21" },
            { id: "22", name: "nav 22" },
            { id: "23", name: "nav 23" }
          ]
        },
        {
          id: 3,
          name: "ItemName3",
          navs: [
            { id: "31", name: "nav 31" },
            { id: "32", name: "nav 32" },
            { id: "33", name: "nav 33" }
          ]
        },
        {
          id: 4,
          name: "ItemName4",
          navs: [
            { id: "41", name: "nav 41" },
            { id: "42", name: "nav 42" },
            { id: "43", name: "nav 43" }
          ]
        },
        {
          id: 5,
          name: "ItemName5",
          navs: [
            { id: "51", name: "nav 51" },
            { id: "52", name: "nav 52" },
            { id: "53", name: "nav 53" }
          ]
        }
      ]
    }
  };

  constructor(props) {
    super();
    const { history } = props;

    let replacePath =
      "/product/" +
      this.state.details.items[0].name +
      "/" +
      this.state.details.items[0].navs[0].name;

    history.replace(replacePath);
    /**Scroll to top */
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Divider path={this.props.location.pathname} />
        <div className="row">
          <ProductCollapse products={this.state.details} />
          <Route path="/product/:itemname/:name" component={ProductItem} />
        </div>
      </React.Fragment>
    );
  }
}

export default Product;
