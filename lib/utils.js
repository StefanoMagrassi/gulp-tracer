/**
 * @file Module utilities
 * @author Stefano Magrassi <stefano.magrassi@gmail.com>
 * @copyright MIT
 */

/*jshint strict:false*/

/**
 * Coverts "arguments" object in array.
 * @param  {object} args
 * @return {array}
 */
module.exports.convert = function(args) {
  var l     = args.length,
      _args = new Array(l),
      i;
  
  for (i = 0; i < l; ++i) {
    _args[i] = args[i];
  }

  return _args;
};

/**
 * Gets the max length of the keys of an object.
 * @param  {object} obj
 * @param  {number} offset
 * @return {number}
 */
module.exports.longestKey = function(obj, offset) {
  if (typeof offset === 'undefined') {
    offset = 0;
  }
  
  return Object.keys(obj)
          .map(function(item) {
            return item.length + offset;
          }).reduce(function(prev, current) {
            return (prev > current) ? prev : current;
          });
};

/**
 * Fills a string with empty spaces until max.
 * @param  {string} str
 * @param  {number} max
 * @return {string}
 */
module.exports.filler = function(str, max) {
  var l = str.length,
      toFill,
      spaces,
      i;
  
  if (l >= max) {
    return str;
  }
  
  toFill = max - l;
  spaces = [];
  
  for (i = 0; i < toFill; i++) {
    spaces.push(' '); 
  }
  
  return str + spaces.join('');
};
