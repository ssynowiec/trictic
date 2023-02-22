import { ReactNode } from 'react';
import clsx from 'clsx';

type CardTag = keyof Pick<JSX.IntrinsicElements, 'div' | 'section'>;

type CardProps = {
	tag?: CardTag;
	size: string;
	style?: 'default' | 'special';
	className?: string;
	children: ReactNode;
};

export const Card = ({
	tag: Tag = 'div',
	size,
	style,
	className,
	children,
}: CardProps) => {
	return (
		<Tag
			className={clsx(
				'relative m-5 rounded px-5 py-4 font-medium text-black',
				size,
			)}
		>
			<span
				className={clsx(
					'absolute top-0 left-0 h-full w-full rounded opacity-50 filter transition-all duration-200 ease-out',
					style === 'special'
						? 'bg-gradient-to-br from-blue-500 to-red-600 blur-sm'
						: 'bg-black blur-xs',
				)}
			></span>
			<span className="absolute top-0 left-0 h-full w-full rounded bg-white"></span>
			<span className={clsx('relative px-4', className)}>{children}</span>
		</Tag>
	);
};
