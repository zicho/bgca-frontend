/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { BggService } from './services/BggService';
import { GameService } from './services/GameService';
import { GameSessionService } from './services/GameSessionService';
import { HomeService } from './services/HomeService';
import { PrivateMessageService } from './services/PrivateMessageService';
import { UserService } from './services/UserService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class AppClient {

    public readonly bgg: BggService;
    public readonly game: GameService;
    public readonly gameSession: GameSessionService;
    public readonly home: HomeService;
    public readonly privateMessage: PrivateMessageService;
    public readonly user: UserService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? '',
            VERSION: config?.VERSION ?? '1.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.bgg = new BggService(this.request);
        this.game = new GameService(this.request);
        this.gameSession = new GameSessionService(this.request);
        this.home = new HomeService(this.request);
        this.privateMessage = new PrivateMessageService(this.request);
        this.user = new UserService(this.request);
    }
}
