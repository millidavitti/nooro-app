import { atom } from "jotai";

export const task_form_jotai = atom<"create-task" | "edit-task" | null>(null);
