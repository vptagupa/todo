interface Repository {
    getTasks(): any;
    getTaskCount(): number;
    getTaskDoneCount(): number;
    create(task: string): any;
    delete(id: number): any;
    updateStatus(id: number): any;
    deleteAllDone(): any;
    deleteAll(): any;
}

export type { Repository };
