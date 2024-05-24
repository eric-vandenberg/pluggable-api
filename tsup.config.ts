import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['./src/presentation/server/app.ts'],
    clean: true,
    format: ['cjs'],
    minify: true,
    dts: false,
    treeshake: true,
    splitting: true,
    outDir: './dist',
  },
]);
