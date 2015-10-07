// Utils functions
export function pascalCaseToCamelCase(str) {
  return str.charAt(0).toLowerCase() + str.substring(1);
}

export function dashCaseToCamelCase(str) {
  return str.replace( /-([a-z])/ig, ( all, letter ) => letter.toUpperCase());
}

export function camelCaseToDashCase(str) {
  return str.replace(/[A-Z]/g, ($1) => '-' + $1.toLowerCase());
}

export function getTitleValue(title) {
  return angular.isFunction(title) ? title() : title;
}

export function getDescriptionValue(description) {
  return angular.isFunction(description) ? description() : description;
}

export function getMetaImgValue(metaImg) {
  return angular.isFunction(metaImg) ? metaImg() : metaImg;
}

export function getUrlValue(url) {
  return angular.isFunction(url) ? url() : url;
}

export function sortByHumanName(a, b) {
  return (a.humanName < b.humanName) ? -1 : (a.humanName > b.humanName) ? 1 : 0;
}
