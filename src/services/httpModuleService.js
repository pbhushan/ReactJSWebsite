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
