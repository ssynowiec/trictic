import { PriceVariant } from 'components/priceVariant/priceVariant';
import { VariantOption } from 'components/variantOption/variantOption';
import { Container } from 'components/container/container';

export const PriceList = () => {
	return (
		<section
			id="cennik"
			className="flex min-h-screen w-full flex-col items-center justify-center pt-10 md:pt-12"
		>
			<Container>
				<h2 className="text-center text-4xl font-bold">Cennik</h2>
				<p className="p-2 text-center font-medium md:p-10 md:px-56">
					Oferujemy trzy wersje cenowe, które pozwalają na wybór odpowiedniego
					pakietu w zależności od potrzeb i wymagań naszych klientów. Pakiet
					podstawowy zawiera najważniejsze funkcje, które umożliwiają prostą
					edycję treści i integrację z mediami społecznościowymi. Pakiet popular
					oferuje dodatkowe funkcje, takie jak personalizowane powiadomienia i
					współpracę, które pozwalają na łatwiejsze i bardziej efektywne
					zarządzanie projektem. Ostatecznie, pakiet custom to najlepszy wybór
					dla klientów, którzy potrzebują zaawansowanych narzędzi analizy danych
					i dedykowanego supportu technicznego.
				</p>
				<div className="flex flex-col p-2 md:flex-row md:p-2">
					<PriceVariant name="Podstawowy" price="1400">
						<p className="p-2 text-center">Pakiet podstawowych funkcji</p>
						<VariantOption name="Edycja treści" />
						<VariantOption name="Zarządzanie użytkownikami" />
						<VariantOption
							name="Integracja z Google Analytics"
							contains={false}
						/>
						<VariantOption name="Integracja z social media" contains={false} />
						<VariantOption
							name="Personalizowane powiadomienia"
							contains={false}
						/>
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
						<VariantOption name="Wszystkie funkcje z pakietu podstawowego" />
						<VariantOption name="Personalizowane powiadomienia" />
						<VariantOption name="Współpraca" />
						<VariantOption name="Integracja z różnymi systemami" />
						<VariantOption
							name="Dedykowany support techniczny"
							contains={false}
						/>
					</PriceVariant>
					<PriceVariant name="Custom" price="od 1450">
						<p className="p-2 text-center">
							Pakiet dostosowany do Twoich potrzeb
						</p>
						<VariantOption name="Wszystkie funkcje z pakietu popular" />
						<VariantOption name="Archiwizacja" />
						<VariantOption name="Zaawansowane funkcje analizy danych" />
						<VariantOption name="Dedykowany support techniczny" />
						<VariantOption name="Dostosujemy pakiet do Twoich potrzeb" />
					</PriceVariant>
				</div>
			</Container>
		</section>
	);
};
