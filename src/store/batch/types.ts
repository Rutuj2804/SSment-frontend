import { BaseInterface } from "..";
import { BatchInterface } from "../../utils/types";

export interface BatchState {
    batches: BatchInterface[]
    batch: BatchInterface
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
    navigation: string;
}

export interface UpdateBatchRequest extends BaseInterface {
    name: string;
    description: string;
    batchId: string;
}

export interface GetAllBatchRequest extends BaseInterface {
    status: number;
}

export interface GetBatchRequest extends BaseInterface {
    batchId: string;
}