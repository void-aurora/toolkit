import Rollup from 'rollup';
import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';

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
      name: format === 'iife' ? 'Template' : undefined,
      ...output,
      sourcemap: true,
      externalLiveBindings: false,
    },
    plugins: [ts, ...plugins],
    external: ['axios'],
  };
}

/**
 * @type {Rollup.RollupOptions[]}
 */
const configs = [];

Object.entries(presetMap).forEach(([name, format]) => {
  configs.push(
    createConfig(format, {
      file: `dist/template-rollup.${name}.js`,
    }),
  );
  configs.push(
    createConfig(
      format,
      {
        file: `dist/template-rollup.${name}.min.js`,
        globals: name === 'esm-bundler' || name === 'global' ? { axios: 'Axios' } : undefined,
      },
      [
        terser({
          module: format === 'esm',
          compress: {
            ecma: 2015,
            pure_getters: true,
          },
        }),
      ],
    ),
  );
});

export default configs;
