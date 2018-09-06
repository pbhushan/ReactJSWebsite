import React, { Component } from "react";

import "../../css/products/productCollapse.css";
import ProductNav from "./productNav";

class ProductCollapse extends Component {
  getFolderNextLayer = product => {
    if (
      product &&
      product.children &&
      product.children.length > 0 &&
      product.type === "directory"
    ) {
      if (product.children[0].type === "file") {
        return (
          <ProductNav
            key={product.name}
            onNavClicked={this.props.onItemSeleted}
            navItem={product}
          />
        );
      } else {
        return this.getFolders(product);
      }
    }
  };
  getFolders = product => {
    if (
      product &&
      product.children &&
      product.children.length > 0 &&
      product.type === "directory"
    ) {
      const left = 2;
      const key = product.name.replace(/\s|&/g, "_");

      return (
        <div key={key} className="card">
          <div
            className="card-header collapsed"
            data-toggle="collapse"
            href={`#accordion_${key}`}
          >
            <a className="card-title">{product.name}</a>
          </div>
          <div
            id={`accordion_${key}`}
            className="collapse"
            data-parent={`#accrd${product.left}`}
          >
            <div className="card-body">
              <div id={`accrd${product.left + left}`}>
                {product.children.map(child => {
                  child.left = product.left + left;
                  return this.getFolderNextLayer(child);
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  processProducts = products => {
    if (products && products.length > 0) {
      return products.map(product => {
        product.left = 1;
        return this.getFolders(product);
      });
    }
  };

  render() {
    const { products } = this.props;

    return (
      <div className="col-md-2 ml-3 mt-2">
        <div id="accrd1" className="accordion">
          {this.processProducts(products)}
        </div>
      </div>
    );
  }
}

export default ProductCollapse;
