import http from "./httpService";

const rawPathUrl = process.env.REACT_APP_PUBLIC_URL;
const isHttpFetch =
  process.env.REACT_APP_IS_HTTP_FETCH === "true" ? true : false;

export function getDataUrlBasePath() {
  if (isHttpFetch) return http.get(`${rawPathUrl}/data/rawPath.json`);
  else return http.get(`data/rawPath.json`);
}

export function getModulesImgSection(basePath) {
  if (isHttpFetch) return http.get(`${basePath}/data/modules/imgSection.json`);
  else return http.get(`data/modules/imgSection.json`);
}

export function getModulesContactCard(basePath) {
  if (isHttpFetch) return http.get(`${basePath}/data/modules/contactCard.json`);
  else return http.get(`data/modules/contactCard.json`);
}

export function getModulesCarousel(basePath) {
  if (isHttpFetch) return http.get(`${basePath}/data/modules/carousel.json`);
  else return http.get(`data/modules/carousel.json`);
}

export function getModulesVideoCarousel(basePath) {
  if (isHttpFetch)
    return http.get(`${basePath}/data/modules/videoCarousel.json`);
  else return http.get(`data/modules/videoCarousel.json`);
}

export function getModulesMultiCarousel(basePath) {
  if (isHttpFetch)
    return http.get(`${basePath}/data/modules/multiCarousel.json`);
  else return http.get(`data/modules/multiCarousel.json`);
}

export function getModulesSection(basePath) {
  if (isHttpFetch) return http.get(`${basePath}/data/modules/section.json`);
  else return http.get(`data/modules/section.json`);
}

export function getModulesComplexSection(basePath) {
  if (isHttpFetch)
    return http.get(`${basePath}/data/modules/complexSection.json`);
  else return http.get(`data/modules/complexSection.json`);
}

export function getModulesFeatures(basePath) {
  if (isHttpFetch) return http.get(`${basePath}/data/modules/feature.json`);
  else return http.get(`data/modules/feature.json`);
}
