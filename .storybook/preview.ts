import type { Preview } from '@storybook/svelte';
import { setDeserializeResponse } from './mocks/app/forms';
import { setNavigating, setPage, setUpdated } from './mocks/app/stores';
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
			setPage(ctx.parameters?.kitStores?.page);
			setUpdated(ctx.parameters?.kitStores?.updated);
			setNavigating(ctx.parameters?.kitStores?.navigating);
			setDeserializeResponse(ctx.parameters?.kitForms?.deserializeResponse);
			return Story();
		},
		(_, ctx) => ({ Component: LinkListener, props: { ctx } })
	]
};

export default preview;
