import { MainLayout } from 'components/layouts/mainLayout';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
	return <h1 className="text-3xl font-bold underline">Hello World!</h1>;
};

Home.getLayout = function getLayout(page) {
	return <MainLayout>{page}</MainLayout>;
};

export default Home;
