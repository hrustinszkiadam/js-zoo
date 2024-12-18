import Column from './Column';
import { Animal, Species } from '../../schema/zoo';

interface RowProps {
	data: Animal | Species;
}
const Row = ({ data }: RowProps) => {
	return (
		<div className='flex w-full flex-row items-center justify-between'>
			{'_count' in data ? (
				<>
					<Column content={data.species} />
					<Column content={data._count} />
				</>
			) : (
				<>
					<Column content={data.name} />
					<Column content={data.species} />
					<Column content={data.age} />
				</>
			)}
		</div>
	);
};

export default Row;
