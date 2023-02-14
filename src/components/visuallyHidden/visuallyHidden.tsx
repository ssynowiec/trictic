import { ReactNode } from 'react';

type VisuallyHiddenProps = {
	children: ReactNode;
};

export const VisuallyHidden = ({ children }: VisuallyHiddenProps) => {
	return <span className="sr-only">{children}</span>;
};
