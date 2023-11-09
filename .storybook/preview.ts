import type { Preview } from '@storybook/svelte';
import { setDeserializeResponse } from './mocks/app/forms';
import { setNavigating, setPage, setUpdated } from './mocks/app/stores';
import LinkListener from './mocks/components/LinkListener.svelte';
import { setAfterNavigateArgument } from './mocks/app/navigation';

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
			setPage(ctx.parameters?.sveltekit?.stores?.page);
			setUpdated(ctx.parameters?.sveltekit?.stores?.updated);
			setNavigating(ctx.parameters?.sveltekit?.stores?.navigating);
			setDeserializeResponse(ctx.parameters?.sveltekit?.forms?.deserializeResponse);
			setAfterNavigateArgument(ctx.parameters?.sveltekit?.navigation?.afterNavigate);
			return Story();
		},
		(_, ctx) => ({ Component: LinkListener, props: { ctx } })
	]
};

export default preview;
