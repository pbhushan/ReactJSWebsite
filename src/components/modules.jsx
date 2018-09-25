import React, { Component } from "react";

import ModuleBasicTutorial from "./modules/moduleExamples/moduleBasicTutorial";
import ImgSectionExample from "./modules/moduleExamples/imgSectionExample";
import ContactCardExample from "./modules/moduleExamples/contactCardExample";
import CarouselExample from "./modules/moduleExamples/carouselExample";
import VideoCarousel from "./modules/moduleExamples/videoCarouselExample";

class Modules extends Component {
  render() {
    return (
      <React.Fragment>
        <ModuleBasicTutorial />
        <ImgSectionExample />
        <ContactCardExample />
        <CarouselExample />
        <VideoCarousel />
      </React.Fragment>
    );
  }
}

export default Modules;
