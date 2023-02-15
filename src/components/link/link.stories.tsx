import { Link } from './link';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'Components/Card',
	component: Link,
} as ComponentMeta<typeof Link>;

export const Primary: ComponentStory<typeof Link> = (props) => {
	return (
		<div style={{ width: '360px' }}>
			<Link {...props} />
		</div>
	);
};

Primary.args = {
	href: '/',
	label: 'Link',
};
