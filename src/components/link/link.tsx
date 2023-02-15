import { default as NextLink } from 'next/link';

type LinkProps = {
	href: string;
	label: string;
	style?: 'inline' | 'block';
};
export const Link = ({ href, label, style = 'inline' }: LinkProps) => {
	return style === 'block' ? (
		<NextLink
			href={href}
			className="group relative m-5 inline-block rounded px-5 py-2.5 font-medium text-white"
		>
			<span className="absolute top-0 left-0 h-full w-full rounded bg-gradient-to-br from-blue-600 to-red-500 opacity-50 blur-sm filter"></span>
			<span className="absolute inset-0 h-full w-full rounded bg-gradient-to-br from-blue-600 to-red-500 shadow-xl filter transition-all duration-200 ease-out group-hover:blur-sm group-active:opacity-0"></span>
			<span className="absolute inset-0 h-full w-full rounded bg-gradient-to-br from-blue-500 to-red-600 transition duration-200 ease-out"></span>
			<span className="relative px-4">{label}</span>
		</NextLink>
	) : (
		<NextLink
			href={href}
			className="group relative pb-0.5 text-black after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-gradient-to-r after:from-blue-600 after:to-red-500 after:transition-colors after:duration-200 after:ease-out after:content-[''] after:group-active:w-0"
		>
			{label}
		</NextLink>
	);
};
