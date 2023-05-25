/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BooleanResponse } from '../models/BooleanResponse';
import type { LoginUserDto } from '../models/LoginUserDto';
import type { RegisterUserDto } from '../models/RegisterUserDto';
import type { StringResponse } from '../models/StringResponse';
import type { UpdateUserProfileDto } from '../models/UpdateUserProfileDto';
import type { UpdateUserRoleDto } from '../models/UpdateUserRoleDto';
import type { UserProfileViewModelResponse } from '../models/UserProfileViewModelResponse';
import type { UserViewModelListResponse } from '../models/UserViewModelListResponse';
import type { UserViewModelResponse } from '../models/UserViewModelResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param requestBody 
     * @returns StringResponse Created
     * @throws ApiError
     */
    public postApiUserRegister(
requestBody?: RegisterUserDto,
): CancelablePromise<StringResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/user/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody 
     * @returns StringResponse Success
     * @throws ApiError
     */
    public postApiUserLogin(
requestBody?: LoginUserDto,
): CancelablePromise<StringResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/user/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns UserViewModelResponse Success
     * @throws ApiError
     */
    public getByIdAsync(
id: number,
): CancelablePromise<UserViewModelResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/user/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param username 
     * @returns UserViewModelResponse Success
     * @throws ApiError
     */
    public getByUsernameAsync(
username: string,
): CancelablePromise<UserViewModelResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/user/{username}',
            path: {
                'username': username,
            },
        });
    }

    /**
     * @returns UserViewModelListResponse Success
     * @throws ApiError
     */
    public getAsync(): CancelablePromise<UserViewModelListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/user',
        });
    }

    /**
     * @param userId 
     * @param requestBody 
     * @returns BooleanResponse Success
     * @throws ApiError
     */
    public putApiUserUpdateRole(
userId: number,
requestBody?: UpdateUserRoleDto,
): CancelablePromise<BooleanResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/user/update_role/{userId}',
            path: {
                'userId': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param username 
     * @param requestBody 
     * @returns BooleanResponse Success
     * @throws ApiError
     */
    public putApiUserProfile(
username: string,
requestBody?: UpdateUserProfileDto,
): CancelablePromise<BooleanResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/user/profile/{username}',
            path: {
                'username': username,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param username 
     * @returns UserProfileViewModelResponse Success
     * @throws ApiError
     */
    public getApiUserProfile(
username: string,
): CancelablePromise<UserProfileViewModelResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/user/profile/{username}',
            path: {
                'username': username,
            },
        });
    }

    /**
     * @param userId 
     * @returns void 
     * @throws ApiError
     */
    public deleteApiUser(
userId: number,
): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/user/{userId}',
            path: {
                'userId': userId,
            },
        });
    }

}
