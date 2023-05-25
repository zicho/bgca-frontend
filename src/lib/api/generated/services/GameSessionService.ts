/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateGameSessionDto } from '../models/CreateGameSessionDto';
import type { UpdateGameSessionDto } from '../models/UpdateGameSessionDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class GameSessionService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param queryFilter 
     * @param pageNo 
     * @param limit 
     * @returns any Success
     * @throws ApiError
     */
    public getApiGameSession(
queryFilter?: string,
pageNo: number = 1,
limit: number = 10,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/GameSession',
            query: {
                'queryFilter': queryFilter,
                'pageNo': pageNo,
                'limit': limit,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public postApiGameSession(
requestBody?: CreateGameSessionDto,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/GameSession',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns any Success
     * @throws ApiError
     */
    public getApiGameSession1(
id: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/GameSession/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id 
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public putApiGameSession(
id: number,
requestBody?: UpdateGameSessionDto,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/GameSession/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns any Success
     * @throws ApiError
     */
    public deleteApiGameSession(
id: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/GameSession/{id}',
            path: {
                'id': id,
            },
        });
    }

}
