import { tasks_jotai } from "@/data/atoms/app_data";
import { useAtomValue } from "jotai";

export default function useTaskInfoInterface() {
	const tasks = useAtomValue(tasks_jotai);
	const completedTaskCount = tasks.filter((task) => task.completed).length;
	return { taskCount: tasks?.length || 0, completedTaskCount };
}
