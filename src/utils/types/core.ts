import { UserInterface } from "./auth";
import { BaseInterface } from "./base";

export interface NotificationInterface extends BaseInterface {
    userId: UserInterface;
    createdBy: UserInterface;
    text: string;
}