/* eslint-disable no-await-in-loop */
import pth from 'path';
import fs from 'fs-extra';
import globby from 'globby';
import axios from 'axios';
import prettier from 'prettier';
import prettierOptions from '../../prettier-config/index.js';

async function request(url: string): Promise<string> {
  let content = '';
  let count = 0;
  while (content === '' && count < 3) {
    count += 1;
    try {
      const { data } = await axios.get<string>(url);
      content = data;
    } catch (error) {
      if (count >= 3) {
        throw error;
      }
    }
  }
  return content;
}

async function generate(): Promise<void> {
  const dirStylelintScssRules = pth.resolve(
    pth.dirname(require.resolve('stylelint-scss/package.json')),
    'dist/rules',
  );

  const ruleNames = globby.sync('*', {
    cwd: dirStylelintScssRules,
    onlyDirectories: true,
    onlyFiles: false,
    expandDirectories: false,
  });

  ruleNames.sort((a, b) => a.localeCompare(b));

  const rules: { name: string; description: string; url: string }[] = [];

  for (const name of ruleNames) {
    const cdn = `https://cdn.jsdelivr.net/gh/kristerkari/stylelint-scss/src/rules/${name}/README.md`;
    const url = `https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/${name}/README.md`;
    const description = await request(cdn).then(
      content =>
        content
          .split('\n')
          .map(l => l.trim())
          .filter(l => l)[1],
    );
    console.log(name);
    rules.push({
      name,
      description,
      url,
    });
  }

  let content = `const rules = {
    ${rules
      .map(({ name, description, url }) =>
        [`// ${description}`, `// ${url}`, `'scss/${name}': null`].map(l => `${l},\n`).join(''),
      )
      .join('\n')}
  };`;

  content = prettier.format(content, { ...prettierOptions, parser: 'typescript' });

  await fs.outputFile(pth.resolve(__dirname, '..', 'rules', 'scss-raw.js'), content);
}

generate().catch(console.error);
