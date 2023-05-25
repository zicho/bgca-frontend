import type { RequestEvent } from "@sveltejs/kit";

export function handleLoginRedirect(
	event: RequestEvent,
	message: string = 'You must be logged in to access this page.'
): string {
	const redirectToUrl = event.url.pathname + event.url.search;
	return redirectToUrl 
        ? `/login?redirectTo=${redirectToUrl}&message=${message}` 
        : '/login';
}
