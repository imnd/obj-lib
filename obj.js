/**
 * A set of shortcut methods
 *
 * @author Андрей Сердюк
 * @copyright (c) 2023 IMND
 */
const
  isArray = obj => obj.constructor === Array,
  isObject = obj => obj.constructor === Object,
  inArray = (arr, elem) => arr.indexOf(elem) !== -1,
  inObject = (obj, elem) => obj[elem] !== undefined,
  arrayKey = (arr, elem) => arr.indexOf(elem)
;

export {isArray, isObject, inArray, inObject, arrayKey};
