import { task, series, parallel, cleanTask, sassTask } from '@void-aurora/just';

task('clean', cleanTask());

task(
  'sass',
  sassTask({
    input: 'sass',
    output: 'dist/style',
  }),
);

task('build', series('clean', parallel('sass')));
