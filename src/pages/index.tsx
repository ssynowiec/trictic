import { MainLayout } from 'components/layouts/mainLayout';
import { NextPageWithLayout } from './_app';
import { Hero } from 'components/hero/hero';
import { Card } from 'components/card/card';

const Home: NextPageWithLayout = () => {
	return (
		<>
			<Hero />
			<Card>siema</Card>
			<Card style="special">siema</Card>
		</>
	);
};

Home.getLayout = function getLayout(page) {
	return <MainLayout>{page}</MainLayout>;
};

export default Home;
