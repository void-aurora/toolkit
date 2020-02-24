// disable `@typescript-eslint/no-var-requires` and '@typescript-eslint/no-require-imports'
// for workflow scripts
// for config files
module.exports = {
  overrides: [
    {
      files: [
        '**/scripts/**/*.[jt]s',
        '**/build/**/*.[jt]s',

        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)',

        // babel
        'babelrc.js',
        '.babelrc.js',
        'babel.config.js',
        // 'babel.config.esm.js',

        // eslint
        '.eslintrc.js',

        // grunt
        'gruntfile.js',
        'gruntfile.babel.js',

        // gulp
        'gulpfile.js',
        'gulpfile.esm.js',
        // 'gulpfile.babel.js',

        // husky
        '.huskyrc.js',

        // jest
        'jest.config.js',
        '.jestrc.js',

        // lint-staged
        '.lintstagedrc',
        'lint-staged.config.js',

        // mocha
        '.mocharc.js',

        // postcss
        '.postcssrc.js',
        'postcss.config.js',

        // prettier
        'prettier.config.js',
        '.prettierrc.js',

        // rollup
        'rollup.config.js',
        'rollup.config.common.js',
        'rollup.config.dev.js',
        'rollup.config.prod.js',

        // stylelint
        'stylelint.config.js',
        '.stylelintrc.js',

        // vue
        'vue.config.js',

        // webpack
        'webpack.base.conf.js',
        'webpack.common.js',
        'webpack.config.js',
        'webpack.config.base.js',
        'webpack.config.common.js',
        'webpack.config.dev.js',
        'webpack.config.development.js',
        'webpack.config.staging.js',
        'webpack.config.test.js',
        'webpack.config.prod.js',
        'webpack.config.production.js',
        'webpack.config.babel.js',
        'webpack.config.base.babel.js',
        'webpack.config.common.babel.js',
        'webpack.config.dev.babel.js',
        'webpack.config.development.babel.js',
        'webpack.config.staging.babel.js',
        'webpack.config.test.babel.js',
        'webpack.config.prod.babel.js',
        'webpack.config.production.babel.js',
        'webpack.dev.js',
        'webpack.dev.conf.js',
        'webpack.prod.js',
        'webpack.prod.conf.js',
        'webpack.main.config.js',
        'webpack.mix.js',
        'webpack.plugins.js',
        'webpack.renderer.config.js',
        'webpack.rules.js',
        'webpack.test.conf.js',
      ],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-require-imports': 'off',
      },
    },
  ],
};
