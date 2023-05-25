/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HttpStatusCode } from './HttpStatusCode';
import type { PrivateMessageViewModel } from './PrivateMessageViewModel';

export type PrivateMessageViewModelListResponse = {
    readonly success?: boolean;
    isNotFound?: boolean;
    isBadRequest?: boolean;
    isForbidden?: boolean;
    isConflict?: boolean;
    message?: string | null;
    data?: Array<PrivateMessageViewModel> | null;
    statusCode?: HttpStatusCode;
};
