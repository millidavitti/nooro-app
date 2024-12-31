import Flex from "@/components/layouts/flex";
import Button from "@/components/ui/button";
import { ArrowLeft, Check, CirclePlus } from "lucide-react";
import React from "react";
import Palette from "./palette";
import useCreateEditTaskInterface from "@/hooks/interface/use-create-edit-task-interface";
import { Task } from "@/data/atoms/app_data";

export default function CreateEditTask() {
	const {
		createTask,
		editTask,
		task_entry,
		task_entry_setter,
		task_form,
		task_form_setter,
	} = useCreateEditTaskInterface();

	return (
		<Flex className='w-full justify-center shrink-0'>
			<Flex
				flex='column'
				className='px-0 basis-[736px] h-full justify-center gap-3'
			>
				<ArrowLeft
					className='text-white cursor-pointer active:scale-95'
					onClick={() => task_form_setter(null)}
				/>
				{/* Create or Edit Task Form */}
				<form
					className='flex flex-col gap-3'
					onSubmit={(e) => {
						e.preventDefault();
						if (task_form === "create-task") createTask();
						else
							editTask((task_entry as Task).id, {
								color: task_entry.color,
								title: task_entry.title,
							});
					}}
				>
					{/* Task Title */}
					<Flex flex='column' className='p-0 gap-3'>
						<label className='text-[#4EA8DE] font-semibold'>Title</label>
						<input
							type='text'
							required
							value={task_entry.title}
							placeholder='Ex. Brush your teeth'
							className='p-3 outline-none rounded-lg text-white bg-[#262626] placeholder:text-[#333333]'
							onChange={(e) => {
								task_entry_setter((task_entry) => {
									return { ...task_entry, title: e.target.value };
								});
							}}
						/>
					</Flex>

					<Flex flex='column' className='p-0 gap-3 relative'>
						<input
							id='color-palette'
							type='text'
							required
							value={task_entry.color}
							onChange={() => {}}
							className='absolute bottom-0 z-[-1] p-3 outline-none rounded-lg text-white bg-[#262626] placeholder:text-[#333333]'
						/>
						<Palette />
					</Flex>

					{/* Task Actions */}
					<Flex flex='row' className='p-0 w-full justify-center shrink-0'>
						{task_form === "create-task" ? (
							<Button className='flex w-full basis-[736px] p-4 gap-3 justify-center bg-[#1E6F9F] text-white'>
								Add Task
								<CirclePlus />
							</Button>
						) : (
							<Button className='flex w-full basis-[736px] p-4 gap-3 justify-center bg-[#1E6F9F] text-white'>
								Save Task
								<Check />
							</Button>
						)}
					</Flex>
				</form>
			</Flex>
		</Flex>
	);
}
