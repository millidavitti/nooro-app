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
	const { editTask, deleteTask, markTask } = useTaskInterface();
	return (
		<Flex className='shrink-0 gap-3 bg-[#262626] w-full text-white items-center cursor-pointer rounded-lg '>
			{/* Checkbox */}
			<div
				className='cursor-pointer min-w-5 min-h-5 p-1 data-[is-completed=false]:outline outline-2 data-[is-completed=false]:outline-[#4EA8DE] rounded-full overflow-clip active:scale-95 data-[is-completed=true]:bg-[#5E60CE]'
				onClick={() => markTask(task.id, { completed: !task.completed })}
				data-is-completed={task.completed}
			>
				{task.completed && <Check size={12} className='stroke-[4px]' />}
			</div>
			{/* Task Content */}
			<p
				className='active:scale-[.99] transition w-full data-[is-completed=true]:line-through data-[is-completed=true]:text-[#808080]'
				onClick={() => editTask(task)}
				data-is-completed={task.completed}
			>
				{task.title}
			</p>
			<InteractiveIcon className='ml-auto' callback={() => deleteTask(task.id)}>
				<Trash2 className='text-[#808080]' />
			</InteractiveIcon>
		</Flex>
	);
}
