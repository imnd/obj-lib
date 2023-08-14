import path  from 'path'
import { defineConfig } from 'vite'

const config = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'obj.js'),
      name: 'obj lib',
      fileName: 'obj'
    },
  }
});

export default config;
