import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import image from '@rollup/plugin-image';
import scss from 'rollup-plugin-scss';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';




export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "iife",
    sourcemap: true,
  },
  plugins: [
    image(),
  
       

    nodeResolve({
      extensions: [".js"],
    }),
    replace({
        preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify( 'development' )
    }),
    postcss({
        extensions: [".css"],
      }),
    babel({
      presets: ["@babel/preset-react"],
    }),
    commonjs(),
    serve({
      open: true,
      verbose: true,
      contentBase: ["", "public"],
      host: "localhost",
      port: 3000,
    }),
    livereload({ watch: "dist" }),
  ]
};