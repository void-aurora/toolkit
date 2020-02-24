const pkg = require('./package.json');

module.exports = {
  preset: 'ts-jest',
  globals: {
    /* eslint-disable @typescript-eslint/naming-convention */
    __VERSION__: pkg.version,
    /* eslint-enable @typescript-eslint/naming-convention */
  },
  collectCoverage: true,
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};
