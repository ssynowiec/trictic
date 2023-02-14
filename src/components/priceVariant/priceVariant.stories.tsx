import { PriceVariant } from './priceVariant';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'Components/Button',
	component: PriceVariant,
} as ComponentMeta<typeof PriceVariant>;

export const Primary: ComponentStory<typeof PriceVariant> = (props) => {
	return (
		<div style={{ width: '360px' }}>
			<PriceVariant {...props} />
		</div>
	);
};

Primary.args = {
	children: 'Test Primary',
};
