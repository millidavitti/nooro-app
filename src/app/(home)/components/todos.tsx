"use client";
import Flex from "@/components/layouts/flex";
import React from "react";
import CreateTask from "./create-task";
import TaskInfo from "./task-info";
import TaskTray from "./task-tray";
import { useAtomValue } from "jotai";
import { task_form_jotai } from "@/data/atoms/ui_state";
import CreateEditTask from "./create-edit-task";

export default function Todos() {
	const task_form = useAtomValue(task_form_jotai);
	return (
		<Flex className='items-center w-full h-full' flex='column'>
			{!Boolean(task_form) ? (
				<>
					<CreateTask />
					<TaskInfo />
					<TaskTray />
				</>
			) : (
				<CreateEditTask />
			)}
		</Flex>
	);
}
