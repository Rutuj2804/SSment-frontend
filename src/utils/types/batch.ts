import { UserInterface } from "./auth";
import { BaseInterface } from "./base";
import { TestInterface } from "./test";

export interface BatchInterface extends BaseInterface {
    name?:string;
    description?: string;
    participants?: UserInterface[];
    tests?: TestInterface[];
    expired?: boolean;
    expiryDate?: Date;
}