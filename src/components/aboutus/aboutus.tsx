import { Container } from 'components/container/container';
import { TeamMember } from 'components/teamMemeber/teamMember';
import { Link } from 'components/link/link';
import { default as NextImage } from 'next/image';
import { Image } from 'components/image/image';

export const Aboutus = () => {
	return (
		<section
			id="zespol"
			className="flex min-h-screen w-full flex-col items-center justify-center py-20 pt-10 md:pt-12"
		>
			<Container>
				<h2 className="pb-10 text-center text-4xl font-bold">Nasz zespół</h2>
				<div className="flex flex-col px-2 md:m-3 md:flex-row">
					<div className="flex w-full flex-col items-center justify-center text-center md:w-1/2">
						<p className="pt-5">
							Nasza firma została założona w [rok założenia] roku i od tego
							czasu zyskała uznanie klientów na całym świecie dzięki naszym
							innowacyjnym podejściom oraz nieustającemu dążeniu do
							doskonałości. Wspieramy różne branże, od firm start-upowych po
							duże korporacje, pomagając im w osiąganiu swoich celów
							biznesowych.
						</p>
						<p className="pt-5">
							W naszym zespole pracują pasjonaci, którzy łączą wiedzę i
							doświadczenie z kreatywnością i nowatorskim myśleniem. Dzięki temu
							możemy tworzyć rozwiązania, które spełniają najwyższe standardy
							jakości i są dostosowane do indywidualnych potrzeb naszych
							klientów.
						</p>
						<p className="pt-5">
							Nasze usługi obejmują [wymienić tutaj główne usługi oferowane
							przez firmę]. Ponadto, oferujemy dostęp do najlepszych narzędzi,
							technologii i ekspertów, którzy pomagają naszym klientom w
							osiąganiu ich celów biznesowych.
						</p>
						<p className="pt-5">
							Jesteśmy przekonani, że rozwój technologii i innowacji są kluczowe
							dla przyszłości. Dlatego też, w [Nazwa Firmy], nieustannie
							inwestujemy w badania i rozwój, aby tworzyć innowacyjne
							rozwiązania, które mają pozytywny wpływ na nasz świat.
						</p>
						<p className="pt-5 pb-3">
							W [Nazwa Firmy] wierzymy, że najlepszą reklamą jest zadowolenie
							klientów. Dlatego też, zawsze dążymy do tego, aby nasze produkty i
							usługi spełniały najwyższe standardy i przekraczały oczekiwania
							naszych klientów.
						</p>
						<Link href="https://example.com" label="Dowiedz się więcej o nas" />
						<div className="flex items-center justify-center pt-5 pb-5">
							<NextImage src="/logo1.png" alt="" width={100} height={100} />
							<p>X</p>
							<NextImage
								src="/logo2.png"
								alt=""
								width={100}
								height={100}
								className="h-full w-auto"
							/>
						</div>
					</div>
					<div className="grid w-full grid-cols-2 md:w-1/2 md:grid-cols-2">
						<TeamMember img="/people/1.jpg" name="Jan Kowalski" role="CEO" />
						<TeamMember
							img="/people/2.jpg"
							name="Kasia Nowak"
							role="Social Media manager"
						/>
						<TeamMember
							img="/people/3.jpg"
							name="Piotrek Kowalski"
							role="Senior Dev"
						/>
						<TeamMember
							img="/people/4.jpg"
							name="Marek Kowalski"
							role="Project Manager / Sales Manager"
						/>
					</div>
				</div>
			</Container>
		</section>
	);
};
