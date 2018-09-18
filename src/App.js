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

import "./App.css";
import "react-image-lightbox/style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
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
    const { data } = await getDataUrlBasePath();

    const urlPath = data.basePath.dataUrlBasePath;

    this.setState({
      dataUrlBasePath: urlPath,
      imageBaseUrl: data.basePath.imgUrlBasePath,
      catalogUrl: data.basePath.catalogUrl
    });

    this.getAsyncNavData(urlPath);
    this.getAsyncFooterData(urlPath);
    this.getAsyncHomeData(urlPath);
    this.getAsyncProductsData(urlPath);
    this.getAsyncContacts(urlPath);
    this.getAsyncAboutData(urlPath);
  };

  getAsyncNavData = async basePath => {
    const { data } = await getNavbarData(basePath);

    this.setState({ navbar: data });
  };

  getAsyncFooterData = async basePath => {
    const { data } = await getFooterData(basePath);

    this.setState({ footer: data });
  };

  getAsyncAboutData = async basePath => {
    const { data } = await getAbout(basePath);

    this.setState({ about: data.about });
  };

  getAsyncHomeData = async basePath => {
    const caraouselData = await getHomeData(basePath).getCarouselData;
    const selectionData = await getHomeData(basePath).getSectionColumnsPage;
    const featureData = await getHomeData(basePath).getFeaturePage;
    const mainProductData = await getHomeData(basePath).getMultiCarouselData;

    this.setState({
      carouselPage: caraouselData.data.carouselPage,
      sectionColumnsPage: selectionData.data.sectionColumnsPage,
      featurePage: featureData.data.featurePage,
      mainProducts: mainProductData.data.children
    });
  };

  getAsyncProductsData = async basePath => {
    const { data } = await getProductsData(basePath);

    this.setState({ products: data.children });
  };

  getAsyncContacts = async basePath => {
    const contactCardData = await getContactsData(basePath).getContactCard;
    const contactDetailsData = await getContactsData(basePath)
      .getContactDetails;

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
