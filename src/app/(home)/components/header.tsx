import Flex from "@/components/layouts/flex";
import Image from "next/image";
import React from "react";

export default function Header() {
	return (
		<Flex className='justify-center bg-[#0D0D0D] h-[200px]' flex='row'>
			<Image src='/logo.svg' width={226} height={48} alt='logo' />
		</Flex>
	);
}
