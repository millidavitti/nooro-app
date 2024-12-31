import { atom } from "jotai";

export type Task = {
	id: string;
	title: string;
	color: string;
	completed: boolean;
	createdAt: string;
	updatedAt: string;
};

export const tasks_jotai = atom<Task[]>([]);

export type TaskEntry = {
	title: string;
	color: string;
};

export const task_entry_jotai = atom<TaskEntry>({
	title: "",
	color: "",
});
