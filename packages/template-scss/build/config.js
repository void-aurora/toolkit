const pkg = require('../package.json');
const { resolve } = require('./plugins');

/**
 * @type {import('sass').Options}
 */
const sassOptions = {
  includePaths: [resolve('node_modules'), resolve('../../node_modules')],
};

module.exports = {
  pkg,

  sassOptions,

  globSass: '**/*.scss',
  srcSass: resolve('sass'),
  distDir: resolve('dist'),

  bannerTemplate: [
    '/*!',
    ' * <%= pkg.name %>@<%= pkg.version %>',
    ' * <%= pkg.description %>',
    ' */',
    '',
  ].join('\n'),
  bannerData: { pkg },
};
