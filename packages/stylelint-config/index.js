module.exports = {
  plugins: ['stylelint-scss', 'stylelint-prettier'],
  extends: [
    './rules/errors',
    './rules/language-features',
    './rules/stylistic',
    './rules/scss',
    './rules/prettier',
    'stylelint-config-prettier',
  ].map(require.resolve),
};
