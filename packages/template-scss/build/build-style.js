/* eslint-disable @typescript-eslint/unbound-method */
const gulp = require('gulp');
const prettierOptions = require('@void-aurora/prettier-config');
const plugins = require('./plugins');
const config = require('./config');

function baseStream() {
  return gulp
    .src(config.globSass, { cwd: config.srcSass })
    .pipe(plugins.gulp.sass(config.sassOptions).on('error', plugins.gulp.sass.logError))
    .pipe(
      plugins.gulp.postcss([
        plugins.postcss.autoprefixer(),
        plugins.postcss.cssnano({
          preset: [
            'default',
            {
              discardComments: {
                removeAll: true,
              },
            },
          ],
        }),
      ]),
    )
    .pipe(plugins.gulp.header(config.bannerTemplate, config.bannerData));
}

function buildStyleMinified() {
  return baseStream()
    .pipe(plugins.gulp.rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.distDir));
}

function buildStylePretty() {
  return baseStream()
    .pipe(
      plugins.gulp.prettier({
        ...prettierOptions,
        parser: 'css',
      }),
    )
    .pipe(gulp.dest(config.distDir));
}

module.exports.buildStyle = gulp.parallel(buildStyleMinified, buildStylePretty);
