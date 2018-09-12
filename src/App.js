import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/navbars/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Product from "./components/products/product";
import Contact from "./components/contact/contact";
import NotFound from "./components/notFound";
import Footer from "./components/footers/footer";
import {
  getDataUrlBasePath,
  getImageRawPath,
  getHomeData,
  getProductsData,
  getContactsData,
  getAbout
} from "./services/fakeContentService";

import "./App.css";
import "react-image-lightbox/style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataUrlBasePath: "",
      carouselPage: {},
      sectionColumnsPage: {},
      featurePage: {},
      mainProducts: {},
      products: {},
      imageBaseUrl: "",
      contactCard: {},
      contactDetails: {}
    };
  }

  componentWillMount() {
    this.getDataBaseUrl();
  }

  getDataBaseUrl = () => {
    getDataUrlBasePath().then(response => {
      const basePath = response.data.basePath.dataUrlBasePath;

      this.setState({ dataUrlBasePath: basePath });
      this.getImageBaseUrl(basePath);
      this.getAsyncHomeData(basePath);
      this.getAsyncProductsData(basePath);
      this.getAsyncContacts(basePath);
    });
  };

  getImageBaseUrl = basePath => {
    getImageRawPath(basePath).then(response => {
      this.setState({
        imageBaseUrl: response.data.basePath.imgUrlBasePath
      });
    });
  };

  getAsyncHomeData = basePath => {
    getHomeData(basePath).getCarouselData.then(response => {
      this.setState({ carouselPage: response.data.carouselPage });
    });
    getHomeData(basePath).getSectionColumnsPage.then(response => {
      this.setState({ sectionColumnsPage: response.data.sectionColumnsPage });
    });
    getHomeData(basePath).getFeaturePage.then(response => {
      this.setState({ featurePage: response.data.featurePage });
    });
    getHomeData(basePath).getMultiCarouselData.then(response => {
      this.setState({ mainProducts: response.data.children });
    });
  };

  getAsyncProductsData = basePath => {
    getProductsData(basePath).then(response => {
      this.setState({
        products: response.data.children
      });
    });
  };

  getAsyncContacts = basePath => {
    getContactsData(basePath).getContactCard.then(response => {
      this.setState({ contactCard: response.data.contactCard });
    });

    getContactsData(basePath).getContactDetails.then(response => {
      this.setState({ contactDetails: response.data.contactDetails });
    });
  };

  render() {
    const {
      dataUrlBasePath,
      products,
      imageBaseUrl,
      contactCard,
      contactDetails,
      carouselPage,
      sectionColumnsPage,
      featurePage,
      mainProducts
    } = this.state;
    return (
      <React.Fragment>
        <NavBar />
        <main className="content">
          <Switch>
            <Route
              path="/about"
              render={props => {
                return (
                  <About
                    imageBaseUrl={imageBaseUrl}
                    certificates={carouselPage}
                    {...props}
                  />
                );
              }}
            />
            <Route
              path="/contact"
              render={props => {
                return (
                  <Contact
                    contactCard={contactCard}
                    contactDetails={contactDetails}
                    {...props}
                  />
                );
              }}
            />
            <Route
              path="/product"
              render={props => {
                return (
                  <Product
                    mainProducts={mainProducts}
                    imageBaseUrl={imageBaseUrl}
                    products={products}
                    {...props}
                  />
                );
              }}
            />
            <Route
              path="/not-found"
              render={props => {
                return <NotFound {...props} />;
              }}
            />
            <Route
              path="/home"
              render={props => {
                return (
                  <Home
                    mainProducts={mainProducts}
                    imageBaseUrl={imageBaseUrl}
                    carouselPage={carouselPage}
                    sectionColumnsPage={sectionColumnsPage}
                    featurePage={featurePage}
                    {...props}
                  />
                );
              }}
            />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
