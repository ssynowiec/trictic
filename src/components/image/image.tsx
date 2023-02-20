import { default as NextImage } from 'next/image';
import clsx from 'clsx';
import { Card } from 'components/card/card';

type ImageProps = {
	src: string;
	alt?: string;
	width: number;
	height: number;
	className?: string;
};

export const Image = ({
	src,
	alt = '',
	width,
	height,
	className,
}: ImageProps) => {
	return (
		<NextImage
			src={src}
			alt={alt}
			width={width}
			height={height}
			className={clsx('rounded shadow-lg', className)}
		/>
	);
};
