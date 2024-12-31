"use server";

import { TaskEntry } from "@/data/atoms/app_data";

export async function createTask(taskEntry: TaskEntry) {
	const headers = new Headers();
	headers.append("Content-type", "application/json");
	try {
		const res = await fetch(process.env.NOORO_API! + "/tasks", {
			method: "POST",
			body: JSON.stringify(taskEntry),
			headers,
		});
		return await res.json();
	} catch (error) {
		console.log("---createTask---\n", error);
		throw error;
	}
}
