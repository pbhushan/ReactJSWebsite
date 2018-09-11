import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody, Fa } from "mdbreact";
import ContactDetails from "./contactDetails";
import "../../css/contact/contactForm.css";
import "../../css/contact/contactCard.css";

class ContactCard extends Component {
  render() {
    const { contactCard, contactDetails } = this.props;

    return (
      <Container>
        <section className="contact-section my-5">
          <Card>
            <Row>
              <Col lg="6">
                <ContactDetails details={contactDetails} />
              </Col>
              <Col lg="6">
                <CardBody className="contact text-center h-100 white-text">
                  <h3 className="my-4 pb-2">{contactCard.title}</h3>
                  <ul className="text-lg-left list-unstyled ml-4">
                    <li>
                      <p className="row">
                        <Fa icon="map-marker" className="pr-2 col-md-1" />
                        <span className="col-md">{contactCard.address}</span>
                      </p>
                    </li>
                    <li>
                      <p className="row">
                        <Fa icon="phone" className="pr-2 col-md-1" />
                        <span className="col-md">{contactCard.phone}</span>
                      </p>
                    </li>
                    <li>
                      <p className="row">
                        <Fa icon="envelope" className="col-md-1 pr-2" />
                        <span className="col-md"> {contactCard.email}</span>
                      </p>
                    </li>
                    <li>
                      <p className="row">
                        <i className="far fa-clock col-md-1 pr-2" />
                        <span className="col-md">{contactCard.officeTime}</span>
                      </p>
                    </li>
                  </ul>
                  <hr className="hr-light my-4" />
                </CardBody>
              </Col>
            </Row>
          </Card>
        </section>
      </Container>
    );
  }
}

export default ContactCard;
