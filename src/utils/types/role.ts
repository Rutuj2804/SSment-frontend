import { UserInterface } from "./auth";
import { BaseInterface } from "./base";

export interface RoleDefinition {
    institute?: number;
    batch?: number;
    term?: number;
    test?: number;
    role?: number;
}