import http from "./httpService";

export function getJsonBasePath() {
  return http.get(`data/rawPath.json`);
}

export function getJsonNavbarData() {
  return http.get(`./data/navbar/navbar.json`);
}

export function getJsonFooterData() {
  return http.get(`./data/footer/footer.json`);
}

export function getJsonHomeData() {
  return {
    getCarouselData: http.get(`./data/home/carousel.json`),
    getSectionColumnsPage: http.get(`./data/home/sections.json`),
    getFeaturePage: http.get(`./data/home/features.json`),
    getMultiCarouselData: http.get(`./data/home/multi_carousel.json`)
  };
}

export function getJsonProductsData() {
  return http.get(`./data/products/products.json`);
}

export function getJsonContactsData() {
  return {
    getContactCard: http.get(`./data/contact/contactCard.json`),
    getContactDetails: http.get(`./data/contact/contactDetails.json`)
  };
}

export function getJsonAbout() {
  return http.get(`./data/about/about.json`);
}
