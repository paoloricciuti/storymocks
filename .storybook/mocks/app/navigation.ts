import { getContext, onMount, setContext } from 'svelte';

export async function goto(...args: any[]) {
	try {
		const { action } = await import('@storybook/addon-actions');
		action('sveltekit.goto')(...args);
	} catch (e) {
		console.log(e);
	}
}

export function setAfterNavigateArgument(afterNavigate) {
	setContext('after-navigate-args', afterNavigate);
}

export function afterNavigate(cb) {
	const argument = getContext('after-navigate-args');
	onMount(() => {
		cb(argument);
	});
}

export function onNavigate() {}

export function beforeNavigate() {}

export function disableScrollHandling() {}

export async function invalidate(...args: any[]) {
	try {
		const { action } = await import('@storybook/addon-actions');
		action('sveltekit.invalidate')(...args);
	} catch (e) {
		console.log(e);
	}
}

export async function invalidateAll() {
	try {
		const { action } = await import('@storybook/addon-actions');
		action('sveltekit.invalidateAll')();
	} catch (e) {
		console.log(e);
	}
}

export function preloadCode() {}

export function preloadData() {}
