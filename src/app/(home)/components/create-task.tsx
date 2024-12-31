import Flex from "@/components/layouts/flex";
import Button from "@/components/ui/button";
import { task_form_jotai } from "@/data/atoms/ui_state";
import { useSetAtom } from "jotai";
import { CirclePlus } from "lucide-react";
import React from "react";

export default function CreateTask() {
	const task_form_setter = useSetAtom(task_form_jotai);

	return (
		<Flex
			flex='row'
			className='py-0 w-full justify-center shrink-0 absolute top-32'
		>
			<Button
				onClick={() => task_form_setter("create-task")}
				className='flex w-full basis-[736px] p-4 gap-3 justify-center bg-[#1E6F9F] text-white'
			>
				Create Task
				<CirclePlus />
			</Button>
		</Flex>
	);
}
