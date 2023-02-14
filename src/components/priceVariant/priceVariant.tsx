import { Button } from 'components/button/button';
import { Card } from 'components/card/card';
import { ReactNode } from 'react';

type PriceVariantProps = {
	name: string;
	style?: 'special';
	buttonType?: 'fill' | 'outline';
	buttonText?: string;
	children: ReactNode;
};
export const PriceVariant = ({
	name,
	style,
	buttonType = 'outline',
	buttonText = 'Wybierz',
	children,
}: PriceVariantProps) => {
	return (
		<Card
			size="w-full md:w-1/3"
			style={style}
			className="flex flex-col items-center justify-center"
		>
			<h3 className="text-center text-2xl font-medium">{name}</h3>
			{children}
			<Button style={buttonType}>{buttonText}</Button>
		</Card>
	);
};
