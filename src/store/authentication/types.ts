import { BaseInterface } from "..";

export interface AuthenticationState {}

export interface ContactRequest extends BaseInterface{
    email: string;
    firstname: string;
    lastname?: string;
    message?: string;
}