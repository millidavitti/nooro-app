import Flex from "@/components/layouts/flex";
import React from "react";
import Task from "./task";

import useTasksInterface from "@/hooks/interface/use-tasks-interface";
import EmptyTaskTrayMessage from "./empty-task-tray-message";

export default function Tasks() {
	const { tasks } = useTasksInterface();

	return (
		<>
			{tasks.length ? (
				<Flex flex='column' className='gap-3 basis-[736px] h-full'>
					{tasks.map((task) => (
						<Task key={task.id} task={task} />
					))}
				</Flex>
			) : (
				<EmptyTaskTrayMessage />
			)}
		</>
	);
}
