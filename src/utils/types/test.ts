import { UserInterface } from "./auth";
import { BaseInterface } from "./base";
import { BatchInterface } from "./batch";

export interface TestInterface extends BaseInterface {
    name?:string;
    description?:string;
    batchId?:BatchInterface[];
    createdBy?:UserInterface;
    passingPoints?: number;
    timeLimit?: number;
    autoScore?: boolean;
    showResultAfterCompletion?:boolean;
    randomizeQuestions?: boolean;
    bufferTime?: number;
    testType?: number;
    status?: number;
    isActive?: boolean;
}