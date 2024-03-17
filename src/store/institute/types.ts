import { BaseInterface } from "..";
import { Institute } from "../../utils/types";

export interface InstituteState {
    institutes: Institute[];
    institute: Institute;
    vendors: Institute[];
}

export interface CreateInstituteRequest extends BaseInterface {
    name: string;
    description: string;
}

export interface GetInstitute extends BaseInterface {
    institute: string;
}