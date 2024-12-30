import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Button from "@/components/ui/button";
import { task_form_jotai } from "@/data/atoms/ui_state";
import { useAtom, useAtomValue } from "jotai";
import { ArrowLeft, CirclePlus } from "lucide-react";
import React from "react";
import Palette from "./palette";

export default function CreateEditTask() {
	const [task_form, task_form_setter] = useAtom(task_form_jotai);

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

				<form
					className='flex flex-col gap-3'
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					{/* Task Title */}
					<Flex flex='column' className='p-0 gap-3'>
						<label className='text-[#4EA8DE] font-semibold'>Title</label>
						<input
							type='text'
							placeholder='Ex. Brush your teeth'
							className='p-3 outline-none rounded-lg text-white bg-[#262626] placeholder:text-[#333333]'
						/>
					</Flex>
					<Palette />

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
								<CirclePlus />
							</Button>
						)}
					</Flex>
				</form>
			</Flex>
		</Flex>
	);
}
