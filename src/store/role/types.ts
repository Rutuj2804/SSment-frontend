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

export interface DeleteRoleDefinitionRequest extends BaseInterface {
    roleId: string;
}

export interface CreateRoleAssignmentRequest extends BaseInterface {
    roleId: string;
    institute: string;
    email: string
}

export interface UpdateRoleAssignmentRequest extends BaseInterface {
    roleId: string;
    institute: string;
    assignmentId: string
}

export interface DeleteRoleAssignmentRequest extends BaseInterface {
    assignmentId: string
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