// import { SECRET_API_URL } from '$env/static/private';
import { PUBLIC_API_URL } from '$env/static/public';
import { AppClient } from './generated';

export class ApiHelper {
	public client: AppClient;

	constructor(jwt: string) {
		this.client = new AppClient({
			BASE: PUBLIC_API_URL,
			HEADERS: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${jwt}`
			}
		});
	}
}
