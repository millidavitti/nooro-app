import Flex from "@/components/layouts/flex";
import { task_entry_jotai } from "@/data/atoms/app_data";
import { useAtom } from "jotai";
import React from "react";

export default function Palette() {
	const [task_entry, task_entry_setter] = useAtom(task_entry_jotai);

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
				{palette.map((color) => (
					<div
						key={color}
						id={color}
						className='data-[is-selected=true]:border-white data-[is-selected=true]:border-[4px] w-[52px] h-[52px] rounded-full cursor-pointer active:scale-95 transition'
						style={{ backgroundColor: color }}
						data-is-selected={task_entry.color === color}
					></div>
				))}
			</Flex>
		</Flex>
	);
}
const palette = [
	"#FF3B30",
	"#FF9500",
	"#FFCC00",
	"#34C759",
	"#007AFF",
	"#AF52DE",
	"#A2845E",
];
