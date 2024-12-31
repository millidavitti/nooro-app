import { createTask as createTaskAction } from "@/backend/actions/create-task";
import { task_entry_jotai } from "@/data/atoms/app_data";
import { task_form_jotai } from "@/data/atoms/ui_state";
import { useAtom } from "jotai";
import { toast } from "sonner";

export default function useCreateEditTaskInterface() {
	const [task_form, task_form_setter] = useAtom(task_form_jotai);
	const [task_entry, task_entry_setter] = useAtom(task_entry_jotai);

	function createTask() {
		task_form_setter(null);
		task_entry_setter({ color: "", title: "" });
		createTaskAction(task_entry)
			.then((status) => {
				console.log(status);
				toast.success("Task Created");
			})
			.catch((error) => {
				toast.error("Something went wrong");
				console.log("---createTask---\n", error);
			});
	}
	return {
		createTask,
		task_form,
		task_form_setter,
		task_entry,
		task_entry_setter,
	};
}
