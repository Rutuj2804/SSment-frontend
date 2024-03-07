export interface LayoutState {
	sidebar: boolean;
	profile: boolean;
	notifications: boolean;
	backdrop: boolean;
	search: boolean;
	popup: boolean;
	question: boolean;
	delete: DeleteInterface;
	section: AddSectionInterface;
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