import Image from 'next/image';
import Link from 'next/link';
import { VisuallyHidden } from 'components/visuallyHidden/visuallyHidden';

export const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="bg-black px-10 text-white md:px-24">
			<div className="flex flex-col md:flex-row">
				<section className="md:w-1/3">
					<Image
						src="/trictic-logo-white.svg"
						alt=""
						width="150"
						height="150"
						className="p-5"
					/>
					<p className="p-5">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
						odio, consequuntur, voluptatum doloremque, voluptatem.w
					</p>
					<ul className="flex p-5 pb-0">
						<li className="p-2">
							<Link href="https://facebook.com">
								<VisuallyHidden>Facebook</VisuallyHidden>
								<Image
									src="/icons/socials/facebook.png"
									alt=""
									width="25"
									height="25"
								/>
							</Link>
						</li>
						<li className="p-2">
							<Link href="https://instagram.com">
								<VisuallyHidden>Instagram</VisuallyHidden>
								<Image
									src="/icons/socials/instagram.png"
									alt=""
									width="25"
									height="25"
								/>
							</Link>
						</li>
						<li className="p-2">
							<Link href="https://linkedin.com">
								<VisuallyHidden>Linkedin</VisuallyHidden>
								<Image
									src="/icons/socials/linkedin.png"
									alt=""
									width="25"
									height="25"
								/>
							</Link>
						</li>
						<li className="p-2">
							<Link href="https://twitter.com">
								<VisuallyHidden>Twitter</VisuallyHidden>
								<Image
									src="/icons/socials/twitter.png"
									alt=""
									width="25"
									height="25"
								/>
							</Link>
						</li>
						<li className="p-2">
							<Link href="https://github.com">
								<VisuallyHidden>Github</VisuallyHidden>
								<Image
									src="/icons/socials/github.png"
									alt=""
									width="25"
									height="25"
								/>
							</Link>
						</li>
					</ul>
				</section>
				<section className="md:w-1/3">
					<h2 className="p-5 pt-10 text-xl font-medium">
						Skontaktuj się z nami
					</h2>
					<address className="not-italic">
						<ul className="flex flex-col p-5">
							<li className="p-2">
								<Link
									href="mailto:mail@example.com"
									className="flex items-center"
								>
									<Image
										src="/icons/email.png"
										alt=""
										width="30"
										height="30"
										className="pr-3"
									/>
									mail@example.com
								</Link>
							</li>
							<li className="p-2">
								<Link href="tel:+48 123 456 789" className="flex items-center">
									<Image
										src="/icons/phone.png"
										alt=""
										width="30"
										height="30"
										className="pr-3"
									/>
									+48 123 456 789
								</Link>
							</li>
							<li className="p-2">
								<div className="flex items-center">
									<Image
										src="/icons/address.png"
										alt=""
										width="30"
										height="30"
										className="pr-3"
									/>
									<p>plac Defilad 1, 00-901 Warszawa</p>
								</div>
							</li>
						</ul>
					</address>
					{/*<h2 className="p-5 text-xl font-medium">Śledź nas</h2>*/}
					{/*<ul className="flex p-5">*/}
					{/*	<li className="p-2">*/}
					{/*		<Link href="https://facebook.com">*/}
					{/*			<VisuallyHidden>Facebook</VisuallyHidden>*/}
					{/*			<Image*/}
					{/*				src="/icons/socials/facebook.png"*/}
					{/*				alt=""*/}
					{/*				width="35"*/}
					{/*				height="35"*/}
					{/*			/>*/}
					{/*		</Link>*/}
					{/*	</li>*/}
					{/*	<li className="p-2">*/}
					{/*		<Link href="https://instagram.com">*/}
					{/*			<VisuallyHidden>Instagram</VisuallyHidden>*/}
					{/*			<Image*/}
					{/*				src="/icons/socials/instagram.png"*/}
					{/*				alt=""*/}
					{/*				width="35"*/}
					{/*				height="35"*/}
					{/*			/>*/}
					{/*		</Link>*/}
					{/*	</li>*/}
					{/*	<li className="p-2">*/}
					{/*		<Link href="https://linkedin.com">*/}
					{/*			<VisuallyHidden>Linkedin</VisuallyHidden>*/}
					{/*			<Image*/}
					{/*				src="/icons/socials/linkedin.png"*/}
					{/*				alt=""*/}
					{/*				width="35"*/}
					{/*				height="35"*/}
					{/*			/>*/}
					{/*		</Link>*/}
					{/*	</li>*/}
					{/*	<li className="p-2">*/}
					{/*		<Link href="https://twitter.com">*/}
					{/*			<VisuallyHidden>Twitter</VisuallyHidden>*/}
					{/*			<Image*/}
					{/*				src="/icons/socials/twitter.png"*/}
					{/*				alt=""*/}
					{/*				width="35"*/}
					{/*				height="35"*/}
					{/*			/>*/}
					{/*		</Link>*/}
					{/*	</li>*/}
					{/*	<li className="p-2">*/}
					{/*		<Link href="https://github.com">*/}
					{/*			<VisuallyHidden>Github</VisuallyHidden>*/}
					{/*			<Image*/}
					{/*				src="/icons/socials/github.png"*/}
					{/*				alt=""*/}
					{/*				width="35"*/}
					{/*				height="35"*/}
					{/*			/>*/}
					{/*		</Link>*/}
					{/*	</li>*/}
					{/*</ul>*/}
				</section>
				<section className="md:w-1/3">
					<h2 className="p-5 pt-10 text-xl font-medium">Linki</h2>
					<ul className="p-5">
						<li>
							<Link href="/regulamin">Regulamin</Link>
						</li>
						<li>
							<Link href="/polityka-prywatnosci">Polityka prywatności</Link>
						</li>
					</ul>
				</section>
			</div>
			<div className="flex w-full flex-col items-center justify-between p-5 md:flex-row">
				<p>&copy; {currentYear} All rights reserved.</p>
				<p className="p-5">Design and execution: </p>
			</div>
		</footer>
	);
};
