/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GameViewModel } from './GameViewModel';
import type { HttpStatusCode } from './HttpStatusCode';

export type GameViewModelListResponse = {
    readonly success?: boolean;
    isNotFound?: boolean;
    isBadRequest?: boolean;
    isForbidden?: boolean;
    isConflict?: boolean;
    message?: string | null;
    data?: Array<GameViewModel> | null;
    statusCode?: HttpStatusCode;
};
