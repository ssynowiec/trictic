import { Button } from 'components/button/button';
import { Card } from 'components/card/card';
import { ReactNode } from 'react';

type PriceVariantProps = {
	name: string;
	style?: 'special';
	buttonType?: 'fill' | 'outline';
	buttonText?: string;
	price: string;
	children: ReactNode;
};
export const PriceVariant = ({
	name,
	style,
	buttonType = 'outline',
	buttonText = 'Wybierz',
	price,
	children,
}: PriceVariantProps) => {
	return (
		<Card
			size="w-full m-0 my-5 md:m-3 md:w-1/3"
			style={style}
			className="flex flex-col"
		>
			<h3 className="text-center text-2xl font-medium">{name}</h3>
			{children}
			<p className="pt-3 text-center text-2xl font-bold">{price} zł</p>
			<Button style={buttonType}>{buttonText}</Button>
		</Card>
	);
};
