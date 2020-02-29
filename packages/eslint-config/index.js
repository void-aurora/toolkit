module.exports = {
  env: {
    es6: true,
    node: true,
  },

  plugins: ['import', '@typescript-eslint'],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.json', './packages/*/tsconfig.json'],
  },

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.cjs', '.mjs', '.ts', '.tsx', '.d.ts', '.json'],
      },
    },
    'import/extensions': ['.js', '.jsx', '.cjs', '.mjs', '.ts', '.tsx', '.d.ts'],
    'import/core-modules': [],
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
  },

  extends: [
    './rules/errors',
    './rules/best-practices',
    './rules/strict',
    './rules/variables',
    './rules/node',
    './rules/stylistic',
    './rules/es6',
    './rules/import',
    './rules/typescript',
    './rules/prettier',
    './rules/overrides',
  ].map(require.resolve),
};
