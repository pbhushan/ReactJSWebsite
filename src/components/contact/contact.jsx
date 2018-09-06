import React, { Component } from "react";

import ContactCard from "./contactCard";
import GoogleMap from "./googleMap";
import Divider from "../common/divider";

class ContactPage extends Component {
  constructor() {
    super();
    /**Scroll to top */
    window.scrollTo(0, 0);
  }

  render() {
    const { contactCard, contactDetails } = this.props;
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
