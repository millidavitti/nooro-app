import Flex from "@/components/layouts/flex";
import React from "react";

export default function Palette() {
	return (
		<Flex flex='column' className='p-0 gap-3'>
			<label className='text-[#4EA8DE] font-semibold'>Color</label>
			<Flex className='gap-3 p-0'>
				<div className='w-[52px] h-[52px] rounded-full cursor-pointer bg-[#FF3B30]'></div>
				<div className='w-[52px] h-[52px] rounded-full cursor-pointer bg-[#FF9500]'></div>
				<div className='w-[52px] h-[52px] rounded-full cursor-pointer bg-[#FFCC00]'></div>
				<div className='w-[52px] h-[52px] rounded-full cursor-pointer bg-[#34C759]'></div>
				<div className='w-[52px] h-[52px] rounded-full cursor-pointer bg-[#007AFF]'></div>
				<div className='w-[52px] h-[52px] rounded-full cursor-pointer bg-[#AF52DE]'></div>
				<div className='w-[52px] h-[52px] rounded-full cursor-pointer bg-[#A2845E]'></div>
			</Flex>
		</Flex>
	);
}
