
import path from 'path'

export default {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/unlogin.ts'),
      name: 'unlogin',
    },
    rollupOptions: {
      external: ['unlogin.ts']
    },
    emptyOutDir: false
  }
}
