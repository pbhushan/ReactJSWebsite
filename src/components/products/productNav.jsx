import React from "react";
import { Link } from "react-router-dom";
import "../../css/products/productNav.css";

const Productnav = props => {
  const { name, navs } = props.navItems;

  return (
    <div id="productNavs" className="mdb-color lighten-4">
      {navs.map(nav => (
        <Link
          to={`/product/${name}/${nav.name}`}
          className="nav-item nav-link"
          key={nav.id}
        >
          {nav.name}
        </Link>
      ))}
    </div>
  );
};

export default Productnav;
