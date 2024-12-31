import { Task, task_entry_jotai } from "@/data/atoms/app_data";
import { task_form_jotai } from "@/data/atoms/ui_state";
import { useSetAtom } from "jotai";

export default function useTaskInterface() {
	const task_form_setter = useSetAtom(task_form_jotai);
	const task_entry_setter = useSetAtom(task_entry_jotai);
	function editTask(task: Task) {
		task_form_setter("edit-task");
		task_entry_setter(task);
	}
	return { editTask };
}
