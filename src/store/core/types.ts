import { BaseInterface } from "..";
import { NotificationInterface } from "../../utils/types";

export interface CoreState {
	notifications: NotificationInterface[]
}

export interface RunCodeSnippetsRequest {
	code: string;
	language: string;
}