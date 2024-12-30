"use server";

import { Task } from "@/data/atoms/app_data";

export async function getTasks() {
	try {
		const res = await fetch(process.env.NOORO_API! + "/tasks");
		const tasks = await res.json();
		return tasks.tasks as Task[];
	} catch (error) {
		console.log("---getTasks---\n", error);
		throw error;
	}
}
