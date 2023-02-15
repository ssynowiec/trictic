import { ReactNode } from 'react';
import { Nav } from 'components/nav/nav';
import { Footer } from 'components/gooter/footer';

type MainLayoutProps = {
	children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<>
			<Nav />
			<main>{children}</main>
			<Footer />
		</>
	);
};
