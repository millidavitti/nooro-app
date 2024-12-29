import Flex from "@/components/layouts/flex";
import React from "react";
import CreateTask from "./create-task";
import TaskInfo from "./task-info";
import TaskTray from "./task-tray";

export default function Todos() {
	return (
		<Flex className='items-center w-full h-full bg-[#1A1A1A]' flex='column'>
			<CreateTask />
			<TaskInfo />
			<TaskTray />
		</Flex>
	);
}
