import React from "react";
import "../../css/products/productNav.css";

const Productnav = props => {
  const { navItem, onNavClicked } = props;

  return (
    <div id="productNavs">
      <a
        onClick={() => {
          onNavClicked(navItem);
        }}
        className="text-center nav-link nav-item"
      >
        {navItem.name}
      </a>
      {/* <Link
        onClick={() => {
          onNavClicked(navItem);
        }}
        to={`/product/${navItem.name}`}
        className="nav-item nav-link"
      >
        {navItem.name}
      </Link> */}
    </div>
  );
};

export default Productnav;
