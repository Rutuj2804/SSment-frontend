export interface LayoutState {
	sidebar: boolean;
	profile: boolean;
	notifications: boolean;
	backdrop: boolean;
	search: boolean;
	popup: boolean;
	question: boolean;
	delete: DeleteInterface;
}

export interface DeleteInterface {
	isActive: boolean;
	callback: () => void;
	text: string;
}