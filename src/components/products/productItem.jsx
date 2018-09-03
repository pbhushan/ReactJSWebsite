import React from "react";

const ProductItem = props => {
  return (
    <div className="col-md">
      <div className="container">
        <h2 className="text-center">
          ProductItem Number {props.match.params.itemname}{" "}
          {props.match.params.name}
        </h2>
      </div>
    </div>
  );
};

export default ProductItem;
