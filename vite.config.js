import {resolve} from 'path'
import {defineConfig} from 'vite'
import handlebars from 'vite-plugin-handlebars';

const global = {
    '/index.html': {
        title: 'Main Page',
    },
    'src/pages/registration/index.html': {
        title: 'Регистрация',
    },
};

export default defineConfig({
    root: resolve('src/'),
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                profile: resolve(__dirname, 'src/pages/profile/index.html'),
                login: resolve(__dirname, 'src/pages/login/index.html'),
                registration: resolve(__dirname, 'src/pages/registration/index.html'),
                chat: resolve(__dirname, 'src/pages/chat/index.html'),
                '404': resolve(__dirname, 'src/pages/page404/index.html'),
                '500': resolve(__dirname, 'src/pages/page500/index.html'),
            },
        },
        outDir: resolve(__dirname, 'dist/'),
    },
    plugins: [handlebars({
        partialDirectory: resolve(__dirname, 'src/partials'),
        context: {
            global: 'global',
        }
    })],
})