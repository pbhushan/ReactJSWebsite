import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../css/navbars/navbar.css";

class Navbar extends Component {
  state = {
    navbarBrand: {
      path: "/",
      name: "SUSCOM"
    },
    navbarPostion: {
      selected: "right"
    },
    navbarConfig: [
      {
        path: "/home",
        name: "Home"
      },
      {
        path: "/product",
        name: "Product"
      },
      {
        path: "/about",
        name: "About"
      },
      {
        path: "/contact",
        name: "Contact"
      }
    ]
  };

  render() {
    const positionClasses =
      this.state.navbarPostion.selected === "left"
        ? "navbar-nav"
        : "navbar-nav ml-auto";
    return (
      <nav className="navbar fixed-top navbar-expand-lg blue darken-4 navbar-dark">
        <Link className="navbar-brand" to={this.state.navbarBrand.path}>
          <strong>{this.state.navbarBrand.name}</strong>
        </Link>
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
          <div className={positionClasses}>
            {this.state.navbarConfig.map(nav => {
              return (
                <NavLink
                  key={nav.name}
                  className="nav-item nav-link"
                  to={nav.path}
                >
                  {nav.name}
                </NavLink>
              );
            })}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
