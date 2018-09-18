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
  getHomeData,
  getProductsData,
  getContactsData,
  getAbout,
  getNavbarData,
  getFooterData
} from "./services/httpContentService";
import {
  getJsonBasePath,
  getJsonNavbarData,
  getJsonFooterData,
  getJsonHomeData,
  getJsonProductsData,
  getJsonContactsData,
  getJsonAbout
} from "./services/jsonContentService";

import "./App.css";
import "react-image-lightbox/style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fetchHttpData: false,
      catalogUrl: "",
      dataUrlBasePath: "",
      carouselPage: {},
      sectionColumnsPage: {},
      featurePage: {},
      mainProducts: {},
      products: {},
      imageBaseUrl: "",
      contactCard: {},
      contactDetails: {},
      about: {},
      navbar: {},
      footer: {
        footer: {}
      }
    };
  }

  componentWillMount() {
    this.getDataBaseUrl();
  }

  getDataBaseUrl = async () => {
    let baseUrlsData;
    if (this.state.fetchHttpData) baseUrlsData = await getDataUrlBasePath();
    else baseUrlsData = await getJsonBasePath();

    const urlPath = baseUrlsData.data.basePath.dataUrlBasePath;

    this.setState({
      dataUrlBasePath: urlPath,
      imageBaseUrl: baseUrlsData.data.basePath.imgUrlBasePath,
      catalogUrl: baseUrlsData.data.basePath.catalogUrl
    });

    this.getAsyncNavData(urlPath);
    this.getAsyncFooterData(urlPath);
    this.getAsyncHomeData(urlPath);
    this.getAsyncProductsData(urlPath);
    this.getAsyncContacts(urlPath);
    this.getAsyncAboutData(urlPath);
  };

  getAsyncNavData = async basePath => {
    let navData;
    if (this.state.fetchHttpData) navData = await getNavbarData(basePath);
    else navData = await getJsonNavbarData();

    this.setState({ navbar: navData.data });
  };

  getAsyncFooterData = async basePath => {
    let footerData;
    if (this.state.fetchHttpData) footerData = await getFooterData(basePath);
    else footerData = await getJsonFooterData();

    this.setState({ footer: footerData.data });
  };

  getAsyncAboutData = async basePath => {
    let aboutData;
    if (this.state.fetchHttpData) aboutData = await getAbout(basePath);
    else aboutData = await getJsonAbout();

    this.setState({ about: aboutData.data.about });
  };

  getAsyncHomeData = async basePath => {
    let caraouselData, selectionData, featureData, mainProductData;

    if (this.state.fetchHttpData) {
      caraouselData = await getHomeData(basePath).getCarouselData;
      selectionData = await getHomeData(basePath).getSectionColumnsPage;
      featureData = await getHomeData(basePath).getFeaturePage;
      mainProductData = await getHomeData(basePath).getMultiCarouselData;
    } else {
      caraouselData = await getJsonHomeData().getCarouselData;
      selectionData = await getJsonHomeData().getSectionColumnsPage;
      featureData = await getJsonHomeData().getFeaturePage;
      mainProductData = await getJsonHomeData().getMultiCarouselData;
    }

    this.setState({
      carouselPage: caraouselData.data.carouselPage,
      sectionColumnsPage: selectionData.data.sectionColumnsPage,
      featurePage: featureData.data.featurePage,
      mainProducts: mainProductData.data.children
    });
  };

  getAsyncProductsData = async basePath => {
    let productData;
    if (this.state.fetchHttpData) productData = await getProductsData(basePath);
    else productData = await getJsonProductsData();

    this.setState({ products: productData.data.children });
  };

  getAsyncContacts = async basePath => {
    let contactCardData, contactDetailsData;

    if (this.state.fetchHttpData) {
      contactCardData = await getContactsData(basePath).getContactCard;
      contactDetailsData = await getContactsData(basePath).getContactDetails;
    } else {
      contactCardData = await getJsonContactsData().getContactCard;
      contactDetailsData = await getJsonContactsData().getContactDetails;
    }

    this.setState({
      contactCard: contactCardData.data.contactCard,
      contactDetails: contactDetailsData.data.contactDetails
    });
  };

  render() {
    const {
      catalogUrl,
      products,
      imageBaseUrl,
      contactCard,
      contactDetails,
      carouselPage,
      sectionColumnsPage,
      featurePage,
      mainProducts,
      about,
      navbar,
      footer
    } = this.state;
    return (
      <React.Fragment>
        <NavBar navbar={navbar} />
        <main className="content">
          <Switch>
            <Route
              path="/about"
              render={props => {
                return (
                  <About imageBaseUrl={imageBaseUrl} about={about} {...props} />
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
                    catalogUrl={catalogUrl}
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
        <Footer footer={footer} />
      </React.Fragment>
    );
  }
}

export default App;
