import type { Preview } from '@storybook/svelte';
import { page } from './mocks/stores';
const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/
			}
		}
	},
	decorators: [
		(Story, ctx) => {
			page.set(ctx.parameters?.stores?.page);
			return Story();
		}
	]
};

export default preview;
