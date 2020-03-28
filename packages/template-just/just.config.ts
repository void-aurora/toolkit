/* eslint-disable @typescript-eslint/naming-convention */
import {
  task,
  series,
  parallel,
  cleanTask,
  sassTask,
  minifyCssTask,
  RollupTypeScriptTaskPreset,
  RollupTypeScriptTaskEnv,
  rollupTypeScriptTask,
} from '@void-aurora/just';

import pkg from './package.json';

const unscopedName = pkg.name.replace(/^@[a-z0-9-]+\//, '');
const exportsName = 'TemplateJust';
const values = {
  __VERSION__: `'${pkg.version}'`,
};

// ================
// Clean

task('clean', cleanTask());

// ================
// Style

task('compile:sass', sassTask());

task('minify:css', minifyCssTask());

task('build:style', series('compile:sass', 'minify:css'));

// ================
// Module

const rollupTasks = [] as string[];

for (const preset of ['cjs', 'esm', 'esm-browser', 'global'] as RollupTypeScriptTaskPreset[]) {
  for (const env of ['dev', 'prod'] as RollupTypeScriptTaskEnv[]) {
    const name = `rollup:${preset}:${env}`;
    rollupTasks.push(name);
    task(
      name,
      rollupTypeScriptTask({
        input: 'src/index.ts',
        output: `dist/${unscopedName}.js`,
        exportsName,
        preset,
        env,
        rollupReplaceOptions: {
          values: {
            ...values,
            __NODE_ENV__: env === 'dev' ? "'development'" : "'production'",
          },
        },
        rollupTypeScript2Options: {
          tsconfig: './tsconfig.build.json',
        },
      }),
    );
  }
}

task('build:modules', parallel(...rollupTasks));

// ================
// Build

task('build', parallel('build:style', 'build:modules'));

task('prepare', series('clean', 'build'));
