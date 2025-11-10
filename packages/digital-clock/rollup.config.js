import terser from '@rollup/plugin-terser';
import bundleSize from 'rollup-plugin-bundle-size';
import typescript from 'rollup-plugin-typescript2';
import jsx from 'rollup-plugin-jsx'

import pkg from './package.json' with { type: "json" };

export default [
  {
    input: 'src/index.ts',
    output: [{ file: pkg.module, format: 'esm' }],
    plugins: [
      typescript({cacheRoot: '.cache'}),
      jsx({ factory: 'React.createElement' }),
      terser(),
      bundleSize(),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
];
