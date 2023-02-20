import {
	FunctionItem,
	FunctionItemProps,
} from 'components/functionItem/functionItem';
import { Container } from 'components/container/container';

type FunctionType = FunctionItemProps;

const functions: FunctionType[] = [
	{
		icon: '/icons/rocket.png',
		name: 'Funkcja 1',
		status: 'planned',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla, dolor quis lobortis accumsan.',
	},
	{
		icon: '/icons/rocket.png',
		name: 'Funkcja 1',
		status: 'planned',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla, dolor quis lobortis accumsan, nisl nulla ullamcorper urna, eu sollicitudin erat est eget augue.',
	},
	{
		icon: '/icons/rocket.png',
		name: 'Funkcja 1',
		status: 'planned',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla, dolor quis lobortis accumsan, nisl nulla ullamcorper urna',
	},
	{
		icon: '/icons/rocket.png',
		name: 'Funkcja 1',
		status: 'planned',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla, dolor quis lobortis accumsan, nisl nulla ullamcorper urna, eu sollicitudin erat est eget augue.',
	},
	{
		icon: '/icons/rocket.png',
		name: 'Funkcja 1',
		status: 'planned',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla, dolor quis lobortis accumsan.',
	},
	{
		icon: '/icons/rocket.png',
		name: 'Funkcja 1',
		// status: '',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla, dolor quis lobortis accumsan, nisl nulla ullamcorper urna, eu sollicitudin erat est eget augue.',
	},
	{
		icon: '/icons/rocket.png',
		name: 'Funkcja 1',
		status: 'planned',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla, dolor quis lobortis accumsan, nisl nulla ullamcorper urna',
	},
	{
		icon: '/icons/rocket.png',
		name: 'Funkcja 1',
		// status: '',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla, dolor quis lobortis accumsan, nisl nulla ullamcorper urna, eu sollicitudin erat est eget augue.',
	},
	{
		icon: '/icons/rocket.png',
		name: 'Funkcja 1',
		// status: 'planned',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla, dolor quis lobortis accumsan.',
	},
	{
		icon: '/icons/rocket.png',
		name: 'Funkcja 1',
		// status: '',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla, dolor quis lobortis accumsan, nisl nulla ullamcorper urna, eu sollicitudin erat est eget augue.',
	},
	{
		icon: '/icons/rocket.png',
		name: 'Funkcja 1',
		status: 'planned',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla, dolor quis lobortis accumsan, nisl nulla ullamcorper urna',
	},
	{
		icon: '/icons/rocket.png',
		name: 'Funkcja 1',
		// status: '',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla, dolor quis lobortis accumsan, nisl nulla ullamcorper urna, eu sollicitudin erat est eget augue.',
	},
	{
		icon: '/icons/rocket.png',
		name: 'Funkcja 1',
		status: 'planned',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla, dolor quis lobortis accumsan.',
	},
	{
		icon: '/icons/rocket.png',
		name: 'Funkcja 1',
		// status: '',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla, dolor quis lobortis accumsan, nisl nulla ullamcorper urna, eu sollicitudin erat est eget augue.',
	},
	{
		icon: '/icons/rocket.png',
		name: 'Funkcja 1',
		// status: 'planned',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla, dolor quis lobortis accumsan, nisl nulla ullamcorper urna',
	},
	{
		icon: '/icons/rocket.png',
		name: 'Funkcja 1',
		status: 'planned',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla, dolor quis lobortis accumsan, nisl nulla ullamcorper urna, eu sollicitudin erat est eget augue.',
	},
];

export const Functions = () => {
	return (
		<section
			id="funkcje"
			className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-red-400 py-20"
		>
			<Container>
				<h2 className="text-center text-4xl font-bold text-white">Funkcje</h2>
				<p className="p-2 text-center font-medium text-white md:p-10 md:px-56">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
					fringilla, dolor quis lobortis accumsan, nisl nulla ullamcorper urna,
					eu sollicitudin erat est eget augue. Cras eleifend neque id lacus
					imperdiet, eget laoreet odio feugiat. Nunc non fringilla nibh. Morbi
					semper odio vestibulum nibh posuere sodales. Nullam vulputate ipsum in
					dui ultrices eleifend.
				</p>
				<div className="flex w-full flex-col flex-wrap justify-center p-2 md:flex-row md:p-2">
					{functions.map((functionObject, i) => {
						return <FunctionItem {...functionObject} key={i} />;
					})}
				</div>
			</Container>
		</section>
	);
};
