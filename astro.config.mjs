import {defineConfig} from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: 'https://wanrick.github.io',
    vite: {
        plugins: [tailwindcss()],
    },
    markdown: {
        shikiConfig: {
            theme: 'github-dark',
            themes: {
                light: 'github-light',
                dark: 'github-dark',
            },
            defaultColor: false,
            wrap: true,
            transformers: [],
        },
    }
});