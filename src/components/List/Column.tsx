import { ReactNode } from 'react';

interface ColumnProps {
	isTitle?: true;
	content: string | ReactNode;
	width?: string;
}
const Column = ({ isTitle, content, width }: ColumnProps) => {
	return (
		<div
			className={`h-full content-center border-2 border-gray-700 p-3 text-center text-xl md:text-2xl ${width ? `w-${width}` : 'w-full'} ${isTitle ? 'pb-10 font-extrabold' : ''}`}
		>
			{content}
		</div>
	);
};

export default Column;
