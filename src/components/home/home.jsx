import React, { Component } from "react";
import axios from "axios";
import CarouselPage from "./carouselPage";
import SectionColumnsPage from "./sectionColumnsPage";
import FeaturePage from "./featurePage";
import MultiCarouselPage from "./multiCarouselPage";

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

  componentDidMount() {
    this.getRawPath();
    this.getCarouselData();
    this.getSectionColumnsPage();
    this.getFeaturePage();
  }

  getRawPath = () => {
    axios
      .get(
        "https://raw.githubusercontent.com/pbhushan/ReactJSWebsite/master/data/rawPath.json"
      )
      .then(response => {
        this.setState({ rawPath: response.data.rawPath });
      });
  };

  getCarouselData = () => {
    axios
      .get(
        "https://raw.githubusercontent.com/pbhushan/ReactJSWebsite/master/data/home/carousel.json"
      )
      .then(response => {
        this.setState({ carouselPage: response.data.carouselPage });
      });
  };

  getSectionColumnsPage = () => {
    axios
      .get(
        "https://raw.githubusercontent.com/pbhushan/ReactJSWebsite/master/data/home/sections.json"
      )
      .then(response => {
        this.setState({ sectionColumnsPage: response.data.sectionColumnsPage });
      });
  };

  getFeaturePage = () => {
    axios
      .get(
        "https://raw.githubusercontent.com/pbhushan/ReactJSWebsite/master/data/home/features.json"
      )
      .then(response => {
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
