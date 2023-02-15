import clsx from 'clsx';

type VariantOptionProps = {
	name: string;
	contains?: boolean;
};

export const VariantOption = ({
	name,
	contains = true,
}: VariantOptionProps) => {
	return (
		<div className="flex pt-5">
			<span className="pr-2">{contains ? '✅' : '❌'}</span>
			<p className={clsx(contains ? 'text-black' : 'text-gray-400')}>{name}</p>
		</div>
	);
};
