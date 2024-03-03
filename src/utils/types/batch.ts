import { BaseInterface } from "./base";

export interface BatchInterface extends BaseInterface {
    name?:string;
    description?: string;
    participants?: string[];
}