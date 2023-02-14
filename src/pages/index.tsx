import { MainLayout } from 'components/layouts/mainLayout';
import { NextPageWithLayout } from './_app';
import { Hero } from 'components/hero/hero';
import { PriceList } from 'components/priceList/priceList';

const Home: NextPageWithLayout = () => {
	return (
		<>
			<Hero />
			<PriceList />
		</>
	);
};

Home.getLayout = function getLayout(page) {
	return <MainLayout>{page}</MainLayout>;
};

export default Home;
