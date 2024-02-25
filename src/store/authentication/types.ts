import { BaseInterface } from "..";

export interface AuthenticationState {
    isAuthenticated: boolean | null
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

export interface ForgotPasswordRequest extends BaseInterface {
    email: string;
}