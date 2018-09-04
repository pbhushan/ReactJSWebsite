import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";
import { NavLink } from "react-router-dom";
import axios from "axios";

class FooterPage extends React.Component {
  state = {
    footer: {}
  };

  componentDidMount() {
    this.getFooter();
  }

  getFooter = () => {
    axios
      .get(
        "https://raw.githubusercontent.com/pbhushan/ReactJSWebsite/master/data/footer/footer.json"
      )
      .then(response => {
        this.setState({ footer: response.data.footer });
      });
  };

  getBrand = brand => {
    if (brand && brand.path) {
      return (
        <Col md="3" lg="3" xl="3" className="mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">
            <NavLink to={brand.path}> {brand.companyName} </NavLink>
          </h6>
          <p>{brand.comapnyTagLine}</p>
        </Col>
      );
    }
    return;
  };

  getLinks = links => {
    if (links && links.items && links.items.length > 0) {
      return (
        <Col md="3" lg="2" xl="2" className="mx-auto mt-3">
          <h6 className="text-uppercase mb-2 font-weight-bold">
            {links.title}
          </h6>
          {links.items.map(item => {
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
      );
    }
    return;
  };

  getDetails = details => {
    if (details) {
      return (
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
      );
    }
  };

  getCopyRight = copyright => {
    if (copyright) {
      return (
        <Col md="4" lg="4">
          <p className="text-center text-md-left mx-auto grey-text">
            &copy;
            {copyright.text}
            <NavLink to={copyright.path}> {copyright.companyName} </NavLink>
          </p>
        </Col>
      );
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
            {this.getBrand(brand)}
            <hr className="w-100 clearfix d-md-none" />
            {this.getLinks(otherLinks)}
            <hr className="w-100 clearfix d-md-none" />
            {this.getDetails(details)}
          </Row>
          <hr />
          <Row>
            {this.getCopyRight(copyright)}
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
