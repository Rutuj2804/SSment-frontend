import { BaseInterface } from "..";
import { Grades } from "../../pages/test";

export interface TestState {
    tests: []
}

export interface CreateTestRequest extends BaseInterface {
    termId: string;
    title: string;
    description: string;
    testImage: File;
    batchId: string[];
    grading: Grades[];
    testStyle: number;
    timeLimit: number;
    bufferTime: number;
	startDateTime: string;
    autoScore: boolean;
    randomizeQuestions: boolean;
    passFail: boolean;
    passingPoints: number;
    sendEmailOfResultOnceCompleted: boolean;
    releasePassFailOnceCompleted: boolean;
    useCustomTermsAndConditions: boolean;
    termsAndConditionsLabel: string;
    termsAndConditionsDescription: string;
    termsAndConditionsCheckboxLabel: string;
    startTestButton: string;
    enableGrading: boolean;
    releaseGradesOnceCompleted: boolean;
}