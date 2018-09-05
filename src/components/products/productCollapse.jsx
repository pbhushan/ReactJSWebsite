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
      /* if (product.children[0].type === "file") {
        return (
          <p className={`ml-${product.left}`} key={product.name}>
            {product.name}
          </p>
        );
      } else { */
      return this.getFolders(product);
      //}
    } else if (product && product.type === "file") {
      return (
        <p className="text-center" key={product.name}>
          {product.name}
        </p>
      );
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
      return (
        <div key={product.name}>
          <strong className={`ml-${product.left}`}>{product.name}</strong>
          {product.children.map(child => {
            child.left = product.left + left;
            return this.getFolderNextLayer(child);
          })}
        </div>
      );
    }
  };

  processProducts = products => {
    if (products && products.length > 0) {
      return products.map(product => {
        product.left = 0;
        return this.getFolders(product);
      });
    }
  };

  render() {
    const { products } = this.props;

    return (
      <div className="col-md-4 ml-3 mt-2">
        <div id="productCollapse" className="accordion">
          {this.processProducts(products)}
        </div>
      </div>
    );
  }
}

export default ProductCollapse;

/*   <h4 className="header text-center text-uppercase">{title}</h4>

        <div id="productCollapse" className="accordion">
          {items.map(item => (
            <div key={item.id} className="card">
              <div
                className="card-header text-center collapsed"
                data-toggle="collapse"
                href={`#accordion${item.id}`}
              >
                <a className="card-title">{item.name}</a>
              </div>
              <div
                id={`accordion${item.id}`}
                className={item.id === 1 ? "collapse show" : "collapse"}
                data-parent="#productCollapse"
              >
                <div className="card-body text-center">
                  <ProductNav navItems={item} />
                </div>
              </div>
            </div>
          ))}
        </div> */
