/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionUpdatedResponseViewModel } from '../models/CollectionUpdatedResponseViewModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class BggService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param bggId 
     * @returns any Success
     * @throws ApiError
     */
    public getApiBgg(
bggId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/Bgg/{bggId}',
            path: {
                'bggId': bggId,
            },
        });
    }

    /**
     * @param bggUsername 
     * @param username 
     * @returns CollectionUpdatedResponseViewModel Success
     * @throws ApiError
     */
    public getApiBggCollection(
bggUsername?: string,
username?: string,
): CancelablePromise<CollectionUpdatedResponseViewModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/Bgg/collection',
            query: {
                'bggUsername': bggUsername,
                'username': username,
            },
        });
    }

}
