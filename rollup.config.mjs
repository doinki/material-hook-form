import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

/**
 * @type {import('rollup').RollupOptions}
 */
const rollupConfig = {
  external: [/node_modules/],
  input: 'src/index.ts',
  output: [
    {
      dir: 'lib/cjs',
      format: 'cjs',
      interop: 'esModule',
      preserveModules: true,
    },
    { dir: 'lib', format: 'esm', preserveModules: true },
  ],
  plugins: [
    nodeResolve({ extensions }),
    babel({
      babelHelpers: 'runtime',
      extensions,
      plugins: [
        ['@babel/plugin-transform-runtime', { version: '^7.20.0' }],
        '@emotion',
      ],
      presets: [
        '@babel/preset-env',
        [
          '@babel/preset-react',
          {
            importSource: '@emotion/react',
            runtime: 'automatic',
          },
        ],
        '@babel/preset-typescript',
      ],
    }),
  ],
};

export default rollupConfig;
