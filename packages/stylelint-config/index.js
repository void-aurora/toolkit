module.exports = {
  plugins: ['stylelint-scss', 'stylelint-prettier'],
  extends: [
    './rules/errors',
    './rules/language-features',
    './rules/stylistic',
    'stylelint-config-prettier',
  ].map(require.resolve),
  rules: {
    'prettier/prettier': true,
  },
};
