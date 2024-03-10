import { BaseInterface } from "..";
import { UserInterface } from "../../utils/types";
import { RoleAssignment, RoleDefinition } from "../../utils/types/role";

export interface RoleState {
    assignments: UserInterface[],
    assignment: UserInterface;
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

export interface UpdateRoleAssignmentRequest extends BaseInterface {
    roleId: number;
    institute: string;
    email: string
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