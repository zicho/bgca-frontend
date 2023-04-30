import { SECRET_API_URL } from '$env/static/private';
import { AppClient } from './generated';

export class ApiHelper {
	public client: AppClient;

	constructor(jwt: string) {
		this.client = new AppClient({
			BASE: SECRET_API_URL,
			HEADERS: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${jwt}`
			}
		});
	}
}
