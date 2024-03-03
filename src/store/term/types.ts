import { BaseInterface } from "..";
import { Term } from "../../utils/types";

export interface TermState {
    terms: Term[]
    display: Term[];
    term: Term;
    current: string;
}

export interface CreateTermRequest extends BaseInterface {
    name: string;
    institute: string;
}

export interface UpdateTermRequest extends BaseInterface {
    name: string;
    institute: string;
    termId: string;
}

export interface GetDisplayTermRequest extends BaseInterface {
    instituteId: string;
}

export interface GetAllTermsRequest extends BaseInterface {
    status: number;
}

export interface GetTermRequest extends BaseInterface {
    termId: string;
}