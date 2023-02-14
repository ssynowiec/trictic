import Link from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/router';

type NavLinkProps = {
	url: string;
	label: string;
};

export const NavLink = ({ url, label }: NavLinkProps) => {
	const router = useRouter().pathname;

	return (
		<li
			className={clsx(
				'flex items-center justify-center',
				router === url && 'border-b-4 border-black',
			)}
		>
			<Link href={url} className="px-8 py-4 text-center font-medium md:p-5">
				{label}
			</Link>
		</li>
	);
};
