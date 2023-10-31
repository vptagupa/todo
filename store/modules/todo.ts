const Todo = {
    state: () => ({
        tasks: [],
    }),

    mutations: {
        create(state: any, task: any) {
            state.tasks = state.tasks.concat({
                id: state.tasks.length + 1,
                name: task,
                status: {
                    done: false,
                },
            });
        },
        delete(state: any, id: number) {
            state.tasks = state.tasks.filter((task: any) => task.id != id);
        },
        updateStatus(state: any, id: number) {
            state.tasks = state.tasks.map((task: any) => {
                if (task.id == id) {
                    task.status = {
                        done: !task.status.done,
                    };
                }

                return task;
            });
        },
        deleteAllDone(state: any) {
            state.tasks = state.tasks.filter(
                (task: any) => task.status.done === false
            );
        },
        deleteAll(state: any) {
            state.tasks = [];
        },
    },
};

export default Todo;
