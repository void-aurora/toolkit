const args = process.argv.slice(2);

const modules = args.includes('dist/cjs') ? 'cjs' : undefined;

/**
 * @type {import('@babel/core').TransformOptions}
 */
const options = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules,
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
