import { Karla } from '@next/font/google';
import clsx from 'clsx';
import { Button } from 'components/button/button';
import { HeroImg } from 'components/heroImg/heroImg';

const karla = Karla({ weight: ['800'], subsets: ['latin'] });

export const Hero = () => {
	return (
		<section className="relative flex min-h-screen min-w-full max-w-full items-center justify-center">
			<div className="pb-12 text-center lg:px-60">
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
						className="mx-2 mb-8 text-xl text-gray-600"
						data-aos="zoom-y-out"
						data-aos-delay="150"
					>
						Nasz produkt online: kompleksowe narzędzia do skutecznego
						zarządzania w sieci.
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
			<HeroImg />
		</section>
	);
};
