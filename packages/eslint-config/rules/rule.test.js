/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
const configErrors = require('./errors');
const configBestPractices = require('./best-practices');
const configStrict = require('./strict');
const configVariables = require('./variables');
const configNode = require('./node');
const configStylistic = require('./stylistic');
const configEs6 = require('./es6');
const configImport = require('./import');
const configTypescript = require('./typescript');
const configPrettier = require('./prettier');

const baseConfigs = {
  errors: configErrors,
  bestPractices: configBestPractices,
  strict: configStrict,
  variables: configVariables,
  node: configNode,
  stylistic: configStylistic,
  es6: configEs6,
  import: configImport,
  typescript: configTypescript,
  prettier: configPrettier,
};

const validValues = ['off', 'warn', 'error'];

describe('rules', () => {
  test('validate rules', () => {
    /** @type {({key: string, value: string | [string, any]})[]} */
    const rules = [];
    Object.values(baseConfigs).forEach(config => {
      Object.entries(config.rules).forEach(([key, value]) => {
        rules.push({ key, value });
      });
    });

    let result = true;
    for (const { key, value } of rules) {
      if (typeof value === 'string') {
        if (!validValues.includes(value)) {
          result = `invalid rule '${key}': '${value}'`;
          break;
        }
      } else if (Array.isArray(value)) {
        if (!validValues.includes(value[0])) {
          result = `invalid rule '${key}': '${value[0]}'`;
          break;
        }
      } else {
        result = `invalid rule '${key}'`;
      }
    }

    expect(result).toEqual(true);
  });
});
