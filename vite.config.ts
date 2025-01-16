
import path from 'path'

export default {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/idle.ts'),
      name: 'Idle',
    },
    rollupOptions: {
      external: ['idle.ts']
    },
    emptyOutDir: false
  }
}
