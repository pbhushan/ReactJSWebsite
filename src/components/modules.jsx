import React, { Component } from "react";

import ModuleBasicTutorial from "./modules/moduleExamples/moduleBasicTutorial";
import ImgSectionExample from "./modules/moduleExamples/imgSectionExample";
import ContactCardExample from "./modules/moduleExamples/contactCardExample";
import CarouselExample from "./modules/moduleExamples/carouselExample";
import VideoCarouselExample from "./modules/moduleExamples/videoCarouselExample";
import MultiCarouselExample from "./modules/moduleExamples/multiCarouselExample";
import Section from "./modules/moduleExamples/sectionExample";
import Feature from "./modules/moduleExamples/featureExample";

class Modules extends Component {
  render() {
    return (
      <React.Fragment>
        <ModuleBasicTutorial />
        <ImgSectionExample />
        <ContactCardExample />
        <CarouselExample />
        <VideoCarouselExample />
        <MultiCarouselExample />
        <Section />
        <Feature />
      </React.Fragment>
    );
  }
}

export default Modules;
