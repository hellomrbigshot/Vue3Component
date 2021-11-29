// import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'
import external from 'rollup-plugin-peer-deps-external'
import scss from 'rollup-plugin-scss'
import vuePlugin from 'rollup-plugin-vue'

const extensions = ['.vue', '.js']

const globals = {
  vue: 'Vue',
  'highlight.js': 'hljs',
  'marked': 'marked'
}

export default [
  {
    input: 'src/index.js',
    output: [
      {
        name: 'VueNextMEditor',
        file: pkg.main,
        format: 'umd',
        globals
      },
      {
        file: pkg.module,
        format: 'es'
      },
      {
        name: 'VueNextMEditor',
        file: pkg.unpkg,
        format: 'umd',
        plugins: [terser()],
        globals
      }
    ],
    plugins: [
      external(),
      scss({
        output: 'dist/index.min.css',
        outputStyle: 'compressed'
      }),
      vuePlugin(),
      resolve(),
      commonjs({ extensions })
    ]
  }
]
