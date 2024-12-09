import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		proxy: {
			// Only use proxy in development
			...(process.env.NODE_ENV !== 'production' ? {
				'/api': {
					target: 'http://localhost:8000',
					changeOrigin: true
				}
			} : {})
		}
	}
});
