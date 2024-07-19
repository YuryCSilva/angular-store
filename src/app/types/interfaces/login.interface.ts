import { IRegisterResponse } from "./register.interface";

export interface ILoginRequest {
    email: string;
    password: string;
}

export interface ILoginResponse {
    access_token: string;
    refresh_token: string;
}

export interface IProfile extends IRegisterResponse {}