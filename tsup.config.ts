import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  target: 'es2020',
  outDir: './dist',
  external: ['unocss'],
  format: ['cjs', 'esm'],
  dts: true,
  minify: true,
  clean: true,
})
