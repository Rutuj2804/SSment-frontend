import { BaseInterface } from "..";

export interface TermState {
    terms: []
}

interface Role {
    email: string;
    roleId: string;
}

export interface CreateTermRequest extends BaseInterface {
    name: string;
    instituteId: string;
    roles: Role[]
}