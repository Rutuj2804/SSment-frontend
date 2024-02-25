import { BaseInterface } from "./base";

export interface UserInterface extends BaseInterface {
    email?: string;
    password?: string;
    firstname?: string;
    midname?: string;
    lastname?: string;
    instituteId?: string;
}