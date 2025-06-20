import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const root = resolve(__dirname, 'src');
// Define the configuration function
const configFunction = ({ command, mode }) => {
    return {
        root: 'src/frontend', // Set the root directory to src/frontend
        plugins: [
            vue()
        ],
        build: {
            emptyOutDir: false,
            rollupOptions: {
                output: {
                    dir: '../assets/frontend/',
                    entryFileNames: 'js/[name].js',
                    chunkFileNames: 'js/[name].js',
                    assetFileNames: 'css/[name].[ext]'
                }
            },
            minify: true
        },
        resolve: {
            alias: {
                '@': root,
            },
        },
        base: ''
    };
};
// Define the Vite configuration
const config = defineConfig(configFunction);
export default config;
