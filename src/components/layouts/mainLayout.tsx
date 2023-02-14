import { ReactNode } from 'react';
import { Nav } from 'components/nav/nav';

type MainLayoutProps = {
	children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<>
			<Nav />
			<main>{children}</main>
		</>
	);
};
