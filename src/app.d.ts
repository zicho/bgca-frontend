// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { ApiHelper } from './core/api/apiHelper';
import type { UserViewModel } from './core/api/generated';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			jwt: string | undefined;
			user: UserViewModel;
			api: ApiHelper;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
