/* eslint-disable no-lone-blocks */
/* eslint-disable import/extensions */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-namespace */
import { resolve } from 'path';
import fse from 'fs-extra';
import prettier from 'prettier';
import { Rule } from 'eslint';
import { TSESLint } from '@typescript-eslint/experimental-utils';

import prettierConfig from '../../prettier-config';

/* eslint-disable prefer-destructuring,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-explicit-any */
const rulesOrigin: Map<string, Rule.RuleModule> = require('eslint/lib/rules');
const rulesImport: Record<string, Rule.RuleModule> = require('eslint-plugin-import').rules;
//
const rulesTS: Record<
  string,
  TSESLint.RuleModule<any, any[]>
> = require('@typescript-eslint/eslint-plugin').rules;
/* eslint-enable prefer-destructuring,@typescript-eslint/no-unsafe-member-access */

export async function track(): Promise<void> {
  const lines: string[] = ['/* eslint-disable */', ''];

  const misc = {
    deprecated: {
      origin: [] as string[],
      import: [] as string[],
      ts: [] as string[],
    },
    requiresTypeChecking: [] as string[],
  };

  function isNotEmptyString(value: string | undefined | null): value is string {
    return typeof value === 'string' && value !== '';
  }

  function addMetaLines(meta: Rule.RuleMetaData | TSESLint.RuleMetaData<any>): void {
    const { docs = {}, deprecated } = meta;
    if (isNotEmptyString(docs.description)) {
      lines.push(`// ${docs.description}`);
    }
    // if (isNotEmptyString(docs.category)) {
    //   lines.push(`// category: ${docs.category}`);
    // }
    if (isNotEmptyString(docs.url)) {
      lines.push(`// ${docs.url}`);
    }
    if ('requiresTypeChecking' in docs && docs.requiresTypeChecking) {
      lines.push('// @requires-type-checking');
    }
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if ('extendsBaseRule' in docs && !!docs.extendsBaseRule) {
      if (typeof docs.extendsBaseRule === 'string') {
        lines.push(`// @extends-base-rule ${docs.extendsBaseRule}`);
      } else {
        lines.push('// @extends-base-rule');
      }
    }
    if (deprecated) {
      if ('replacedBy' in meta && meta.replacedBy) {
        lines.push(`// @deprecated replace by: ${meta.replacedBy.map(i => `\`${i}\``).join(', ')}`);
      } else {
        lines.push('// @deprecated');
      }
    }
  }

  {
    const ruleMap: Record<string, [string, Rule.RuleModule][]> = {};
    Array.from(rulesOrigin.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .forEach(([name, rule]) => {
        const { meta: { docs: { category = '' } = {} } = {} } = rule;
        const names = ruleMap[category] || (ruleMap[category] = []);
        names.push([name, rule]);
      });

    lines.push('const rulesOrigin = {');
    Object.entries(ruleMap)
      .sort(([a], [b]) => a.localeCompare(b))
      .forEach(([category, subRules]) => {
        lines.push(`'${category}': {`);
        subRules.forEach(([name, rule]) => {
          const { meta = {} } = rule;
          addMetaLines(meta);
          lines.push(`'${name}': 'off',`);
          lines.push('');
          if (meta.deprecated) {
            misc.deprecated.origin.push(name);
          }
        });
        lines.push('},');
        lines.push('');
      });
    lines.push('};');
    lines.push('');
  }

  {
    lines.push('const rulesImport = {');
    Object.entries(rulesImport)
      .sort(([a], [b]) => a.localeCompare(b))
      .forEach(([name, rule]) => {
        const fullName = `import/${name}`;
        const { meta = {} } = rule;
        addMetaLines(meta);
        lines.push(`'${fullName}': 'off',`);
        lines.push('');
        if (meta.deprecated) {
          misc.deprecated.import.push(fullName);
        }
      });
    lines.push('};');
    lines.push('');
  }

  {
    const ruleMap: Record<string, [string, TSESLint.RuleModule<any, any[]>][]> = {};
    Object.entries(rulesTS)
      .sort(([a], [b]) => a.localeCompare(b))
      .forEach(([name, rule]) => {
        const { meta: { docs: { category = '' } = {} } = {} } = rule;
        const names = ruleMap[category] || (ruleMap[category] = []);
        names.push([name, rule]);
      });

    lines.push('const rulesTS = {');
    Object.entries(ruleMap)
      .sort(([a], [b]) => a.localeCompare(b))
      .forEach(([category, subRules]) => {
        lines.push(`'${category}': {`);
        subRules.forEach(([name, rule]) => {
          const fullName = `@typescript-eslint/${name}`;
          const { meta } = rule;
          addMetaLines(meta);
          lines.push(`'${fullName}': 'off',`);
          lines.push('');
          if (meta.deprecated) {
            misc.deprecated.ts.push(fullName);
          }
          if (meta.docs?.requiresTypeChecking) {
            misc.requiresTypeChecking.push(fullName);
          }
        });
        lines.push('},');
        lines.push('');
      });
    lines.push('}');
    lines.push('');
  }

  lines.push(`const misc = ${JSON.stringify(misc, null, '  ')};`);

  const content = prettier.format(lines.join('\n'), { ...prettierConfig, parser: 'typescript' });

  return fse.outputFile(resolve(__dirname, 'raw.ts'), content);
}

track().catch(console.error);
