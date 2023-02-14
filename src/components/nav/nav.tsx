import { MobileNav } from 'components/nav/mobileNav';
import { DesktopNav } from 'components/nav/desktopNav';

export type RoutesType = { url: string; label: string };

const routes: RoutesType[] = [
	{ url: '/', label: 'Strona główna' },
	{ url: '#', label: 'Funkcje' },
	{ url: '#', label: 'Jak to działa?' },
	{ url: '#', label: 'Cennik' },
	{ url: '#', label: 'O nas' },
	{ url: '#', label: 'Kontakt' },
];
export const Nav = () => {
	return (
		<>
			<MobileNav routes={routes} />
			<DesktopNav routes={routes} />
		</>
	);
};
