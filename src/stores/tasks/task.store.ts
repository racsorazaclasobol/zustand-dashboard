import { StateCreator, create } from "zustand";
import { Task, TaskStatus } from "../../interfaces";

interface TaskState {
    tasks: Record<string, Task>;
}

interface Actions {
    getTaskByStatus: (status: TaskStatus) => Task[];
}

type TaskStore = TaskState & Actions;

const storeApi: StateCreator<TaskStore> = (set, get) => ({
    tasks: {
        "ABC-1": { id: "1", title: "Task 1", status: "in-progress" },
        "ABC-2": { id: "2", title: "Task 2", status: "open" },
        "ABC-3": { id: "3", title: "Task 3", status: "open" },
        "ABC-4": { id: "4", title: "Task 4", status: "open" },
    },

    getTaskByStatus: (status: TaskStatus) => {
        const tasks = get().tasks;

        return Object.values(tasks).filter((task) => task.status === status);
    },
});

export const useTaskStore = create<TaskStore>()(storeApi);
