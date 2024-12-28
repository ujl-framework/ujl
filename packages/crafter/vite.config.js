import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
    build: {
        lib: {
            entry: './src/index.ts',
            name: 'Crafter',
            formats: ['es', 'cjs'],
            fileName: (format) => `crafter.${format}.js`
        },
        rollupOptions: {
            external: ['svelte'],
            output: {
                globals: {
                    svelte: 'Svelte'
                }
            }
        }
    },
    plugins: [svelte()]
});