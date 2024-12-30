import { getTasks } from "@/backend/actions/get-tasks";
import { tasks_jotai } from "@/data/atoms/app_data";
import { useAtom } from "jotai";
import React, { useEffect } from "react";

export default function useTasksInterface() {
	const [tasks, tasks_setter] = useAtom(tasks_jotai);
	useEffect(() => {
		getTasks()
			.then((tasks) => tasks_setter(tasks))
			.catch((error) => console.log(error));
	}, []);
	return { tasks };
}
