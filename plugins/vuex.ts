import { createStore } from "vuex";
import todo from "../store/modules/todo";
import VuexPersist from "vuex-persist";

const vuexPersist = new VuexPersist({
    key: "todo-app",
    storage: process.client ? window.localStorage : undefined,
});

const store = createStore({
    modules: {
        todo: {
            namespaced: true,
            ...todo,
        },
    },
    plugins: [vuexPersist.plugin],
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store);
});
