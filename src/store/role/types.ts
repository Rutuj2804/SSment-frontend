import { BaseInterface } from "..";
import { UserInterface } from "../../utils/types";
import { RoleDefinition } from "../../utils/types/role";

export interface RoleState {
    assignments: UserInterface[],
    assignment: UserInterface;
    role: RoleDefinition;
}

export interface UpdateRoleDefinitionRequest extends BaseInterface {
    alias: string;
    name: string;
    institute: number;
    batch: number;
    term: number;
    test: number;
    role: number;
    roleId: string;
}

export interface UpdateRoleAssignmentRequest extends BaseInterface {
    roleId: number;
    institute: string;
    email: string
}

export interface GetAllRoleAssignmentsRequest extends BaseInterface {
    status: number;
}

export interface GetRoleRequest extends BaseInterface {
    roleId: string;
}