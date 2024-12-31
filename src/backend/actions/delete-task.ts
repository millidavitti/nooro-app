"use server";

export async function deleteTask(id: string) {
	try {
		const res = await fetch(process.env.NOORO_API! + "/tasks/" + id, {
			method: "DELETE",
		});
		return await res.json();
	} catch (error) {
		console.log("---deleteTask---\n", error);
		throw error;
	}
}
