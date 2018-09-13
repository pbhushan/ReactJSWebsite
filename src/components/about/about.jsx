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
    const { about, imageBaseUrl } = this.props;
    return (
      <React.Fragment>
        <Divider path={this.props.match.path} />
        <AboutUs imageBaseUrl={imageBaseUrl} about={about} />
      </React.Fragment>
    );
  }
}

export default About;
