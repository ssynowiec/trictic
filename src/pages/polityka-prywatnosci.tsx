import { NextPageWithLayout } from './_app';
import { MainLayout } from 'components/layouts/mainLayout';

const PolitykaPrywatnosci: NextPageWithLayout = () => {
	return <h1>Polityka Prywatności</h1>;
};

PolitykaPrywatnosci.getLayout = function getLayout(page) {
	return <MainLayout>{page}</MainLayout>;
};

export default PolitykaPrywatnosci;
