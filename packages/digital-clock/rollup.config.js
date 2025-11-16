import terser from '@rollup/plugin-terser';
import bundleSize from 'rollup-plugin-bundle-size';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json' with { type: "json" };

export default [
  {
    input: 'src/index.ts',
    output: [{ file: pkg.module, format: 'esm' }],
    plugins: [
      typescript({ cacheRoot: '.cache' }),
      terser(),
      bundleSize(),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
];
