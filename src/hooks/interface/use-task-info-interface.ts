import { tasks_jotai } from "@/data/atoms/app_data";
import { useAtomValue } from "jotai";

export default function useTaskInfoInterface() {
	const tasks = useAtomValue(tasks_jotai);
	return { taskCount: tasks?.length };
}