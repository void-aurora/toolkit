/* eslint-disable @typescript-eslint/naming-convention */
import { resolve } from 'path';
import fs from 'fs-extra';
import { Extractor, ExtractorConfig } from '@microsoft/api-extractor';

function buildDTS(): void {
  const configPath = resolve(__dirname, '..', 'api-extractor.json');
  const config = ExtractorConfig.loadFileAndPrepare(configPath);

  const result = Extractor.invoke(config, {
    localBuild: true,
    showVerboseMessages: true,
  });

  if (result.succeeded) {
    console.log('succeeded');
    console.log(
      `Exist: dist/template-rollup.d.ts ${fs.pathExistsSync(
        resolve(__dirname, '..', 'dist/template-rollup.d.ts'),
      )}`,
    );
  }
}

buildDTS();
