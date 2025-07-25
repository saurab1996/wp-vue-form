import {resolve} from 'path';
import { defineConfig, type UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import VueDevTools from 'vite-plugin-vue-devtools';
const root = resolve(__dirname,'src');

// Define the configuration function
const configFunction = ({ }: { command:string, mode: string }): UserConfig => {

  return {
    root: root, // Set the root directory to src/frontend
    plugins: [
      vue(),
      vueJsx(),
      VueDevTools(),
    ],
    server:{
      host: true
    },
    build: {
      manifest:true,
      rollupOptions: {
        output: {
          dir: '../assets/admin/',
          entryFileNames: 'js/[name].js',
          chunkFileNames: 'js/[name].js',
          assetFileNames: 'css/[name].[ext]'
        }
      },
    },
    resolve: {
      alias: {
        '@': root,
      },
    },
    base:''
  };
};

// Define the Vite configuration
const config: UserConfig = defineConfig(configFunction as UserConfig);

export default config;
