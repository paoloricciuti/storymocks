import type { Preview } from '@storybook/svelte';
import { navigating, page, updated } from './mocks/app/stores';
import { setDeserializeResponse } from './mocks/app/forms';
import LinkListener from './mocks/components/LinkListener.svelte';

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
			page.set(ctx.parameters?.kitStores?.page);
			updated.set(ctx.parameters?.kitStores?.updated);
			navigating.set(ctx.parameters?.kitStores?.navigating);
			setDeserializeResponse(ctx.parameters?.kitForms?.deserializeResponse);
			return Story();
		},
		(_, ctx) => ({ Component: LinkListener, props: { ctx } })
	]
};

export default preview;
