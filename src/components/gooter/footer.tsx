import Image from 'next/image';

export const Footer = () => {
	return (
		<footer className="bg-black px-10 text-white md:px-24">
			<div className="flex">
				<section className="md:w-1/3">
					<Image
						src="/trictic-logo-white.svg"
						alt=""
						width="100"
						height="100"
					/>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
						odio, consequuntur, voluptatum doloremque, voluptatem.
					</p>
				</section>
				<section className="md:w-1/3">Siema</section>
				<section className="md:w-1/3">siem</section>
			</div>
			<div className="flex w-full flex-col items-center justify-between md:flex-row">
				<p>&copy; 2023 All rights reserved.</p>
				<p>Design and execution: </p>
			</div>
		</footer>
	);
};
