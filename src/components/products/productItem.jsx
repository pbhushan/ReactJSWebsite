import React, { Component } from "react";

import {
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText,
  Button
} from "mdbreact";
import Lightbox from "react-image-lightbox"; //its css is imported in app.js

import "../../css/products/productItems.css";

class ProductItem extends Component {
  state = {
    isOpen: false,
    imgUrl: ""
  };

  getProductCards = selectedProducts => {
    const { imagebaseUrl } = this.props;
    const { isOpen, imgUrl } = this.state;

    return (
      <React.Fragment>
        <div className="col-md-10">
          <h4 className="purple-text font-weight-bold">
            {selectedProducts.name}
          </h4>
        </div>
        <div className="row ml-3">
          {selectedProducts.children.map(child => {
            const url = imagebaseUrl + child.path.replace("../", "");
            return (
              <Card
                key={child.name}
                className="product-img col-md-5 col-lg-3 m-3"
              >
                <CardImage
                  src={url}
                  alt="Card image cap"
                  top
                  hover
                  overlay="white-slight"
                />
                <CardBody>
                  <CardTitle tag="h6">{child.name.split(".")[0]}</CardTitle>
                  <CardText>{}</CardText>
                  <Button
                    className="mt-4 deep-purple lighten-2"
                    rounded
                    color=""
                    onClick={() => this.setState({ isOpen: true, imgUrl: url })}
                  >
                    Zoom
                  </Button>
                </CardBody>
              </Card>
            );
          })}
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={imgUrl}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
      </React.Fragment>
    );
  };

  getProductItems = () => {
    const { selectedProducts, mainProducts } = this.props;
    if (!selectedProducts.name && mainProducts && mainProducts.length > 0) {
      selectedProducts.name = "Products";
      selectedProducts.children = mainProducts;
    }
    if (
      selectedProducts.name &&
      selectedProducts.children &&
      selectedProducts.children.length > 0
    ) {
      return this.getProductCards(selectedProducts);
    } else if (selectedProducts.name) {
      return (
        <div className="col-md">
          <h4>
            Currently we don't have any items for selected Category -{" "}
            {selectedProducts.name}
          </h4>
        </div>
      );
    } else {
      return (
        <div className="col-md">
          <h2>Please Select Our Products</h2>
        </div>
      );
    }
  };

  render() {
    return <div className="col-md container m-3">{this.getProductItems()}</div>;
  }
}

export default ProductItem;
