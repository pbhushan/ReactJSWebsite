import React, { Component } from "react";
import { getContactsData } from "../../services/fakeContentService";

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

  componentWillMount() {
    this.getAsyncContacts();
  }

  getAsyncContacts = () => {
    getContactsData().getContactCard.then(response => {
      this.setState({ contactCard: response.data.contactCard });
    });

    getContactsData().getContactDetails.then(response => {
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
