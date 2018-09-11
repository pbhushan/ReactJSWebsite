import React, { Component } from "react";
import Divider from "../common/divider";
import AboutUs from "./aboutUs";

class About extends Component {
  constructor() {
    super();
    /**Scroll to top */
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Divider path={this.props.match.path} />
        <AboutUs />
      </React.Fragment>
    );
  }
}

export default About;
