/* eslint-disable @typescript-eslint/unbound-method */
const gulp = require('gulp');
const { buildStyle } = require('./build/build-style');

module.exports.default = gulp.series(buildStyle);
