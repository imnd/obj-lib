/**
 * Набор методов-шорткатов
 *
 * @constructor
 * @this  {obj}
 */
const obj = {
    isArray: obj => obj.constructor === Array,
    isObject: obj => obj.constructor === Object,
    inArray: (arr, elem) => arr.indexOf(elem) !== -1,
    inObject: (obj, elem) => obj[elem] !== undefined,
    arrayKey: (arr, elem) => arr.indexOf(elem),
};

export default obj;
