export const useTodo = () => {
    const { $toDo } = useNuxtApp();

    return $toDo;
};
