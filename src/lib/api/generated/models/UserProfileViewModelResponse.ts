/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HttpStatusCode } from './HttpStatusCode';
import type { UserProfileViewModel } from './UserProfileViewModel';

export type UserProfileViewModelResponse = {
    readonly success?: boolean;
    isNotFound?: boolean;
    isBadRequest?: boolean;
    isForbidden?: boolean;
    isConflict?: boolean;
    message?: string | null;
    data?: UserProfileViewModel;
    statusCode?: HttpStatusCode;
};
