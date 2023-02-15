import { Karla } from '@next/font/google';
import clsx from 'clsx';
import { Button } from 'components/button/button';
import { Link } from 'components/link/link';

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
						odio, consequuntur, <Link href="/" label="doloremque" />,
						voluptatem.
					</p>
					<div
						className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
						data-aos="zoom-y-out"
						data-aos-delay="300"
					>
						<Button>Button text</Button>
						<Button style="outline">Second Button</Button>
					</div>
				</div>
			</div>
		</section>
	);
};
