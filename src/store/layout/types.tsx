import { QuestionInterface } from "../../utils/types";

export interface LayoutState {
	sidebar: boolean;
	profile: boolean;
	notifications: boolean;
	backdrop: boolean;
	search: boolean;
	popup: boolean;
	question: AddQuestionInterface;
	delete: DeleteInterface;
	confirmation: DeleteInterface;
	section: AddSectionInterface;
	submitConfirmation: boolean;
}

export interface DeleteInterface {
	isActive: boolean;
	callback: () => void;
	text: string;
}

export interface AddSectionInterface {
	testId: string;
	isActive: boolean;
	sectionId?: string;
}

export interface AddQuestionInterface {
	testId: string;
	isActive: boolean;
	sectionId?: string;
	questionId?: QuestionInterface;
}