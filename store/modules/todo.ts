import type { Tasks, Task } from "~/types/todo";

const Todo = {
    state: (): Tasks => ({
        tasks: [],
    }),

    mutations: {
        create(state: Tasks, task: Task) {
            state.tasks = state.tasks.concat({
                id: state.tasks.length + 1,
                name: task,
                status: {
                    done: false,
                },
            });
        },
        delete(state: Tasks, id: number) {
            state.tasks = state.tasks.filter((task: Task) => task.id != id);
        },
        updateStatus(state: Tasks, id: number) {
            state.tasks = state.tasks.map((task: Task) => {
                if (task.id == id) {
                    task.status = {
                        done: !task.status.done,
                    };
                }

                return task;
            });
        },
        deleteAllDone(state: Tasks) {
            state.tasks = state.tasks.filter(
                (task: Task) => task.status.done === false
            );
        },
        deleteAll(state: Tasks) {
            state.tasks = [];
        },
    },

    getters: {
        tasks: (state: Tasks) => state.tasks,
        taskCount: (state: Tasks) => state.tasks.length,
        taskDoneCount: (state: Tasks) =>
            state.tasks.filter((task: Task) => task.status.done === true)
                .length,
    },
};

export default Todo;
