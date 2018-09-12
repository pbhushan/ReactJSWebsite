import React, { Component } from "react";
import CarouselPage from "./carouselPage";
import SectionColumnsPage from "./sectionColumnsPage";
import FeaturePage from "./featurePage";
import MultiCarouselPage from "./multiCarouselPage";
import { Button } from "mdbreact";
import axios from "axios";

class Home extends Component {
  constructor() {
    super();
    /**Scroll to top */
    window.scrollTo(0, 0);
  }

  getCatalog(catalogUrl) {
    console.log(catalogUrl);
    axios({
      url: catalogUrl,
      method: "GET",
      responseType: "blob" // important
    }).then(response => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "suscom_catalogue.pdf");
      document.body.appendChild(link);
      link.click();
    });
  }

  render() {
    const {
      catalogUrl,
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
        <div className="container">
          <Button
            className="p-4 w-100 col-md-6 font-weight-bold "
            onClick={() => {
              this.getCatalog(catalogUrl);
            }}
            rounded
          >
            Download our catalogue
          </Button>
        </div>
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
