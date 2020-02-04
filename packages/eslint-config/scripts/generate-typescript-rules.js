/* eslint-disable @typescript-eslint/restrict-template-expressions */
const { rules } = require('@typescript-eslint/eslint-plugin');

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

    // lines.push(`  // ${category}`);
    lines.push(`  // ${description}`);
    lines.push(`  // ${url}`);

    if (requiresTypeChecking === true) {
      lines.push(`  // requires type information`);
    }
    if (deprecated === true) {
      flagDeprecated = true;
      lines.push(`  // deprecated, replace by: \`[${replacedBy.map(i => `'${i}'`).join(', ')}]\``);
    }
    if (extendsBaseRule === true) {
      lines.push('  // extends base rule');
    }

    const value = recommended === false ? 'off' : recommended;
    lines.push(`  ${flagDeprecated ? '// ' : ''}'@typescript-eslint/${name}': '${value}',`);

    lines.push('');
  });

const content = `const rules = {
${lines.join('\n')}
}`;

console.log(content);
