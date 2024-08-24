import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/foresee-revamp2/",
  plugins: [react(),
  viteStaticCopy({
    targets: [
      {
        src: 'node_modules/**/maps/*',
        dest: 'maps'
      }
    ]
    // targets: [
    //   {
    //     src: 'node_modules/**/public/*',
    //     dest: ''
    //   }
    // ]
  })
  ],
  build: {
    //   rollupOptions: {
    //     output: {
    //       manualChunks(id) {
    //         if (id.includes('node_modules')) {
    //           return id.toString().split('node_modules/')[1].split('/')[0].toString();
    //         }
    //       }
    //     }
    //   }
  }
})
