import Link from 'next/link';
import { VisuallyHidden } from 'components/visuallyHidden/visuallyHidden';
import Image from 'next/image';
import clsx from 'clsx';
import { NavLink } from 'components/navLink/navLink';
import type { RoutesType } from 'components/nav/nav';
import { Button } from 'components/button/button';
import { Container } from 'components/container/container';

type DesktopNavProps = {
	routes: RoutesType[];
};
export const DesktopNav = ({ routes }: DesktopNavProps) => {
	return (
		<div className="fixed z-40 hidden w-full items-center justify-between bg-white/50 shadow backdrop-blur-md md:flex">
			<Container>
				<div className="flex items-center justify-between">
					<Link href="/">
						<VisuallyHidden>Trictic</VisuallyHidden>
						<Image
							src="/trictic-logo-black.svg"
							alt="Trictic"
							width="100"
							height="100"
							className="m-5"
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
					</div>
				</div>
			</Container>
		</div>
	);
};
