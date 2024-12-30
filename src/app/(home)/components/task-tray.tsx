import Flex from "@/components/layouts/flex";
import Image from "next/image";
import React from "react";
import EmptyTaskTrayMessage from "./empty-task-tray-message";
import Tasks from "./tasks";

export default function TaskTray() {
	return (
		<Flex className='h-full w-full justify-center'>
			{false && <EmptyTaskTrayMessage />}
			{true && <Tasks />}
		</Flex>
	);
}
