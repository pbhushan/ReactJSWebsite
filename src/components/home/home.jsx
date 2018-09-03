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
  state = {
    rawPath:
      "https://raw.githubusercontent.com/pbhushan/ReactJSWebsite/master/src/",
    home: {
      carouselPage: [
        {
          id: "1",
          imgUrl: "assets/images/rb1.jpg",
          mask: "black-light",
          heading: "Heading Item1",
          description: "Description about the image1"
        },
        {
          id: "2",
          imgUrl: "assets/images/rb2.png",
          mask: "black-strong",
          heading: "Heading Item2",
          description: "Description about the image2"
        },
        {
          id: "3",
          imgUrl: "assets/images/rb3.jpg",
          mask: "black-slight",
          heading: "Heading Item3",
          description: "Description about the image3"
        },
        {
          id: "4",
          imgUrl: "assets/images/rb5.jpg",
          mask: "black-strong",
          heading: "Heading Item4",
          description: "Description about the image4"
        }
      ],
      sectionColumnsPage: [
        {
          id: "1",
          title: "First Heading",
          firstPara:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          secondPara:
            "Duis aute irure dolor in reprehenderit in aliquip ex ea commodo consequat voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
          id: "2",
          title: "Second Heading",
          firstPara:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          secondPara:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      ],
      featurePage: {
        heading: "Why is it so great?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        features: [
          {
            id: "1",
            icon: "bullhorn",
            className: "blue-text",
            heading: "Marketing",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          },
          {
            id: "2",
            icon: "cogs",
            className: "pink-text",
            heading: "Customization",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          },
          {
            id: "3",
            icon: "dashboard",
            className: "purple-text",
            heading: "Support",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        ]
      }
    }
  };
  render() {
    return (
      <React.Fragment>
        <CarouselPage
          rawPath={this.state.rawPath}
          carousels={this.state.home.carouselPage}
        />
        <SectionColumnsPage sections={this.state.home.sectionColumnsPage} />
        <FeaturePage features={this.state.home.featurePage} />
        <MultiCarouselPage />
      </React.Fragment>
    );
  }
}

export default Home;
