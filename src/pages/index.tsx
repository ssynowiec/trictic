import { MainLayout } from 'components/layouts/mainLayout';
import { NextPageWithLayout } from './_app';
import { Hero } from 'components/hero/hero';
import { PriceList } from 'components/priceList/priceList';
import { Functions } from 'components/functions/functions';
import { Aboutus } from 'components/aboutus/aboutus';

const Home: NextPageWithLayout = () => {
	return (
		<>
			<Hero />
			<Functions />
			<PriceList />
			<Aboutus />
		</>
	);
};

Home.getLayout = function getLayout(page) {
	return <MainLayout>{page}</MainLayout>;
};

export default Home;
