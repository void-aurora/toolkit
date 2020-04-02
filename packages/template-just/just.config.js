/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
const { task, series, parallel, cleanTask } = require('just-scripts');
const { sassTask } = require('./build/tasks/sass');

task('sass', sassTask('**/*.scss', 'sass', 'dist/style'));

task('build', series(cleanTask({ paths: ['dist'] }), parallel('sass')));
