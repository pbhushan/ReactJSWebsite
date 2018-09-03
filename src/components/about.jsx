import React, { Component } from "react";
import Divider from "./common/divider";

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
      </React.Fragment>
    );
  }
}

export default About;
