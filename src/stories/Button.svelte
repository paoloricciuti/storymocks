<script lang="ts">
	import './button.css';
	import { page } from '$app/stores';
	import { afterNavigate, goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		console.log('in');
	});

	afterNavigate((args) => {
		console.log('afternavigate', args);
	});

	/**
	 * Is this the principal call to action on the page?
	 */
	export let primary = false;

	/**
	 * What background color to use
	 */
	export let backgroundColor: string | undefined = undefined;
	/**
	 * How large should the button be?
	 */
	export let size: 'small' | 'medium' | 'large' = 'medium';
	/**
	 * Button contents
	 */
	export let label = '';

	$: mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

	$: style = backgroundColor ? `background-color: ${backgroundColor}` : '';
</script>

<pre>{JSON.stringify($page?.data, null, 2)}</pre>
<a href="/somewhere"><span>Go some</span></a>
<button
	type="button"
	class={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
	{style}
	on:click={() => {
		goto('something');
	}}
>
	{label}
</button>
