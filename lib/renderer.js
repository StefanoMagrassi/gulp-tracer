/**
 * @file Module renderer
 * @author Stefano Magrassi <stefano.magrassi@gmail.com>
 * @copyright MIT
 */

/*jshint strict:false*/

// Modules
var gutil = require('gulp-util'),
    chalk = require('chalk'),
    utils = require('./utils.js');

// Constants
var CONSTS = {
  LOG    : 'log',
  INFO   : 'info',
  SUCCESS: 'success',
  WARN   : 'warn',
  ERROR  : 'error'
};

/**
 * @property {object} cache - module cache.
 */
var cache = {};

/**
 * Gets the chalk styles from cache, creating cache object if it doesn't exist.
 * @return {object}
 */
var getStylesMap = function() {
  if (cache.styles) {
    return cache.styles;
  }
  
  cache.styles = {};
  cache.styles[CONSTS.LOG]     = chalk.white;
  cache.styles[CONSTS.INFO]    = chalk.cyan;
  cache.styles[CONSTS.SUCCESS] = chalk.bold.green;
  cache.styles[CONSTS.WARN]    = chalk.yellow;
  cache.styles[CONSTS.ERROR]   = chalk.bold.red;
  
  return cache.styles;
};
    
/**
 * Gets a chalk style from cache by type.
 * @param  {string} type
 * @return {function}
 */
var getStyle = function(type) {
  return getStylesMap()[type];
};

/**
 * Set styles to string based on type from map.
 * @param  {string} type
 * @param  {string} str 
 * @return {string}
 */
var styles = function(type, str) {
  return getStyle(type)(str);
};

/**
 * Renders type tag column.
 * @param  {string} type
 * @return {string}
 */
var tag = function(type) {
  var t = '[' + type.toUpperCase() + ']';
  
  return utils.filler(t, utils.longestKey(CONSTS, 2));
};

/**
 * Remaps messages applying styles.
 * @param  {string} type
 * @param  {array} messages
 * @return {array}
 */
var map = function(type, messages) {
  if (type !== CONSTS.LOG) {
    messages.unshift(tag(type));
  }
  
  return messages.map(styles.bind(null, type));
};

// Exports
/**
 * Logs in console through gulp-util log.
 * @param  {string} type
 * @param  {[object|array]} messages
 * @return {undefined}
 */
module.exports.renderer = function(type, messages) {
  if (!Array.isArray(messages)) {
    messages = utils.convert(messages);
  }
  
  gutil.log.apply(null, map(type, messages));
};
