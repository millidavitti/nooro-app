import { cn } from "@/utils/cn";
import { HTMLProps, ReactNode } from "react";

interface FlexColumn {
	children?: ReactNode;
	className?: string;
	htmlProps?: Partial<HTMLProps<HTMLDivElement>>;
	flex?: "row" | "column";
}
export default function Flex({
	children,
	className,
	htmlProps,
	flex = "column",
}: FlexColumn) {
	return (
		<>
			{flex === "column" && (
				<div
					className={cn(
						"flex flex-col outline-2 overflow-y-auto bg-light-surface-surface-container-lowest rounded-lg",
						className,
					)}
					{...htmlProps}
				>
					{children}
				</div>
			)}
			{flex === "row" && (
				<div
					className={cn(
						"flex flex-col outline-2 overflow-x-auto bg-light-surface-surface-container-lowest rounded-lg",
						className,
					)}
					{...htmlProps}
				>
					{children}
				</div>
			)}
		</>
	);
}
