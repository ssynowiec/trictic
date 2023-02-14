import Link from 'next/link';

type NavLinkProps = {
	url: string;
	label: string;
};

export const NavLink = ({ url, label }: NavLinkProps) => {
	return (
		<li className="flex items-center justify-center">
			<Link href={url} className="text-center font-medium">
				{label}
			</Link>
		</li>
	);
};
