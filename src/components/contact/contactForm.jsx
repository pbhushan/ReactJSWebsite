import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody, Fa } from "mdbreact";

import "../../css/contact/contactForm.css";

class ContactForm extends Component {
  submitHandler = event => {
    console.log("sent message");
    const { name, email, phone, company, message } = {};
    this.setState({ name, email, phone, company, message });
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Container>
        <section className="contact-section my-5">
          <Card>
            <Row>
              <Col lg="8">
                <CardBody className="form">
                  <h3 className="mt-4">
                    <Fa icon="envelope" className="pr-2" />
                    Write to us:
                  </h3>
                  <Row>
                    <form onSubmit={this.submitHandler} className="w-100">
                      <Row>
                        <Col md="12">
                          <div className="md-form mb-0">
                            <Input
                              id="form-contact-name"
                              label="Your name*"
                              value={name}
                              name="name"
                              onChange={this.changeHandler}
                              type="text"
                              className="form-control"
                              required
                            />
                          </div>
                        </Col>
                        <Col md="12">
                          <div className="md-form mb-0">
                            <Input
                              id="form-contact-email"
                              label="Your email*"
                              value={email}
                              name="_replyto"
                              onChange={this.changeHandler}
                              type="email"
                              className="form-control"
                              required
                            />
                          </div>
                        </Col>
                        <Col md="12">
                          <div className="md-form mb-0">
                            <Input
                              id="form-contact-phone"
                              label="Your phone*"
                              value={phone}
                              name="phone"
                              onChange={this.changeHandler}
                              type="text"
                              className="form-control is-valid"
                              minLength="10"
                              maxLength="14"
                              required
                            />
                          </div>
                        </Col>
                        <Col md="12">
                          <div className="md-form mb-0">
                            <Input
                              id="form-contact-company"
                              label="Your company*"
                              value={company}
                              name="_subject"
                              onChange={this.changeHandler}
                              type="text"
                              className="form-control is-valid"
                              required
                            />
                          </div>
                        </Col>
                        <Col md="12">
                          <div className="md-form mb-0">
                            <Input
                              id="form-contact-message"
                              label="Your message*"
                              value={message}
                              name="message"
                              onChange={this.changeHandler}
                              type="textarea"
                              className="form-control is-valid"
                              maxLength="500"
                              required
                            />

                            <Button
                              type="submit"
                              floating
                              color="blue"
                              size="lg"
                            >
                              <Fa icon="send-o" />
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </form>
                  </Row>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </section>
      </Container>
    );
  }
}

export default ContactForm;
