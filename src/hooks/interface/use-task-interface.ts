import { deleteTask as deleteTaskAction } from "@/backend/actions/delete-task";
import { getTasks } from "@/backend/actions/get-tasks";
import { Task, task_entry_jotai, tasks_jotai } from "@/data/atoms/app_data";
import { task_form_jotai } from "@/data/atoms/ui_state";
import { useAtom, useSetAtom } from "jotai";
import { toast } from "sonner";

export default function useTaskInterface() {
	const task_form_setter = useSetAtom(task_form_jotai);
	const task_entry_setter = useSetAtom(task_entry_jotai);
	const tasks_setter = useSetAtom(tasks_jotai);

	function editTask(task: Task) {
		task_form_setter("edit-task");
		task_entry_setter(task);
	}
	function deleteTask(id: string) {
		deleteTaskAction(id)
			.then((status) => {
				console.log(status);
				toast.success("Deleted Task");
				getTasks()
					.then((tasks) => tasks_setter(tasks))
					.catch((error) => console.log(error));
			})
			.catch((error) => {
				toast.error("Something went wrong");
				console.log("---deleteTask---\n", error);
			});
	}

	return { editTask, deleteTask };
}
