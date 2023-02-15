import { NextPageWithLayout } from './_app';
import { MainLayout } from 'components/layouts/mainLayout';

const Regulamin: NextPageWithLayout = () => {
	return <h1>Regulamin</h1>;
};

Regulamin.getLayout = function getLayout(page) {
	return <MainLayout>{page}</MainLayout>;
};

export default Regulamin;
