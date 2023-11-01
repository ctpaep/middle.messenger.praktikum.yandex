import { resolve } from 'path'
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';


export default defineConfig({
    plugins: [handlebars()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                page500: resolve(__dirname, 'src/pages/500/index.html'),
                // login: resolve(__dirname, 'src/pages/login/index.hbs')
            }
        }
    }
})