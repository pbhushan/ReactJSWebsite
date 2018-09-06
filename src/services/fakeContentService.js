import axios from "axios";

const rawPathUrl =
  "https://raw.githubusercontent.com/pbhushan/ReactJSWebsite/master";

export function getImageRawPath() {
  return axios.get(`${rawPathUrl}/data/rawPath.json`);
}

export function getNavbarData() {
  return axios.get(`${rawPathUrl}/data/navbar/navbar.json`);
}

export function getFooterData() {
  return axios.get(`${rawPathUrl}/data/footer/footer.json`);
}

export function getHomeData() {
  return {
    getCarouselData: axios.get(`${rawPathUrl}/data/home/carousel.json`),
    getSectionColumnsPage: axios.get(`${rawPathUrl}/data/home/sections.json`),
    getFeaturePage: axios.get(`${rawPathUrl}/data/home/features.json`),
    getMultiCarouselData: axios.get(
      `${rawPathUrl}/data/home/multi_carousel.json`
    )
  };
}

export function getProductsData() {
  return axios.get(`${rawPathUrl}/data/products/products.json`);
}

export function getContactsData() {
  return {
    getContactCard: axios.get(`${rawPathUrl}/data/contact/contactCard.json`),
    getContactDetails: axios.get(
      `${rawPathUrl}/data/contact/contactDetails.json`
    )
  };
}

export function getAbout() {}
