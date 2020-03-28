'use strict';
/* eslint-disable */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/template-just.cjs.prod.js');
} else {
  module.exports = require('./dist/template-just.cjs.dev.js');
}
