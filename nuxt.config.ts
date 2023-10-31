// https://nuxt.com/docs/api/configuration/nuxt-config
import type { ThemeDefinition } from "vuetify";

const customTheme: ThemeDefinition = {
    colors: {
        background: "#6A1B9A",
    },
};

export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@invictus.codes/nuxt-vuetify"],
    vuetify: {
        /* vuetify options */
        vuetifyOptions: {
            // @TODO: list all vuetify options
            theme: {
                defaultTheme: "customTheme",
                themes: {
                    customTheme,
                },
            },
        },
        moduleOptions: {
            /* nuxt-vuetify module options */
            treeshaking: true,
            useIconCDN: true,
            /* vite-plugin-vuetify options */
            styles: true,
            autoImport: true,
            useVuetifyLabs: true,
        },
    },
    css: ["~/assets/scss/main.scss"],
});
