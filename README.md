# example-pnpm-vite-react-lib

A React Library Repository Example with pnpm and vite.

Install fast with [pnpm](https://pnpm.js.org/). Develop fast with [vite](https://vitejs.dev/).

## Requirement

- [node](https://nodejs.org/)(^15.6.0)
- [pnpm](https://pnpm.js.org/)(^5.16.0)

## Setup

First, install the dependencies:

```sh
pnpm install
```

Now you can develop your library in the demo page:

```sh
cd packages/demo
pnpm run dev
```

You can also build and preview the demo page:

```sh
cd packages/demo
pnpm run build
pnpm run serve
```

You can build both `esm` and `umd` library production with one command:

```sh
cd packages/lib
pnpm run build
```

## License

MIT
