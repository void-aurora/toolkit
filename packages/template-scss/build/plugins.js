const pth = require('path');

const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
sass.compiler = require('sass');
const header = require('gulp-header');
const rename = require('gulp-rename');
const prettier = require('gulp-prettier');

const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

/**
 * Resolve path based on the project directory.
 * @param {string[]} paths
 */
function resolve(...paths) {
  return pth.resolve(__dirname, '..', ...paths);
}

module.exports = {
  gulp: {
    sass,
    postcss,
    header,
    rename,
    prettier,
  },
  postcss: {
    autoprefixer,
    cssnano,
  },
};

module.exports.resolve = resolve;
