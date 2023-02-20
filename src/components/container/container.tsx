import { ReactNode } from 'react';

type ContainerProps = {
	children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
	return <div className="mx-auto w-11/12 max-w-screen-2xl">{children}</div>;
};
