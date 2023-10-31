import { createStore } from "vuex";
import moduleToDo from "../store/modules/todo";
import Todo from "../repository/modules/todo";
import VuexPersist from "vuex-persist";

const vuexPersist = new VuexPersist({
    key: "todo-app",
    storage: process.client ? window.localStorage : undefined,
});

const store = createStore({
    modules: {
        todo: {
            namespaced: true,
            ...moduleToDo,
        },
    },
    plugins: [vuexPersist.plugin],
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store);

    return {
        provide: {
            toDo: new Todo(),
        },
    };
});
