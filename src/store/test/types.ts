import { BaseInterface } from "..";
import { Grades } from "../../pages/test";
import {
	QuestionInterface,
	SectionInterface,
	TestInterface,
	TestResgistrationInterface,
} from "../../utils/types";

export interface TestState {
	tests: TestInterface[];
	test: TestInterface;
	sections: SectionInterface[];
	questions: QuestionInterface[];
	counts: {
		sections: number;
		questions: number;
	};
	loadTest: any;
    storedResponse: {
        response : QuestionResponseInterface[];
        attempts: {
            [key: string]: number;
        }
    }
	failedResponses: QuestionResponseInterface[],
	testRegistrations: TestResgistrationInterface[];
}

export interface QuestionResponseInterface {
	questionId: string;
	questionType: number;
	response: string | boolean | null;
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

export interface UpdateTestRequest extends CreateTestRequest {
	testId: string;
}

export interface GetTestDetailsRequest extends BaseInterface {
	testId: string;
}

export interface DeleteTestRequest extends BaseInterface {
	testId: string;
}

export interface LoadTestRequest extends BaseInterface {
	testId: string;
}

export interface UpdateTestResponseRequest extends BaseInterface {
	testId: string;
	response: QuestionResponseInterface[]
}

export interface GetAllTestsRequest extends BaseInterface {
	status: number;
}

export interface ChangeStatusRequest extends BaseInterface {
	status: number;
	testId: string;
}

export interface CreateSectionRequest extends BaseInterface {
	name: string;
	testId: string;
}

export interface UpdateSectionRequest extends BaseInterface {
	name: string;
	sectionId: string;
	testId: string;
}

export interface GetSectionsOfTestSectionRequest extends BaseInterface {
	testId: string;
}

export interface DeleteSectionRequest extends BaseInterface {
	sectionId: string;
}

export interface GetQuestionsOfSectionRequest extends BaseInterface {
	sectionId: string;
}

export interface GetQuestionsOfTestRequest extends BaseInterface {
	testId: string;
}

export interface OptionInterface {
	title: string;
	bullet?: string;
	isCorrectAnswer?: boolean;
	expectedResult?: string;
}

export interface CreateQuestionRequest extends BaseInterface {
	title: string;
	questionType: number;
	description?: string;
	points: number;
	addReferenceImage: boolean;
	referenceImage?: string;
	testId: string;
	sectionId?: string;
	options?: OptionInterface[];
	yesNoTrueFalseAnswer?: boolean;
}

export interface DeleteQuestionRequest extends BaseInterface {
	questionId: string;
}

export interface UpdateQuestionRequest extends CreateQuestionRequest {
	questionId: string;
}
