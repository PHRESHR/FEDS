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
