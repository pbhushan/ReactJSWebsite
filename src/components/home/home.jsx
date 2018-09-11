import React, { Component } from "react";
import CarouselPage from "./carouselPage";
import SectionColumnsPage from "./sectionColumnsPage";
import FeaturePage from "./featurePage";
import MultiCarouselPage from "./multiCarouselPage";

class Home extends Component {
  constructor() {
    super();
    /**Scroll to top */
    window.scrollTo(0, 0);
  }

  render() {
    const {
      imageBaseUrl,
      carouselPage,
      sectionColumnsPage,
      featurePage,
      mainProducts
    } = this.props;

    return (
      <React.Fragment>
        <CarouselPage rawPath={imageBaseUrl} carousels={carouselPage} />
        <SectionColumnsPage sections={sectionColumnsPage} />
        <FeaturePage features={featurePage} />
        <MultiCarouselPage
          imgBaseUrlPath={imageBaseUrl}
          multiCarouselList={mainProducts}
        />
      </React.Fragment>
    );
  }
}

export default Home;
