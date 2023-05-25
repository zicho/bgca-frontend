/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RegisterUserDto = {
    username: string;
    password: string;
    confirmPassword: string;
    email?: string | null;
    isAdmin?: boolean;
    isSuperAdmin?: boolean;
};
