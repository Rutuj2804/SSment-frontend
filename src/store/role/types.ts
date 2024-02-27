import { BaseInterface } from "..";
import { RoleAssignment, RoleDefinition } from "../../utils/types/role";

export interface RoleState {
    roles: RoleDefinition[],
    assignments: RoleAssignment[],
    role: RoleDefinition
}

export interface CreateRoleDefinitionRequest extends BaseInterface {
    alias: string;
    name: string;
    institute: number;
    batch: number;
    term: number;
    test: number;
    role: number;
}