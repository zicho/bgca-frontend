/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HttpStatusCode } from './HttpStatusCode';
import type { UserViewModel } from './UserViewModel';

export type UserViewModelListResponse = {
    readonly success?: boolean;
    isNotFound?: boolean;
    isBadRequest?: boolean;
    isForbidden?: boolean;
    isConflict?: boolean;
    message?: string | null;
    data?: Array<UserViewModel> | null;
    statusCode?: HttpStatusCode;
};
