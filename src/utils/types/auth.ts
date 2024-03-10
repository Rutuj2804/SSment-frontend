import { BaseInterface } from "./base";
import { Institute } from "./institute";

export interface UserInterface extends BaseInterface {
    email?: string;
    password?: string;
    firstname?: string;
    midname?: string;
    lastname?: string;
    instituteId?: Institute;
    dob?: any;
    country?: string;
    state?: string;
    role?: number;
}