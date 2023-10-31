import type { Repository } from "~/types/repository";

export const useTodo = () => {
    const { $vuexToDo } = useNuxtApp();

    return $vuexToDo as Repository;
};
