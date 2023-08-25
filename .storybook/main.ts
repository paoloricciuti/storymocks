import type { StorybookConfig } from '@storybook/sveltekit';
import { mergeConfig } from 'vite';
import { resolve } from 'node:path';
import type { Plugin } from 'vite';

const plugin: Plugin = {
	name: 'vite-plugin-storybook-mock-sveltekit-stores',
	enforce: 'post',
	config: (config) =>
		mergeConfig(config, {
			resolve: {
				alias: {
					$app: resolve(process.cwd(), './.storybook/mocks/')
				}
			}
		})
};

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions'
	],
	framework: {
		name: '@storybook/sveltekit',
		options: {}
	},
	docs: {
		autodocs: 'tag'
	},
	async viteFinal(config) {
		return mergeConfig(config, {
			plugins: [plugin]
		});
	}
};
export default config;
