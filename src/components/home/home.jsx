import React, { Component } from "react";
import CarouselPage from "./carouselPage";
import SectionColumnsPage from "./sectionColumnsPage";
import FeaturePage from "./featurePage";
import MultiCarouselPage from "./multiCarouselPage";
import {
  getImageRawPath,
  getHomeData
} from "../../services/fakeContentService";

class Home extends Component {
  constructor() {
    super();
    /**Scroll to top */
    window.scrollTo(0, 0);
    this.state = {
      rawPath: "",
      carouselPage: {},
      sectionColumnsPage: {},
      featurePage: {}
    };
  }

  componentWillMount() {
    this.getAsyncHomeData();
  }

  getAsyncHomeData = () => {
    getImageRawPath().then(response => {
      this.setState({ rawPath: response.data.rawPath });
    });
    getHomeData().getCarouselData.then(response => {
      this.setState({ carouselPage: response.data.carouselPage });
    });
    getHomeData().getSectionColumnsPage.then(response => {
      this.setState({ sectionColumnsPage: response.data.sectionColumnsPage });
    });
    getHomeData().getFeaturePage.then(response => {
      this.setState({ featurePage: response.data.featurePage });
    });
  };

  render() {
    const {
      rawPath,
      carouselPage,
      sectionColumnsPage,
      featurePage
    } = this.state;

    return (
      <React.Fragment>
        <CarouselPage rawPath={rawPath} carousels={carouselPage} />
        <SectionColumnsPage sections={sectionColumnsPage} />
        <FeaturePage features={featurePage} />
        <MultiCarouselPage />
      </React.Fragment>
    );
  }
}

export default Home;
