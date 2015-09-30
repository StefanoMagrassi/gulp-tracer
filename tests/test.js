/*jshint strict:false*/

// Import tracer
var tracer = require('../index.js');

// Run simple logs
tracer
  .log('I', 'am', 'a', 'log')
  .log('info', 'I', 'am', 'an', 'info')
  .info('I', 'am', 'an', 'info')
  .success('I', 'am', 'a', 'success')
  .warn('I', 'am', 'a', 'warn')
  .error('I', 'am', 'an', 'error');
