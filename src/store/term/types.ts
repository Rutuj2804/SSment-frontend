import { BaseInterface } from "..";
import { Term } from "../../utils/types";

export interface TermState {
    terms: Term[]
    display: Term[];
    current: string;
}

interface Role {
    email: string;
    roleId: string;
}

export interface CreateTermRequest extends BaseInterface {
    name: string;
    institute: string;
    roles: Role[]
}

export interface GetDisplayTermRequest extends BaseInterface {
    instituteId: string;
}

export interface GetAllTermsRequest extends BaseInterface {
    status: number;
}