# React - Vite Federation Demo

This example demos consumption of federated modules from a vite bundle. `host` (react based) depends on a component exposed by `remote` app (react based). This is an Nx workspace implementing [this example of vite-plugin-federation](https://github.com/originjs/vite-plugin-federation/tree/main/packages/examples/react-vite).

## Running

1. Install dependencies using pnpm
2. Build and serve the remote app:

```bash
pnpm nx build remote && pnpm nx preview remote
```

3. View the remote app at [localhost:4301](http://localhost:4301/)

4. Build and serve the host app in a separate terminal session:

```bash
pnpm nx vite-build host && pnpm nx vite-preview host
```

5. View the host app at [localhost:4300](http://localhost:4300/)

## Notes

The `remote` app is able to use the `@nx/vite` executors for the `remote:build` and `remote:preview` tasks. The `host` app is unable to use these executors due to an error. You can see this by running the `host:build` and `host:preview` tasks. Running `vite` using the `run-commands` executor works, which is used by the `host:vite-build` and `host:vite-preview` tasks.
