import Flex from "@/components/layouts/flex";
import Button from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import React from "react";

export default function CreateTask() {
	return (
		<Flex flex='row' className='p-0 w-full justify-center shrink-0'>
			<Button className='flex w-full basis-[736px] p-4 gap-3 justify-center bg-[#1E6F9F] text-white'>
				Create Task
				<CirclePlus />
			</Button>
		</Flex>
	);
}
