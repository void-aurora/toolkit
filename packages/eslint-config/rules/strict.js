module.exports = {
  rules: {
    // require or disallow strict mode directives
    // https://eslint.org/docs/rules/strict
    strict: ['error', 'never'],
  },
  overrides: [
    {
      files: ['index.js'],
      rules: {
        strict: 'off',
      },
    },
  ],
};
