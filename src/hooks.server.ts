import { AUTH_GOOGLE_CLIENT_ID, AUTH_GOOGLE_CLIENT_SECRET, AUTH_SECRET } from '$env/static/private';
import GoogleProvider from '@auth/core/providers/google';
import { SvelteKitAuth } from '@auth/sveltekit';

export const handle = SvelteKitAuth({
	providers: [
		GoogleProvider({
			name: 'Google',
			clientId: AUTH_GOOGLE_CLIENT_ID,
			clientSecret: AUTH_GOOGLE_CLIENT_SECRET
		})
	],
	secret: AUTH_SECRET
});
