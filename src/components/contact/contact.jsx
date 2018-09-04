import React, { Component } from "react";
import axios from "axios";

import ContactCard from "./contactCard";
import GoogleMap from "./googleMap";
import Divider from "../common/divider";

class ContactPage extends Component {
  state = {
    contactCard: {},
    contactDetails: {}
  };

  constructor() {
    super();
    /**Scroll to top */
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    this.getContactCard();
    this.getContactDetails();
  }

  getContactCard = () => {
    axios
      .get(
        "https://raw.githubusercontent.com/pbhushan/ReactJSWebsite/master/data/contact/contactCard.json"
      )
      .then(response => {
        this.setState({ contactCard: response.data.contactCard });
      });
  };

  getContactDetails = () => {
    axios
      .get(
        "https://raw.githubusercontent.com/pbhushan/ReactJSWebsite/master/data/contact/contactDetails.json"
      )
      .then(response => {
        this.setState({ contactDetails: response.data.contactDetails });
      });
  };

  render() {
    const { contactCard, contactDetails } = this.state;
    return (
      <React.Fragment>
        <Divider path={this.props.match.path} />
        <ContactCard
          contactCard={contactCard}
          contactDetails={contactDetails}
        />
        <GoogleMap />
      </React.Fragment>
    );
  }
}

export default ContactPage;
