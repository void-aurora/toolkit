/* eslint-disable @typescript-eslint/unbound-method */
const gulp = require('gulp');
const prettierOptions = require('@void-aurora/prettier-config');
const plugins = require('./plugins');
const config = require('./config');

const copyScss = () => {
  return gulp
    .src(config.globScss, { cwd: config.srcScss })
    .pipe(
      plugins.gulp.prettier({
        ...prettierOptions,
        parser: 'css',
      }),
    )
    .pipe(gulp.dest(config.distScss));
};

const buildStyle = () => {
  return gulp
    .src(config.globScss, { cwd: config.srcScss })
    .pipe(plugins.gulp.sass().on('error', plugins.gulp.sass.logError))
    .pipe(plugins.gulp.postcss([plugins.postcss.autoprefixer()]))
    .pipe(
      plugins.gulp.prettier({
        ...prettierOptions,
        parser: 'css',
      }),
    )
    .pipe(plugins.gulp.header(config.bannerTemplate, config.bannerData))
    .pipe(gulp.dest(config.distStyle))
    .pipe(plugins.gulp.rename({ suffix: '.min' }))
    .pipe(
      plugins.gulp.postcss([
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
    .pipe(plugins.gulp.header(config.bannerTemplate, config.bannerData))
    .pipe(gulp.dest(config.distStyle));
};

module.exports = { copyScss, buildStyle };
