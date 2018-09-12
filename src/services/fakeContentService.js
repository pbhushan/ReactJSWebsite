import axios from "axios";

const rawPathUrl =
  "https://raw.githubusercontent.com/pbhushan/ReactJSWebsite/master";

export function getDataUrlBasePath() {
  return axios.get(`${rawPathUrl}/data/rawPath.json`);
}

export function getImageRawPath(basePath) {
  return axios.get(`${basePath}/data/rawPath.json`);
}

export function getNavbarData(basePath) {
  return axios.get(`${basePath}/data/navbar/navbar.json`);
}

export function getFooterData(basePath) {
  return axios.get(`${basePath}/data/footer/footer.json`);
}

export function getHomeData(basePath) {
  return {
    getCarouselData: axios.get(`${basePath}/data/home/carousel.json`),
    getSectionColumnsPage: axios.get(`${basePath}/data/home/sections.json`),
    getFeaturePage: axios.get(`${basePath}/data/home/features.json`),
    getMultiCarouselData: axios.get(`${basePath}/data/home/multi_carousel.json`)
  };
}

export function getProductsData(basePath) {
  return axios.get(`${basePath}/data/products/products.json`);
}

export function getContactsData(basePath) {
  return {
    getContactCard: axios.get(`${basePath}/data/contact/contactCard.json`),
    getContactDetails: axios.get(`${basePath}/data/contact/contactDetails.json`)
  };
}

export function getAbout(basePath) {
  return axios.get(`${basePath}/data/about/about.json`);
}
