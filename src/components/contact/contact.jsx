import React, { Component } from "react";
import ContactCard from "./contactCard";
import GoogleMap from "./googleMap";
import Divider from "../common/divider";

class ContactPage extends Component {
  state = {
    contact: {
      contactDetails: [
        {
          departmentName: "Info",
          email: "info@suscom.in",
          phone: "+91 xxx-xxx-xxxx"
        },
        {
          departmentName: "dispatch",
          email: "dispatch@suscom.in",
          phone: "+91 xxx-xxx-xxxx"
        },
        {
          departmentName: "Marketing",
          email: "marketing@suscom.in",
          phone: "+91 xxx-xxx-xxxx"
        },
        {
          departmentName: "CEO",
          email: "ceo@suscom.in",
          phone: "+91 xxx-xxx-xxxx"
        }
      ],
      contactCard: {
        title: "Contact Information",
        address: "123 st.,city,state,country",
        officeTime: "Office Time - 9:30 am to 6:30 pm",
        email: "recipent@suscom.in",
        phone: "+91 xxx-xxx-xxxx"
      }
    }
  };

  constructor() {
    super();

    /**Scroll to top */
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Divider path={this.props.match.path} />
        <ContactCard contact={this.state.contact} />
        <GoogleMap />
      </React.Fragment>
    );
  }
}

export default ContactPage;
