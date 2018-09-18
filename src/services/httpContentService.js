import http from "./httpService";

const rawPathUrl = process.env.REACT_APP_PUBLIC_URL;
const isHttpFetch =
  process.env.REACT_APP_IS_HTTP_FETCH === "true" ? true : false;

export function getDataUrlBasePath() {
  if (isHttpFetch) return http.get(`${rawPathUrl}/data/rawPath.json`);
  else return http.get(`data/rawPath.json`);
}

export function getNavbarData(basePath) {
  if (isHttpFetch) return http.get(`${basePath}/data/navbar/navbar.json`);
  else return http.get(`data/navbar/navbar.json`);
}

export function getFooterData(basePath) {
  if (isHttpFetch) return http.get(`${basePath}/data/footer/footer.json`);
  else return http.get(`data/footer/footer.json`);
}

export function getHomeData(basePath) {
  if (isHttpFetch)
    return {
      getCarouselData: http.get(`${basePath}/data/home/carousel.json`),
      getSectionColumnsPage: http.get(`${basePath}/data/home/sections.json`),
      getFeaturePage: http.get(`${basePath}/data/home/features.json`),
      getMultiCarouselData: http.get(
        `${basePath}/data/home/multi_carousel.json`
      )
    };
  else {
    return {
      getCarouselData: http.get(`data/home/carousel.json`),
      getSectionColumnsPage: http.get(`data/home/sections.json`),
      getFeaturePage: http.get(`data/home/features.json`),
      getMultiCarouselData: http.get(`data/home/multi_carousel.json`)
    };
  }
}

export function getProductsData(basePath) {
  if (isHttpFetch) return http.get(`${basePath}/data/products/products.json`);
  else return http.get(`data/products/products.json`);
}

export function getContactsData(basePath) {
  if (isHttpFetch) {
    return {
      getContactCard: http.get(`${basePath}/data/contact/contactCard.json`),
      getContactDetails: http.get(
        `${basePath}/data/contact/contactDetails.json`
      )
    };
  } else {
    return {
      getContactCard: http.get(`data/contact/contactCard.json`),
      getContactDetails: http.get(`data/contact/contactDetails.json`)
    };
  }
}

export function getAbout(basePath) {
  if (isHttpFetch) return http.get(`${basePath}/data/about/about.json`);
  else return http.get(`data/about/about.json`);
}
