import Flex from "@/components/layouts/flex";
import React from "react";

export default function TaskInfo() {
	return (
		<Flex className='w-full justify-center shrink-0'>
			<Flex flex='column' className='px-0 basis-[736px]'>
				<Flex className='justify-between px-0'>
					{/* Tasks */}
					<Flex flex='row' className='w-fit items-center gap-3 p-0'>
						<p className='text-[#4EA8DE] font-semibold'>Tasks</p>
						<div className='p-[2px] px-2 rounded-full text-white text-xs bg-[#333333]'>
							0
						</div>
					</Flex>
					{/* Completed */}
					<Flex flex='row' className='w-fit items-center gap-3 p-0'>
						<p className='text-[#8284FA] font-semibold'>Completed</p>
						<p className='p-[2px] px-2 rounded-full text-white text-xs bg-[#333333]'>
							0
						</p>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}