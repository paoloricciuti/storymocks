import { getContext, setContext } from 'svelte';

function createMockedStore(contextName: string) {
	return [
		{
			subscribe(runner) {
				const page = getContext(contextName);
				runner(page);
				return () => {};
			}
		},
		(value: unknown) => {
			setContext(contextName, value);
		}
	] as const;
}

export const [page, setPage] = createMockedStore('page-ctx');
export const [navigating, setNavigating] = createMockedStore('navigating-ctx');
export const [updated, setUpdated] = createMockedStore('updated-ctx');
