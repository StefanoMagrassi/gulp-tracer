/**
 * @file Gulp module to log messages - based on default gulp-util log
 * @author Stefano Magrassi <stefano.magrassi@gmail.com>
 * @copyright MIT
 */

/*jshint strict:false*/

// Modules
var utils    = require('./lib/utils.js'),
    renderer = require('./lib/renderer.js').renderer;
    
/**
 * Collects the methods exported.
 * @namespace {object} tracer
 */
var tracer = {
  /**
   * Checks if type is handled with specific method. 
   * @param  {string} type
   * @return {boolean}
   */
  contains: function(type) {
    var self = this;
    
    return (self.hasOwnProperty(type) && typeof self[type] === 'function'); 
  },
  
  /**
   * Logs info message.
   * @return {object}
   */
  info: function() {
    renderer('info', arguments);
    
    return this;
  },
  
  /**
   * Logs success message.
   * @return {object}
   */
  success: function() {
    renderer('success', arguments);
    
    return this;
  },
  
  /**
   * Logs warn message.
   * @return {object}
   */
  warn: function() {
    renderer('warn', arguments);
    
    return this;
  },
  
  /**
   * Logs error message.
   * @return {object}
   */
  error: function() {
    renderer('error', arguments);
    
    return this;
  },
  
  /**
   * Logs simple message or a specific type, if it is passed as first parameter.
   * @return {object}
   */
  log: function() {
    var self = this,
        type = arguments[0];
        
    // Call specific method
    if (typeof type === 'string' && self.contains(type)) {
      var messages = utils.convert(arguments);
      
      messages.shift();
      
      return self[type].apply(self, messages);
    }
    
    // Simple log
    renderer('log', arguments);
    
    return self;
  }
};

module.exports = tracer;
