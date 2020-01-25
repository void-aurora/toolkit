module.exports = {
  hooks: {
    'pre-commit': 'lint-staged',
    'commit-msg': 'vabuild git-verify-commit-message',
  },
};
