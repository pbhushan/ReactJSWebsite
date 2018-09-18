import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import "../../css/navbars/navbar.css";

class Navbar extends Component {
  getNavbarBrand = brand => {
    if (brand && brand.path) {
      return (
        <Link className="navbar-brand" to={brand.path}>
          <strong>{brand.name}</strong>
        </Link>
      );
    }
  };
  getNavItems = navItem => {
    if (navItem.path) {
      return (
        <NavLink
          key={navItem.name}
          className="nav-item nav-link"
          to={navItem.path}
        >
          {navItem.name}
        </NavLink>
      );
    }
  };

  getNavs = navs => {
    if (navs && navs.length > 0) {
      return navs.map(nav => {
        return this.getNavItems(nav);
      });
    }
  };

  render() {
    const { navbarBrand, navbarPostion, navbarConfig } = this.props.navbar;
    const positionClasses =
      navbarPostion && navbarPostion.selected === "left"
        ? "navbar-nav"
        : "navbar-nav ml-auto";

    return (
      <nav className="navbar fixed-top navbar-expand-lg blue darken-4 navbar-dark">
        {this.getNavbarBrand(navbarBrand)}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className={positionClasses}>{this.getNavs(navbarConfig)}</div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
