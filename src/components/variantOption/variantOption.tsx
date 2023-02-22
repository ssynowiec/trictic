import clsx from 'clsx';
import Image from 'next/image';

type VariantOptionProps = {
	name: string;
	contains?: boolean;
};

export const VariantOption = ({
	name,
	contains = true,
}: VariantOptionProps) => {
	const containsIcons = contains ? (
		<Image src="/icons/check.png" alt="" width="20" height="20" />
	) : (
		<Image src="/icons/x.png" alt="" width="15" height="15" />
	);

	return (
		<div className="flex items-center pt-5">
			<span className="pr-2">{containsIcons}</span>
			<p className={clsx(contains ? 'text-black' : 'text-gray-500')}>{name}</p>
		</div>
	);
};
