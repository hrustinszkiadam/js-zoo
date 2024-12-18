import { PageState } from '../App';

interface PageTogglerProps {
	state: [PageState, React.Dispatch<React.SetStateAction<PageState>>];
}
const PageToggler = ({ state }: PageTogglerProps) => {
	const [page, setPage] = state;
	return (
		<div className='flex flex-row flex-wrap items-center justify-center gap-3 pb-5 pt-20 text-center md:gap-x-7'>
			<button
				className={`w-28 rounded-lg px-4 py-2 md:w-32 ${
					page === 'animals'
						? 'bg-blue-500 text-white'
						: 'bg-gray-700'
				}`}
				onClick={() => setPage('animals')}
			>
				Animals
			</button>
			<button
				className={`w-28 rounded-lg px-4 py-2 md:w-32 ${
					page === 'species'
						? 'bg-blue-500 text-white'
						: 'bg-gray-700'
				}`}
				onClick={() => setPage('species')}
			>
				Species
			</button>
		</div>
	);
};

export default PageToggler;
