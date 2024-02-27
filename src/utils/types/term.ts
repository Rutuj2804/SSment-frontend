import { BaseInterface } from "./base";

export interface Term extends BaseInterface{
    name?: string;
    instituteId?: string;
    createdBy?: string;
    isActive?: boolean;
}