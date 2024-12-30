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
