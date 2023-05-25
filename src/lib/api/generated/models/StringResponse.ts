/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HttpStatusCode } from './HttpStatusCode';

export type StringResponse = {
    readonly success?: boolean;
    isNotFound?: boolean;
    isBadRequest?: boolean;
    isForbidden?: boolean;
    isConflict?: boolean;
    message?: string | null;
    data?: string | null;
    statusCode?: HttpStatusCode;
};
