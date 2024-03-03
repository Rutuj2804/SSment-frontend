import { BaseInterface } from "..";

export interface BatchState {
    batches: []
}

interface Participant {
    email: string;
    firstname: string;
    lastname: string;
}

export interface CreateBatchRequest extends BaseInterface {
    name: string;
    description: string;
    termId: string;
    expiryDate: string;
    participants: Participant[];
}