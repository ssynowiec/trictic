import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="bg-black px-10 text-white md:px-24">
			<div className="flex flex-col md:flex-row">
				<section className="md:w-1/3">
					<Image
						src="/trictic-logo-white.svg"
						alt=""
						width="100"
						height="100"
					/>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
						odio, consequuntur, voluptatum doloremque, voluptatem.w
					</p>
				</section>
				<section className="md:w-1/3">
					<h2 className="text-xl font-medium">Linki</h2>
				</section>
				<section className="md:w-1/3">
					<h2 className="text-xl font-medium">Linki</h2>
					<ul>
						<li>
							<Link href="/regulamin">Regulamin</Link>
						</li>
						<li>
							<Link href="/polityka-prywatnosci">Polityka prywatności</Link>
						</li>
					</ul>
				</section>
			</div>
			<div className="flex w-full flex-col items-center justify-between md:flex-row">
				<p>&copy; {currentYear} All rights reserved.</p>
				<p>Design and execution: </p>
			</div>
		</footer>
	);
};
