/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
const { resolve } = require('path');
const fs = require('fs-extra');
const prettier = require('prettier');
const { rules } = require('@typescript-eslint/eslint-plugin');

const prettierOptions = require('../../prettier-config');

const ruleNamesRequireTypeInfo = [];
const ruleNamesDeprecated = [];
const lines = [];

// eslint-disable-next-line @typescript-eslint/require-array-sort-compare
Object.keys(rules)
  .sort()
  .forEach(name => {
    let flagDeprecated = false;

    const {
      [name]: {
        meta: {
          docs: {
            description,
            // category,
            recommended,
            requiresTypeChecking,
            extendsBaseRule,
            url = `https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/${name}.md`,
          },
          deprecated,
          replacedBy,
        },
      },
    } = rules;

    const ruleName = `@typescript-eslint/${name}`;

    // lines.push(`  // ${category}`);
    lines.push(`  // ${description}`);
    lines.push(`  // ${url.replace(/\/blob\/v\d+\.\d+\.\d+\//, '/blob/master/')}`);

    if (requiresTypeChecking === true) {
      ruleNamesRequireTypeInfo.push(ruleName);
      lines.push(`  // requires type information`);
    }
    if (deprecated === true) {
      flagDeprecated = true;
      ruleNamesDeprecated.push(ruleName);
      lines.push(`  // deprecated, replace by: \`[${replacedBy.map(i => `'${i}'`).join(', ')}]\``);
    }
    if (extendsBaseRule === true) {
      lines.push('  // extends base rule');
    }

    const value = recommended === false ? 'off' : recommended;
    lines.push(`  ${flagDeprecated ? '// ' : ''}'${ruleName}': '${value}',`);

    lines.push('');
  });

const contentRuleNameDeprecated = `const ruleNamesDeprecated = [
${ruleNamesDeprecated.map(r => `  '${r}',`).join('\n')}
];`;
const contentRuleNamesRequireTypeInfo = `const ruleNamesRequireTypeInfo = [
${ruleNamesRequireTypeInfo.map(r => `  '${r}',`).join('\n')}
];`;
const contentRules = `const rules = {
${lines.join('\n')}
};`;

let content = [
  '// rules which deprecated',
  contentRuleNameDeprecated,
  '',
  '// rules which require type information',
  contentRuleNamesRequireTypeInfo,
  '',
  '// rules from `@typescript-eslint/eslint-plugin`',
  contentRules,
].join('\n');

content = prettier.format(content, { ...prettierOptions, parser: 'typescript' });

console.log(content);
fs.outputFileSync(resolve(__dirname, '..', 'rules', 'typescript-raw.js'), content);
