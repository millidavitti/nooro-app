import Flex from "@/components/layouts/flex";
import React from "react";
import Tasks from "./tasks";

export default function TaskTray() {
	return (
		<Flex className='h-full w-full justify-center'>
			<Tasks />
		</Flex>
	);
}
