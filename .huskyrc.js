module.exports = {
  hooks: {
    'pre-commit': 'lint-staged && beachball change',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
};
