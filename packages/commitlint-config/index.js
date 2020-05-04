const types = [
  'feat',
  'fix',
  'improvement',
  'perf',
  'refactor',
  'release',
  'chore',
  'build',
  'ci',
  'test',
  'style',
  'docs',
  'wip',
  'revert',
];

module.exports = {
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-enum': [2, 'always', types],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
  },
};
