import { redirect, type Handle, type HandleFetch } from '@sveltejs/kit';
import jwt_decode, { type JwtPayload } from 'jwt-decode';
import { ApiHelper } from './core/api/apiHelper';
import type { UserViewModel } from './core/api/generated';
import { handleLoginRedirect } from './core/util/handleLoginRedirect';
import type { RequestEvent } from './routes/$types';

export const handle: Handle = async ({ event, resolve }) => {
	const jwt = event.cookies.get('jwt') as string;

	const route = event.route.id;

	event.locals.api = new ApiHelper(jwt);

	if (jwt) {
		event.locals.jwt = jwt;
		event.locals.user = decodeUserInfo(jwt);

		if (route?.includes('(non_authed')) {
			throw redirect(302, '/home');
		}
	} else {
		if (route?.includes('(protected')) {
			throw redirect(302, handleLoginRedirect(event as RequestEvent));
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
