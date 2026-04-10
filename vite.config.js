import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' ;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // server: {
  //   historyApiFallback: true, // 👈 add this
  // },
// server: {
//     proxy: {},
//   },
//   appType: 'spa', 
  // server:{
  //   open: true,
  // },
  esbuild: {
    drop: ['console', 'debugger'],
  }

})
