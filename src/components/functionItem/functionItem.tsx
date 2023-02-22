import Image from 'next/image';
import { Card } from 'components/card/card';

export type FunctionItemProps = {
	icon: string;
	name: string;
	description: string;
	status?: 'implemented' | 'planned';
};
export const FunctionItem = ({
	icon,
	name,
	description,
	status = 'implemented',
}: FunctionItemProps) => {
	return (
		<Card
			size="w-full mx-0 md:mx-4 md:w-1/5"
			className="flex flex-col items-center justify-center px-2"
		>
			{status === 'planned' && (
				<span className="absolute top-0 left-0 flex items-center justify-center rounded bg-gradient-to-br from-blue-500 to-red-400 px-2 py-1 text-center text-white">
					planowana
				</span>
			)}

			<Image src={icon} alt="" width="30" height="30" className="pb-3" />
			<h3 className="text-center text-2xl font-bold">{name}</h3>
			<p className="text-center font-light">{description}</p>
		</Card>
	);
};
