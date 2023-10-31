export const useTodo = () => {
    const { $vuexToDo } = useNuxtApp();

    return $vuexToDo;
};
