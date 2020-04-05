/* eslint-disable @typescript-eslint/naming-convention */
import {
  task,
  series,
  parallel,
  cleanTask,
  sassTask,
  RollupTypeScriptTaskPreset,
  RollupTypeScriptTaskEnv,
  rollupTypeScriptTask,
  checkSizeTask,
  prettierTask,
  prettierCheckTask,
  PrettierTaskOptions,
  eslintTask,
  EslintTaskOptions,
  stylelintTask,
  StylelintTaskOptions,
} from '@void-aurora/just';

import pkg from './package.json';

const unScopedName = pkg.name.replace(/^@[a-z0-9-]+\//, '');
const exportsName = 'TemplateJust';
const values = {
  __VERSION__: `'${pkg.version}'`,
};

// ================
// Clean

task('clean', cleanTask());

// ================
// Styles

task('sass:dev', sassTask({ env: 'dev' }));
task('sass:prod', sassTask({ env: 'prod' }));

task('build:styles', parallel('sass:dev', 'sass:prod'));

// ================
// Modules

const rollupTasks = [] as string[];

for (const preset of ['cjs', 'esm', 'esm-browser', 'global'] as RollupTypeScriptTaskPreset[]) {
  for (const env of ['dev', 'prod'] as RollupTypeScriptTaskEnv[]) {
    const name = `rollup:${preset}:${env}`;
    rollupTasks.push(name);
    task(
      name,
      rollupTypeScriptTask({
        input: 'src/index.ts',
        output: `dist/${unScopedName}.js`,
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

task('check-size', checkSizeTask());

task('build', parallel('build:styles', 'build:modules'));

task('prepare', series('clean', 'build', 'check-size'));

// ================
// Lint

{
  const options: PrettierTaskOptions = {
    configPath: '../../.prettierrc.js',
    ignorePath: '../../.prettierignore',
  };
  task('prettier', prettierTask(options));
  task('prettier:check', prettierCheckTask(options));
}
{
  const options: EslintTaskOptions = {
    configPath: '../../.eslintrc.js',
    ignorePath: '../../.eslintignore',
  };
  task('eslint', eslintTask(options));
}
{
  const options: StylelintTaskOptions = {
    configPath: '../../.stylelintrc.js',
    ignorePath: '../../.stylelintignore',
  };
  task('stylelint', stylelintTask(options));
}

task('lint', series('prettier:check', 'eslint', 'stylelint'));
