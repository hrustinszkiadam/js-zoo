import PageToggler from './components/PageToggler';
import List from './components/List/List';
import { useState } from 'react';

export type PageState = 'animals' | 'species';

const App = () => {
	const [pageState, setPageState] = useState<PageState>('animals');

	return (
		<div className='flex h-screen max-h-screen w-screen flex-col items-center justify-start gap-y-10 text-xl md:text-2xl'>
			<PageToggler state={[pageState, setPageState]} />
			<List pageState={pageState} />
		</div>
	);
};

export default App;
