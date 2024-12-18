import { PageState } from '../../App';
import { useAnimals } from '../../contexts/AnimalContex';
import Column from './Column';
import Row from './Row';
import TitleRow from './TitleRow';

interface ListProps {
	pageState: PageState;
}
const List = ({ pageState }: ListProps) => {
	const { animals, bySpecies } = useAnimals();
	if (animals.length === 0 || bySpecies.length === 0)
		return <div>Loading...</div>;
	return (
		<div className='m-10 flex h-fit w-[95%] flex-col items-center overflow-y-auto border-2 border-gray-700 md:w-[50%] lg:w-[33%]'>
			{pageState === 'animals' ? (
				<>
					<TitleRow
						titles={Object.keys(animals[0])
							.slice(1)
							.map((key, idx) => (
								<Column
									key={idx}
									isTitle={true}
									content={
										key[0].toUpperCase() + key.slice(1)
									}
								/>
							))}
					/>
					{animals.map((a) => (
						<Row
							key={a.id}
							data={a}
						/>
					))}
				</>
			) : (
				<>
					<TitleRow
						titles={Object.keys(bySpecies[0])
							.reverse()
							.map((key, idx) => (
								<Column
									key={idx}
									isTitle={true}
									content={
										key[0].toUpperCase() + key.slice(1)
									}
								/>
							))}
					/>
					{bySpecies.map((a, idx) => (
						<Row
							key={idx}
							data={a}
						/>
					))}
				</>
			)}
		</div>
	);
};

export default List;
