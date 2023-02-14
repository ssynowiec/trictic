import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'components/button/button';
import { VisuallyHidden } from 'components/visuallyHidden/visuallyHidden';
import { NavLink } from 'components/navLink/navLink';
import { useState } from 'react';
import clsx from 'clsx';

const routes = [
	{ url: '#', label: 'Funkcje' },
	{ url: '#', label: 'Jak to działa?' },
	{ url: '#', label: 'Cennik' },
	{ url: '#', label: 'O nas' },
	{ url: '#', label: 'Kontakt' },
];
export const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="fixed flex w-full items-center justify-between p-3 backdrop-blur-md md:justify-around">
			<Link href="/">
				<VisuallyHidden>Trictic</VisuallyHidden>
				<Image
					src="/trictic-logo-black.svg"
					alt="Trictic"
					width="100"
					height="100"
				/>
			</Link>
			<nav className={clsx('hidden md:block')}>
				<ul className="md:flex">
					{routes.map(({ url, label }, i) => (
						<NavLink url={url} label={label} key={i} />
					))}
				</ul>
			</nav>
			<div className="hidden md:block">
				<Button>Button text</Button>
				{/*<button>menu</button>*/}
			</div>
			<button
				className="relative h-10 w-10 text-gray-500 focus:outline-none md:hidden"
				onClick={() => setIsOpen(!isOpen)}
			>
				<VisuallyHidden>Open main menu</VisuallyHidden>
				<div className="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/2 transform">
					<span
						aria-hidden="true"
						className={clsx(
							'absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out',
							isOpen && '-rotate-45',
							!isOpen && '-translate-y-1.5',
						)}
					></span>
					<span
						aria-hidden="true"
						className={clsx(
							'absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out',
							isOpen && 'opacity-0',
						)}
					></span>
					<span
						aria-hidden="true"
						className={clsx(
							'absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out',
							isOpen && 'rotate-45',
							!isOpen && 'translate-y-1.5',
						)}
					></span>
				</div>
			</button>
		</div>
	);
};
