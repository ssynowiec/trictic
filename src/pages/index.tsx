import { MainLayout } from 'components/layouts/mainLayout';
import { NextPageWithLayout } from './_app';
import { Hero } from 'components/hero/hero';

const Home: NextPageWithLayout = () => {
	return <Hero />;
};

Home.getLayout = function getLayout(page) {
	return <MainLayout>{page}</MainLayout>;
};

export default Home;
