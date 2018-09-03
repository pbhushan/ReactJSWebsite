import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";
import { NavLink } from "react-router-dom";

class FooterPage extends React.Component {
  state = {
    footer: {
      brand: {
        companyName: "SUSCOM",
        comapnyTagLine: "Write something attractive here",
        path: "/"
      },
      otherLinks: {
        title: "Useful Links",
        items: [
          { name: "contact", path: "/contact" },
          { name: "About", path: "/about" },
          { name: "Product", path: "/product" }
        ]
      },
      details: {
        title: "Contact",
        address: "123 st.,city,state,country",
        email: "recipent@suscom.in",
        phone: "+91 xxx-xxx-xxxx"
      },
      copyright: {
        text: " 2015 Copyright",
        companyName: "SUSCOM",
        path: "/"
      },
      developedBy: "Site Developed By Sidesh Info Tech System"
    }
  };
  render() {
    const {
      brand,
      otherLinks,
      details,
      copyright,
      developedBy
    } = this.state.footer;
    return (
      <Footer color="stylish-color-dark" className="font-small pt-4 mt-4">
        <Container fluid className="text-center text-md-left">
          <Row className="text-center text-md-left mt-3 pb-3">
            <Col md="3" lg="3" xl="3" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                <NavLink to={brand.path}> {brand.companyName} </NavLink>
              </h6>
              <p>{brand.comapnyTagLine}</p>
            </Col>

            <hr className="w-100 clearfix d-md-none" />
            <Col md="3" lg="2" xl="2" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-2 font-weight-bold">
                {otherLinks.title}
              </h6>
              {otherLinks.items.map(item => {
                return (
                  <NavLink
                    key={item.name}
                    className="nav-item nav-link"
                    to={item.path}
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </Col>
            <hr className="w-100 clearfix d-md-none" />
            <Col md="4" lg="3" xl="3" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                {details.title}
              </h6>
              <p>
                <i className="fa fa-home mr-3" /> {details.address}
              </p>
              <p>
                <i className="fa fa-envelope mr-3" /> {details.email}
              </p>
              <p>
                <i className="fa fa-phone mr-3" /> {details.phone}
              </p>
            </Col>
          </Row>
          <hr />
          <Row className="d-flex align-items-center">
            <Col md="4" lg="4">
              <p className="text-center text-md-left grey-text">
                &copy;
                {copyright.text}
                <NavLink to={copyright.path}> {copyright.companyName} </NavLink>
              </p>
            </Col>
            <Col md="4" lg="4">
              <p className="text-center">{developedBy}</p>
            </Col>
          </Row>
        </Container>
      </Footer>
    );
  }
}

export default FooterPage;
