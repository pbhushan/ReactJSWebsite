import React, { Component } from "react";
import "../../css/products/productCollapse.css";
import ProductNav from "./productNav";

class ProductCollapse extends Component {
  render() {
    const { title, items } = this.props.products;
    return (
      <div className="col-md-2 ml-3 mt-2 border border-dark border-top pl-0 pr-0">
        <h4 className="header text-center text-uppercase">{title}</h4>

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
        </div>
      </div>
    );
  }
}

export default ProductCollapse;
