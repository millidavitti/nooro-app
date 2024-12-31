import Flex from "@/components/layouts/flex";
import Image from "next/image";
import React from "react";

export default function EmptyTaskTrayMessage() {
	return (
		<Flex
			flex='column'
			className='px-0 basis-[736px] h-full justify-center items-center'
		>
			<Image src='/clipboard.svg' width={56} height={56} alt='clipboard' />
			<Flex flex='column' className='items-center'>
				<p className='text-[#808080] font-semibold'>
					You don&apos;t have any tasks registered yet.
				</p>
				<p className='text-[#808080]'>
					Create tasks and organize your to-do items.
				</p>
			</Flex>
		</Flex>
	);
}
