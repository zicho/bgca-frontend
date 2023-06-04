/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export { AppClient } from './AppClient';

export { ApiError } from './core/ApiError';
export { BaseHttpRequest } from './core/BaseHttpRequest';
export { CancelablePromise, CancelError } from './core/CancelablePromise';
export { OpenAPI } from './core/OpenAPI';
export type { OpenAPIConfig } from './core/OpenAPI';

export type { BooleanResponse } from './models/BooleanResponse';
export type { CollectionUpdatedResponseViewModel } from './models/CollectionUpdatedResponseViewModel';
export type { CreateGameDto } from './models/CreateGameDto';
export type { CreateGameSessionDto } from './models/CreateGameSessionDto';
export type { GameViewModel } from './models/GameViewModel';
export type { GameViewModelResponse } from './models/GameViewModelResponse';
export type { GameViewModelSearchResult } from './models/GameViewModelSearchResult';
export type { GameViewModelSearchResultResponse } from './models/GameViewModelSearchResultResponse';
export { HttpStatusCode } from './models/HttpStatusCode';
export type { Int32Response } from './models/Int32Response';
export type { LoginUserDto } from './models/LoginUserDto';
export type { PrivateMessageDto } from './models/PrivateMessageDto';
export type { PrivateMessageViewModel } from './models/PrivateMessageViewModel';
export type { PrivateMessageViewModelListResponse } from './models/PrivateMessageViewModelListResponse';
export type { RegisterUserDto } from './models/RegisterUserDto';
export { Role } from './models/Role';
export type { StringResponse } from './models/StringResponse';
export type { UpdateGameDto } from './models/UpdateGameDto';
export type { UpdateGameSessionDto } from './models/UpdateGameSessionDto';
export type { UpdateUserProfileDto } from './models/UpdateUserProfileDto';
export type { UpdateUserRoleDto } from './models/UpdateUserRoleDto';
export type { UserProfileViewModel } from './models/UserProfileViewModel';
export type { UserProfileViewModelResponse } from './models/UserProfileViewModelResponse';
export type { UserViewModel } from './models/UserViewModel';
export type { UserViewModelListResponse } from './models/UserViewModelListResponse';
export type { UserViewModelResponse } from './models/UserViewModelResponse';

export { BggService } from './services/BggService';
export { GameService } from './services/GameService';
export { GameSessionService } from './services/GameSessionService';
export { HomeService } from './services/HomeService';
export { PrivateMessageService } from './services/PrivateMessageService';
export { UserService } from './services/UserService';
