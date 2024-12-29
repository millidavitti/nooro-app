import Flex from "@/components/layouts/flex";
import React from "react";
import Task from "./task";

export default function Tasks() {
	return (
		<Flex flex='column' className='gap-3 basis-[736px] h-full'>
			{[2, 3].map((task) => (
				<Task key={task} />
			))}
		</Flex>
	);
}
