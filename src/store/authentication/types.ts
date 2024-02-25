import { BaseInterface } from "..";

export interface AuthenticationState {
    isAuthenticated: boolean
}

export interface ContactRequest extends BaseInterface{
    email: string;
    firstname: string;
    lastname?: string;
    message?: string;
}

export interface LoginRequest extends BaseInterface {
    email: string;
    password: string;
}