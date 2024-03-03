import { UserInterface } from "./auth";
import { BaseInterface } from "./base";

export interface RoleDefinition extends BaseInterface {
    alias?: string;
    name?: string;
    institute?: number;
    batch?: number;
    term?: number;
    test?: number;
    role?: number;
}

export interface RoleAssignment extends BaseInterface {
    roleId?: string;
    userId?: UserInterface;
    instituteId?: string;
}