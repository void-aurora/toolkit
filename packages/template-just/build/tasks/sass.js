const pth = require('path');
const fse = require('fs-extra');
const globby = require('globby');
const sass = require('sass');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const { logger } = require('just-scripts');
const runParallelLimit = require('run-parallel-limit');

/**
 *
 * @param {string | string[]} patterns glob patterns for searching input files
 * @param {string} srcDir path to source code directory
 * @param {string} distDir path to output directory
 * @returns {import('just-scripts').TaskFunction}
 */
function sassTask(patterns, srcDir, distDir) {
  return async function sassTaskFunction() {
    const files = globby.sync(patterns, { cwd: srcDir, onlyFiles: true });

    if (files.length === 0) {
      return Promise.resolve();
    }

    const cwd = process.cwd();
    const includePaths = [pth.resolve(cwd, 'node_modules')];
    return new Promise((resolve, reject) => {
      logger.info(`files: ${files.length}`);
      runParallelLimit(
        files
          .filter(f => !pth.basename(f).startsWith('_'))
          .map(f => cb => {
            const file = pth.resolve(srcDir, f);
            const output = pth.resolve(distDir, f.replace(/\.scss$/, '.css'));
            sass.render(
              {
                file,
                outputStyle: 'compressed',
                includePaths,
              },
              (ex, result) => {
                if (ex) {
                  cb(ex);
                  return;
                }
                const css = result.css.toString();
                postcss([autoprefixer])
                  .process(css, { from: file })
                  .then(async postResult => fse.outputFile(output, postResult.css))
                  .then(() => cb())
                  .catch(error => cb(error));
              },
            );
          }),
        5,
        error => {
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          if (error) {
            return reject(error);
          }
          return resolve();
        },
      );
    });
  };
}

module.exports.sassTask = sassTask;
