# gulp-tracer
Gulp module to log messages - based on default gulp-util log

## Usage

Install from npm repository:

    npm install --save gulp-tracer


Import **gulp-tracer** module:

    var tracer = require('gulp-tracer');
  

Logs whatever you want, with 5 different renderings:

    tracer.log('Simple log message');
    tracer.info('Info message');
    tracer.success('Urrah!');
    tracer.warn('Achtung!');
    tracer.error('Oh, no!');


The methods act like `console.log`, so you can pass as many parameters you want:

    tracer.log('I', 'am', 'a', 'simple', 'logger');

The methods are all chainable; so you can write the previous line as:

    tracer.log('Simple log message')
          .info('Info message')
          .success('Urrah!')
          .warn('Achtung!')
          .error('Oh, no!');

`log` method is also a factory to call the other tracer's method; so, again, you can write something like:

    tracer.log('Simple log message')
          .log('info', 'Info message')
          .log('success', Urrah!')
          .log('warn', 'Achtung!')
          .log('error', 'Oh, no!');
