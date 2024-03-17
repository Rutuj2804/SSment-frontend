import { BaseInterface } from "..";
import { UserInterface } from "../../utils/types";
import { RoleDefinition } from "../../utils/types/role";

export interface RoleState {
    assignments: UserInterface[],
    assignment: UserInterface;
    role: RoleDefinition;
}

export interface UpdateRoleAssignmentRequest extends BaseInterface {
    roleId: number;
    institute: string;
    email: string
}

export interface GetAllRoleAssignmentsRequest extends BaseInterface {
    status: number;
}