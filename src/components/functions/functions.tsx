import {
	FunctionItem,
	FunctionItemProps,
} from 'components/functionItem/functionItem';
import { Container } from 'components/container/container';

type FunctionType = FunctionItemProps;

const functions: FunctionType[] = [
	{
		icon: '/icons/rocket.png',
		name: 'Zarządzanie kontem ',
		status: 'planned',
		description:
			'Użytkownicy mogą łatwo zarządzać swoimi danymi i preferencjami dzięki temu narzędziu. Mogą aktualizować swoje dane kontaktowe, ustawienia prywatności i dostępności, jak również zarządzać swoim abonamentem.',
	},
	{
		icon: '/icons/rocket.png',
		name: 'Wyszukiwanie',
		status: 'planned',
		description:
			'Funkcja ta umożliwia użytkownikom szybkie i łatwe wyszukiwanie informacji i treści wewnątrz produktu. Dzięki temu narzędziu użytkownicy mogą znaleźć potrzebne informacje w krótkim czasie i zwiększyć efektywność swojej pracy.',
	},
	{
		icon: '/icons/rocket.png',
		name: 'Statystyki',
		status: 'planned',
		description:
			'Ta funkcja zapewnia informacje o wynikach użytkowników w formie statystyk. Dzięki temu użytkownicy mogą śledzić postępy w osiąganiu swoich celów, jak również monitorować wyniki ich pracy.',
	},
	{
		icon: '/icons/rocket.png',
		name: 'Zdalny dostęp',
		status: 'planned',
		description:
			'Dzięki tej funkcji użytkownicy mogą mieć dostęp do produktu z dowolnego miejsca i w dowolnym czasie. Dzięki temu narzędziu użytkownicy mogą pracować zdalnie, co zwiększa ich mobilność i efektywność pracy.',
	},
	{
		icon: '/icons/rocket.png',
		name: 'Integracja z innymi systemami',
		status: 'planned',
		description:
			'Ta funkcja umożliwia integrację z innymi systemami i narzędziami. Dzięki temu użytkownicy mogą łatwo łączyć swoje aplikacje i narzędzia w celu osiągnięcia lepszych wyników.',
	},
	{
		icon: '/icons/rocket.png',
		name: 'Personalizacja',
		// status: '',
		description:
			'Ta funkcja pozwala na dostosowanie produktu do indywidualnych potrzeb użytkownika. Dzięki temu narzędziu użytkownicy mogą dostosować ustawienia produktu do swoich preferencji i stylu pracy.',
	},
	{
		icon: '/icons/rocket.png',
		name: 'Dostępność',
		status: 'planned',
		description:
			'Ta funkcja zapewnia łatwy i szybki dostęp do produktu, dzięki temu użytkownicy mogą korzystać z narzędzi w sposób intuicyjny i efektywny. Dzięki temu narzędziu użytkownicy mogą osiągnąć swoje cele i zwiększyć efektywność swojej pracy.',
	},
	{
		icon: '/icons/rocket.png',
		name: 'Automatyzacja',
		// status: '',
		description:
			'Ta funkcja umożliwia automatyzację procesów, co pozwala na oszczędność czasu i zasobów. Dzięki temu użytkownicy mogą zautomatyzować powtarzalne zadania i skupić się na bardziej kreatywnych i wartościowych działaniach.',
	},
	{
		icon: '/icons/rocket.png',
		name: 'Komunikacja',
		// status: 'planned',
		description:
			'Ta funkcja zapewnia narzędzia umożliwiające komunikację z innymi użytkownikami produktu. Dzięki temu użytkownicy mogą łatwo nawiązywać kontakt, dzielić się wiedzą i pomysłami.',
	},
	{
		icon: '/icons/rocket.png',
		name: 'Kreator treści',
		// status: '',
		description:
			'Ta funkcja umożliwia tworzenie i edycję treści w ramach produktu. Dzięki temu użytkownicy mogą tworzyć i modyfikować treści zgodnie z ich potrzebami i preferencjami.',
	},
	{
		icon: '/icons/rocket.png',
		name: 'Analiza',
		status: 'planned',
		description:
			'Ta funkcja zapewnia narzędzia umożliwiające analizę danych i wyników. Dzięki temu użytkownicy mogą łatwo analizować swoje wyniki i poprawiać swoją wydajność.',
	},
	{
		icon: '/icons/rocket.png',
		name: 'Integracja z sieciami społecznościowymi',
		// status: '',
		description:
			'Ta funkcja umożliwia integrację produktu z sieciami społecznościowymi, co pozwala użytkownikom na łatwe i szybkie udostępnianie informacji i treści.',
	},
	{
		icon: '/icons/rocket.png',
		name: 'Personalizowane powiadomienia',
		status: 'planned',
		description:
			'Ta funkcja zapewnia personalizowane powiadomienia o najważniejszych wydarzeniach i informacjach w ramach produktu. Dzięki temu użytkownicy są na bieżąco z najważniejszymi informacjami i mogą szybko reagować na zmiany.',
	},
	{
		icon: '/icons/rocket.png',
		name: 'Bezpieczeństwo',
		// status: '',
		description:
			' Ta funkcja zapewnia wysoki poziom bezpieczeństwa danych i informacji użytkowników. Dzięki temu narzędziu użytkownicy mogą korzystać z produktu bez obaw o utratę danych czy ataki z zewnątrz.',
	},
	{
		icon: '/icons/rocket.png',
		name: 'Współpraca',
		// status: 'planned',
		description:
			'Ta funkcja umożliwia współpracę między użytkownikami produktu, co pozwala na łatwe dzielenie się wiedzą i pracą. Dzięki temu narzędziu użytkownicy mogą pracować razem na tym samym projekcie, dzielić się pomysłami i reagować na zmiany.',
	},
	{
		icon: '/icons/rocket.png',
		name: 'Archiwizacja',
		status: 'planned',
		description:
			'Ta funkcja umożliwia archiwizację danych i informacji w ramach produktu. Dzięki temu użytkownicy mogą przechowywać ważne informacje i dokumenty, które mogą być przydatne w przyszłości.',
	},
];

export const Functions = () => {
	return (
		<section
			id="funkcje"
			className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-red-400 py-20 pt-28 md:pt-96"
		>
			<Container>
				<h2 className="text-center text-4xl font-bold text-white">Funkcje</h2>
				<p className="p-2 text-center font-medium text-white md:p-10 md:px-56">
					Nasza firma oferuje produkt online, który wyróżnia się szeroką gamą
					funkcji, które pozwalają na efektywne zarządzanie i rozwijanie
					działalności w internecie. Poniżej przedstawiamy szczegółowe
					informacje o funkcjach, które oferujemy w naszym produkcie. Od
					prostych i intuicyjnych narzędzi do zarządzania treścią, po
					zaawansowane funkcje analizy danych i integracji z różnymi systemami,
					nasze narzędzia zostały zaprojektowane tak, aby pomóc naszym klientom
					osiągnąć swoje cele w sieci. Zobacz, co nas wyróżnia i jakie korzyści
					oferujemy dzięki naszym funkcjom produktu online.
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
