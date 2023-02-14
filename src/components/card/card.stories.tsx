import { Card } from './card';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'Components/Card',
	component: Card,
} as ComponentMeta<typeof Card>;

export const Primary: ComponentStory<typeof Card> = (props) => {
	return (
		<div style={{ width: '360px' }}>
			<Card {...props} />
		</div>
	);
};

Primary.args = {
	children: 'Test Primary',
};
