interface Tasks {
    tasks: Array<T>;
}

interface Task {
    id: number;
    name: string;
    status: object;
}

export { Tasks, Task };
