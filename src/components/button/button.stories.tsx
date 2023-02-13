import { Button } from './button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'Components/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = (props) => {
	return (
		<div style={{ width: '360px' }}>
			<Button {...props} />
		</div>
	);
};

Primary.args = {
	children: 'Test Primary',
};