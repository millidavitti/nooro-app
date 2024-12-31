"use server";

import { TaskEntry } from "@/data/atoms/app_data";

export async function editTask(id: string, update: Partial<TaskEntry>) {
	const headers = new Headers();
	headers.append("Content-type", "application/json");
	try {
		const res = await fetch(process.env.NOORO_API! + "/tasks/" + id, {
			method: "PUT",
			body: JSON.stringify(update),
			headers,
		});
		return await res.json();
	} catch (error) {
		console.log("---editTask---\n", error);
		throw error;
	}
}
