import { UserInterface } from "./auth";
import { BaseInterface } from "./base";

export interface GradeInterface extends BaseInterface {
    start: number;
    end: number;
    grade: string;
}

export interface SectionInterface extends BaseInterface {
    name?: string;
    testId?: string;
}

export interface OptionInterface extends BaseInterface {
    title?: string;
    bullet?: string;
    isCorrectAnswer?: boolean;
    expectedResult?: string;
}

export interface QuestionInterface extends BaseInterface {
    title?: string;
    description?: string;
    points?: number;
    addReferenceImage?: boolean;
    referenceImage?: string;
    questionType?: number;
    testId?: number;
    sectionId?: number;
    yesNoTrueFalseAnswer?: boolean;
    expectedResult?: string;
    optionId?: OptionInterface[];
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

export interface TestResgistrationInterface extends BaseInterface {
    userId?: UserInterface;
    testId?: TestInterface;
    startDateTime: Date;
    score: number;
    isCompleted: boolean;
    isActive: boolean;
}