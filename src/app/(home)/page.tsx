import Flex from "@/components/layouts/flex";
import Header from "./components/header";
import Todos from "./components/todos";

export default function Home() {
	return (
		<Flex
			className='w-full h-full outline p-0 relative gap-8 bg-[#1A1A1A]'
			flex='column'
		>
			<Header />
			<Todos />
		</Flex>
	);
}
