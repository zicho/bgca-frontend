/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BooleanResponse } from '../models/BooleanResponse';
import type { Int32Response } from '../models/Int32Response';
import type { PrivateMessageDto } from '../models/PrivateMessageDto';
import type { PrivateMessageViewModelListResponse } from '../models/PrivateMessageViewModelListResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PrivateMessageService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param requestBody 
     * @returns BooleanResponse Success
     * @throws ApiError
     */
    public sendPrivateMessageAsync(
requestBody?: PrivateMessageDto,
): CancelablePromise<BooleanResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/PrivateMessage',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param username 
     * @param limit 
     * @param page 
     * @returns PrivateMessageViewModelListResponse Success
     * @throws ApiError
     */
    public getPrivateMessagesForUserAsync(
username: string,
limit: number = 10,
page: number = 1,
): CancelablePromise<PrivateMessageViewModelListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/PrivateMessage/{username}',
            path: {
                'username': username,
            },
            query: {
                'limit': limit,
                'page': page,
            },
        });
    }

    /**
     * @param username 
     * @param unread 
     * @returns Int32Response Success
     * @throws ApiError
     */
    public getPrivateMessageCountForUserAsync(
username: string,
unread: boolean = false,
): CancelablePromise<Int32Response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/PrivateMessage/{username}/count',
            path: {
                'username': username,
            },
            query: {
                'unread': unread,
            },
        });
    }

}
