import { task, series, parallel, cleanTask, sassTask, minifyCssTask } from '@void-aurora/just';

task('clean', cleanTask());

task('compile:sass', sassTask());

task('minify:css', minifyCssTask());

task('build:style', series('compile:sass', 'minify:css'));

task('build', parallel('build:style'));

task('prepare', series('clean', 'build'));
