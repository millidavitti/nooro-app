import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { Check, Trash2 } from "lucide-react";
import React from "react";

export default function Task() {
	return (
		<Flex className='gap-3 bg-[#262626] w-full text-white items-center cursor-pointer rounded-lg '>
			{/* Checkbox */}
			<div className='cursor-pointer min-w-5 min-h-5 p-1 outline outline-2 outline-[#4EA8DE] rounded-full overflow-clip'>
				{true && <Check size={12} />}
			</div>
			<p className='active:scale-[.99] transition'>
				Integer urna interdum massa libero auctor neque turpis turpis semper.
				Duis vel sed fames integer.
			</p>
			<InteractiveIcon>
				<Trash2 className='text-[#808080]' />
			</InteractiveIcon>
		</Flex>
	);
}
