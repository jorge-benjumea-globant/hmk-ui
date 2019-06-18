import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

const dist = "lib";

export default [
  {
    input: "./src/components/index.js",
    output: {
      file: `${dist}/components.js`,
      format: "cjs"
    },
    plugins: [
      resolve(),
      babel({
        exclude: "node_modules/**"
      }),
      commonjs({
        include: "node_modules/**"
      })
    ],

    external: [
      "react",
      "styled-components",
      "prop-types",
      "lodash",
      "pick-react-known-prop"
    ]
  },
  {
    input: "./src/theme/index.js",
    output: {
      file: `${dist}/theme.js`,
      format: "cjs"
    },
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      resolve({
        module: true,
        main: true
      }),
      commonjs({
        include: "node_modules/**"
      })
    ]
  }
];
