import { redirect, type Handle, type HandleFetch } from '@sveltejs/kit';
import jwt_decode, { type JwtPayload } from 'jwt-decode';
import { ApiHelper } from './core/api/apiHelper';
import type { UserViewModel } from './core/api/generated';

// anyone can visit these
let publicRoutes: string[] = ['/guidelines', '/rules', '/about', '/'];

// only non authed users can visit these
let nonAuthRoutes: string[] = ['/login', '/register'];

export const handle: Handle = async ({ event, resolve }) => {
	const jwt = event.cookies.get('jwt') as string;

	event.locals.api = new ApiHelper(jwt);

	if (jwt) {
		event.locals.jwt = jwt;
		event.locals.user = decodeUserInfo(jwt);

		if (nonAuthRoutes.includes(event.url.pathname)) {
			throw redirect(303, '/home');
		}
	} else {
		if (!publicRoutes.concat(nonAuthRoutes).flat().includes(event.url.pathname)) {
			throw redirect(303, '/login');
		}
	}

	const response = await resolve(event);
	return response;
};

function decodeUserInfo(jwt: string): UserViewModel {
	const decoded: JwtPayload & { unique_name: string } = jwt_decode(jwt);

	return {
		username: decoded.unique_name
	};
}
