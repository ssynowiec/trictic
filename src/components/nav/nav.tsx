import { MobileNav } from 'components/nav/mobileNav';
import { DesktopNav } from 'components/nav/desktopNav';

export type RoutesType = { url: string; label: string };

const routes: RoutesType[] = [
	// { url: '/', label: 'Strona główna' },
	{ url: '#funkcje', label: 'Funkcje' },
	{ url: '#cennik', label: 'Cennik' },
	{ url: '#zespol', label: 'Nasz zespół' },
	{ url: '#kontakt', label: 'Kontakt' },
];
export const Nav = () => {
	return (
		<>
			<MobileNav routes={routes} />
			<DesktopNav routes={routes} />
		</>
	);
};
