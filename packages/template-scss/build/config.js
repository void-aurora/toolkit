const pkg = require('../package.json');

module.exports = {
  pkg,

  globScss: '**/*.scss',
  srcScss: 'src/scss',
  distStyle: 'dist/style',
  distScss: 'dist/scss',

  entries: ['style.scss'],

  bannerTemplate: [
    '/*!',
    ' * <%= pkg.name %>@<%= pkg.version %>',
    ' * <%= pkg.description %>',
    ' */',
    '',
  ].join('\n'),
  bannerData: { pkg },
};
