import {
	createContext,
	PropsWithChildren,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react';
import { Animal, Species } from '../schema/zoo';
import { get } from '../api';

interface AnimalContextType {
	animals: Animal[];
	bySpecies: Species[];
	setAnimals: React.Dispatch<React.SetStateAction<Animal[]>>;
	setBySpecies: React.Dispatch<React.SetStateAction<Species[]>>;
}
const AnimalContext = createContext<AnimalContextType>({
	animals: [],
	bySpecies: [],
	setAnimals: () => {},
	setBySpecies: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useAnimals = () => useContext(AnimalContext);

const AnimalProvider = ({ children }: PropsWithChildren) => {
	const [animals, setAnimals] = useState<Animal[]>([]);
	const [bySpecies, setBySpecies] = useState<Species[]>([]);

	const getAnimals = useCallback(async () => {
		try {
			const data = await get();
			setAnimals(data);
		} catch (error) {
			console.error(error);
		}
	}, []);

	const getSpecies = useCallback(async () => {
		try {
			const data = await get('bySpecies');
			setBySpecies(data);
		} catch (error) {
			console.error(error);
		}
	}, []);

	useEffect(() => {
		getAnimals();
		getSpecies();
	}, [getAnimals, getSpecies]);

	return (
		<AnimalContext.Provider
			value={{
				animals,
				bySpecies,
				setAnimals,
				setBySpecies,
			}}
		>
			{children}
		</AnimalContext.Provider>
	);
};

export default AnimalProvider;
