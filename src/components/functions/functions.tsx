import {
	FunctionItem,
	FunctionItemProps,
} from 'components/functionItem/functionItem';

type FunctionType = FunctionItemProps;

const functions: FunctionType[] = [
	{ icon: '/rocket.png', name: 'Funkcja 1', description: 'Lorem ipsum' },
	{ icon: '/rocket.png', name: 'Funkcja 1', description: 'Lorem ipsum' },
	{ icon: '/rocket.png', name: 'Funkcja 1', description: 'Lorem ipsum' },
	{ icon: '/rocket.png', name: 'Funkcja 1', description: 'Lorem ipsum' },
];

export const Functions = () => {
	return (
		<section
			id="funkcje"
			className="flex min-h-screen w-full flex-col items-center justify-center"
		>
			<h2 className="text-center text-4xl font-bold">Funkcje</h2>
			<p>Lorem ipsum</p>
			<div className="flex w-full flex-col justify-around md:flex-row md:px-12">
				{functions.map((functionObject, i) => {
					return <FunctionItem {...functionObject} key={i} />;
				})}
			</div>
			<div className="flex w-full flex-col justify-around md:flex-row md:px-12">
				{functions.map((functionObject, i) => {
					return <FunctionItem {...functionObject} key={i} />;
				})}
			</div>
			<div className="flex w-full flex-col justify-around md:flex-row md:px-12">
				{functions.map((functionObject, i) => {
					return <FunctionItem {...functionObject} key={i} />;
				})}
			</div>
		</section>
	);
};
