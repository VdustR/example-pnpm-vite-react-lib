import glob from "glob";
import { join } from "path";
import { terser } from "rollup-plugin-terser";
import path from "path";
import typescript from "rollup-plugin-typescript2";
import tsconfig from "./tsconfig.json";

const inputFiles = glob.sync("src/**/*.{js,jsx,ts,tsx}", {
  cwd: join(__dirname),
  ignore: tsconfig.exclude,
});
const input = path.join(__dirname, "src/index.ts");
const name = "MyLib";

/** @type {import('rollup').RollupOptions} */
const config = [
  {
    input: inputFiles,
    preserveModules: true,
    output: [
      {
        dir: "dist/esm",
        format: "es",
        name,
      },
    ],
    plugins: [
      typescript({
        tsconfig: "tsconfig.json",
        tsconfigOverride: { compilerOptions: { declaration: true } },
      }),
    ],
  },
  {
    input,
    output: [
      {
        file: "dist/umd/index.min.js",
        format: "umd",
        name,
        sourcemap: "source-map",
      },
    ],
    plugins: [
      typescript({
        tsconfig: "tsconfig.json",
      }),
      terser({ ecma: 5, ie8: true }),
    ],
  },
];

export default config;
