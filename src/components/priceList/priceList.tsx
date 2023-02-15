import { PriceVariant } from 'components/priceVariant/priceVariant';
import { VariantOption } from 'components/variantOption/variantOption';

export const PriceList = () => {
	return (
		<section
			id="cennik"
			className="flex h-screen w-full flex-col items-center justify-center"
		>
			<h2 className="text-center text-4xl font-bold">Cennik</h2>
			<div className="flex flex-col md:flex-row">
				<PriceVariant name="Podstawowy" price="1400">
					<p className="p-2 text-center">Pakiet podstawowych funkcji</p>
					<VariantOption name="Podstawowe funkcje" />
					<VariantOption name="Podstawowe wsparcie techniczne" />
					<VariantOption name="Dostęp do wszystkich opcji" contains={false} />
				</PriceVariant>
				<PriceVariant
					name="Popular"
					style="special"
					buttonType="fill"
					price="1500"
				>
					<p className="p-2 text-center">
						Najczęściej wybierany przez klientów
					</p>
					<VariantOption name="Funkcje wariantu podstawowego" />
					<VariantOption name="Rozszerzone wsparcie" />
				</PriceVariant>
				<PriceVariant name="Custom" price="od 1450">
					<p className="p-2 text-center">
						Pakiet dostosowany do Twoich potrzeb
					</p>
					<VariantOption name="Podstawowe funkcje" />
					<VariantOption name="Możliwość wyboru spośród wszystkich opcji" />
					<VariantOption name="Priorytetowa pomoc" />
				</PriceVariant>
			</div>
		</section>
	);
};
