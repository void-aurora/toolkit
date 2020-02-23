/* eslint-disable @typescript-eslint/restrict-template-expressions */
import Rollup from 'rollup';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const {
  version,
  buildConfig: { outputName, exportName },
} = pkg;

/* eslint-disable @typescript-eslint/naming-convention */
const values = {
  __VERSION__: `"${version}"`,
};
/* eslint-enable @typescript-eslint/naming-convention */

/**
 * @type {Record<string, Rollup.ModuleFormat>}
 */
const presetMap = {
  cjs: 'cjs',
  esm: 'esm',
  'esm-bundler': 'esm',
  global: 'iife',
};

/**
 *
 * @param {Rollup.ModuleFormat} format
 * @param {Rollup.OutputOptions} output
 * @param {Rollup.Plugin[]} plugins
 * @returns {Rollup.RollupOptions}
 */
function createConfig(format, output, plugins = []) {
  const ts = typescript({
    check: true,
    tsconfig: 'tsconfig.build.json',
    cacheRoot: 'node_modules/.rts2_cache',
    useTsconfigDeclarationDir: true,
  });

  return {
    input: 'src/index.ts',
    output: {
      format,
      name: format === 'iife' ? exportName : undefined,
      ...output,
      sourcemap: true,
      externalLiveBindings: false,
    },
    plugins: [replace({ values }), resolve(), commonjs(), ts, ...plugins],
    external: ['axios'],
  };
}

/**
 * @type {Rollup.RollupOptions[]}
 */
const configs = [];

Object.entries(presetMap).forEach(([preset, format]) => {
  configs.push(
    createConfig(format, {
      file: `dist/${outputName}.${preset}.js`,
    }),
  );
  configs.push(
    createConfig(
      format,
      {
        file: `dist/${outputName}.${preset}.min.js`,
        globals: preset === 'esm-bundler' || preset === 'global' ? { axios: 'Axios' } : undefined,
      },
      [
        terser({
          module: format === 'esm',
          compress: {
            ecma: 2015,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            pure_getters: true,
          },
        }),
      ],
    ),
  );
});

export default configs;
