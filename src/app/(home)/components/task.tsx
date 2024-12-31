import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { type Task } from "@/data/atoms/app_data";
import useTaskInterface from "@/hooks/interface/use-task-interface";
import { Check, Trash2 } from "lucide-react";
import React from "react";

interface TaskComponent {
	task: Task;
}
export default function TaskComponent({ task }: TaskComponent) {
	const { editTask } = useTaskInterface();
	return (
		<Flex className='shrink-0 gap-3 bg-[#262626] w-full text-white items-center cursor-pointer rounded-lg '>
			{/* Checkbox */}
			<div className='cursor-pointer min-w-5 min-h-5 p-1 outline outline-2 outline-[#4EA8DE] rounded-full overflow-clip'>
				{true && <Check size={12} />}
			</div>
			<p
				className='active:scale-[.99] transition w-full'
				onClick={() => editTask(task)}
			>
				{task.title}
			</p>
			<InteractiveIcon className='ml-auto'>
				<Trash2 className='text-[#808080]' />
			</InteractiveIcon>
		</Flex>
	);
}
