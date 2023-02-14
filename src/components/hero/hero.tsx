import { Karla } from '@next/font/google';
import clsx from 'clsx';
import { Button } from 'components/button/button';

const karla = Karla({ weight: ['800'], subsets: ['latin'] });

export const Hero = () => {
	return (
		<section className="flex min-h-screen min-w-full max-w-full items-center justify-center">
			<div className="pb-12 text-center md:pb-16 lg:px-60">
				<h1
					className={clsx(
						'leading-tighter mb-4 text-6xl font-extrabold tracking-tighter md:text-8xl',
						karla.className,
					)}
					data-aos="zoom-y-out"
				>
					Lorem ipsum dolor
					<br />
					<span className="bg-gradient-to-r from-blue-500 to-red-400 bg-clip-text text-transparent">
						your text
					</span>
				</h1>
				<div className="mx-auto max-w-3xl">
					<p
						className="mb-8 text-xl text-gray-600"
						data-aos="zoom-y-out"
						data-aos-delay="150"
					>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
						odio, consequuntur, voluptatum doloremque, voluptatem.
					</p>
					<div
						className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
						data-aos="zoom-y-out"
						data-aos-delay="300"
					>
						{/*<div>*/}
						<Button>Button text</Button>
						{/*</div>*/}
						<div>
							<a
								href="#_"
								className="group relative inline-flex items-center justify-center overflow-hidden rounded-md p-0.5 font-bold"
							>
								<span className="absolute h-full w-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05]"></span>
								<span className="duration-400 relative rounded-md bg-gray-900 px-6 py-3 transition-all ease-out group-hover:bg-opacity-0">
									<span className="relative text-white">Button Text</span>
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
