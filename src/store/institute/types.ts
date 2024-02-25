import { BaseInterface } from "..";

export interface InstituteState {
    institutes: []
}

export interface CreateInstituteRequest extends BaseInterface {
    name: string;
    description: string;
}