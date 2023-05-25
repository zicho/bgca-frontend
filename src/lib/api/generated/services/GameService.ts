/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateGameDto } from '../models/CreateGameDto';
import type { GameViewModelListResponse } from '../models/GameViewModelListResponse';
import type { GameViewModelResponse } from '../models/GameViewModelResponse';
import type { Int32Response } from '../models/Int32Response';
import type { UpdateGameDto } from '../models/UpdateGameDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class GameService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param name 
     * @param page 
     * @param limit 
     * @returns GameViewModelListResponse Success
     * @throws ApiError
     */
    public getGames(
name?: string,
page: number = 1,
limit: number = 10,
): CancelablePromise<GameViewModelListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/Game',
            query: {
                'name': name,
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns Int32Response Created
     * @throws ApiError
     */
    public postApiGame(
requestBody?: CreateGameDto,
): CancelablePromise<Int32Response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/Game',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns GameViewModelResponse Success
     * @throws ApiError
     */
    public getGameById(
id: number,
): CancelablePromise<GameViewModelResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/Game/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id 
     * @param requestBody 
     * @returns void 
     * @throws ApiError
     */
    public putApiGame(
id: number,
requestBody?: UpdateGameDto,
): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/Game/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns void 
     * @throws ApiError
     */
    public deleteApiGame(
id: number,
): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/Game/{id}',
            path: {
                'id': id,
            },
        });
    }

}
