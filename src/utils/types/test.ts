import { UserInterface } from "./auth";
import { BaseInterface } from "./base";
import { BatchInterface } from "./batch";

export interface GradeInterface extends BaseInterface {
    start: number;
    end: number;
    grade: string;
}

export interface TestInterface extends BaseInterface {
    title?:string;
    description?:string;
    batchId?:string[];
    testImage?: string;
    createdBy?:UserInterface;
    passingPoints?: number;
    timeLimit?: number;
    autoScore?: boolean;
    showResultAfterCompletion?:boolean;
    randomizeQuestions?: boolean;
    bufferTime?: number;
    testStyle?: number;
    status?: number;
    startDateTime?: Date;
    isActive?: boolean;
    passFail?: boolean;
    sendEmailOfResultOnceCompleted?: boolean;
    releasePassFailOnceCompleted?: boolean;
    useCustomTermsAndConditions?: boolean;
    termsAndConditionsLabel?: string;
    termsAndConditionsDescription?: string;
    termsAndConditionsCheckboxLabel?: string;
    startTestButton?: string;
    enableGrading?: boolean;
    gradeId?:GradeInterface[];
    releaseGradesOnceCompleted?: boolean;
}