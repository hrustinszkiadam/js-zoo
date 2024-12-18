import { ReactNode } from 'react';

interface TitleRowProps {
	titles: ReactNode[];
}
const TitleRow = ({ titles }: TitleRowProps) => {
	return (
		<div className='top-0 flex w-full flex-row items-center'>{titles}</div>
	);
};

export default TitleRow;
