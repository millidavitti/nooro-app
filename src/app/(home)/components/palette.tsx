import Flex from "@/components/layouts/flex";
import { task_entry_jotai } from "@/data/atoms/app_data";
import { useSetAtom } from "jotai";
import React from "react";

export default function Palette() {
	const task_entry_setter = useSetAtom(task_entry_jotai);

	return (
		<Flex flex='column' className='p-0 gap-3'>
			<label className='text-[#4EA8DE] font-semibold'>Color</label>
			<Flex
				className='gap-3 p-0'
				htmlProps={{
					onClick(e) {
						task_entry_setter((task_entry) => {
							return {
								...task_entry,
								color: (e.target as HTMLElement).id,
							};
						});
					},
				}}
			>
				<div
					id='#FF3B30'
					className='w-[52px] h-[52px] rounded-full cursor-pointer active:scale-95 transition bg-[#FF3B30]'
				></div>
				<div
					id='#FF9500'
					className='w-[52px] h-[52px] rounded-full cursor-pointer active:scale-95 transition bg-[#FF9500]'
				></div>
				<div
					id='#FFCC00'
					className='w-[52px] h-[52px] rounded-full cursor-pointer active:scale-95 transition bg-[#FFCC00]'
				></div>
				<div
					id='#34C759'
					className='w-[52px] h-[52px] rounded-full cursor-pointer active:scale-95 transition bg-[#34C759]'
				></div>
				<div
					id='#007AFF'
					className='w-[52px] h-[52px] rounded-full cursor-pointer active:scale-95 transition bg-[#007AFF]'
				></div>
				<div
					id='#AF52DE'
					className='w-[52px] h-[52px] rounded-full cursor-pointer active:scale-95 transition bg-[#AF52DE]'
				></div>
				<div
					id='#A2845E'
					className='w-[52px] h-[52px] rounded-full cursor-pointer active:scale-95 transition bg-[#A2845E]'
				></div>
			</Flex>
		</Flex>
	);
}
