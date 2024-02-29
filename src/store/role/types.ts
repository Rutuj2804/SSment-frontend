import { BaseInterface } from "..";
import { RoleAssignment, RoleDefinition } from "../../utils/types/role";

export interface RoleState {
    roles: RoleDefinition[],
    assignments: RoleAssignment[],
    role: RoleDefinition;
    roleOnMount: RoleDefinition;
    assignment: RoleAssignment;
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

export interface CreateRoleAssignmentRequest extends BaseInterface {
    roleId: string;
    term: string;
    email: string
}

export interface GetAllRoleAssignmentsRequest extends BaseInterface {
    status: number;
}

export interface GetAllRoleDefinitionsRequest extends BaseInterface {
    status: number;
}

export interface GetRoleRequest extends BaseInterface {
    roleId: string;
}