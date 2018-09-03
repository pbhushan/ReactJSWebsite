import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody, Fa } from "mdbreact";
import ContactDetails from "./contactDetails";
import "../../css/contact/contactForm.css";

class ContactCard extends Component {
  render() {
    const { contactCard, contactDetails } = this.props.contact;
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
                      <p>
                        <Fa icon="map-marker" className="pr-2" />
                        {contactCard.address}
                      </p>
                    </li>
                    <li>
                      <p>
                        <Fa icon="phone" className="pr-2" />
                        {contactCard.phone}
                      </p>
                    </li>
                    <li>
                      <p>
                        <Fa icon="envelope" className="pr-2" />
                        {contactCard.email}
                      </p>
                    </li>
                    <li>
                      <p>{contactCard.officeTime}</p>
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
