import { PriceVariant } from 'components/priceVariant/priceVariant';

export const PriceList = () => {
	return (
		<section
			id="cennik"
			className="flex w-full flex-col items-center justify-center"
		>
			<h2 className="text-center text-4xl font-bold">Cennik</h2>
			<div className="flex flex-col md:flex-row">
				<PriceVariant name="Podstawowy">
					<p>Podstawowe funkcje</p>
				</PriceVariant>
				<PriceVariant name="Popular" style="special" buttonType="fill">
					<p>Podstawowe funkcje</p>
				</PriceVariant>
				<PriceVariant name="Custom">
					<p>Podstawowe funkcje</p>
				</PriceVariant>
			</div>
		</section>
	);
};
