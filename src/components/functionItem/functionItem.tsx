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
		<Card size="md:w-1/4" className="flex flex-col items-center justify-center">
			<Image src={icon} alt="" width="30" height="30" className="pb-3" />
			<h3 className="text-center font-bold">{name}</h3>
			<p className="text-center">{description}</p>
		</Card>
	);
};
