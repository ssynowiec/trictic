import { ReactNode } from 'react';

type ButtonProps = {
	children: ReactNode;
	style?: 'fill' | 'outline';
};

export const Button = ({ children, style = 'fill' }: ButtonProps) => {
	return style === 'fill' ? (
		<button className="group relative m-5 inline-block rounded px-5 py-2.5 font-medium text-white">
			<span className="absolute top-0 left-0 h-full w-full rounded bg-gradient-to-br from-blue-600 to-red-500 opacity-50 blur-sm filter"></span>
			{/*<span className="absolute inset-0 mt-0.5 ml-0.5 h-full w-full rounded bg-gradient-to-br from-blue-600 to-red-500 opacity-50 filter group-active:opacity-0"></span>*/}
			<span className="absolute inset-0 h-full w-full rounded bg-gradient-to-br from-blue-600 to-red-500 shadow-xl filter transition-all duration-200 ease-out group-hover:blur-sm group-active:opacity-0"></span>
			<span className="absolute inset-0 h-full w-full rounded bg-gradient-to-br from-blue-500 to-red-600 transition duration-200 ease-out"></span>
			<span className="relative px-4">{children}</span>
		</button>
	) : (
		<button className="group relative m-5 rounded border-2 px-5 py-2.5 font-medium text-black">
			<span className="absolute top-0 left-0 h-full w-full rounded bg-gradient-to-br from-blue-600 to-red-500 opacity-50 blur-sm filter transition-all duration-200 ease-out group-hover:blur-md"></span>
			{/*<span className="absolute inset-0 mt-0.5 ml-0.5 h-full w-full rounded bg-gradient-to-br from-blue-600 to-red-500 opacity-50 filter group-active:opacity-0"></span>*/}
			<span className="absolute top-0 left-0 h-full w-full rounded bg-white"></span>
			<span className="relative px-4">{children}</span>
		</button>
	);
};
