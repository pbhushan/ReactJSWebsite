import React, { Component } from "react";

import ModuleBasicTutorial from "./modules/moduleExamples/moduleBasicTutorial";
import ImgSectionExample from "./modules/moduleExamples/imgSectionExample";
import ContactCardExample from "./modules/moduleExamples/contactCardExample";

class Modules extends Component {
  render() {
    return (
      <React.Fragment>
        <ModuleBasicTutorial />
        <ImgSectionExample />
        <ContactCardExample />
      </React.Fragment>
    );
  }
}

export default Modules;
