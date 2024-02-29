# React - Vite Federation Demo

This example demos consumption of federated modules from a vite bundle. `host` (react based) depends on a component exposed by `remote` app (react based). This is an Nx workspace implementing [this example of vite-plugin-federation](https://github.com/originjs/vite-plugin-federation/tree/main/packages/examples/react-vite).

## Running

1. Install dependencies using pnpm
2. Preview the remote app:

```bash
pnpm nx preview remote
```

3. View the remote app at [localhost:4301](http://localhost:4301/)

4. Preview the host app in a separate terminal session:

```bash
pnpm nx apreview host
```

5. View the host app at [localhost:4300](http://localhost:4300/)

## Notes

This uses Project Crystal with Nx, which resolves the issues of using the previous `@nx/vite` executor. Now it just works!
