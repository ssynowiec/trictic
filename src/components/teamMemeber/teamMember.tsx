import { Image } from 'components/image/image';
import { VisuallyHidden } from 'components/visuallyHidden/visuallyHidden';
import Link from 'next/link';

type TeamMemberProps = {
	img: string;
	name: string;
	role: string;
	linkedIn?: string;
};

export const TeamMember = ({ img, name, role, linkedIn }: TeamMemberProps) => {
	return (
		<div className="h-94 flex flex-col items-center  p-2">
			<Image
				src={img}
				alt={`${name} - ${role}`}
				width={1000}
				height={1000}
				className="h-52 w-52 object-cover md:h-72"
			/>
			<h3 className="pt-3 text-center font-bold">{name}</h3>
			<p className="pb-3 text-center">{role}</p>
			<Link href={`https://linkedin.com/${linkedIn}`}>
				<VisuallyHidden>Linkedin</VisuallyHidden>
				<Image
					src="/icons/socials/linkedin-black.png"
					alt={`Linkedin ${name}`}
					width={25}
					height={25}
				/>
			</Link>
		</div>
	);
};
