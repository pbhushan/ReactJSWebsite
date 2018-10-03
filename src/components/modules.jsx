import React, { Component } from "react";

import ModuleBasicTutorial from "./modules/moduleExamples/moduleBasicTutorial";
import ImgSectionExample from "./modules/moduleExamples/imgSectionExample";
import ContactCardExample from "./modules/moduleExamples/contactCardExample";
import CarouselExample from "./modules/moduleExamples/carouselExample";
import VideoCarouselExample from "./modules/moduleExamples/videoCarouselExample";
import MultiCarouselExample from "./modules/moduleExamples/multiCarouselExample";
import SectionExample from "./modules/moduleExamples/sectionExample";
import ComplexSection from "./modules/moduleExamples/complexSectionExample";
import FeatureExample from "./modules/moduleExamples/featureExample";
import GridViewExample from "./modules/moduleExamples/gridViewExample";

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
        <SectionExample />
        <ComplexSection />
        <FeatureExample />
        <GridViewExample />
      </React.Fragment>
    );
  }
}

export default Modules;
