import Link from 'next/link';
import { VisuallyHidden } from 'components/visuallyHidden/visuallyHidden';
import Image from 'next/image';
import clsx from 'clsx';
import { NavLink } from 'components/navLink/navLink';
import { Button } from 'components/button/button';
import { useState } from 'react';
import { RoutesType } from 'components/nav/nav';

type MobileNavProps = {
	routes: RoutesType[];
};
export const MobileNav = ({ routes }: MobileNavProps) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<div
				className={clsx(
					'fixed z-40 flex w-full flex-col items-center justify-between p-3 backdrop-blur-lg md:hidden md:justify-around',
					isOpen && 'h-screen',
				)}
			>
				<div className="flex w-full items-center justify-between">
					<Link href="/">
						<VisuallyHidden>Trictic</VisuallyHidden>
						<Image
							src="/trictic-logo-black.svg"
							alt="Trictic"
							width="100"
							height="100"
						/>
					</Link>
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

				<nav
					className={clsx(
						'flex h-full items-center justify-center',
						isOpen ? 'block' : 'hidden',
					)}
				>
					<ul className="md:flex">
						{routes.map(({ url, label }, i) => (
							<NavLink url={url} label={label} key={i} />
						))}
						<li className="flex items-center justify-center">
							<Button>Button text</Button>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};
