import { useStore } from "vuex";

class Todo implements Repository {
    store;

    constructor() {
        this.store = useStore();
    }

    getTasks(): any {
        return this.store.getters["todo/tasks"];
    }

    getTaskCount(): number {
        return this.store.getters["todo/taskCount"];
    }

    getTaskDoneCount(): number {
        return this.store.getters["todo/taskDoneCount"];
    }

    create(task: string): any {
        this.store.commit("todo/create", task);
    }

    delete(id: number): any {
        this.store.commit("todo/delete", id);
    }

    updateStatus(id: number): any {
        this.store.commit("todo/updateStatus", id);
    }

    deleteAllDone(): any {
        this.store.commit("todo/deleteAllDone");
    }

    deleteAll(): any {
        this.store.commit("todo/deleteAll");
    }
}

export default Todo;
