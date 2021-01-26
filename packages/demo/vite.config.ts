import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";
import path from "path";
import tsconfig from "./tsconfig.json";

export default defineConfig({
  alias: Object.fromEntries(
    Object.entries(tsconfig.compilerOptions.paths).map(([key, value]) => [
      key,
      path.resolve(__dirname, value[0]),
    ])
  ),
  dedupe: ["react", "react-dom"],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  plugins: [reactRefresh()],
});
