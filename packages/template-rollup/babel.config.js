/**
 * @type {import('@babel/core').TransformOptions}
 */
const options = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: {
          version: 3,
          proposals: false,
        },
      },
    ],
    '@babel/preset-typescript',
  ],
};

module.exports = options;
