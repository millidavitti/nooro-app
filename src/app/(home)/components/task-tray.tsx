import Flex from "@/components/layouts/flex";
import React from "react";
import EmptyTaskTrayMessage from "./empty-task-tray-message";
import Tasks from "./tasks";
import { tasks_jotai } from "@/data/atoms/app_data";
import { useAtomValue } from "jotai";

export default function TaskTray() {
	const tasks = useAtomValue(tasks_jotai);
	return (
		<Flex className='h-full w-full justify-center'>
			{tasks.length ? <Tasks /> : <EmptyTaskTrayMessage />}
		</Flex>
	);
}
