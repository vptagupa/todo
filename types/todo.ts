interface Tasks {
    tasks: Array<T>;
}

interface Status {
    done: boolean;
}

interface Task {
    id: number;
    name: string;
    status: Status;
}

export type { Tasks, Task };
