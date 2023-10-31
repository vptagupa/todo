import { createStore } from "vuex";
import todo from "../store/modules/todo";

const store = createStore({
    modules: {
        todo: {
            namespaced: true,
            ...todo,
        },
    },
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store);
});
