import { Image } from 'components/image/image';

export const HeroImg = () => {
	return (
		<div className="absolute -bottom-16 flex w-full flex-col items-center justify-center md:-bottom-1/3">
			<Image
				src="/dashboard.png"
				alt=""
				width={1000}
				height={100}
				className="w-10/12 md:w-1/2"
			/>
		</div>
	);
};
