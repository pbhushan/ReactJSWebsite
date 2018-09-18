import http from "./httpService";

const rawPathUrl = process.env.REACT_APP_PUBLIC_URL;

export function getDataUrlBasePath() {
  return http.get(`${rawPathUrl}/data/rawPath.json`);
}

export function getImageRawPath(basePath) {
  return http.get(`${basePath}/data/rawPath.json`);
}

export function getNavbarData(basePath) {
  return http.get(`${basePath}/data/navbar/navbar.json`);
}

export function getFooterData(basePath) {
  return http.get(`${basePath}/data/footer/footer.json`);
}

export function getHomeData(basePath) {
  return {
    getCarouselData: http.get(`${basePath}/data/home/carousel.json`),
    getSectionColumnsPage: http.get(`${basePath}/data/home/sections.json`),
    getFeaturePage: http.get(`${basePath}/data/home/features.json`),
    getMultiCarouselData: http.get(`${basePath}/data/home/multi_carousel.json`)
  };
}

export function getProductsData(basePath) {
  return http.get(`${basePath}/data/products/products.json`);
}

export function getContactsData(basePath) {
  return {
    getContactCard: http.get(`${basePath}/data/contact/contactCard.json`),
    getContactDetails: http.get(`${basePath}/data/contact/contactDetails.json`)
  };
}

export function getAbout(basePath) {
  return http.get(`${basePath}/data/about/about.json`);
}
